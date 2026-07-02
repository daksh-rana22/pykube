import { useState } from 'react';
import '../styles/CTA.css';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }
    setForm(f => ({ ...f, [name]: value }));
  };
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>FULL NAME *</label>
                  <input type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>PHONE NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="5550000000"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    maxLength={10}
                    title="Please enter a 10-digit phone number"
                    required
                  />
                </div>
                <div className="form-group form-full">
                  <label>MESSAGE (OPTIONAL)</label>
                  <textarea name="message" placeholder="Ask about schedules, pricing, job placement support..." rows={4} value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="form-submit-btn">
                  🗓️ Reserve My Free Session
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
