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
    badge: '⚡ 2026 EDITION',
    titleLine1: 'Java Full-Stack',
    titleHighlight: 'Developer',
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
    badge: '🐍 2026 EDITION',
    titleLine1: 'Python',
    titleHighlight: 'Developer',
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
    badge: '🔍 2026 EDITION',
    titleLine1: 'QA Automation',
    titleHighlight: 'Engineer',
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
    badge: '📊 2026 EDITION',
    titleLine1: 'Data',
    titleHighlight: 'Analyst',
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
    badge: '🔧 2026 EDITION',
    titleLine1: 'Data',
    titleHighlight: 'Engineer',
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
    badge: '🤖 2026 EDITION',
    titleLine1: 'Data',
    titleHighlight: 'Scientist',
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

export default function ProgramDetailsPage() {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (num) => {
    setExpandedSections(prev => ({ ...prev, [num]: !prev[num] }));
  };

  useEffect(() => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setExpandedSections({});
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

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
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
            <span className="unified-hero-badge" style={{ color: hero.accentColor, borderColor: `${hero.accentColor}55`, background: `${hero.accentColor}15` }}>
              {hero.badge}
            </span>
            <h1 className={`unified-hero-title${hero.whiteBg ? ' hero-title-dark' : ''}`}>
              {hero.titleLine1}&nbsp;<br />
              <span className="accent-text" style={{ color: hero.accentColor }}>{hero.titleHighlight}</span>&nbsp;{hero.titleLine2}
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
        <section className="java-roadmap-timeline-section-redesign">
          <div className="container relative-timeline-container">
            <div className="timeline-vertical-line" />
            <div className="timeline-cards-list">
              {roadmap.map((section, idx) => {
                const isOpen = !!expandedSections[section.number];
                const sideClass = idx % 2 === 0 ? 'left-aligned' : 'right-aligned';
                return (
                  <div
                    key={section.number}
                    className={`timeline-card-wrapper ${sideClass}${isOpen ? ' is-open' : ''}`}
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
                              <div key={tIdx} className="topic-card-redesign">
                                <div className="topic-card-header-redesign">
                                  <div className="topic-check-wrap">
                                    <span className="check-icon">✓</span>
                                  </div>
                                  <h4>{topic.name}</h4>
                                  <div className="topic-tags-redesign">
                                    {topic.tags.map(tag => (
                                      <span key={tag} className="topic-tag-badge-redesign">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                                <p className="topic-desc-redesign">{topic.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
        <section className="java-consultation-section-redesign">
          <div className="container">
            <div className="sidebar-card contact-sidebar-card dark-sidebar-card">
              {submitted ? (
                <div className="sidebar-success">
                  <div className="success-icon">✅</div>
                  <h3>Consultation Booked!</h3>
                  <p>Thanks {form.name}, we will contact you within 24 hours to schedule your session for <strong>{program.title}</strong>.</p>
                  <button className="btn-secondary-details" onClick={() => setSubmitted(false)}>Back to Form</button>
                </div>
              ) : (
                <>
                  <h3>Book Your Free Career Consultation</h3>
                  <p className="form-sub-text">Speak with our career advisors to kickstart your <strong>{program.title}</strong> journey.</p>
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
                      <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="sidebar-field">
                      <label>Message (Optional)</label>
                      <textarea name="message" placeholder="Ask about schedules, pricing, job placement support..." rows={3} value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="sidebar-submit-btn" style={{ backgroundColor: hero.accentColor }}>
                      📅 Reserve My Free Session
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
