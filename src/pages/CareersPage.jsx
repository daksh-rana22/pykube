import React, { useState } from "react";
import {
  FiUsers, FiTrendingUp, FiAward, FiHeart, FiBookOpen, FiMonitor,
  FiGlobe, FiClock, FiLayers, FiSmile, FiPlay, FiChevronRight,
  FiSearch, FiX, FiCheck, FiFlag, FiStar, FiShield, FiBriefcase, FiUpload, FiMail
} from "react-icons/fi";
import "../styles/CareersPage.css";



const values = [
  {
    title: "Grow Together",
    desc: "Every team member grows in a collaborative environment that fosters trust and long-term impact.",
    icon: FiUsers,
    color: "#3b82f6"
  },
  {
    title: "People First",
    desc: "Everyone feels seen, supported, and valued—because people drive everything.",
    icon: FiHeart,
    color: "#ef4444"
  },
  {
    title: "Global Impact",
    desc: "We build platforms and create opportunities that reach learners worldwide.",
    icon: FiGlobe,
    color: "#10b981"
  },
  {
    title: "Own Your Work",
    desc: "We take ownership, act with integrity, and deliver results we're proud of.",
    icon: FiFlag,
    color: "#f97316"
  },
  {
    title: "Always Improve",
    desc: "We embrace feedback, adapt fast, and never stop getting better.",
    icon: FiStar,
    color: "#8b5cf6"
  },
];

const perks = [
  {
    title: "Remote-First Culture",
    desc: "Work from anywhere in the world. We value your time and results over where you are.",
    icon: FiMonitor,
    color: "#3b82f6"
  },
  {
    title: "Learning Budget",
    desc: "Explore courses, certifications, and books. We invest in your growth.",
    icon: FiBookOpen,
    color: "#8b5cf6"
  },
  {
    title: "Health & Wellness",
    desc: "We offer medical and mental wellness support for you and your family.",
    icon: FiHeart,
    color: "#ef4444"
  },
  {
    title: "Flexible Hours",
    desc: "We work when we're most effective. You set your schedule, we trust your commitment.",
    icon: FiClock,
    color: "#10b981"
  },
  {
    title: "Equity & Bonuses",
    desc: "Be rewarded as part of our shared success with fair equity and performance bonuses.",
    icon: FiShield,
    color: "#f59e0b"
  },
  {
    title: "Inclusive Team",
    desc: "A diverse, respectful, and inclusive environment where everyone belongs.",
    icon: FiUsers,
    color: "#ec4899"
  },
  {
    title: "Wellness Days",
    desc: "Take time off to recharge. We encourage you to rest, reset, and come back stronger.",
    icon: FiBriefcase,
    color: "#14b8a6"
  },
  {
    title: "Fun & Connection",
    desc: "Virtual events, team meetups, and celebrations that keep us connected.",
    icon: FiSmile,
    color: "#6366f1"
  },
];

const categories = ["All", "Engineering", "Teaching", "Sales", "Design", "Operations", "Marketing"];

const jobs = [
  {
    id: 1,
    title: "Senior Front-End Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "4-5 yrs Exp",
    color: "#4f46e5",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    summary: "Lead React initiatives and build modern web experiences that power engaging UIs at scale.",
    icon: FiMonitor
  },
  {
    id: 2,
    title: "Python & Data Science Instructor",
    dept: "Teaching",
    type: "Part-time",
    location: "Remote",
    experience: "3-4 yrs Exp",
    color: "#8b5cf6",
    tags: ["Python", "Data Analysis", "Machine Learning", "Teaching"],
    summary: "Deliver live Python and data science classes. Guide projects, assessments, and mentor learners.",
    icon: FiBookOpen
  },
  {
    id: 3,
    title: "Frontend Engineer (React)",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 yrs Exp",
    color: "#10b981",
    tags: ["React", "JavaScript", "REST APIs", "UI/UX"],
    summary: "Build user interfaces for learning platforms and student-facing apps. Collaborate closely with design and backend teams.",
    icon: FiLayers
  },
];

