import '../styles/PageHero.css';

export default function PageHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="page-hero-grid" />
      </div>
      <div className="container page-hero-inner">
        <div className="page-hero-breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <span>{breadcrumb}</span>
        </div>
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
