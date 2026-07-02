import '../styles/Navbar.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/#home' },
  {
    label: 'Programs',
    href: '/courses',
    dropdown: [
      { label: 'Java Full Stack', href: '/courses/java-full-stack', icon: '/images/illustrations/java_icon.jpg', sub: 'Spring Boot, Angular, AWS', color: '#e76f00', bg: '#fff7ed' },
      { label: 'Python Developer', href: '/courses/python-developer', icon: '/images/illustrations/python_icon.png', sub: 'Django, Rest API, SQL', color: '#3776ab', bg: '#eff6ff' },
      { label: 'QA Automation', href: '/courses/qa-automation', icon: '/images/illustrations/qa_icon.jpg', sub: 'Selenium, Java, TestNG', color: '#8b5cf6', bg: '#f5f3ff' },
      { label: 'Data Analyst', href: '/courses/data-analyst', icon: '📊', sub: 'Pandas, Stats, Power BI', color: '#10b981', bg: '#ecfdf5' },
      { label: 'Data Engineer', href: '/courses/data-engineer', icon: '🔧', sub: 'PySpark, SQL, Ingestion', color: '#f97316', bg: '#fff7ed' },
      { label: 'Data Scientist', href: '/courses/data-scientist', icon: '🤖', sub: 'ML, PySpark, Statistics', color: '#ef4444', bg: '#fef2f2' }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Interview Preparation', icon: '🤝', sub: 'Practice interviews & get the right hire guidance', href: '/services/interview-preparation' },
      { label: 'Sales & Marketing', icon: '📈', sub: 'Lead generation, revenue & business growth', href: '/services/sales-marketing' },
      { label: 'Job Assistance', icon: '💼', sub: '100% job assistance & professional career guidance', href: '/services/job-assistance' },
      { label: 'Software Development', icon: '💻', sub: 'Custom software to meet your business goals', href: '/services/software-development' },
      { label: 'UX/UI Design', icon: '🎨', sub: 'Design thinking & UI/UX strategies that convert', href: '/services/ux-ui-design' },
      { label: 'Web Development', icon: '🌐', sub: 'Web-based & mobile web development solutions', href: '/services/web-development' },
    ]
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const closeTimer = useRef(null);

  const openDropdown = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  // Only the dropdown panel itself (not the nav-item) schedules close
  // so leaving the nav-item link area and entering the dropdown below
  // never triggers a close — the dropdown is always below so there's no gap
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Full-page blur overlay — click anywhere on the blurred page to close */}
      <div
        className={`navbar-page-blur${activeDropdown ? ' active' : ''}`}
        onClick={() => setActiveDropdown(null)}
      />

      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="PyKube Technologies" />
          </a>
          <nav className="navbar-links">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="nav-item"
                onMouseEnter={() => {
                  cancelClose();
                  if (link.dropdown) openDropdown(link.label);
                }}
                onMouseLeave={() => {
                  // If this nav-item has no dropdown (or mouse is going to dropdown),
                  // only close if no dropdown is open or after short delay
                  if (!link.dropdown) scheduleClose();
                  // If it has a dropdown, the dropdown's own onMouseLeave handles closing
                }}
              >
                <a href={link.href} className="nav-link">
                  {link.label}
                  {link.dropdown && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="nav-arrow-svg">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>

                {link.dropdown && activeDropdown === link.label && (
                  <div
                    className={`dropdown-menu${scrolled ? ' scrolled' : ''} ${link.label === 'Programs' ? 'mega-dropdown' : link.label === 'Services' ? 'services-dropdown' : 'standard-dropdown'}`}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {link.label === 'Programs' ? (
                      <div className="mega-dropdown-inner">
                        <div className="mega-dropdown-left">
                          <div className="mega-dropdown-title">Explore Bootcamps</div>
                          <div className="mega-dropdown-grid">
                            {link.dropdown.map(item => (
                              <a key={item.label} href={item.href} className="mega-dropdown-item">
                                {item.icon.startsWith('/') ? (
                                  <span className="mega-item-icon" style={{ backgroundColor: '#ffffff', padding: '4px' }}>
                                    <img src={item.icon} alt={item.label} className="mega-item-icon-img" />
                                  </span>
                                ) : (
                                  <span className="mega-item-icon" style={{ backgroundColor: item.bg, color: item.color }}>{item.icon}</span>
                                )}
                                <div className="mega-item-text">
                                  <span className="mega-item-title">{item.label}</span>
                                  <span className="mega-item-desc">{item.sub}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="mega-dropdown-right">
                          <div className="mega-promo-card">
                            <span className="promo-badge">📅 Free Session</span>
                            <h4>Not sure where to start?</h4>
                            <p>Schedule a 1-on-1 career mapping call with our US tech advisors.</p>
                            <a href="/contact" className="promo-cta-btn">Book Free Call</a>
                          </div>
                        </div>
                      </div>
                    ) : link.label === 'Services' ? (
                      <div className="services-dropdown-inner">
                        <div className="services-dropdown-title">What We Offer</div>
                        <div className="services-dropdown-grid">
                          {link.dropdown.map(item => (
                            <a key={item.label} href={item.href} className="service-dropdown-item">
                              <span className="service-item-icon">{item.icon}</span>
                              <div className="service-item-text">
                                <span className="service-item-title">{item.label}</span>
                                <span className="service-item-desc">{item.sub}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="standard-dropdown-inner">
                        {link.dropdown.map(item => (
                          <a key={item.label} href={item.href} className="standard-dropdown-item">
                            <span className="std-item-dot" />
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a href="/contact" className="btn-primary navbar-cta">Book Free Consultation</a>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="ham-line" /><span className="ham-line" /><span className="ham-line" />
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-menu">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <div className="mobile-actions">
              <a href="/contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Book Free Consultation</a>
              <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
