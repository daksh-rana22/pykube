import React from 'react';
import CTA from '../components/CTA';
import '../styles/AboutUsPage.css';

const values = [
  {
    icon: '📈',
    title: 'Make No Little Plans',
    desc: 'Build for scale, create for the future, execute short-term goals in view of long-term strategy.'
  },
  {
    icon: '☀️',
    title: 'Radiate Positivity',
    desc: 'Be kind, have fun, find what to love.'
  },
  {
    icon: '🏆',
    title: 'Strive for Excellence',
    desc: 'Drive results, hold yourself and each other accountable to our shared goals.'
  },
  {
    icon: '📚',
    title: 'Be A Lifelong Learner',
    desc: 'Embrace a growth mindset, be curious, get comfortable with being uncomfortable.'
  },
  {
    icon: '🤝',
    title: 'Work Together',
    desc: 'Collaborate, embrace transparency, empower others to succeed.'
  },
  {
    icon: '🌍',
    title: 'Nurture Difference',
    desc: 'Seek to understand, notice who or what is missing, actively seek out different opinions, create space for other voices to be heard.'
  }
];

const team = [
  {
    initials: 'KK',
    name: 'Krishna Kumar',
    role: 'CEO & Founder',
    color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
  },
  {
    initials: 'AY',
    name: 'Aman Yadav',
    role: 'Managing Director',
    linkedin: 'https://www.linkedin.com/in/-conecthere/',
    color: 'linear-gradient(135deg, #10b981, #047857)'
  },
  {
    initials: 'HT',
    name: 'Harsh Tomar',
    role: 'Technical Marketing Lead',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
  {
    initials: 'VC',
    name: 'Vishal Chaudhary',
    role: 'Data-Tech Lead',
    linkedin: 'https://www.linkedin.com/in/vishal-chaudhary-38402a240/',
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
  }
];

export default function AboutUsPage() {
  return (
    <main className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-orb orb-1" />
          <div className="about-hero-orb orb-2" />
          <div className="hero-grid-lines" />
        </div>
        <div className="container about-hero-inner">
          <span className="about-hero-tag">WHO WE ARE</span>
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Since last many years, PyKube has been a leader in the bootcamp industry,
            providing market-driven education to help people change their lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <div className="container about-mission-grid">
          <div className="about-mission-left">
            <div className="mission-graphic-card">
              <div className="graphic-ring ring-1" />
              <div className="graphic-ring ring-2" />
              <div className="graphic-ring ring-3" />
              <div className="graphic-icon">🚀</div>
              <div className="graphic-stats">
                <span className="stats-num">100%</span>
                <span className="stats-lbl">Outcomes Driven</span>
              </div>
            </div>
          </div>
          <div className="about-mission-right">
            <span className="accent-sub">OUR MISSION</span>
            <h2 className="about-sec-heading">Empowering tomorrow’s workforce through education</h2>
            <div className="about-paragraphs">
              <p>
                As a leader in the tech industry, PyKube believes that education is the best investment
                you can make in your future. We’re committed to helping change lives and the world for the better.
              </p>
              <p>
                Our courses provide an immersive, outcomes-driven curriculum for students looking to
                launch a career in Software Engineering, Data Science, or Product Design. Courses are
                offered online only.
              </p>
              <p>
                PyKube is frequently ranked as a top coding bootcamp by industry publications. In
                addition to student programs, we also offer targeted education solutions for organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-values-header">
            <span className="accent-sub">GUIDING PRINCIPLES</span>
            <h2 className="about-sec-heading centered">Our Values</h2>
            <p className="about-sec-subtext">The core principles that shape our curriculum, support, and community.</p>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="container">
          <div className="about-team-header">
            <span className="accent-sub">OUR LEADERSHIP</span>
            <h2 className="about-sec-heading centered">Meet Our Team</h2>
            <p className="about-sec-subtext">
              We have dedicated teams for each of our enterprise clients and ensure to align
              with your strategic initiatives.
            </p>
          </div>
          <div className="about-team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar-wrap" style={{ background: member.color }}>
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="team-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* consultation cta */}
      <CTA />
    </main>
  );
}
