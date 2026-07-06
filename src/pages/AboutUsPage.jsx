import React from 'react';
import logo from '../assets/logo.png';
import '../styles/AboutUsPage.css';
import { FiTarget, FiBookOpen, FiAward, FiTrendingUp, FiSun, FiUsers, FiHeart } from 'react-icons/fi';

const stats = [
  { num: '10K+', label: 'Learners Trained', icon: '/images/illustrations/learner_icon.png' },
  { num: '4.9/5', label: 'Student Rating', icon: '/images/illustrations/star_icon.png' },
  { num: '200+', label: 'Hiring Partners', icon: '/images/illustrations/partners_icon.png' },
  { num: '6+', label: 'Expert Programs', icon: '/images/illustrations/programs_icon.png' },
];

const missionPoints = [
  {
    icon: <FiTarget />,
    title: 'Our Purpose',
    text: 'As a leader in the tech industry, PyKube believes that education is the best investment you can make in your future. We\'re committed to helping change lives and the world for the better.'
  },
  {
    icon: <FiBookOpen />,
    title: 'Our Curriculum',
    text: 'Our courses provide an immersive, outcomes-driven curriculum for students looking to launch a career in Software Engineering, Data Science, or Product Design. Courses are offered online only.'
  },
  {
    icon: <FiAward />,
    title: 'Our Recognition',
    text: 'PyKube is frequently ranked as a top coding bootcamp by industry publications. In addition to student programs, we also offer targeted education solutions for organizations.'
  }
];

const values = [
  { icon: <FiTrendingUp />, color: '#3b82f6', title: 'Make No Little Plans', desc: 'Build for scale, create for the future, execute short-term goals in view of long-term strategy.' },
  { icon: <FiSun />, color: '#f59e0b', title: 'Radiate Positivity', desc: 'Be kind, have fun, find what to love.' },
  { icon: <FiAward />, color: '#10b981', title: 'Strive for Excellence', desc: 'Drive results, hold yourself and each other accountable to our shared goals.' },
  { icon: <FiBookOpen />, color: '#8b5cf6', title: 'Be A Lifelong Learner', desc: 'Embrace a growth mindset, be curious, get comfortable with being uncomfortable.' },
  { icon: <FiUsers />, color: '#ec4899', title: 'Work Together', desc: 'Collaborate, embrace transparency, empower others to succeed.' },
  { icon: <FiHeart />, color: '#ef4444', title: 'Nurture Difference', desc: 'Seek to understand, notice who or what is missing, actively seek out different opinions, create space for other voices to be heard.' },
];

