import { useState, useEffect } from 'react';
import '../styles/Process.css';

const steps = [
  { 
    n: '01', 
    title: 'Career Counseling', 
    desc: 'One-on-one sessions to align your unique background with the right high-demand IT career path.', 
    icon: '🎓', 
    color: '#3b82f6',
    bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop'
  },
  { 
    n: '02', 
    title: 'Skill-Based Training', 
    desc: 'Learn the right skills with live training and hands-on practice.', 
    icon: '📚', 
    color: '#f97316',
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop'
  },
  { 
    n: '03', 
    title: 'Real-Time Projects', 
    desc: 'Work on industry-based projects to gain practical experience.', 
    icon: '💻', 
    color: '#8b5cf6',
    bgImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1600&auto=format&fit=crop'
  },
  { 
    n: '04', 
    title: 'Resume & LinkedIn', 
    desc: 'We build a professional resume that gets you noticed.', 
    icon: '📄', 
    color: '#10b981',
    bgImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1600&auto=format&fit=crop'
  },
  { 
    n: '05', 
    title: 'Mock Interviews', 
    desc: 'Practice technical, HR and client interviews with experts.', 
    icon: '🎤', 
    color: '#ef4444',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  },
  { 
    n: '06', 
    title: 'Placement Support', 
    desc: 'Direct referrals to our network of 50+ US hiring partners and salary negotiation guidance until Day 1.', 
    icon: '🤝', 
    color: '#f59e0b',
    bgImage: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1600&auto=format&fit=crop'
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="process" id="process">
      {steps.map((s, idx) => (
        <div
          key={`bg-${idx}`}
          className="process-bg-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 15, 23, 0.88), rgba(11, 15, 23, 0.88)), url(${s.bgImage})`,
            opacity: activeIndex === idx ? 1 : 0,
          }}
        />
      ))}
      <div className="process-bg-orb" />
      <div className="container">
        <div className="section-header">
          <span className="section-tag" style={{ background: 'rgba(249,115,22,0.15)', color: '#fed7aa', borderColor: 'rgba(249,115,22,0.3)' }}>
            From Training to Placement
          </span>
          <h2 className="section-title" style={{ color: '#fff' }}>Our Proven 6-Step Process</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A structured journey to your dream IT career in the USA.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div 
              className={`process-step${activeIndex === i ? ' active' : ''}`}
              key={i} 
              style={{ '--sc': s.color }}
              onMouseEnter={() => {
                setActiveIndex(i);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <div className="step-header">
                <div className="step-icon-ring">
                  <span className="step-icon">{s.icon}</span>
                </div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="step-connector">
                  <div 
                    className="step-connector-fill" 
                    style={{ 
                      width: activeIndex > i ? '100%' : '0%',
                      animation: activeIndex === i && !isHovered ? 'load-connector 4s linear forwards' : 'none',
                      transition: activeIndex > i ? 'none' : 'width 0.3s ease'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
