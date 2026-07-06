import { Link } from 'react-router-dom';
import '../styles/WhatWeDo.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Industry-Focused Training',
    desc: 'Live online sessions taught by real-world IT professionals with 10+ years of industry experience. Curriculum updated to match 2024 job market demands.',
    color: '#2563eb', bg: '#eff6ff',
    link: '/programs'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="17" x2="22" y2="17" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="7" y1="21" x2="17" y2="21" />
        <polyline points="9 7 7 9 9 11" />
        <polyline points="15 7 17 9 15 11" />
      </svg>
    ),
    title: 'Real-Time Projects',
    desc: 'Build production-grade Banking, E-Commerce, and Data Engineering projects that you can proudly showcase on your resume and GitHub portfolio.',
    color: '#f97316', bg: '#fff7ed',
    link: '/programs'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    title: 'Resume & LinkedIn Branding',
    desc: 'Our career coaches craft ATS-optimized resumes and LinkedIn profiles that get you noticed by US-based recruiters and hiring managers.',
    color: '#10b981', bg: '#ecfdf5',
    link: '/services/interview-preparation'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Mock Interview Preparation',
    desc: 'Practice technical, behavioral, and client-facing interviews with industry experts. Get detailed feedback on each session to improve fast.',
    color: '#8b5cf6', bg: '#f5f3ff',
    link: '/services/interview-preparation'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Placement Support',
    desc: 'Direct referrals to our network of 50+ US hiring partners. We negotiate salary, prepare you for onboarding, and stay with you until Day 1.',
    color: '#ec4899', bg: '#fdf2f8',
    link: '/services/job-assistance'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: 'Career Counseling',
    desc: 'One-on-one sessions to map your unique background to the right IT career path — whether you are a fresher, career-changer, or returning professional.',
    color: '#f59e0b', bg: '#fffbeb',
    link: '/services/job-assistance'
  },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Everything you need to land<br />your dream IT job in the USA</h2>
          <p className="section-subtitle">
            From training to placement — PyKube Technologies is your end-to-end career partner.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ '--accent': f.color, '--accent-bg': f.bg }}>
              <div className="feature-icon-wrap"><span>{f.icon}</span></div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <Link to={f.link} className="feature-link">
                Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
