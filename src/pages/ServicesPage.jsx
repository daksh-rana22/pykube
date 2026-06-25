import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import CTA from '../components/CTA';
import '../styles/ServicesPage.css';

const highlights = [
  { icon: '🎯', label: '6 Core Services' },
  { icon: '🤝', label: 'US Industry Experts' },
  { icon: '💼', label: '100% Job Assistance' },
  { icon: '🚀', label: 'End-to-End Support' },
  { icon: '🎨', label: 'Design & Development' },
  { icon: '📈', label: 'Growth & Marketing' },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <main className="services-page">
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <div className="services-hero-orb orb-1" />
          <div className="services-hero-orb orb-2" />
          <div className="hero-grid-lines" />
        </div>
        <div className="container services-hero-inner">
          <span className="services-hero-tag">WHAT WE OFFER</span>
          <h1 className="services-hero-title">
            Professional <span className="services-accent">Services</span>
            <br />Built for Your Success
          </h1>
          <p className="services-hero-subtitle">
            From interview prep to software development — we provide end-to-end services
            to help individuals and businesses grow, hire, and succeed.
          </p>
          <div className="services-hero-actions">
            <a href="/#contact" className="btn-primary">Book Free Consultation</a>
            <a href="#services-grid" className="services-hero-scroll-btn">Explore Services ↓</a>
          </div>
        </div>
      </section>

      {/* ── Highlights Bar ── */}
      <section className="serv-highlights-bar">
        <div className="container serv-highlights-inner">
          {highlights.map((h, i) => (
            <div className="serv-highlight" key={i}>
              <span className="serv-hl-icon">{h.icon}</span>
              <span className="serv-hl-label">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="services-grid-section" id="services-grid">
        <div className="container">
          <div className="services-section-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="section-title">Everything You Need to Grow</h2>
            <p className="section-subtitle">
              Six specialized services delivered by US IT professionals and industry experts.
            </p>
          </div>

          <div className="services-cards-grid">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`service-card${activeService === service.id ? ' service-card--expanded' : ''}`}
                style={{ '--sc': service.color, '--sb': service.bg }}
              >
                {/* Card Header */}
                <div className="service-card-top">
                  <div className="service-card-icon-wrap" style={{ background: service.bg }}>
                    <span className="service-card-icon" style={{ color: service.color }}>{service.icon}</span>
                  </div>
                  <div className="service-card-meta">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-tagline">{service.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="service-card-desc">{service.desc}</p>

                {/* Highlights */}
                <div className="service-highlights">
                  {service.highlights.map((h, i) => (
                    <div className="service-hl-item" key={i}>
                      <span className="service-hl-check" style={{ color: service.color }}>✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="service-tools">
                  <span className="service-tools-label">Tools & Tech:</span>
                  <div className="service-tools-list">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="service-tool-badge"
                        style={{ color: service.color, background: service.bg, borderColor: `${service.color}33` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href="/#contact" className="service-card-cta" style={{ background: service.color }}>
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="services-why-section">
        <div className="container">
          <div className="services-section-header">
            <span className="section-tag">WHY PYKUBE</span>
            <h2 className="section-title">Why Clients Choose Us</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🇺🇸', title: 'US-Based Expertise', desc: 'All our trainers and consultants are active US IT professionals with real industry experience.' },
              { icon: '🎯', title: 'Outcome Focused', desc: "Every service is designed with one goal: your success — whether that's a job offer or a product launch." },
              { icon: '🔄', title: 'End-to-End Support', desc: 'We stay with you from day one until you achieve your goal. No hand-off, no drop-off.' },
              { icon: '💡', title: 'Proven Track Record', desc: 'Hundreds of students placed, dozens of software projects delivered — our results speak for themselves.' },
            ].map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-card-icon">{item.icon}</div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