function ApplyModal({ job, onClose }) {
  const emailSubject = encodeURIComponent(`Application for ${job.title}`);
  const emailBody = encodeURIComponent(
    `Hi PyKube Team,\n\nI am interested in the ${job.title} (${job.dept}) position.\n\nPlease find my CV attached.\n\nBest regards,`
  );
  const mailtoLink = `mailto:careers@pykube.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="apply-overlay" onClick={onClose}>
      <div className="apply-card" onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button className="apply-card-close" onClick={onClose} aria-label="Close">
          <FiX size={18} />
        </button>

        {/* Top accent bar using job color */}
        <div className="apply-card-accent" style={{ background: job.color }} />

        {/* Icon */}
        <div className="apply-card-icon" style={{ background: `${job.color}18`, color: job.color }}>
          <FiMail size={28} />
        </div>

        {/* Role info */}
        <span className="apply-card-dept" style={{ background: `${job.color}15`, color: job.color }}>
          {job.dept}
        </span>
        <h2 className="apply-card-title">Apply for <span style={{ color: job.color }}>{job.title}</span></h2>

        {/* Instruction */}
        <p className="apply-card-instruction">
          To apply for this role, simply send your <strong>CV / Resume</strong> to our hiring team at the email below. 
          Please mention the role you're applying for in the subject line.
        </p>

        {/* Email box */}
        <div className="apply-email-box">
          <div className="apply-email-label">Send your CV to:</div>
          <div className="apply-email-addr">
            <FiMail size={16} />
            careers@pykube.com
          </div>
          <div className="apply-email-subject">
            Subject: <strong>Application for {job.title}</strong>
          </div>
        </div>

        {/* Tips */}
        <ul className="apply-tips">
          <li><FiCheck size={13} /> Attach your CV as a PDF or Word document</li>
          <li><FiCheck size={13} /> Include a short intro about yourself</li>
          <li><FiCheck size={13} /> We typically respond within 3–5 business days</li>
        </ul>

        {/* CTA button — opens mailto */}
        <a href={mailtoLink} className="apply-email-btn" style={{ background: job.color }}>
          <FiMail size={16} /> Open Email App
        </a>

      </div>
    </div>
  );
}

const resumeJob = {
  title: 'Your Desired Role',
  dept: 'General Application',
  color: '#4f46e5',
  location: 'Remote',
  type: 'Full-time',
};

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeJob, setActiveJob] = useState(null);

  const filteredJobs = jobs.filter(job => {
    const matchesDept = selectedDept === "All" || job.dept === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <main className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-bg">
          <div className="careers-orb orb-a" />
          <div className="careers-orb orb-b" />
          <div className="careers-grid-lines" />
        </div>

        <div className="container careers-hero-inner">
          <div className="careers-hero-text">
            <span className="careers-tag">
              <span className="careers-dash" /> WE ARE HIRING
            </span>
            <h1 className="careers-hero-heading">
              Build the Future of<br />
              Tech Education With <span className="careers-hero-accent">PYube</span>
            </h1>
            <p className="careers-hero-desc">
              We empower passionate educators, developers, and visionaries to shape
              and inspire the next generation of global tech talent.
            </p>
          </div>

          <div className="careers-hero-image-pane">
            <div className="careers-hero-img-card">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                alt="PyKube Team Collaboration" 
                className="careers-hero-img"
              />
              <div className="careers-img-glow" />
              {/* Glassmorphic Tech Badges */}
              <div className="careers-glass-badge badge-1">
                <span className="badge-icon">🚀</span>
                <div className="badge-text">
                  <h5>Join Us</h5>
                  <p>10+ Open Roles</p>
                </div>
              </div>
              <div className="careers-glass-badge badge-2">
                <span className="badge-icon">💡</span>
                <div className="badge-text">
                  <h5>Remote-First</h5>
                  <p>Work from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="careers-values">
        <div className="container">
          <div className="careers-section-header">
            <span className="accent-sub">WHAT WE BELIEVE</span>
            <h2 className="careers-section-title">The Principles That Guide Us</h2>
            <p className="careers-section-sub">
              Five core values that shape every decision, every action, and every impact we make.
            </p>
            <div className="section-title-bar" />
          </div>
          <div className="careers-values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div className="value-card" key={i} style={{ "--v-color": v.color }}>
                  <div className="value-card-num">0{i + 1}</div>
                  <div className="value-icon-box" style={{ background: `${v.color}15`, color: v.color }}>
                    <Icon />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks and Benefits Section */}
      <section className="careers-perks">
        <div className="container">
          <div className="careers-section-header">
            <span className="accent-sub">PERKS & BENEFITS</span>
            <h2 className="careers-section-title">Support for Your Best Work</h2>
            <p className="careers-section-sub">
              We offer competitive compensation and a flexible package to support your life, health, and growth.
            </p>
            <div className="section-title-bar" />
          </div>
          <div className="perks-grid">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div className="perk-card" key={i} style={{ "--p-color": p.color }}>
                  <div className="perk-card-num">0{i + 1}</div>
                  <div className="perk-icon-box" style={{ background: `${p.color}15`, color: p.color }}>
                    <Icon />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── Open Positions Section ── */}
      <section className="careers-open-positions">
        <div className="container">
          <div className="careers-section-header">
            <span className="accent-sub">WE'RE HIRING</span>
            <h2 className="careers-section-title">Open Positions</h2>
            <p className="careers-section-sub">
              Join a passionate team building the future of tech education. Explore roles across engineering, teaching, and beyond.
            </p>
            <div className="section-title-bar" />
          </div>

          <div className="open-positions-list">
            {jobs.map((job) => {
              const Icon = job.icon;
              return (
                <div className="job-card" key={job.id} style={{ '--job-color': job.color }}>
                  <div className="job-card-left">
                    <div className="job-icon-box" style={{ background: `${job.color}18`, color: job.color }}>
                      <Icon size={20} />
                    </div>
                    <div className="job-card-info">
                      <div className="job-card-top">
                        <span className="job-dept-badge" style={{ background: `${job.color}15`, color: job.color }}>
                          {job.dept}
                        </span>
                        <div className="job-meta-pills">
                          <span className="job-pill"><FiGlobe size={11} /> {job.location}</span>
                          <span className="job-pill"><FiClock size={11} /> {job.type}</span>
                          <span className="job-pill"><FiBriefcase size={11} /> {job.experience}</span>
                        </div>
                      </div>
                      <h3 className="job-title">{job.title}</h3>
                      <p className="job-summary">{job.summary}</p>
                      <div className="job-tags">
                        {job.tags.map(tag => (
                          <span className="job-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="job-card-right">
                    <button
                      className="job-apply-btn"
                      style={{ background: job.color }}
                      onClick={() => setActiveJob(job)}
                    >
                      Apply Now <FiChevronRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── Join Our Team Banner ── */}
      <section className="careers-join-team-section" id="join-team">
        <div className="container">
          <div className="jt-wrapper">

            {/* ── LEFT COLUMN ── */}
            <div className="jt-left">
              {/* Badge */}
              <span className="jt-badge">
                <FiUsers size={13} /> Join Our Team
              </span>

              {/* Headline */}
              <h2 className="jt-heading">
                Shape the Future<br />
                <span className="jt-heading-accent">With Us</span>
              </h2>
              <div className="jt-heading-bar" />

              {/* Description */}
              <p className="jt-desc">
                We're always on the lookout for passionate educators, creative designers,
                and brilliant engineers. We're growing fast and always looking for talent.
              </p>

              {/* Feature pills */}
              <div className="jt-features">
                <div className="jt-feature-pill">
                  <FiGlobe size={16} />
                  <span>Remote-first culture</span>
                </div>
                <div className="jt-feature-pill">
                  <FiBookOpen size={16} />
                  <span>Continuous learning &amp; growth</span>
                </div>
                <div className="jt-feature-pill">
                  <FiAward size={16} />
                  <span>Competitive equity &amp; bonuses</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="jt-stats">
                {[
                  { num: '150+', label: 'Projects Delivered', icon: FiLayers },
                  { num: '50+',  label: 'Team Members',       icon: FiUsers  },
                  { num: '12+',  label: 'Countries',          icon: FiGlobe  },
                  { num: '95%',  label: 'Employee Satisfaction', icon: FiStar },
                ].map(({ num, label, icon: Icon }) => (
                  <div className="jt-stat" key={label}>
                    <Icon size={18} className="jt-stat-icon" />
                    <span className="jt-stat-num">{num}</span>
                    <span className="jt-stat-label">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="jt-cta-row">
                <button
                  className="jt-btn-primary"
                  onClick={() => setActiveJob(resumeJob)}
                >
                  <FiUpload size={16} /> Upload Your Resume
                </button>
              </div>

              {/* Email info bar */}
              <div className="jt-email-bar">
                <div className="jt-email-item">
                  <FiMail size={15} />
                  <span>Or email us directly at <a href="mailto:careers@pykube.com" className="jt-email-link">careers@pykube.com</a></span>
                </div>
                <div className="jt-email-divider" />
                <div className="jt-email-item">
                  <FiClock size={15} />
                  <span>We'll get back to you within <strong>3–5 business days.</strong></span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="jt-right">
              {/* Illustration */}
              <div className="jt-illustration">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Team collaboration"
                  className="jt-team-img"
                />
                {/* Floating code tag */}
                <div className="jt-float-badge jt-float-top">
                  <span className="jt-code-tag">&lt;/&gt;</span>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="jt-testimonial-card">
                <div className="jt-quote-icon">"</div>
                <h4 className="jt-testimonial-title">Great People. Great Culture.</h4>
                <p className="jt-testimonial-text">
                  We believe in building a supportive environment where ideas thrive and people grow together.
                </p>
                <div className="jt-avatars">
                  {[
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/56.jpg',
                    'https://randomuser.me/api/portraits/women/68.jpg',
                    'https://randomuser.me/api/portraits/men/77.jpg',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="team member" className="jt-avatar" />
                  ))}
                  <div className="jt-avatar-more">50+</div>
                </div>
                <p className="jt-avatars-label">Join 50+ amazing people at Pykube</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Modal */}
      {activeJob && (
        <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </main>
  );
}
