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
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="careers-modal-overlay" onClick={onClose}>
      <div className="careers-modal" onClick={e => e.stopPropagation()}>
        <button className="careers-modal-close" onClick={onClose}><FiX /></button>
        {submitted ? (
          <div className="careers-modal-success">
            <div className="success-icon-wrap"><FiCheck /></div>
            <h3>Application Submitted!</h3>
            <p>Thanks for applying for <strong>{job.title}</strong>. Our team will reach out within 3-5 business days.</p>
            <button className="btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="careers-modal-header">
              <span className="careers-modal-dept" style={{ background: job.color + "18", color: job.color }}>{job.dept}</span>
              <h2 className="careers-modal-title">Apply for {job.title}</h2>
              <p className="careers-modal-sub"><FiGlobe /> {job.location} &nbsp;•&nbsp; <FiClock /> {job.type}</p>
            </div>
            <form className="careers-apply-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" required placeholder="john@email.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile</label>
                  <input name="linkedin" placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Why do you want to join PyKube? *</label>
                <textarea name="message" required rows={4} placeholder="Tell us about yourself and why you are excited about this role..." value={form.message} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Resume / CV *</label>
                <div className="file-drop-zone">
                  <FiUpload style={{ color: "#4f46e5" }} />
                  {fileName ? (
                    <span className="file-selected-name">Selected: {fileName}</span>
                  ) : (
                    <span>Drag and drop your resume, or <label className="file-browse" htmlFor="resume-upload">browse files</label></span>
                  )}
                  <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: "none" }} required={!fileName} />
                  <span className="file-hint">PDF, DOC or DOCX - max 5MB</span>
                </div>
              </div>
              <button type="submit" className="btn-primary form-submit-btn" style={{ background: "#4f46e5" }}>Submit Application</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

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



      {/* Expanded Join Our Team Banner */}
      <section className="careers-join-team-section" id="join-team">
        <div className="container">
          <div className="join-team-card">
            <div className="join-team-bg-glow"></div>
            
            <div className="join-team-content">
              <span className="join-team-badge"><FiBriefcase /> Join Our Team</span>
              <h2 className="join-team-title">Shape the Future With Us</h2>
              <p className="join-team-desc">
                We're always on the lookout for passionate educators, creative designers, 
                and brilliant engineers. We're growing fast and always looking for talent.
              </p>
              
              <ul className="join-team-perks-list">
                <li><FiCheck className="perk-check" /> Remote-first culture</li>
                <li><FiCheck className="perk-check" /> Continuous learning & growth</li>
                <li><FiCheck className="perk-check" /> Competitive equity & bonuses</li>
              </ul>

              <div className="join-team-action">
                <p>Send your CV and a brief introduction to:</p>
                <a href="mailto:careers@pykube.com" className="join-team-email">
                  <FiMail /> careers@pykube.com
                </a>
              </div>
            </div>

            <div className="join-team-visual">
              <div className="visual-circle">
                <FiUpload className="visual-icon" />
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
