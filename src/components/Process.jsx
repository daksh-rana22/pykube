import '../styles/Process.css';

const steps = [
  { n: '01', title: 'Career Consultation', desc: 'We understand your background, goals and career path.', icon: '💬', color: '#3b82f6' },
  { n: '02', title: 'Skill-Based Training', desc: 'Learn the right skills with live training and hands-on practice.', icon: '📚', color: '#f97316' },
  { n: '03', title: 'Real-Time Projects', desc: 'Work on industry-based projects to gain practical experience.', icon: '💻', color: '#8b5cf6' },
  { n: '04', title: 'Resume & LinkedIn', desc: 'We build a professional resume that gets you noticed.', icon: '📄', color: '#10b981' },
  { n: '05', title: 'Mock Interviews', desc: 'Practice technical, HR and client interviews with experts.', icon: '🎤', color: '#ef4444' },
  { n: '06', title: 'Placement Support', desc: 'Get interview opportunities and step into your dream job.', icon: '🚀', color: '#f59e0b' },
];

export default function Process() {
  return (
    <section className="process" id="process">
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
            <div className="process-step" key={i} style={{ '--sc': s.color }}>
              <div className="step-header">
                <div className="step-icon-ring">
                  <span className="step-icon">{s.icon}</span>
                </div>
                <div className="step-num">{s.n}</div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
