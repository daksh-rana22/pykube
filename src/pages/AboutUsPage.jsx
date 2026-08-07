import React from 'react';
import logo from '../assets/logo.png';
import '../styles/AboutUsPage.css';
import { FiTarget, FiBookOpen, FiAward, FiTrendingUp, FiSun, FiUsers, FiHeart } from 'react-icons/fi';
import HMSHeroBackground from '../components/HMSHeroBackground';

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

export default function AboutUsPage() {
  return (
    <main className="about-us-page">

      {/* ── Hero ── */}
      <section className="about-hero-v2">
        <div className="about-hero-bg-v2">
          <HMSHeroBackground />
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
                  <span>🏢</span> PyKube HQ · Little Elm, TX
                </div>
              </div>
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


    </main>
  );
}
