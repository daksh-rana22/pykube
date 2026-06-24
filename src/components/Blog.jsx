import '../styles/Blog.css';

const blogs = [
  {
    date: 'JUN 2024', cat: 'Career Guide', emoji: '💡', color: '#3b82f6',
    title: 'Top IT Skills to Land a Job in the USA in 2024',
    desc: 'Explore the most in-demand IT skills in the US market — from Java Full Stack to Data Engineering — and how to position yourself for top-paying roles.'
  },
  {
    date: 'MAY 2024', cat: 'Interview Prep', emoji: '🎤', color: '#f97316',
    title: 'How to Crack Client Interviews in the US IT Market',
    desc: 'US IT client interviews are different. Learn the behavioral and technical patterns, how to answer project-based questions, and how PyKube prepares you.'
  },
  {
    date: 'APR 2024', cat: 'Placement Tips', emoji: '🚀', color: '#10b981',
    title: 'Why Real-Time Projects Are Non-Negotiable for US Jobs',
    desc: 'US recruiters want hands-on experience. Discover why our Banking App, E-Commerce Platform, and Data Pipeline projects unlock opportunities others can\'t.'
  },
];

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Learning Resources</span>
          <h2 className="section-title">Insights &amp; Career Guidance</h2>
          <p className="section-subtitle">Expert tips, career strategies, and IT industry insights from PyKube trainers and alumni.</p>
        </div>
        <div className="blog-grid">
          {blogs.map((b, i) => (
            <article className="blog-card" key={i} style={{ '--bc': b.color }}>
              <div className="blog-hero" style={{ background: `linear-gradient(135deg, ${b.color}22, ${b.color}44)` }}>
                <span className="blog-emoji">{b.emoji}</span>
                <span className="blog-date">{b.date}</span>
              </div>
              <div className="blog-body">
                <span className="blog-cat" style={{ color: b.color, background: `${b.color}15` }}>{b.cat}</span>
                <h3 className="blog-title">{b.title}</h3>
                <p className="blog-desc">{b.desc}</p>
                <a href="#contact" className="blog-link" style={{ color: b.color }}>
                  Read More <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
