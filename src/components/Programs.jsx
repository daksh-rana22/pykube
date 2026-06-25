import { useState } from 'react';
import '../styles/Programs.css';
import { programs } from '../data/programsData';

export default function Programs() {
  const [expanded, setExpanded] = useState({});
  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">Industry-leading training programs</h2>
          <p className="section-subtitle">Job-oriented bootcamps taught by 10+ year industry experts with real-time projects and placement support.</p>
        </div>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div className="program-card" id={p.id} key={i} style={{ '--pc': p.color, '--pb': p.bg }}>
              {p.image && (
                <div className="program-image-wrapper">
                  <img src={p.image} alt={p.title} className="program-card-image" />
                </div>
              )}
              <div className="program-card-content">
                <div className="program-top">
                  <div className="program-icon-wrap"><span>{p.icon}</span></div>
                  <span className="program-duration">{p.duration}</span>
                </div>
                <h3 className="program-title">{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
                <div className="program-skills-tags">
                  {p.skills.split(' · ').map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>

                {expanded[i] && (
                  <div className="program-curriculum">
                    <div className="curriculum-title">📋 Curriculum Overview</div>
                    {p.curriculum.map((c, j) => (
                      <div className="curriculum-phase" key={j}>
                        <div className="phase-name">{c.phase}</div>
                        <p className="phase-topics">{c.topics}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="program-actions">
                  <button className="program-toggle" onClick={() => toggle(i)} style={{ color: p.color, borderColor: p.color }}>
                    {expanded[i] ? '▲ Hide Curriculum' : '▼ View Curriculum'}
                  </button>
                  <a href={`/courses/${p.id}`} className="program-cta">
                    More Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
