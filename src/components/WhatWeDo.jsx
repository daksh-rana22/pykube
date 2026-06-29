import { Link } from 'react-router-dom';
import '../styles/WhatWeDo.css';

const features = [
  {
    icon: '🎯',
    title: 'Industry-Focused Training',
    desc: 'Live online sessions taught by real-world IT professionals with 10+ years of industry experience. Curriculum updated to match 2024 job market demands.',
    color: '#2563eb', bg: '#eff6ff',
    link: '/programs'
  },
  {
    icon: '💻',
    title: 'Real-Time Projects',
    desc: 'Build production-grade Banking, E-Commerce, and Data Engineering projects that you can proudly showcase on your resume and GitHub portfolio.',
    color: '#f97316', bg: '#fff7ed',
    link: '/programs'
  },
  {
    icon: '📄',
    title: 'Resume & LinkedIn Branding',
    desc: 'Our career coaches craft ATS-optimized resumes and LinkedIn profiles that get you noticed by US-based recruiters and hiring managers.',
    color: '#10b981', bg: '#ecfdf5',
    link: '/services/interview-preparation'
  },
  {
    icon: '🎤',
    title: 'Mock Interview Preparation',
    desc: 'Practice technical, behavioral, and client-facing interviews with industry experts. Get detailed feedback on each session to improve fast.',
    color: '#8b5cf6', bg: '#f5f3ff',
    link: '/services/interview-preparation'
  },
  {
    icon: '🤝',
    title: 'Placement Support',
    desc: 'Direct referrals to our network of 50+ US hiring partners. We negotiate salary, prepare you for onboarding, and stay with you until Day 1.',
    color: '#ec4899', bg: '#fdf2f8',
    link: '/services/job-assistance'
  },
  {
    icon: '🎓',
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
