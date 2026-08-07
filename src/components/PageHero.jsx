import '../styles/PageHero.css';
import HMSHeroBackground from './HMSHeroBackground';

export default function PageHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <HMSHeroBackground />
        <div className="hero-grid-lines" />
      </div>
      <div className="container page-hero-inner">
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
