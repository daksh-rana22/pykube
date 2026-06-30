import React, { useState, useEffect } from 'react';
import '../styles/ContactUsPage.css';

export default function ContactUsPage() {
  const [isDark, setIsDark] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains('dark-theme');
      setIsDark(dark);
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <main className="contact-page" style={{ background: isDark ? '#0b0f17' : '#ffffff', color: isDark ? '#f8fafc' : '#0f172a' }}>
      {/* Page Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-hero-orb orb-1" />
          <div className="contact-hero-orb orb-2" />
          <div className="hero-grid-lines" />
        </div>
        <div className="container contact-hero-inner">
          <span className="contact-hero-tag">GET IN TOUCH</span>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Have questions about our bootcamps, corporate training, or placement support? 
            Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-content-section" style={{ background: isDark ? '#161e2e' : '#f8fafc' }}>
        <div className="container contact-grid">
          {/* Left Column: Info & Map */}
          <div className="contact-info-column">
            <span className="accent-sub">CONNECT WITH US</span>
            <h2 className="contact-sec-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>How to Reach Us</h2>
            <p className="contact-sec-subtext" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
              Feel free to give us a call, send an email, or visit our corporate office.
            </p>

            <div className="contact-cards-container">
              <div className="contact-detail-card" style={{ background: isDark ? '#0b0f17' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">📍</span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Our Office</div>
                  <div className="contact-card-value" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    2000 Valley View Lane,<br />Irving TX 75062, USA
                  </div>
                </div>
              </div>

              <div className="contact-detail-card" style={{ background: isDark ? '#0b0f17' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">📞</span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Call Us</div>
                  <a href="tel:+18782176214" className="contact-card-link" style={{ color: '#2563eb' }}>
                    878 217 6214
                  </a>
                </div>
              </div>

              <div className="contact-detail-card" style={{ background: isDark ? '#0b0f17' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">✉️</span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Email Us</div>
                  <a href="mailto:info@pykube.com" className="contact-card-link" style={{ color: '#2563eb' }}>
                    info@pykube.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-card" style={{ background: isDark ? '#0b0f17' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">🕐</span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Office Hours</div>
                  <div className="contact-card-value" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    Mon - Sat: 9:00 AM - 7:00 PM EST
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="contact-map-wrapper" style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
              <iframe
                title="PyKube Technologies Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3121544321287!2d-96.94002622353348!3d32.8899878794828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e815b3e648cb9%3A0xe541c888e7a69b1b!2s2000%20Valley%20View%20Ln%2C%20Irving%2C%20TX%2075062%2C%20USA!5e0!3m2!1sen!2sin!4v1782728200000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="contact-form-column">
            <div className="contact-form-card" style={{ background: isDark ? '#0b0f17' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
              {!submitted ? (
                <>
                  <h3 className="contact-form-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Book Free Consultation</h3>
                  <p className="contact-form-desc" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
                    Leave a message below and our career advisors will connect with you within 24 hours.
                  </p>

                  <form className="contact-form-element" onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                      <label htmlFor="name" style={{ color: isDark ? '#94a3b8' : '#475569' }}>Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{
                          background: isDark ? '#161e2e' : '#f8fafc',
                          color: isDark ? '#ffffff' : '#0f172a',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                        }}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="email" style={{ color: isDark ? '#94a3b8' : '#475569' }}>Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        style={{
                          background: isDark ? '#161e2e' : '#f8fafc',
                          color: isDark ? '#ffffff' : '#0f172a',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                        }}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="phone" style={{ color: isDark ? '#94a3b8' : '#475569' }}>Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        maxLength={10}
                        title="Please enter a 10-digit phone number"
                        placeholder="5550000000"
                        style={{
                          background: isDark ? '#161e2e' : '#f8fafc',
                          color: isDark ? '#ffffff' : '#0f172a',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                        }}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="message" style={{ color: isDark ? '#94a3b8' : '#475569' }}>Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your background or goals..."
                        style={{
                          background: isDark ? '#161e2e' : '#f8fafc',
                          color: isDark ? '#ffffff' : '#0f172a',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                        }}
                      />
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      Book My Free Consultation ➔
                    </button>
                  </form>
                </>
              ) : (
                <div className="contact-success-wrapper">
                  <div className="success-icon-ring">✓</div>
                  <h3 style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Booking Request Received!</h3>
                  <p style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
                    Thank you <strong>{form.name}</strong>. A career advisor will contact you shortly at <strong>{form.email}</strong> or <strong>{form.phone}</strong> to confirm your slot.
                  </p>
                  <button onClick={() => { setForm({ name: '', email: '', phone: '', message: '' }); setSubmitted(false); }} className="reset-form-btn">
                    Book Another Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
