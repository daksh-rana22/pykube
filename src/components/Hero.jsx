import '../styles/Hero.css';
import heroVideo from '../assets/in_end_write_start_your_journe.mp4';

const techChips = [
  { icon: '/images/illustrations/java_icon.png', name: 'Java' }, { icon: '/images/illustrations/python_icon.png', name: 'Python' },
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
            {[
              { text: '300+ Candidates Trained', icon: '✅' },
              { text: 'Live Online Classes', icon: '/images/illustrations/laptop_icon.png' },
              { text: 'Mock Client Interviews', icon: '🎤' },
              { text: '100% Placement Support', icon: '🚀' }
            ].map((f, idx) => (
              <span key={idx} className="hero-pill">
                <span className="hero-pill-icon">
                  {f.icon.startsWith('/') ? (
                    <img src={f.icon} alt={f.text} className="hero-feature-icon-img" />
                  ) : (
                    f.icon
                  )}
                </span>
                {f.text}
              </span>
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
          <div className="hero-img-card">
            <video
              src={heroVideo}
              className="hero-img"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="tech-bar">
            <span className="tech-bar-label">Technologies</span>
            <div className="tech-chips">
              {techChips.map(t => (
                <span key={t.name} className="tech-chip">
                  {t.icon.startsWith('/') ? (
                    <img src={t.icon} alt={t.name} className="tech-chip-icon" />
                  ) : (
                    <span>{t.icon}</span>
                  )}
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
