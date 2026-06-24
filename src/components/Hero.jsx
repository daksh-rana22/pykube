import '../styles/Hero.css';
import heroImg from '../assets/hero_person.png';

const techChips = [
  { icon: '☕', name: 'Java' }, { icon: '🐍', name: 'Python' },
  { icon: '⚛', name: 'React' }, { icon: '☁', name: 'AWS' },
  { icon: '🗄', name: 'SQL' }, { icon: '🤖', name: 'Selenium' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-lines" />
      </div>
      <div className="container hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            #1 IT Training &amp; Placement in USA
          </div>
          <h1 className="hero-title">
            Launch Your <span className="word-blue">IT Career</span><br />
            in the <span className="word-blue">USA</span> with<br />
            Expert Training &amp; <span className="word-orange">Placement</span><br />
            <span className="word-orange">Support</span>
          </h1>
          <p className="hero-desc">
            PyKube Technologies transforms fresh graduates and career-changers into job-ready IT professionals through live training, real-time projects, resume building, mock interviews, and guaranteed placement support across the USA.
          </p>
          <div className="hero-features">
            {['✅ 300+ Candidates Trained', '💻 Live Online Classes', '🎤 Mock Client Interviews', '🚀 100% Placement Support'].map(f => (
              <span key={f} className="hero-pill">{f}</span>
            ))}
          </div>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary hero-cta-primary">
              Book Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#programs" className="btn-secondary">View Programs</a>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-avatars">
              {['S','P','R','A'].map(l => <div key={l} className="hero-trust-avatar">{l}</div>)}
            </div>
            <span>Trusted by <strong style={{ color: '#fff' }}>300+</strong> learners across the USA</span>
          </div>
        </div>
        {/* RIGHT */}
        <div className="hero-image-area">
          <div className="float-card float-card-1">
            <div className="float-icon float-icon-blue">🏆</div>
            <div>
              <div className="float-number">100+</div>
              <div className="float-label">Candidates Placed in USA</div>
            </div>
          </div>
          <div className="float-card float-card-2">
            <div className="float-icon float-icon-green">🎓</div>
            <div className="float-label-only">Live Instructor<br />Led Training</div>
          </div>
          <div className="float-card float-card-3">
            <div className="float-icon float-icon-orange">📄</div>
            <div className="float-label-only">Resume &amp; Interview<br />Support</div>
          </div>
          <div className="hero-img-card">
            <img src={heroImg} alt="IT Professional" className="hero-img" />
          </div>
          <div className="tech-bar">
            <span className="tech-bar-label">Technologies</span>
            <div className="tech-chips">
              {techChips.map(t => (
                <span key={t.name} className="tech-chip">
                  <span>{t.icon}</span>{t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