const team = [
  { initials: 'KK', name: 'Krishna Kumar', role: 'CEO & Founder', color: '#3b82f6', bg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', linkedin: null },
  { initials: 'AY', name: 'Aman Yadav', role: 'Managing Director', color: '#10b981', bg: 'linear-gradient(135deg, #10b981, #047857)', linkedin: 'https://www.linkedin.com/in/-conecthere/' },
  { initials: 'HT', name: 'Harsh Tomar', role: 'Technical Marketing Lead', color: '#f59e0b', bg: 'linear-gradient(135deg, #f59e0b, #d97706)', linkedin: null },
  { initials: 'VC', name: 'Vishal Chaudhary', role: 'Data-Tech Lead', color: '#8b5cf6', bg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', linkedin: 'https://www.linkedin.com/in/vishal-chaudhary-38402a240/' },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function AboutUsPage() {
  return (
    <main className="about-us-page">

      {/* ── Hero ── */}
      <section className="about-hero-v2">
        <div className="about-hero-bg-v2">
          <div className="about-orb orb-a" />
          <div className="about-orb orb-b" />
          <div className="hero-grid-lines" />
        </div>
        <div className="container about-hero-inner-v2">
          {/* Left */}
          <div className="about-hero-left">
            <span className="about-who-tag">
              <span className="who-dash" /> WHO WE ARE
            </span>
            <h1 className="about-hero-heading">
              Empowering tomorrow's<br />
              workforce through{' '}
              <span className="about-hero-accent">education</span>
            </h1>
            <p className="about-hero-desc">
              As a leader in the tech industry, PyKube believes that education is
              the best investment you can make in your future. We're committed to
              helping change lives and the world for the better.
            </p>
          </div>

          {/* Right – Logo float */}
          <div className="about-hero-right">
            <div className="about-logo-float-wrap">
              <div className="lf-ring lf-ring-1" />
              <div className="lf-ring lf-ring-2" />
              <div className="lf-ring lf-ring-3" />
              <div className="lf-glow-blob" />
              <div className="lf-logo-card">
                <img src={logo} alt="PyKube Technologies" className="about-logo-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar inside hero at bottom */}
        <div className="about-hero-stats-bar">
          <div className="container about-hero-stats-inner">
            {stats.map((s, i) => (
              <div className="hero-stat-item" key={i}>
                <span className="hero-stat-icon">
                  {s.icon.startsWith('/') ? (
                    <img src={s.icon} alt={s.label} className="about-stat-icon-img" />
                  ) : (
                    s.icon
                  )}
                </span>
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="about-mission-v2">
        <div className="container about-mission-grid-v2">
          {/* Left: text */}
          <div className="mission-text-col">
            <span className="accent-sub-v2">OUR MISSION</span>
            <h2 className="mission-heading">Committed to shaping the future of tech talent</h2>
            <div className="mission-points">
              {missionPoints.map((mp, i) => (
                <div className="mission-point" key={i}>
                  <div className="mission-point-icon-wrap">
                    <span className="mission-point-icon">
                      {typeof mp.icon === 'string' && mp.icon.startsWith('/') ? (
                        <img src={mp.icon} alt={mp.title} className="mission-point-icon-img" />
                      ) : (
                        mp.icon
                      )}
                    </span>
                  </div>
                  <div>
                    <h4 className="mission-point-title">{mp.title}</h4>
                    <p>{mp.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: office image + stats */}
          <div className="mission-img-col">
            <div className="mission-office-card">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80"
                alt="PyKube Office"
                className="mission-office-img"
              />
              <div className="mission-img-overlay">
                <div className="mission-overlay-badge">
                  <span>🏢</span> PyKube HQ · Irving, TX
                </div>
              </div>
            </div>
            <div className="mission-stats-bar">
              {stats.slice(0, 3).map((s, i) => (
                <div className="mission-stat" key={i}>
                  <span className="mission-stat-icon">
                    {s.icon.startsWith('/') ? (
                      <img src={s.icon} alt={s.label} className="about-stat-icon-img" />
                    ) : (
                      s.icon
                    )}
                  </span>
                  <span className="mission-stat-num">{s.num}</span>
                  <span className="mission-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values-v2">
        <div className="container">
          <div className="about-section-header">
            <span className="accent-sub-v2">OUR VALUES</span>
            <h2 className="about-section-title">Guided by Values, Driven by Impact</h2>
            <p className="about-section-sub">The core principles that shape how we teach, support, and grow our community.</p>
            <div className="section-title-bar" />
          </div>
          <div className="about-values-grid-v2">
            {values.map((v, i) => (
              <div className="value-card-v2" key={i} style={{ '--v-color': v.color }}>
                <div className="value-icon-box" style={{ background: `${v.color}18`, borderColor: `${v.color}30` }}>
                  <span className="value-icon-emoji">
                    {typeof v.icon === 'string' && v.icon.startsWith('/') ? (
                      <img src={v.icon} alt={v.title} className="value-icon-img" />
                    ) : (
                      v.icon
                    )}
                  </span>
                </div>
                <h3 className="value-title-v2">{v.title}</h3>
                <p className="value-desc-v2">{v.desc}</p>
                <div className="value-card-bar" style={{ background: v.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team-v2">
        <div className="container">
          <div className="about-section-header">
            <span className="accent-sub-v2">OUR LEADERSHIP</span>
            <h2 className="about-section-title">Meet Our Team</h2>
            <p className="about-section-sub">
              We have dedicated teams for each of our enterprise clients and ensure to align with your strategic initiatives.
            </p>
          </div>
          <div className="about-team-grid-v2">
            {team.map((m, i) => (
              <div className="team-card-v2" key={i} style={{ '--t-color': m.color }}>
                <div className="team-card-top" />
                <div className="team-avatar-v2" style={{ background: m.bg }}>
                  {m.initials}
                </div>
                <h3 className="team-name-v2">{m.name}</h3>
                <p className="team-role-v2">{m.role}</p>
                {m.linkedin ? (
                  <a href={m.linkedin} className="team-li-btn" target="_blank" rel="noopener noreferrer" aria-label={`${m.name} LinkedIn`}>
                    <LinkedInIcon /> LinkedIn
                  </a>
                ) : (
                  <span className="team-li-btn team-li-disabled">
                    <LinkedInIcon /> LinkedIn
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
