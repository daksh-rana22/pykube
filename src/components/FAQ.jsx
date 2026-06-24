import { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
  {
    q: 'Do I need prior IT experience to join PyKube?',
    a: 'No prior experience is required for most programs. Our courses are designed to take you from zero to job-ready. We accept fresh graduates, career-changers from non-IT backgrounds, and experienced professionals looking to upgrade their skills.'
  },
  {
    q: 'Are classes live or pre-recorded?',
    a: 'All our classes are LIVE, instructor-led sessions conducted online via Zoom or similar platforms. This allows real-time Q&A, hands-on coding, and personalized attention from our trainers. Sessions are also recorded for your review anytime.'
  },
  {
    q: 'How long does it take to get placed after completing training?',
    a: 'Most students begin receiving interview calls within 2–4 weeks of completing training. The placement timeline depends on factors like program completion, resume quality, and interview readiness. We actively support you until you get placed.'
  },
  {
    q: 'What is the fee structure? Are there EMI options?',
    a: 'Our program fees are competitive and transparent. We offer flexible payment plans including EMI options to make the investment manageable. Contact us directly for the latest fee structure and any ongoing promotional offers.'
  },
  {
    q: 'Do you guarantee placement?',
    a: 'We provide 100% placement support — meaning we actively refer you to our hiring partners, prepare your resume, and coach you for interviews. While we cannot legally guarantee a job offer (no one can), our track record shows 100+ successful placements with a 95%+ satisfaction rate.'
  },
  {
    q: 'What kind of projects will I work on?',
    a: 'Projects are real-world, production-grade applications: a complete Banking Application with microservices (Java), an E-Commerce Platform with authentication and orders (Python/Django), and Data Engineering pipelines with PySpark and REST APIs. These go directly on your resume and GitHub.'
  },
  {
    q: 'Is the training specific to working in the USA?',
    a: 'Yes. Our curriculum, interview preparation, and placement support are all tailored for the US IT job market. We prepare you for US-based technical interviews (client interviews, whiteboard rounds, behavioral rounds) and connect you with US-based recruiters and staffing firms.'
  },
  {
    q: 'What support do I get after placement?',
    a: 'PyKube alumni receive lifetime career support: resume updates when switching jobs, mock interview refreshers, referrals to new opportunities, and access to our growing alumni community. We are partners in your long-term career, not just a one-time training center.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about PyKube's programs, placement, and support.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' faq-open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-footer">
          <p>Still have questions? <a href="#contact" className="faq-contact-link">Talk to our team →</a></p>
        </div>
      </div>
    </section>
  );
}
