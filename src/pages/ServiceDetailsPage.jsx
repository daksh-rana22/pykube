import { useParams } from 'react-router-dom';
import { services } from '../data/servicesData';
import '../styles/ServiceDetailsPage.css';

const customServices = {
  'interview-preparation': {
    title: 'Interview Preparation',
    heading: 'Interview Preparation for Job',
    badge: '🤝 Career Coaching',
    tagline: 'Land your dream role with expert coaching',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '95%', label: 'Interview Success Rate' },
      { value: '500+', label: 'Candidates Placed' },
      { value: '48h', label: 'Avg. Offer Turnaround' },
    ],
    details: [
      { icon: '🎯', title: 'Skills & Gap Assessment', text: "Assessing the candidate's skills, experience, and career goals to identify potential job opportunities and the types of interviews they may encounter." },
      { icon: '📄', title: 'Resume & Cover Letter Guidance', text: "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers." },
      { icon: '🔍', title: 'Company Research Strategy', text: "Offering advice on how to research the company and the job role to prepare for the interview, including tips on what to expect and how to answer common questions." },
      { icon: '🎤', title: 'Mock Interview Sessions', text: "Conducting mock interviews to help the candidate practice and improve their interview skills in a realistic, pressure-free environment." },
      { icon: '💬', title: 'Performance Feedback', text: "Providing feedback and guidance on how to improve the candidate's performance during interviews, including advice on body language, tone of voice, and other factors that can impact their chances of success." },
      { icon: '⚡', title: 'Challenge Preparedness', text: "Helping the candidate prepare for potential challenges or obstacles they may encounter during the interview process, such as difficult questions or unexpected scenarios." },
      { icon: '🤝', title: 'End-to-End Support', text: "Supporting and guiding the candidate throughout the interview process, providing advice and assistance as needed to help them succeed." },
    ],
  },
  'sales-marketing': {
    title: 'Sales & Marketing',
    heading: 'Sales & Marketing Growth',
    badge: '📈 Revenue Strategy',
    tagline: 'Drive leads, conversions & sustainable revenue',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '3×', label: 'Avg. Lead Growth' },
      { value: '200+', label: 'Campaigns Delivered' },
      { value: '40%', label: 'Conversion Boost' },
    ],
    details: [
      { icon: '🎯', title: 'Skills & Opportunity Mapping', text: "Assessing the candidate's skills, experience, and career goals to identify job opportunities that are a good fit." },
      { icon: '📄', title: 'Resume & Cover Letter Coaching', text: "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers." },
      { icon: '🔍', title: 'Targeted Job Research', text: "Offering advice on how to research and target companies and job roles that align with the candidate's interests and goals." },
      { icon: '🌐', title: 'Employer Networking', text: "Connecting the candidate with potential employers and helping them network to increase their chances of finding job opportunities." },
      { icon: '📚', title: 'Job Training Programs', text: "Providing access to job training and education programs to help the candidate acquire the skills and knowledge needed to succeed in their chosen field." },
      { icon: '🤝', title: 'Ongoing Support', text: "Supporting and guiding the candidate throughout the job search process, providing advice and assistance as needed." },
      { icon: '📣', title: 'Sales & Marketing Outreach', text: "Using sales and marketing strategies and techniques to promote the candidate's skills and experience to potential employers." },
      { icon: '📊', title: 'Progress Tracking', text: "Continually assessing the candidate's progress and providing feedback and support to help them succeed in their job search." },
    ],
  },
  'job-assistance': {
    title: 'Job Assistance',
    heading: 'Comprehensive Job Assistance',
    badge: '💼 Placement Support',
    tagline: '100% dedicated to getting you hired',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '100%', label: 'Job Assistance Guarantee' },
      { value: '300+', label: 'Hiring Partners' },
      { value: '30d', label: 'Avg. Time to Hire' },
    ],
    details: [
      { icon: '🎯', title: 'Career Goals Assessment', text: "Assessing the candidate's skills, experience, and career goals to identify job opportunities that are a good fit." },
      { icon: '📄', title: 'Resume & Cover Letter', text: "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers." },
      { icon: '🎤', title: 'Interview Prep', text: "Offering advice on how to prepare for job interviews, including tips on what to expect and how to answer common questions." },
      { icon: '🌐', title: 'Employer Connections', text: "Connecting the candidate with potential employers and helping them network to increase their chances of finding job opportunities." },
      { icon: '📚', title: 'Training Programs', text: "Providing access to job training and education programs to help the candidate acquire the skills and knowledge needed to succeed in their chosen field." },
      { icon: '🤝', title: 'Dedicated Support', text: "Supporting and guiding the candidate throughout the job search process, providing advice and assistance as needed." },
      { icon: '📊', title: 'Progress Tracking', text: "Continually assessing the candidate's progress and providing feedback and support to help them succeed in their job search." },
    ],
  },
  'software-development': {
    title: 'Software Development',
    heading: 'Custom Software Development',
    badge: '💻 Engineering Solutions',
    tagline: 'Build, scale and deliver software that drives business',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '150+', label: 'Projects Delivered' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '12+', label: 'Tech Stacks' },
    ],
    details: [
      { icon: '🏗️', title: 'Custom Application Development', text: "Creating software applications to meet specific business needs, designing and building new applications from scratch or extending existing ones." },
      { icon: '🌐', title: 'Web Development', text: "Development of websites and web-based applications including design, layout, and underlying functionality to drive your digital presence." },
      { icon: '📱', title: 'Mobile App Development', text: "Development of apps for smartphones and tablets, including native apps built for specific platforms and cross-platform apps for broader reach." },
      { icon: '🔧', title: 'Maintenance & Support', text: "Ongoing maintenance and support for software applications including bug fixes, security updates, and the addition of new features to keep you current." },
    ],
  },
  'ux-ui-design': {
    title: 'UX/UI Design',
    heading: 'UX/UI Design & Ideation',
    badge: '🎨 Design Strategy',
    tagline: 'Human-centered design that converts and delights',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '80+', label: 'Products Designed' },
      { value: '4.9★', label: 'Client Satisfaction' },
      { value: '60%', label: 'Avg. Conversion Lift' },
    ],
    details: [
      { icon: '🔬', title: 'User Research & Analysis', text: "Conducting research to understand the needs and goals of users, including usability testing, user interviews, and surveys to inform design decisions." },
      { icon: '✏️', title: 'Wireframing & Prototyping', text: "Creating rough sketches or digital mockups of the product to help visualize and test ideas before full implementation." },
      { icon: '🎨', title: 'User Interface Design', text: "Creating the visual design of the product, including the layout, color scheme, typography, and all other design elements." },
      { icon: '🧭', title: 'User Experience Design', text: "Designing the overall user experience including the flow and functionality of the product, ensuring it is intuitive and enjoyable for users." },
      { icon: '✅', title: 'Testing & Validation', text: "Conducting user testing to ensure that the product meets the needs and goals of users, and making any necessary changes based on feedback." },
      { icon: '📋', title: 'Documentation & Presentation', text: "Creating documentation and presentation materials to communicate the design process and decisions to stakeholders and clients." },
    ],
  },
  'web-development': {
    title: 'Web Development',
    heading: 'Modern Web Development',
    badge: '🌐 Web Solutions',
    tagline: 'Responsive, high-performance websites built to grow',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=90',
    ctaImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85',
    stats: [
      { value: '200+', label: 'Websites Launched' },
      { value: '100%', label: 'Mobile Responsive' },
      { value: 'A+', label: 'Performance Score' },
    ],
    details: [
      { icon: '🏗️', title: 'Custom Website Design', text: "Creating a unique website from scratch, or customizing an existing website to meet specific business needs or requirements." },
      { icon: '🛒', title: 'E-commerce Development', text: "Building and maintaining online stores including shopping carts, payment gateways, and other features necessary for online transactions." },
      { icon: '📝', title: 'CMS Development', text: "Developing or customizing CMS platforms to allow businesses to easily create and manage the content on their websites." },
      { icon: '📱', title: 'Responsive Web Design', text: "Designing websites that are optimized for viewing on a variety of devices, including desktop computers, laptops, tablets, and smartphones." },
      { icon: '🔍', title: 'SEO Optimization', text: "Optimizing websites to improve their visibility and ranking in search engine results pages, driving more organic traffic to your business." },
      { icon: '🔧', title: 'Website Maintenance', text: "Ongoing support and maintenance to ensure that the website remains up-to-date and functioning properly, as well as the addition of new features or functionality." },
    ],
  },
};

