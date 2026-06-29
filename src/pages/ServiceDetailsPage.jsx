import { useParams, Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import CTA from '../components/CTA';
import interviewPrepVector from '../assets/interview_prep_vector.png';
import '../styles/ServiceDetailsPage.css';

// Custom services configurations (Interview Prep, Sales & Marketing, and Job Assistance)
const customServices = {
  'interview-preparation': {
    title: 'Interview Preparation',
    heading: 'Interview Preparation for job',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "Assessing the candidate's skills, experience, and career goals to identify potential job opportunities and the types of interviews they may encounter.",
      "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers.",
      "Offering advice on how to research the company and the job role to prepare for the interview, including tips on what to expect and how to answer common questions.",
      "Conducting mock interviews to help the candidate practice and improve their interview skills.",
      "Providing feedback and guidance on how to improve the candidate's performance during interviews, including advice on body language, tone of voice, and other factors that can impact their chances of success.",
      "Helping the candidate prepare for potential challenges or obstacles they may encounter during the interview process, such as difficult questions or unexpected scenarios.",
      "Supporting and guiding the candidate throughout the interview process, providing advice and assistance as needed to help them succeed."
    ],
    image: interviewPrepVector
  },
  'sales-marketing': {
    title: 'Sales and Marketing',
    heading: 'Sales and Marketing',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "Assessing the candidate's skills, experience, and career goals to identify job opportunities that are a good fit",
      "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers.",
      "Offering advice on how to research and target companies and job roles that align with the candidate's interests and goals.",
      "Connecting the candidate with potential employers and helping them network to increase their chances of finding job opportunities.",
      "Providing access to job training and education programs to help the candidate acquire the skills and knowledge needed to succeed in their chosen field.",
      "Supporting and guiding the candidate throughout the job search process, providing advice and assistance as needed.",
      "Using sales and marketing strategies and techniques to promote the candidate's skills and experience to potential employers and increase their chances of getting hired.",
      "Continually assessing the candidate's progress and providing feedback and support to help them succeed in their job search."
    ],
    image: interviewPrepVector
  },
  'job-assistance': {
    title: 'Assistance for getting job',
    heading: 'Assistance for getting job',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "Assessing the candidate's skills, experience, and career goals to identify job opportunities that are a good fit.",
      "Providing guidance on how to create a compelling resume and cover letter that will attract the attention of potential employers.",
      "Offering advice on how to prepare for job interviews, including tips on what to expect and how to answer common questions.",
      "Connecting the candidate with potential employers and helping them network to increase their chances of finding job opportunities.",
      "Providing access to job training and education programs to help the candidate acquire the skills and knowledge needed to succeed in their chosen field.",
      "Supporting and guiding the candidate throughout the job search process, providing advice and assistance as needed.",
      "Continually assessing the candidate's progress and providing feedback and support to help them succeed in their job search."
    ],
    image: interviewPrepVector
  },
  'software-development': {
    title: 'Software Development',
    heading: 'Software Development',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "Software development: This involves creating software applications to meet specific business needs or requirements. This may involve designing and building a new application from scratch, or modifying and extending an existing application..",
      "Web development: This involves the development of websites and web-based applications. This may include the design and layout of the site, as well as the development of the underlying functionality.",
      "Mobile app development: This involves the development of apps for smartphones and tablets. This may include the design and development of both native apps (built specifically for a particular platform) and cross-platform apps (built to run on multiple platforms).",
      "Maintenance and support: Software development companies may also provide ongoing maintenance and support for software applications to ensure that they remain up-to-date and functioning properly. This may include bug fixes, security updates, and the addition of new features."
    ],
    image: interviewPrepVector
  },
  'ux-ui-design': {
    title: 'UX/UI Design & Ideation',
    heading: 'UX/UI Design & Ideation',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "User research and analysis: This involves conducting research to understand the needs and goals of users, and using that information to inform the design of the product. This may include usability testing, user interviews, and surveys..",
      "Wireframing and prototyping: This involves creating rough sketches or digital mockups of the product to help visualize and test ideas. This may include creating wireframes, which are low-fidelity representations of the product, or prototypes, which are more interactive and realistic representations.",
      "User interface design: This involves creating the visual design of the product, including the layout, color scheme, typography, and other design elements.",
      "User experience design: This involves designing the overall user experience of the product, including the flow and functionality of the product, and ensuring that it is intuitive and enjoyable for users.",
      "Testing and validation: This involves conducting user testing to ensure that the product meets the needs and goals of users, and making any necessary changes based on feedback.",
      "Documentation and presentation: This may involve creating documentation and presentation materials to communicate the design process and decisions to stakeholders and clients."
    ],
    image: interviewPrepVector
  },
  'web-development': {
    title: 'Web Development',
    heading: 'Web Development',
    heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    details: [
      "Custom website design and development: This involves creating a unique website from scratch, or customizing an existing website to meet specific business needs or requirements.",
      "E-commerce development: This involves building and maintaining online stores and other e-commerce platforms. This may include the development of shopping carts, payment gateways, and other features necessary for online transactions.",
      "Content management systems (CMS) development: This involves developing or customizing CMS platforms to allow businesses to easily create and manage the content on their websites.",
      "Responsive web design: This involves designing websites that are optimized for viewing on a variety of devices, including desktop computers, laptops, tablets, and smartphones.",
      "Search engine optimization (SEO): This involves optimizing websites to improve their visibility and ranking in search engine results pages.",
      "Website maintenance and support: This may include ongoing support and maintenance to ensure that the website remains up-to-date and functioning properly, as well as the addition of new features or functionality."
    ],
    image: interviewPrepVector
  }
};

