import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { programs } from '../data/programsData';
import { javaRoadmap } from '../data/javaRoadmapData';
import { pythonRoadmap } from '../data/pythonRoadmapData';
import { qaRoadmap } from '../data/qaRoadmapData';
import { dataAnalystRoadmap } from '../data/dataAnalystRoadmapData';
import { dataEngineerRoadmap } from '../data/dataEngineerRoadmapData';
import { dataScientistRoadmap } from '../data/dataScientistRoadmapData';
import '../styles/ProgramDetailsPage.css';

// Map program id -> roadmap data
const roadmapMap = {
  'java-full-stack': javaRoadmap,
  'python-developer': pythonRoadmap,
  'qa-automation': qaRoadmap,
  'data-analyst': dataAnalystRoadmap,
  'data-engineer': dataEngineerRoadmap,
  'data-scientist': dataScientistRoadmap,
};

// Map program id -> hero config
const heroConfig = {
  'java-full-stack': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'A structured path from zero to production-ready. Click any section to explore the skills, tools, and concepts you need to master.',
    metrics: [
      { num: '7', label: 'Sections' },
      { num: '35+', label: 'Topics' },
      { num: '4–6 mo', label: 'Est. time' },
    ],
    gradStart: '#0f1c3f',
    accentColor: '#e76f00',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'Java Full-Stack Developer',
    whiteBg: true,
  },
  'python-developer': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'From Python basics to deploying a full E-Commerce platform. Click any section to explore every skill you need.',
    metrics: [
      { num: '6', label: 'Sections' },
      { num: '28+', label: 'Topics' },
      { num: '3–5 mo', label: 'Est. time' },
    ],
    gradStart: '#0f2233',
    accentColor: '#3776ab',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'Python Developer',
    whiteBg: true,
  },
  'qa-automation': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'From manual testing fundamentals to Selenium automation frameworks. Click any section to explore every skill you need.',
    metrics: [
      { num: '5', label: 'Sections' },
      { num: '22+', label: 'Topics' },
      { num: '3–5 mo', label: 'Est. time' },
    ],
    gradStart: '#160f33',
    accentColor: '#8b5cf6',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'QA Automation Engineer',
    whiteBg: true,
  },
  'data-analyst': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'From Python fundamentals to Power BI dashboards. Click any section to explore every skill you need.',
    metrics: [
      { num: '5', label: 'Sections' },
      { num: '22+', label: 'Topics' },
      { num: '3–4 mo', label: 'Est. time' },
    ],
    gradStart: '#0a1f18',
    accentColor: '#10b981',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'Data Analyst',
    whiteBg: true,
  },
  'data-engineer': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'From advanced Python to PySpark pipelines at scale. Click any section to explore every skill you need.',
    metrics: [
      { num: '6', label: 'Sections' },
      { num: '26+', label: 'Topics' },
      { num: '4–6 mo', label: 'Est. time' },
    ],
    gradStart: '#1a120a',
    accentColor: '#f97316',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'Data Engineer',
    whiteBg: true,
  },
  'data-scientist': {
    badge: '2026 EDITION',
    titleLine1: '',
    titleHighlight: '',
    titleLine2: 'Roadmap',
    subtitle: 'From Python and ML fundamentals to Power BI and PySpark. Click any section to explore every skill you need.',
    metrics: [
      { num: '5', label: 'Sections' },
      { num: '25+', label: 'Topics' },
      { num: '4–6 mo', label: 'Est. time' },
    ],
    gradStart: '#1a0a0a',
    accentColor: '#ef4444',
    introTag: 'BOOTCAMP PROGRAM',
    introHeading: 'Data Scientist',
    whiteBg: true,
  },
};

