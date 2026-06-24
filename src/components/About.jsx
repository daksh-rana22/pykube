import '../styles/About.css';

const whyUs = [
  { icon: '🧑‍🏫', title: 'Expert Trainers', desc: 'Learn from professionals with 10+ years of active US IT industry experience — not just academics.' },
  { icon: '📁', title: 'Real-Time Projects', desc: 'Every program includes a full production project: Banking App, E-Commerce Platform, or Data Pipeline.' },
  { icon: '🏢', title: '50+ Hiring Partners', desc: 'Our exclusive network of US-based recruiters and IT staffing firms gives you a direct path to job offers.' },
  { icon: '📞', title: 'Lifetime Support', desc: 'We don\'t stop at placement. Alumni get resume refreshes, interview prep, and job-change support forever.' },
];

const milestones = [
  { value: '2018', label: 'Founded in USA' },
  { value: '300+', label: 'Candidates Trained' },
  { value: '100+', label: 'Successfully Placed' },
  { value: '6', label: 'Job-Ready Programs' },
  { value: '50+', label: 'Hiring Partners' },
  { value: '10+', label: 'Expert Trainers' },
];

export default function About() {
  return (
    <section className="about-section" id="about-us">
      <div className="container">
        {/* Top: Mission */}
        <div className="about-mission">
          <div className="about-mission-text">
            <span className="section-tag">About PyKube</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Transforming Careers.<br />
              <span className="about-highlight">One Developer at a Time.</span>
            </h2>
            <p className="about-desc">
              PyKube Technologies is a US-based IT training and placement company founded with a single mission: to make quality tech education accessible and career outcomes guaranteed. We bridge the gap between classroom learning and real-world employment through live training, hands-on projects, and dedicated placement support.
            </p>
            <p className="about-desc">
              Based in Irving, Texas, our trainers are active industry professionals — not just instructors — who bring real project experience, hiring insights, and interview expertise directly to your learning journey.
            </p>
            <div className="about-mission-ctas">
              <a href="#contact" className="btn-primary">Book a Free Consultation</a>
              <a href="#programs" className="btn-secondary about-btn-sec">Explore Programs</a>
            </div>
          </div>
          <div className="about-milestones">
            {milestones.map((m, i) => (
              <div className="milestone-card" key={i}>
                <div className="milestone-value">{m.value}</div>
                <div className="milestone-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-why">
          <div className="about-why-header">
            <span className="section-tag">Why PyKube?</span>
            <h2 className="section-title">What sets us apart</h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{w.icon}</div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