export default function ServiceDetailsPage() {
  const { id } = useParams();

  // Find current service details or use default
  const service = services.find(s => s.id === id) || services[0];

  // Specific check for Custom Page layout
  const customService = customServices[service.id];

  return (
    <main className="service-details-page">
      {/* ── Page Hero ── */}
      <section 
        className="service-details-hero"
        style={{
          backgroundImage: customService 
            ? `linear-gradient(rgba(15, 28, 63, 0.85), rgba(15, 28, 63, 0.9)), url("${customService.heroBg}")`
            : `linear-gradient(135deg, #0f1c3f 0%, ${service.color}dd 100%)`
        }}
      >
        <div className="container service-details-hero-inner">
          <h1 className="service-details-hero-title">{customService ? customService.title : service.title}</h1>
        </div>
      </section>

      {/* ── Main Details Section ── */}
      <section className="service-details-content-section">
        <div className="container">
          {customService ? (
            /* ────────────────────────────────────────────────────────
               CUSTOM TWO-COLUMN DETAIL LAYOUT (MATCHING SCREENSHOTS)
               ──────────────────────────────────────────────────────── */
            <div className="interview-prep-layout">
              <div className="interview-prep-left">
                <h2 className="interview-prep-heading">{customService.heading}</h2>
                <div className="accent-line-wrapper">
                  <div className="accent-dot" />
                  <div className="accent-line" />
                </div>

                <div className="interview-prep-list">
                  {customService.details.map((detail, idx) => (
                    <div className="interview-prep-card" key={idx}>
                      <div className="interview-prep-check">
                        <svg width="18" height="14" viewBox="0 0 24 18" fill="none" stroke="#ec4899" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="interview-prep-text">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="interview-prep-right">
                <div className="interview-illustration-container">
                  <img src={customService.image} alt={customService.title} className="interview-image" />
                </div>
              </div>
            </div>
          ) : (
            /* ────────────────────────────────────────────────────────
               DYNAMIC GENERIC DETAILS LAYOUT FOR OTHER SERVICES
               ──────────────────────────────────────────────────────── */
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
                        style={{ 
                          color: service.color, 
                          background: service.bg,
                          borderColor: `${service.color}22`
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="consultation-box">
                  <h4>Need this service?</h4>
                  <p>Get in touch with our US industry experts for a customized development or consulting plan.</p>
                  <a href="/#contact" className="btn-primary" style={{ background: service.color }}>
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA / Contact Section ── */}
      <CTA />
    </main>
  );
}