export default function ServiceDetailsPage() {
  const { id } = useParams();

  const service = services.find(s => s.id === id) || services[0];
  const customService = customServices[service.id];

  return (
    <main className="service-details-page">
      {/* ── Page Hero ── */}
      <section className="service-details-hero">
        {/* Background orbs matching site-wide hero style */}
        <div className="sdp-hero-bg">
          <div className="sdp-orb sdp-orb-a" />
          <div className="sdp-orb sdp-orb-b" />
          <div className="hero-grid-lines" />
        </div>
        <div className="container sdp-hero-inner">
          {customService && (
            <span className="service-hero-badge">{customService.badge}</span>
          )}
          <h1 className="sdp-hero-title">
            {customService ? customService.title : service.title}
          </h1>
          {customService && (
            <p className="sdp-hero-sub">{customService.tagline}</p>
          )}
        </div>
      </section>

      {/* ── Main Details Section ── */}
      <section className="service-details-content-section">
        <div className="container">
          {customService ? (
            <div className="sdp-layout">
              {/* LEFT: content */}
              <div className="sdp-left">
                <h2 className="sdp-heading">{customService.heading}</h2>
                <div className="sdp-accent-line">
                  <span className="sdp-accent-dot" />
                  <span className="sdp-accent-bar" />
                </div>

                <div className="sdp-list">
                  {customService.details.map((detail, idx) => (
                    <div className="sdp-card" key={idx}>
                      <div className="sdp-card-icon">{detail.icon}</div>
                      <div className="sdp-card-body">
                        <h4 className="sdp-card-title">{detail.title}</h4>
                        <p className="sdp-card-text">{detail.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: image panel */}
              <div className="sdp-right">
                <div className="sdp-image-panel">
                  <img
                    src={customService.image}
                    alt={customService.title}
                    className="sdp-image"
                  />
                  <div className="sdp-image-overlay" />
                  <div className="sdp-stats-strip">
                    {customService.stats.map((s, i) => (
                      <div className="sdp-stat" key={i}>
                        <span className="sdp-stat-value">{s.value}</span>
                        <span className="sdp-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rich image CTA banner */}
                <div
                  className="sdp-cta-banner"
                  style={{ backgroundImage: `url(${customService.ctaImage})` }}
                >
                  <div className="sdp-cta-banner-overlay" />
                  <div className="sdp-cta-banner-content">
                    <span className="sdp-cta-banner-tag">Free Consultation</span>
                    <h4 className="sdp-cta-banner-title">Ready to Get Started?</h4>
                    <p className="sdp-cta-banner-sub">Talk to our experts and get a personalized strategy tailored to your goals.</p>
                    <div className="sdp-cta-contacts">
                      <a href="tel:+18782176214" className="sdp-cta-contact-item">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        +1 (878) 217-6214
                      </a>
                      <a href="mailto:info@pykube.com" className="sdp-cta-contact-item">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                        info@pykube.com
                      </a>
                    </div>
                    <a href="/contact" className="sdp-cta-banner-btn">
                      Book Free Consultation →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Generic layout */
            <div className="generic-service-layout">
              <div className="generic-service-left">
                <div className="generic-service-header">
                  <span className="generic-service-icon" style={{ background: service.bg }}>
                    {service.icon}
                  </span>
                  <div className="generic-service-meta">
                    <h2>{service.title}</h2>
                    <p className="tagline" style={{ color: service.color }}>{service.tagline}</p>
                  </div>
                </div>
                <p className="generic-service-desc">{service.desc}</p>
                <div className="generic-service-section">
                  <h3>Key Deliverables</h3>
                  <div className="generic-highlights-list">
                    {service.highlights.map((highlight, idx) => (
                      <div className="generic-highlight-card" key={idx}>
                        <span className="check-icon" style={{ color: service.color }}>✓</span>
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="generic-service-right">
                <div className="service-tech-card" style={{ borderColor: `${service.color}33` }}>
                  <h3 style={{ background: `${service.color}15`, color: service.color }}>Tools & Technologies</h3>
                  <div className="tech-badges-grid">
                    {service.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                        style={{ color: service.color, background: service.bg, borderColor: `${service.color}22` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="consultation-box">
                  <h4>Need this service?</h4>
                  <p>Get in touch with our US industry experts for a customized development or consulting plan.</p>
                  <a href="/contact" className="btn-primary" style={{ background: service.color }}>
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
