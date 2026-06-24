import '../styles/Testimonials.css';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sandeep R.', role: 'Java Full Stack Developer', company: 'US Tech Firm, New Jersey', avatar: 'S', rating: 5,
    text: 'I came from a non-IT background and was nervous about starting over. PyKube gave me structured Java training with real projects. Within 3 months of completing the program, I was placed as a Full Stack Developer. The mock interviews were the game-changer for me.',
    color: '#3b82f6'
  },
  {
    name: 'Priya K.', role: 'QA Automation Engineer', company: 'Healthcare IT, Texas', avatar: 'P', rating: 5,
    text: 'The QA Automation course covered everything from Manual Testing to Selenium and TestNG. The trainers had real experience and walked us through actual test cases used in enterprise projects. I got placed within 6 weeks of completing the course.',
    color: '#10b981'
  },
  {
    name: 'Rohit M.', role: 'Data Analyst', company: 'US Finance Firm, New York', avatar: 'R', rating: 5,
    text: 'PyKube\'s Data Analyst program was incredibly thorough — Python, Pandas, NumPy, Matplotlib, and Power BI all in one course. The hands-on datasets we worked with during training directly translated to what I do in my job today. Highly recommended!',
    color: '#f97316'
  },
];

const achievements = [
  { number: '100+', label: 'Candidates Placed in USA', icon: '🏆' },
  { number: '300+', label: 'Happy Learners', icon: '😊' },
  { number: '50+', label: 'Hiring Partners', icon: '🤝' },
  { number: '95%', label: 'Placement Success Rate', icon: '📈' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-layout">
          {/* Left – Achievements */}
          <div className="achievements-panel">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Our Impact</span>
            <h2 className="achievements-title">Changing Lives.<br /><span>Every Day.</span></h2>
            <p className="achievements-sub">Hundreds of career changers and fresh graduates have transformed their lives through PyKube's training and placement support.</p>
            <div className="achievements-grid">
              {achievements.map((a, i) => (
                <div className="achievement-card" key={i}>
                  <span className="ach-icon">{a.icon}</span>
                  <span className="ach-num">{a.number}</span>
                  <span className="ach-label">{a.label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
              Start Your Journey →
            </a>
          </div>

          {/* Right – Testimonials */}
          <div className="testimonials-panel">
            <div style={{ marginBottom: 28 }}>
              <span className="section-tag">Student Success Stories</span>
              <h2 className="section-title" style={{ fontSize: '1.6rem', textAlign: 'left', marginBottom: 0 }}>Real Stories, Real Results</h2>
            </div>
            <div className="testimonial-list">
              {testimonials.map((t, i) => (
                <div className={`testimonial-card${active === i ? ' tcard-active' : ''}`} key={i} onClick={() => setActive(i)}>
                  <div className="tcard-top">
                    <div className="tcard-avatar" style={{ background: t.color }}>{t.avatar}</div>
                    <div className="tcard-info">
                      <div className="tcard-name">{t.name}</div>
                      <div className="tcard-role">{t.role}</div>
                      <div className="tcard-company">🏢 {t.company}</div>
                    </div>
                    <div className="tcard-stars">{'★'.repeat(t.rating)}</div>
                  </div>
                  <p className="tcard-text">"{t.text}"</p>
                </div>
              ))}
            </div>
            <div className="tcard-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`tdot${active === i ? ' tdot-active' : ''}`} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