const RoadmapSectionVisual = ({ title, accentColor }) => {
  const t = title.toLowerCase();

  const themeStyle = { '--accent': accentColor, '--accent-glow': `${accentColor}25` };

  // 1. Python Core & Fundamentals
  if (t === 'python core' || t === 'python fundamentals' || t === 'advanced python') {
    return (
      <div className="native-visual backend-visual" style={themeStyle}>
        <div className="backend-header">🐍 Python Interactive Console</div>
        <div className="testing-console" style={{ minHeight: '120px', fontFamily: 'monospace', padding: '12px' }}>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; name = "Python"</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; print(f"Hello, {name}!")</div>
          <div className="test-line pass" style={{ color: '#4ade80' }}>Hello, Python!</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; items = [x**2 for x in range(3)]</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; print(items)</div>
          <div className="test-line pass" style={{ color: '#4ade80' }}>[0, 1, 4]</div>
        </div>
      </div>
    );
  }

  // 2. NumPy Array Operations
  if (t === 'numpy') {
    return (
      <div className="native-visual backend-visual" style={themeStyle}>
        <div className="backend-header">🔢 NumPy Array Operations</div>
        <div className="testing-console" style={{ minHeight: '120px', fontFamily: 'monospace', padding: '12px' }}>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; import numpy as np</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; a = np.array([1, 2, 3])</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&gt;&gt; print(a * 2)</div>
          <div className="test-line pass" style={{ color: '#4ade80' }}>[2, 4, 6]</div>
        </div>
      </div>
    );
  }

  // 3. Pandas / Data Libraries
  if (t === 'pandas' || t === 'data libraries' || t.includes('python & ml libraries')) {
    return (
      <div className="native-visual database-visual" style={themeStyle}>
        <div className="db-header">🐼 Pandas DataFrame</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5px', fontFamily: 'monospace', background: '#0f172a', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '10px' }}>
          <thead>
            <tr style={{ background: '#1e293b', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <th style={{ padding: '6px', textAlign: 'left', color: '#94a3b8' }}>id</th>
              <th style={{ padding: '6px', textAlign: 'left', color: '#94a3b8' }}>sales</th>
              <th style={{ padding: '6px', textAlign: 'left', color: '#94a3b8' }}>region</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <td style={{ padding: '6px' }}>0</td>
              <td style={{ padding: '6px', color: '#10b981' }}>1500</td>
              <td style={{ padding: '6px' }}>East</td>
            </tr>
            <tr>
              <td style={{ padding: '6px' }}>1</td>
              <td style={{ padding: '6px', color: '#10b981' }}>2300</td>
              <td style={{ padding: '6px' }}>West</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // 4. Statistics & Visualization / Power BI
  if (t.includes('statistics & visualization') || t.includes('power bi')) {
    return (
      <div className="native-visual backend-visual" style={{ ...themeStyle, padding: '16px' }}>
        <div className="backend-header">📊 Matplotlib / Power BI Dashboard</div>
        <div className="topic-visual-container" style={{ gap: '10px' }}>
          {/* Chart Header */}
          <div className="visual-text-muted" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px' }}>
            <span className="visual-text-highlight" style={{ fontWeight: 'bold' }}>Quarterly Active Users (MAU)</span>
            <span>Target: 20k</span>
          </div>

          {/* Chart Graphic */}
          <div className="visual-console-box" style={{ display: 'flex', height: '110px', position: 'relative', padding: '10px 10px 5px 5px' }}>
            {/* Y Axis Labels */}
            <div className="visual-label-muted" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '8px', textAlign: 'right', width: '25px', paddingRight: '6px', height: '90px' }}>
              <span>30k</span>
              <span>20k</span>
              <span>10k</span>
              <span>0</span>
            </div>

            {/* Grid & Bars Container */}
            <div style={{ flex: 1, position: 'relative', height: '90px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', borderLeft: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
              {/* Horizontal Gridlines */}
              <div style={{ position: 'absolute', top: '0', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.03)' }} />
              <div style={{ position: 'absolute', top: '33%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.03)' }} />
              <div style={{ position: 'absolute', top: '66%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.03)' }} />

              {/* Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25px', height: '60%', zIndex: 2 }}>
                <span style={{ fontSize: '8px', color: '#38bdf8', marginBottom: '2px', fontWeight: 'bold' }}>18k</span>
                <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #2563eb, #38bdf8)', borderRadius: '3px 3px 0 0' }} />
                <span className="visual-label-muted" style={{ fontSize: '8px', marginTop: '4px' }}>Q1</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25px', height: '85%', zIndex: 2 }}>
                <span style={{ fontSize: '8px', color: '#a855f7', marginBottom: '2px', fontWeight: 'bold' }}>25k</span>
                <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #7c3aed, #a855f7)', borderRadius: '3px 3px 0 0' }} />
                <span className="visual-label-muted" style={{ fontSize: '8px', marginTop: '4px' }}>Q2</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25px', height: '40%', zIndex: 2 }}>
                <span style={{ fontSize: '8px', color: '#34d399', marginBottom: '2px', fontWeight: 'bold' }}>12k</span>
                <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #059669, #34d399)', borderRadius: '3px 3px 0 0' }} />
                <span className="visual-label-muted" style={{ fontSize: '8px', marginTop: '4px' }}>Q3</span>
              </div>
            </div>
          </div>

          {/* Matplotlib Code */}
          <div className="visual-console-box" style={{ padding: '6px 8px', fontFamily: 'monospace', fontSize: '8.5px', color: '#38bdf8' }}>
            <div className="visual-label-muted" style={{ marginBottom: '2px' }}># Matplotlib Snippet</div>
            <div style={{ color: '#ce9178' }}>plt.bar(['Q1', 'Q2', 'Q3'], [18, 25, 12])</div>
            <div style={{ color: '#ce9178' }}>plt.ylabel('Users (in thousands)')</div>
          </div>
        </div>
      </div>
    );
  }

  // 5. PySpark Cluster
  if (t === 'pyspark') {
    return (
      <div className="native-visual system-design-visual" style={{ ...themeStyle, padding: '16px' }}>
        <div className="sys-header" style={{ marginBottom: '12px' }}>⚡ Apache PySpark Cluster</div>
        <div className="topic-visual-container" style={{ gap: '10px' }}>
          {/* Cluster Status Top Bar */}
          <div className="visual-inner-bar" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', padding: '6px 10px' }}>
            <span>Master: <strong>spark://7077</strong></span>
            <span>Cores: <strong>8</strong> | RAM: <strong>16GB</strong></span>
          </div>

          {/* Node Grid Layout */}
          <div className="visual-console-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 6px' }}>
            {/* Driver Node */}
            <div style={{ textAlign: 'center', flex: '1' }}>
              <div className="sys-box client" style={{ minWidth: 'auto', padding: '8px 4px', margin: '0 auto', display: 'inline-block', width: '75px', fontSize: '10px' }}>Driver</div>
              <div className="visual-label-muted" style={{ fontSize: '8px', marginTop: '4px' }}>SparkSession</div>
            </div>

            <div style={{ color: '#475569', fontSize: '12px', fontWeight: 'bold' }}>➔</div>

            {/* Executor Workers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1.5', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="sys-box node" style={{ minWidth: 'auto', padding: '6px 4px', width: '70px', fontSize: '9px' }}>Worker 1</div>
                  <div className="visual-label-muted" style={{ fontSize: '7px', marginTop: '2px' }}>4 Cores / 8GB</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="sys-box node" style={{ minWidth: 'auto', padding: '6px 4px', width: '70px', fontSize: '9px' }}>Worker 2</div>
                  <div className="visual-label-muted" style={{ fontSize: '7px', marginTop: '2px' }}>4 Cores / 8GB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Execution details */}
          <div className="visual-console-box" style={{ padding: '8px 10px' }}>
            <div className="visual-text-muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
              <span>Job: <strong>df.groupBy().count()</strong></span>
              <span style={{ color: '#10b981' }}>SUCCESS</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: '#10b981' }} />
            </div>
            <div className="visual-label-muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', marginTop: '4px' }}>
              <span>Stages: 2/2 Complete</span>
              <span>Tasks: 32/32 Done</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Pipelines / Ingestion
  if (t === 'data pipelines' || t === 'data ingestion') {
    return (
      <div className="native-visual devops-visual" style={{ ...themeStyle, padding: '16px' }}>
        <div className="devops-header" style={{ marginBottom: '12px' }}>🔄 ETL Ingestion Pipeline</div>
        <div className="topic-visual-container" style={{ gap: '10px' }}>

          {/* Pipeline flow diagram */}
          <div className="pipeline-flow" style={{ marginBottom: '4px', padding: '12px 6px' }}>
            <div className="pipeline-node done" style={{ width: '52px', height: '52px', fontSize: '15px' }}>
              <span className="node-icon">📥</span>
              <span className="node-label" style={{ fontSize: '8px' }}>Extract</span>
              <span className="visual-label-muted" style={{ fontSize: '6px', fontWeight: 'normal', marginTop: '1px' }}>S3 / RDBMS</span>
            </div>

            <div className="pipeline-connector active" />

            <div className="pipeline-node done" style={{ width: '52px', height: '52px', fontSize: '15px' }}>
              <span className="node-icon">⚙️</span>
              <span className="node-label" style={{ fontSize: '8px' }}>Transform</span>
              <span className="visual-label-muted" style={{ fontSize: '6px', fontWeight: 'normal', marginTop: '1px' }}>PySpark / SQL</span>
            </div>

            <div className="pipeline-connector active" />

            <div className="pipeline-node active" style={{ width: '52px', height: '52px', fontSize: '15px' }}>
              <span className="node-icon">📤</span>
              <span className="node-label" style={{ fontSize: '8px' }}>Load</span>
              <span className="visual-label-muted" style={{ fontSize: '6px', fontWeight: 'normal', marginTop: '1px' }}>Data Warehouse</span>
            </div>
          </div>

          {/* Real-time Ingestion Metrics */}
          <div className="visual-console-box visual-text-muted" style={{ padding: '8px 10px', fontSize: '9.5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 'bold' }}>Pipeline Stream Metrics</span>
              <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="status-dot pulsing" style={{ width: '6px', height: '6px', background: '#10b981' }} /> Active
              </span>
            </div>

            <div className="visual-label-muted" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '8.5px' }}>
              <div className="visual-metric-card" style={{ padding: '4px 6px' }}>
                Throughput: <strong className="visual-text-highlight">14,500 rec/s</strong>
              </div>
              <div className="visual-metric-card" style={{ padding: '4px 6px' }}>
                Avg Latency: <strong className="visual-text-highlight">850ms</strong>
              </div>
              <div className="visual-metric-card" style={{ padding: '4px 6px' }}>
                Source: <strong className="visual-text-highlight">Kafka Topic</strong>
              </div>
              <div className="visual-metric-card" style={{ padding: '4px 6px' }}>
                Target: <strong className="visual-text-highlight">Snowflake DB</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. Manual Testing
  if (t === 'manual testing') {
    return (
      <div className="native-visual database-visual" style={themeStyle}>
        <div className="db-header">📋 Manual Test Cases</div>
        <div className="db-tables" style={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
          <div className="stack-var" style={{ justifyContent: 'space-between', padding: '6px 12px' }}>
            <span className="visual-text-highlight">TC_01: User Login Auth</span>
            <span className="status-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>PASSED</span>
          </div>
          <div className="stack-var" style={{ justifyContent: 'space-between', padding: '6px 12px' }}>
            <span className="visual-text-highlight">TC_02: Payment Gateway Timeout</span>
            <span className="status-badge" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>FAILED</span>
          </div>
        </div>
      </div>
    );
  }

  // 8. Core Java / QA
  if (t.includes('core java')) {
    return (
      <div className="native-visual backend-visual" style={themeStyle}>
        <div className="backend-header">☕ Java Console</div>
        <div className="testing-console" style={{ minHeight: '120px', fontFamily: 'monospace', padding: '12px' }}>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt; public class Test &#123;</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;</div>
          <div className="test-line pass" style={{ color: '#64748b' }}>&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Java QA Ready");</div>
          <div className="test-line pass" style={{ color: '#4ade80' }}>Java QA Ready</div>
        </div>
      </div>
    );
  }

  // 9. Machine Learning
  if (t.includes('machine learning')) {
    return (
      <div className="native-visual testing-visual" style={{ ...themeStyle, padding: '16px' }}>
        <div className="testing-header">🤖 ML Model Training Monitor</div>
        <div className="topic-visual-container" style={{ gap: '10px' }}>
          <div className="testing-console" style={{ minHeight: '80px', fontFamily: 'monospace', padding: '10px', fontSize: '9px' }}>
            <div className="test-line pass" style={{ color: '#94a3b8' }}>Epoch 1/3 - loss: 0.4281 - acc: 0.825</div>
            <div className="test-line pass" style={{ color: '#94a3b8' }}>Epoch 2/3 - loss: 0.2154 - acc: 0.912</div>
            <div className="test-line running" style={{ color: '#a855f7' }}>⚡ Epoch 3/3 - loss: 0.0984 - acc: 0.965</div>
          </div>
          <div className="visual-console-box visual-text-muted" style={{ padding: '6px 8px', fontSize: '9px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Model: <strong>ResNet-50 Classifier</strong></span>
              <span style={{ color: '#a855f7' }}>Training 96%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '96%', height: '100%', background: '#a855f7' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. Django Framework & ORM / REST APIs / APIs
  if (t.includes('rest api') || t === 'rest apis' || t.includes('fastapi')) {
    return (
      <div className="native-visual restapi-visual" style={themeStyle}>
        <div className="api-header">
          <span className="api-icon">⚡</span> RESTful API Tester
        </div>
        <div className="api-tester-container">
          <div className="api-request-box">
            <div className="api-method get">GET</div>
            <div className="api-endpoint">/api/v1/users/me</div>
            <button className="api-send-btn">Send</button>
          </div>
          
          <div className="api-connection-line">
            <div className="api-packet"></div>
          </div>
          
          <div className="api-response-box">
            <div className="api-status">
              <span className="status-code">200 OK</span>
              <span className="status-time">42ms</span>
            </div>
            <div className="api-json-body">
              <div className="json-line"><span className="json-key">"id"</span>: <span className="json-val num">4012</span>,</div>
              <div className="json-line"><span className="json-key">"role"</span>: <span className="json-val str">"admin"</span>,</div>
              <div className="json-line"><span className="json-key">"active"</span>: <span className="json-val bool">true</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (t.includes('django & orm') || t.includes('django framework')) {
    return (
      <div className="native-visual database-visual" style={themeStyle}>
        <div className="db-header">🦁 Django ORM Query Translator</div>
        <div className="db-console" style={{ marginBottom: '10px', padding: '10px' }}>
          <div className="console-line query" style={{ color: '#10b981' }}># Python: Django ORM</div>
          <div className="console-line query">&gt; ActiveUsers = User.objects.filter(is_active=True)</div>
        </div>
        <div className="db-console" style={{ padding: '10px' }}>
          <div className="console-line result" style={{ color: '#38bdf8' }}>-- SQL Translation</div>
          <div className="console-line result">&gt; SELECT * FROM auth_user WHERE is_active = 1;</div>
        </div>
      </div>
    );
  }

  // 11. Real Project
  if (t === 'real project') {
    return (
      <div className="native-visual frontend-visual" style={themeStyle}>
        <div className="browser-header">
          <div className="browser-dot red" />
          <div className="browser-dot yellow" />
          <div className="browser-dot green" />
          <div className="browser-address">localhost:8000/shop/</div>
        </div>
        <div className="browser-content" style={{ minHeight: '120px', display: 'flex', gap: '10px', padding: '12px' }}>
          <div className="preview-card" style={{ flex: 1, padding: '10px', maxWidth: 'none' }}>
            <div className="preview-avatar" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #10b981, #3b82f6)' }} />
            <div className="preview-line-short" style={{ width: '80px', background: '#e2e8f0', height: '6px', borderRadius: '3px', marginBottom: '8px' }} />
            <div className="preview-line-long" style={{ width: '120px', background: '#64748b', height: '6px', borderRadius: '3px', marginBottom: '16px' }} />
            <div className="preview-button" style={{ background: '#10b981', padding: '4px 10px', fontSize: '9px' }}>$29.99 Buy Now</div>
          </div>
        </div>
      </div>
    );
  }

  if (t.includes('frontend') || t.includes('ui') || t.includes('ux') || t.includes('web dev') || t.includes('web development')) {
    return (
      <div className="native-visual frontend-visual" style={themeStyle}>
        <div className="browser-header">
          <div className="browser-dot red" />
          <div className="browser-dot yellow" />
          <div className="browser-dot green" />
          <div className="browser-address">localhost:3000</div>
        </div>
        <div className="browser-content">
          <div className="visual-code-editor">
            <div className="code-line"><span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;</div>
            <div className="code-line"><span className="keyword">const</span> <span className="function">PyKube</span> = () =&gt; &#123;</div>
            <div className="code-line">&nbsp;&nbsp;<span className="keyword">return</span> (</div>
            <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">div</span> className=<span className="string">"premium"</span>&gt;</div>
            <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">h1</span>&gt;Build App&lt;/<span className="tag">h1</span>&gt;</div>
            <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="tag">div</span>&gt;</div>
            <div className="code-line">&nbsp;&nbsp;);</div>
            <div className="code-line">&#125;;</div>
          </div>
          <div className="visual-preview-pane">
            <div className="preview-card">
              <div className="preview-avatar" />
              <div className="preview-line-short" />
              <div className="preview-line-long" />
              <div className="preview-button">Deploy Live</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (t.includes('database') || t.includes('sql') || t.includes('mongodb') || t.includes('redis')) {
    return (
      <div className="native-visual database-visual" style={themeStyle}>
        <div className="db-header">
          <span className="db-icon">🗄️</span> DB Schema Visualizer
        </div>
        <div className="db-tables">
          <div className="db-table">
            <div className="table-title">users</div>
            <div className="table-row primary-key"><span>🔑 id</span><span className="type">INT</span></div>
            <div className="table-row"><span>email</span><span className="type">VARCHAR</span></div>
            <div className="table-row"><span>password</span><span className="type">HASH</span></div>
          </div>
          <div className="db-relation-arrow">➔</div>
          <div className="db-table">
            <div className="table-title">orders</div>
            <div className="table-row primary-key"><span>🔑 id</span><span className="type">INT</span></div>
            <div className="table-row foreign-key"><span>user_id</span><span className="type">INT</span></div>
            <div className="table-row"><span>amount</span><span className="type">DECIMAL</span></div>
          </div>
        </div>
        <div className="db-console">
          <div className="console-line query">&gt; SELECT * FROM orders JOIN users ON orders.user_id = users.id;</div>
          <div className="console-line result">✓ Query executed: 8 rows returned (0.12ms)</div>
        </div>
      </div>
    );
  }

  if (t.includes('selenium') || t.includes('webdriver')) {
    return (
      <div className="native-visual selenium-visual" style={themeStyle}>
        <div className="selenium-browser">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-url">
              <span className="lock-icon">🔒</span> https://automation-target.app
            </div>
          </div>
          <div className="browser-body">
            <div className="browser-element-highlight">
              <div className="element-box">
                <span className="element-tag">driver.findElement(By.id("login"))</span>
                <button className="fake-login-btn">Login</button>
                <div className="automated-cursor">👆</div>
              </div>
            </div>
          </div>
        </div>
        <div className="selenium-console">
          <div className="log-line info">[INFO] Starting ChromeDriver 114.0</div>
          <div className="log-line info">[INFO] Navigating to https://automation-target.app</div>
          <div className="log-line success">[SUCCESS] Element located: By.id("login")</div>
          <div className="log-line action">&gt; Performing click() action...</div>
        </div>
      </div>
    );
  }

  if (t.includes('testing') || t.includes('qa') || t.includes('manual') || t.includes('testng')) {
    return (
      <div className="native-visual testing-visual" style={themeStyle}>
        <div className="testing-header">
          <span className="testing-icon">🔬</span> Automation Test Runner
        </div>
        <div className="testing-console">
          <div className="test-line pass">✓ test_user_authentication (12ms)</div>
          <div className="test-line pass">✓ test_payment_intent_creation (84ms)</div>
          <div className="test-line pass">✓ test_cart_item_update (15ms)</div>
          <div className="test-line pass">✓ test_responsive_mobile_menu (22ms)</div>
          <div className="test-line running">⚡ running test_email_verification...</div>
        </div>
        <div className="testing-progress">
          <div className="progress-bar-fill" />
          <span className="progress-label">Tests: 24 Passed, 0 Failed</span>
        </div>
      </div>
    );
  }

  if (t.includes('devops') || t.includes('pipeline') || t.includes('ci/cd') || t.includes('deployment')) {
    return (
      <div className="native-visual devops-visual" style={themeStyle}>
        <div className="devops-header">
          <span className="devops-icon">🚀</span> CI/CD Release Pipeline
        </div>
        <div className="pipeline-flow">
          <div className="pipeline-node done">
            <span className="node-icon">📝</span>
            <span className="node-label">Build</span>
          </div>
          <div className="pipeline-connector active" />
          <div className="pipeline-node done">
            <span className="node-icon">🧪</span>
            <span className="node-label">Test</span>
          </div>
          <div className="pipeline-connector active" />
          <div className="pipeline-node active">
            <span className="node-icon">📦</span>
            <span className="node-label">Deploy</span>
          </div>
        </div>
        <div className="pipeline-status">
          Status: <span className="status-badge running">BUILD_SUCCESSFUL &gt; DEPLOYING TO AWS EC2...</span>
        </div>
      </div>
    );
  }

  if (t.includes('security')) {
    return (
      <div className="native-visual security-visual" style={themeStyle}>
        <div className="security-shield-container">
          <div className="shield-icon">🛡️</div>
          <div className="shield-glow" />
        </div>
        <div className="security-checks">
          <div className="check-item pass">🟢 HTTPS & SSL: ENABLED</div>
          <div className="check-item pass">🟢 JWT Signature: VERIFIED</div>
          <div className="check-item pass">🟢 SQLi Protection: ACTIVE</div>
          <div className="check-item pass">🟢 CSRF Middleware: SECURE</div>
        </div>
      </div>
    );
  }

  if (t.includes('system design') || t.includes('architecture')) {
    return (
      <div className="native-visual system-design-visual" style={themeStyle}>
        <div className="sys-header">🏢 High Availability Distributed System</div>
        <div className="sys-grid">
          <div className="sys-box client">Clients</div>
          <div className="sys-arrow">⬇</div>
          <div className="sys-box gateway">API Gateway</div>
          <div className="sys-row-nodes">
            <div className="sys-box node">Service A</div>
            <div className="sys-box node">Service B</div>
          </div>
          <div className="sys-row-storage">
            <div className="sys-box db">PostgreSQL</div>
            <div className="sys-box cache">Redis</div>
          </div>
        </div>
      </div>
    );
  }

  if (t.includes('backend') || t.includes('api') || t.includes('python') || t.includes('django') || t.includes('java')) {
    return (
      <div className="native-visual backend-visual" style={themeStyle}>
        <div className="backend-header">🟢 API Routing Controller</div>
        <div className="api-routes">
          <div className="api-route get"><span className="method">GET</span><span className="path">/api/v1/courses</span><span className="status">200 OK</span></div>
          <div className="api-route post"><span className="method">POST</span><span className="path">/api/v1/bookings</span><span className="status">201 Created</span></div>
          <div className="api-route put"><span className="method">PUT</span><span className="path">/api/v1/users/profile</span><span className="status">200 OK</span></div>
        </div>
        <div className="server-status">
          <span className="status-dot pulsing" /> Server Status: Healthy (CPU: 12%, RAM: 34%)
        </div>
      </div>
    );
  }

  // Fallback / default visual (Version Control / Git / General)
  return (
    <div className="native-visual git-visual" style={themeStyle}>
      <div className="git-header">🌿 Git Branch Visualizer</div>
      <div className="git-tree">
        <div className="git-branch main">
          <div className="commit dot active" title="Initial Commit" />
          <div className="commit-line" />
          <div className="commit dot" title="Setup project" />
          <div className="commit-line" />
          <div className="commit dot active" title="Merge feature-1" />
        </div>
        <div className="git-branch feature">
          <div className="commit-line-diagonal" />
          <div className="commit dot" title="Feature dev" />
          <div className="commit-line" />
          <div className="commit dot" title="Feature testing" />
        </div>
      </div>
      <div className="git-console">&gt; git commit -m "feat: complete active state loading"</div>
    </div>
  );
};

const getTagColors = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('core') || t.includes('essential')) {
    return { color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.2)' }; // Blue
  }
  if (t.includes('advanced') || t.includes('architecture') || t.includes('design') || t.includes('cap') || t.includes('patterns')) {
    return { color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.2)' }; // Violet
  }
  if (t.includes('tooling') || t.includes('platform') || t.includes('workflow') || t.includes('process')) {
    return { color: '#64748b', bg: 'rgba(100, 116, 139, 0.08)', border: 'rgba(100, 116, 139, 0.2)' }; // Slate
  }
  if (t.includes('framework') || t.includes('popular') || t.includes('typed')) {
    return { color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.08)', border: 'rgba(6, 182, 212, 0.2)' }; // Cyan
  }
  if (t.includes('sql') || t.includes('nosql') || t.includes('database') || t.includes('cache')) {
    return { color: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.2)' }; // Emerald
  }
  return { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.2)' }; // Amber
};

const TopicCard = ({ topic, defaultOpen = false, secColor }) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);

  return (
    <div
      className={`topic-card-redesign${isExpanded ? ' is-expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        cursor: 'pointer',
        '--topic-sec-color': secColor,
        '--topic-sec-color-alpha': `${secColor}0d`,
        '--topic-sec-color-alpha-hover': `${secColor}18`
      }}
    >
      <div className="topic-card-header-redesign">
        <div className="topic-card-header-left">
          <div className="topic-check-wrap">
            <span className="check-icon">✓</span>
          </div>
          <h4>{topic.name}</h4>
          <div className="topic-tags-redesign">
            {topic.tags.map(tag => {
              const colors = getTagColors(tag);
              return (
                <span
                  key={tag}
                  className="topic-tag-badge-redesign"
                  style={{
                    color: colors.color,
                    backgroundColor: colors.bg,
                    borderColor: colors.border,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="topic-toggle-icon">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
      <div className={`topic-desc-wrapper${isExpanded ? ' is-open' : ''}`}>
        <p className="topic-desc-redesign">{topic.desc}</p>
      </div>
    </div>
  );
};

export default function ProgramDetailsPage() {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [expandedSections, setExpandedSections] = useState({ '01': true });
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 1100px)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1100px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleSection = (num) => {
    const isOpening = !expandedSections[num];
    setExpandedSections(prev => (prev[num] ? {} : { [num]: true }));

    if (isOpening) {
      setTimeout(() => {
        const element = document.getElementById(`roadmap-sec-${num}`);
        if (element) {
          const yOffset = -100; // offset to clear the sticky navbar
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  useEffect(() => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setExpandedSections({ '01': true });
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <main className="program-error-page">
        <div className="container error-container">
          <div className="error-icon">⚠️</div>
          <h1>Program Not Found</h1>
          <p>We couldn't find the training program you are looking for. It may have been moved or renamed.</p>
          <Link to="/courses" className="btn-primary">Browse All Programs</Link>
        </div>
      </main>
    );
  }

  const roadmap = roadmapMap[program.id] || javaRoadmap;
  const hero = heroConfig[program.id] || heroConfig['java-full-stack'];

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Section icon renderer — uses section number modulo to cycle through icons
  const renderSectionIcon = (number) => {
    const iconMap = {
      '01': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      '02': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
      '03': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      '04': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <line x1="6" y1="9" x2="6" y2="15" />
        </svg>
      ),
      '05': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="6" x2="18" y2="6" />
          <line x1="10" y1="18" x2="18" y2="18" />
        </svg>
      ),
      '06': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      '07': (
        <svg className="section-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    };
    return iconMap[number] || iconMap['01'];
  };

  const getSectionColor = (num) => {
    const colors = {
      '01': '#3b82f6',
      '02': '#f97316',
      '03': '#10b981',
      '04': '#8b5cf6',
      '05': '#ef4444',
      '06': '#eab308',
      '07': '#06b6d4',
    };
    return colors[num] || '#3b82f6';
  };

  return (
    <main className="program-details-page unified-details-page">
      <div className="unified-redesign-container">

        {/* ── Intro Header ── */}
        <section
          className="unified-intro-header"
          style={{
            background: `${hero.gradStart}`,
            backgroundImage: `
              radial-gradient(at 0% 0%, ${hero.accentColor}55 0, transparent 60%),
              radial-gradient(at 100% 100%, ${hero.accentColor}33 0, transparent 60%),
              radial-gradient(at 50% 50%, rgba(15, 23, 42, 0.85) 0, transparent 80%)`,
          }}
        >
          <div className="hero-bg">
            <div className="hero-orb hero-orb-1" style={{ background: `${hero.accentColor}25` }} />
            <div className="hero-orb hero-orb-2" style={{ background: `${hero.accentColor}18` }} />
            <div className="hero-orb hero-orb-3" style={{ background: `${hero.accentColor}12` }} />
            <div className="hero-grid-lines" />
          </div>
          <div className="container intro-header-inner">
            <span className="intro-tag">{hero.introTag}</span>
            <h1 className="intro-heading">{hero.introHeading}</h1>
            <p className="intro-paragraph">{program.overview}</p>
          </div>
        </section>

        {/* ── Hero / Roadmap Banner ── */}
        <section
          className={`unified-hero-section${hero.whiteBg ? ' hero-white-bg' : ''}`}
          style={{
            background: hero.whiteBg
              ? '#ffffff'
              : `linear-gradient(135deg, ${hero.gradStart} 0%, #0f172a 50%, #1e293b 100%)`,
          }}
        >
          <div className="unified-hero-content-wrap">
            <span className="unified-hero-badge" style={{ color: hero.accentColor, borderColor: `${hero.accentColor}55`, background: `${hero.accentColor}15`, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {program.icon && (
                <span style={{ backgroundColor: '#ffffff', padding: '3px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={program.icon} alt={program.title} style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                </span>
              )}
              {hero.badge}
            </span>
            <h1 className={`unified-hero-title${hero.whiteBg ? ' hero-title-dark' : ''}`}>
              {hero.titleLine1 && <>{hero.titleLine1}&nbsp;<br /></>}
              {hero.titleHighlight && <span className="accent-text" style={{ color: hero.accentColor }}>{hero.titleHighlight}</span>}
              {hero.titleHighlight && hero.titleLine2 && <>&nbsp;</>}
              {hero.titleLine2}
            </h1>
            <p className={`unified-hero-subtitle${hero.whiteBg ? ' hero-subtitle-dark' : ''}`}>{hero.subtitle}</p>

            {/* Metrics */}
            <div className="unified-hero-metrics">
              {hero.metrics.map((m, i) => (
                <div className="metric-item" key={i}>
                  <span className="metric-num-redesign" style={{ color: hero.accentColor }}>{m.num}</span>
                  <span className="metric-label-redesign">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Indicator dots */}
            <div className="indicator-dots">
              {hero.metrics.map((_, i) => <span className="dot" key={i} style={{ background: hero.accentColor }} />)}
              <span className="dot" style={{ background: hero.accentColor }} />
              <span className="dot" style={{ background: hero.accentColor }} />
              <span className="dot" style={{ background: hero.accentColor }} />
            </div>

            <div className="start-here-badge" style={{ borderColor: `${hero.accentColor}55`, color: hero.accentColor }}>
              <span className="badge-text">&lt;/&gt; START HERE</span>
            </div>
          </div>
        </section>

        {/* ── Roadmap Timeline ── */}
        <section className="java-roadmap-timeline-section-redesign" style={{ overflow: 'hidden' }}>
          <div className="container relative-timeline-container">
            <div className="timeline-vertical-line" />
            <div className="timeline-cards-list">
              {roadmap.map((section, idx) => {
                const isOpen = !!expandedSections[section.number];
                // On mobile/tablet suppress alternating alignment — render straight column
                const sideClass = isMobile ? '' : (idx % 2 === 0 ? 'left-aligned' : 'right-aligned');
                return (
                  <div
                    key={section.number}
                    id={`roadmap-sec-${section.number}`}
                    className={`timeline-card-wrapper${sideClass ? ' ' + sideClass : ''}${isOpen ? ' is-open' : ''}`}
                    style={{ '--sec-color': getSectionColor(section.number) }}
                  >
                    <div className="timeline-anchor-dot" />
                    <div className="roadmap-section-card-redesign">
                      <div className="roadmap-section-header-redesign" onClick={() => toggleSection(section.number)}>
                        <div className="section-header-left-redesign">
                          <span className="section-icon-wrapper-redesign">
                            {renderSectionIcon(section.number)}
                          </span>
                          <div className="section-text-redesign">
                            <h3>{section.title}</h3>
                            <span className="section-subtitle-redesign">{section.subtitle}</span>
                          </div>
                        </div>
                        <div className="section-header-right-redesign">
                          <span className="section-num-circle-redesign">{section.number}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`section-arrow-svg-redesign${isOpen ? ' rotated' : ''}`}>
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>

                      {isOpen && (
                        <div className="roadmap-section-body-redesign">
                          <div className="section-topics-counter">
                            <span>{section.topics.length} TOPICS</span>
                          </div>
                          <div className="roadmap-topics-list-redesign">
                            {section.topics.map((topic, tIdx) => (
                              <TopicCard
                                key={tIdx}
                                topic={topic}
                                defaultOpen={tIdx === 0}
                                secColor={getSectionColor(section.number)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Only render the opposite illustration on desktop where it won't overflow */}
                    {isOpen && !isMobile && (
                      <div className="timeline-opposite-image-wrap">
                        <RoadmapSectionVisual title={section.title} accentColor={hero.accentColor} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Production Ready Footer */}
            <div className="production-ready-footer-redesign">
              <div className="production-ready-badge-redesign">
                <span className="globe-icon">🌐</span> PRODUCTION READY
              </div>
            </div>
          </div>
        </section>

        {/* ── Consultation CTA ── */}
        <section
          className="java-consultation-section-redesign dark-sidebar-card"
          style={{
            '--accent': hero.accentColor,
            '--accent-glow': `${hero.accentColor}25`
          }}
        >
          <div className="container">
            {submitted ? (
              <div className="sidebar-success">
                <div className="success-icon">✅</div>
                <h3>Consultation Booked!</h3>
                <p>Thanks {form.name}, we will contact you within 24 hours to schedule your session for <strong>{program.title}</strong>.</p>
                <button className="btn-secondary-details" onClick={() => setSubmitted(false)}>Back to Form</button>
              </div>
            ) : (
              <div className="consultation-layout">
                <div className="consultation-info">
                  <h3>Book Your Free Career Consultation</h3>
                  <p className="form-sub-text">Speak with our career advisors to kickstart your <strong>{program.title}</strong> journey.</p>
                  <div className="consultation-benefits">
                    <div className="benefit-item">
                      <span className="benefit-icon" style={{ color: hero.accentColor, background: `${hero.accentColor}15` }}>
                        <img src="/images/illustrations/learner_icon.png" alt="Roadmap" className="benefit-icon-img" />
                      </span>
                      <div className="benefit-text">
                        <h4>Personalized Career Roadmap</h4>
                        <p>Get a custom learning path matching your experience level and career goals.</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon" style={{ color: hero.accentColor, background: `${hero.accentColor}15` }}>💼</span>
                      <div className="benefit-text">
                        <h4>US IT Job Market Guidance</h4>
                        <p>Learn about current hiring trends, salary expectations, and placement support.</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon" style={{ color: hero.accentColor, background: `${hero.accentColor}15` }}>⚡</span>
                      <div className="benefit-text">
                        <h4>1-on-1 Advisor Session</h4>
                        <p>Discuss schedules, curriculum deep-dives, and financial aid with our experts.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="consultation-form-wrap">
                  <form onSubmit={handleSubmit} className="sidebar-form">
                    <div className="sidebar-field">
                      <label>Full Name *</label>
                      <input type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="sidebar-field">
                      <label>Email Address *</label>
                      <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="sidebar-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="5550000000"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        maxLength={10}
                        title="Please enter a 10-digit phone number"
                        required
                      />
                    </div>
                    <div className="sidebar-field">
                      <label>Message (Optional)</label>
                      <textarea name="message" placeholder="Ask about schedules, pricing, job placement support..." rows={3} value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="sidebar-submit-btn" style={{ backgroundColor: hero.accentColor }}>
                      📅 Reserve My Free Session
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
