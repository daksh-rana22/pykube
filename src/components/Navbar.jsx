import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs', dropdown: ['Java Full Stack', 'Python Developer', 'QA Automation', 'Data Analyst', 'Data Engineer', 'Data Scientist'] },
  { label: 'Placement Support', href: '#process' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Resources', href: '#blog', dropdown: ['Blog', 'Videos', 'Webinars'] },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="PyKube Technologies" />
        </a>
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <div key={link.label} className="nav-item"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <a href={link.href} className="nav-link">
                {link.label}
                {link.dropdown && <span className="nav-arrow">▾</span>}
              </a>
              {link.dropdown && activeDropdown === link.label && (
                <div className="dropdown-menu">
                  {link.dropdown.map(item => (
                    <a key={item} href="#programs" className="dropdown-item">→ {item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="#contact" className="btn-primary navbar-cta">Book Free Consultation</a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="ham-line" /><span className="ham-line" /><span className="ham-line" />
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ margin: '14px 0 0', justifyContent: 'center' }}>Book Free Consultation</a>
        </div>
      )}
    </header>
  );
}
