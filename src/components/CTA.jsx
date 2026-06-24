import { useState } from 'react';
import '../styles/CTA.css';

const programs = [
  'Full Stack Java Developer', 'Python Developer', 'QA Automation Engineer',
  'Data Analyst', 'Data Engineer', 'Data Scientist', 'Not sure yet'
];

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-deco cta-deco-1" />
      <div className="cta-deco cta-deco-2" />
      <div className="container cta-inner">
        {/* Left – Info */}
        <div className="cta-left">
          <span className="cta-eyebrow">📅 Free Career Consultation</span>
          <h2 className="cta-title">
            Ready to Start Your<br />
            <span>IT Career Journey?</span>
          </h2>
          <p className="cta-desc">
            Book a free 30-minute consultation with our career advisors. We'll assess your background, recommend the right program, and show you exactly what your career path looks like.
          </p>

          <div className="cta-info-cards">
            <div className="cta-info-card">
              <span className="cta-info-icon">📍</span>
              <div>
                <div className="cta-info-label">Our Office</div>
                <div className="cta-info-val">2000 Valley View Lane,<br />Irving TX 75062, USA</div>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-info-icon">📞</span>
              <div>
                <div className="cta-info-label">Call Us</div>
                <a href="tel:+18782176214" className="cta-info-link">878 217 6214</a>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-info-icon">✉️</span>
              <div>
                <div className="cta-info-label">Email Us</div>
                <a href="mailto:info@pykube.com" className="cta-info-link">info@pykube.com</a>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-info-icon">🕐</span>
              <div>
                <div className="cta-info-label">Office Hours</div>
                <div className="cta-info-val">Mon – Sat: 9:00 AM – 7:00 PM EST</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div className="cta-right">
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>Thank you, {form.name}!</h3>
                <p>We've received your request. Our team will reach out to you within 24 hours to schedule your free consultation.</p>
                <button className="form-reset-btn" onClick={() => setSubmitted(false)}>Send Another Request</button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h3 className="form-title">Book Free Consultation</h3>
                  <p className="form-subtitle">No commitment required · 100% free</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" placeholder="john@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Program of Interest</label>
                      <select name="program" value={form.program} onChange={handleChange}>
                        <option value="">Select a program</option>
                        {programs.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-full">
                    <label>Message (Optional)</label>
                    <textarea name="message" placeholder="Tell us about your background and career goals..." rows={4} value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    📅 Book My Free Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                  <p className="form-note">✅ We typically respond within 2–4 business hours</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
