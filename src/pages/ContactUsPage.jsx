import React, { useState, useEffect } from 'react';
import '../styles/ContactUsPage.css';

export default function ContactUsPage() {
  const [isDark, setIsDark] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
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
    if (form.name && form.email && form.phone && form.program) {
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
          <h1 className="contact-hero-title">Let's Build Something Great</h1>
          <p className="contact-hero-subtitle">
            Have questions about our tech bootcamps, custom corporate training, or placement assistance?
            Our advisory team is ready to guide your journey.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-content-section">
        <div className="container contact-grid">
          
          {/* Left Column: Info & Map */}
          <div className="contact-info-column">
            <span className="accent-sub">CONNECT WITH US</span>
            <h2 className="contact-sec-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Talk to Our Experts</h2>
            <p className="contact-sec-subtext" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
              Whether you are an aspiring developer looking to break into tech or a corporate partner seeking elite talent, we are here to support you.
            </p>

            <div className="contact-cards-container">
              {/* Card 1: Office */}
              <div className="contact-detail-card" style={{ background: isDark ? '#0c101d' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Our Corporate Office</div>
                  <div className="contact-card-value" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    2000 Valley View Lane,<br />Irving TX 75062, USA
                  </div>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="contact-detail-card" style={{ background: isDark ? '#0c101d' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Call Admissions</div>
                  <a href="tel:+18782176214" className="contact-card-link" style={{ color: '#2563eb' }}>
                    +1 (878) 217-6214
                  </a>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="contact-detail-card" style={{ background: isDark ? '#0c101d' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Send Inquiry</div>
                  <a href="mailto:info@pykube.com" className="contact-card-link" style={{ color: '#2563eb' }}>
                    info@pykube.com
                  </a>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="contact-detail-card" style={{ background: isDark ? '#0c101d' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0' }}>
                <span className="contact-icon-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Advising Hours</div>
                  <div className="contact-card-value" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    Monday - Saturday: 9:00 AM - 7:00 PM EST
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
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="contact-form-column">
            <div className="contact-form-card" style={{ background: isDark ? 'rgba(12, 16, 29, 0.7)' : '#ffffff', borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.06)' }}>
              {!submitted ? (
                <>
                  <div className="form-card-badge">SECURE INQUIRY</div>
                  <h3 className="contact-form-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Book Free Consultation</h3>
                  <p className="contact-form-desc" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
                    Connect with an academic advisor. Build a customized bootcamp roadmap tailored to your background.
                  </p>

                  <form className="contact-form-element" onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                      <label htmlFor="name" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Full Name *</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          style={{
                            background: isDark ? '#070a13' : '#f8fafc',
                            color: isDark ? '#ffffff' : '#0f172a',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                          }}
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="email" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Email Address *</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </span>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          style={{
                            background: isDark ? '#070a13' : '#f8fafc',
                            color: isDark ? '#ffffff' : '#0f172a',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                          }}
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="phone" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Phone Number *</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </span>
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
                            background: isDark ? '#070a13' : '#f8fafc',
                            color: isDark ? '#ffffff' : '#0f172a',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                          }}
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="program" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Program of Interest *</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          </svg>
                        </span>
                        <select
                          id="program"
                          name="program"
                          required
                          value={form.program}
                          onChange={handleChange}
                          style={{
                            background: isDark ? '#070a13' : '#f8fafc',
                            color: isDark ? '#ffffff' : '#0f172a',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                          }}
                        >
                          <option value="" disabled>Select a course</option>
                          <option value="Java Full Stack Developer">Java Full Stack Developer Bootcamp</option>
                          <option value="Python Data Science & AI">Python Data Science & AI Bootcamp</option>
                          <option value="QA Software Testing Automation">QA Test Automation Bootcamp</option>
                          <option value="DevOps & Cloud Engineering">DevOps & Cloud Infrastructure Bootcamp</option>
                          <option value="Corporate Training / Other">Corporate Tech Training</option>
                          <option value="General Career Guidance">General Career Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="message" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Tell Us About Your Goals (Optional)</label>
                      <div className="input-with-icon align-top">
                        <span className="input-icon textarea-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </span>
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your professional background, timing, or career goals..."
                          style={{
                            background: isDark ? '#070a13' : '#f8fafc',
                            color: isDark ? '#ffffff' : '#0f172a',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#cbd5e1'
                          }}
                        />
                      </div>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      Book My Free Consultation 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </form>
                  
                  <div className="privacy-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Your information is secure and 100% confidential.</span>
                  </div>
                </>
              ) : (
                <div className="contact-success-wrapper">
                  <div className="success-icon-ring">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Consultation Scheduled!</h3>
                  <p style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
                    Thank you <strong>{form.name}</strong>. A PyKube Career Advisor will reach out to you within 24 hours at <strong>{form.email}</strong> or <strong>{form.phone}</strong> regarding the <strong>{form.program}</strong> track.
                  </p>
                  <button onClick={() => { setForm({ name: '', email: '', phone: '', program: '', message: '' }); setSubmitted(false); }} className="reset-form-btn">
                    Schedule Another Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* "What Happens Next?" Process Timeline */}
      <section className="contact-timeline-section" style={{ background: isDark ? '#0c101d' : '#ffffff' }}>
        <div className="container">
          <div className="timeline-header">
            <span className="timeline-tag">PROCESS</span>
            <h2 className="timeline-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>What Happens Next?</h2>
            <p className="timeline-subtitle" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
              Here is how we help you build a personalized strategy for your career transitions.
            </p>
          </div>

          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="timeline-number">1</div>
              <h4 className="timeline-step-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Request Received</h4>
              <p className="timeline-step-desc" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
                You'll receive an email confirmation containing curriculum catalogs and boot camp pricing details.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">2</div>
              <h4 className="timeline-step-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Advisor Match</h4>
              <p className="timeline-step-desc" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
                A Senior Career Advisor specializing in your chosen technology track (Java, QA, DevOps, Data Science) is assigned to you.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">3</div>
              <h4 className="timeline-step-title" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Advisory Call</h4>
              <p className="timeline-step-desc" style={{ color: isDark ? '#94a3b8' : '#475569' }}>
                We host a 15-minute 1-on-1 strategy call to evaluate your background, review visa situations, and customize your study roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
