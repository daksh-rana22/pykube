import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config();

const { Pool } = pg;

// Determine connection configuration
const connectionString = process.env.DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const requiresSSL = connectionString && (
  connectionString.includes('neon.tech') ||
  connectionString.includes('supabase.co') ||
  connectionString.includes('render.com') ||
  connectionString.includes('sslmode=require')
);

export const pool = new Pool(
  connectionString
    ? {
        connectionString,
        ssl: requiresSSL || isProduction ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.PGHOST || 'localhost',
        port: parseInt(process.env.PGPORT || '5432', 10),
        user: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'postgres',
        database: process.env.PGDATABASE || 'pykube_db',
      }
);

// Database Query Helper
export const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  // Uncomment below for query debugging:
  // console.log('Executed query', { text: text.slice(0, 80), duration, rows: res.rowCount });
  return res;
};

// Initialize PostgreSQL Tables & Migrate Legacy JSON Data
export const initDB = async () => {
  try {
    console.log('🐘 Connecting to PostgreSQL database...');
    
    // 1. Create Tables
    await query(`
      CREATE TABLE IF NOT EXISTS admin_settings (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        passcode VARCHAR(255) NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await query(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) DEFAULT '',
        status VARCHAR(50) DEFAULT 'Active',
        source VARCHAR(100) DEFAULT 'Website Subscription',
        subscribed_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await query(`
      CREATE TABLE IF NOT EXISTS broadcast_history (
        id VARCHAR(64) PRIMARY KEY,
        subject TEXT NOT NULL,
        sender VARCHAR(255) DEFAULT 'PyKube Admissions Team',
        recipients_count INTEGER DEFAULT 0,
        status VARCHAR(50) DEFAULT 'Completed',
        has_image BOOLEAN DEFAULT FALSE,
        message TEXT,
        image_url TEXT,
        sent_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    console.log('✅ PostgreSQL tables verified / created successfully.');

    // 2. Ensure Admin User Exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@pykube.com';
    const adminPass = process.env.ADMIN_PASSWORD || 'admin123';

    const adminCheck = await query('SELECT * FROM admin_settings LIMIT 1');
    if (adminCheck.rows.length === 0) {
      await query(
        `INSERT INTO admin_settings (email, passcode, updated_at) VALUES ($1, $2, NOW())`,
        [adminEmail, adminPass]
      );
      console.log(`🔑 Seeded default admin credentials (${adminEmail}) into PostgreSQL.`);
    }

    // 3. Migrate data from db.json if subscribers table is empty
    const subCheck = await query('SELECT COUNT(*) AS count FROM subscribers');
    const subscriberCount = parseInt(subCheck.rows[0].count, 10);

    const legacyDbPath = path.join(__dirname, '../data/db.json');
    if (subscriberCount === 0 && fs.existsSync(legacyDbPath)) {
      console.log('📦 Migrating existing data from db.json into PostgreSQL...');
      try {
        const raw = fs.readFileSync(legacyDbPath, 'utf-8');
        const legacyData = JSON.parse(raw);

        if (Array.isArray(legacyData.subscribers) && legacyData.subscribers.length > 0) {
          for (const sub of legacyData.subscribers) {
            await query(
              `INSERT INTO subscribers (id, email, name, status, source, subscribed_at)
               VALUES ($1, $2, $3, $4, $5, $6)
               ON CONFLICT (email) DO NOTHING`,
              [
                sub.id || Date.now().toString(),
                sub.email.toLowerCase().trim(),
                sub.name || '',
                sub.status || 'Active',
                sub.source || 'Legacy Import',
                sub.subscribedAt ? new Date(sub.subscribedAt) : new Date(),
              ]
            );
          }
          console.log(`✅ Migrated ${legacyData.subscribers.length} subscribers to PostgreSQL.`);
        }

        if (Array.isArray(legacyData.broadcastHistory) && legacyData.broadcastHistory.length > 0) {
          for (const b of legacyData.broadcastHistory) {
            await query(
              `INSERT INTO broadcast_history (id, subject, sender, recipients_count, status, has_image, message, image_url, sent_at)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
               ON CONFLICT (id) DO NOTHING`,
              [
                b.id || `b-${Date.now()}`,
                b.subject || 'Broadcast',
                b.sender || 'PyKube Admissions Team',
                b.recipientsCount || 0,
                b.status || 'Completed',
                !!b.hasImage,
                b.message || '',
                b.imageUrl || '',
                b.sentAt ? new Date(b.sentAt) : new Date(),
              ]
            );
          }
          console.log(`✅ Migrated ${legacyData.broadcastHistory.length} broadcast logs to PostgreSQL.`);
        }
      } catch (migrationErr) {
        console.warn('⚠️ Note during db.json migration:', migrationErr.message);
      }
    }

    console.log('🚀 PostgreSQL initialization completed successfully.');
    return true;
  } catch (err) {
    console.error('❌ PostgreSQL Initialization Error:', err.message);
    console.error('👉 Please check your DATABASE_URL or PostgreSQL server connection settings in server/.env');
    return false;
  }
};
