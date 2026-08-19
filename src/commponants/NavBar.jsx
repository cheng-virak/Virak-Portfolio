import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';

function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      to: '/',
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>
      )
    },
    {
      to: '/about',
      label: 'About',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
      )
    },
    {
      to: '/skills',
      label: 'Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
        </svg>
      )
    },
    {
      to: '/projects',
      label: 'Projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31A2 2 0 0 1 2.181 3h3.978a2 2 0 0 0 1.42-.586l1.028-1.029A2 2 0 0 1 9.828 1z"/>
        </svg>
      )
    },
    {
      to: '/contact',
      label: 'Contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.565L16 11.801V4.697z"/>
        </svg>
      )
    }
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <nav className="glass-navbar">
          {/* Brand Logo */}
          <Link to="/" className="nav-brand">
            <div className="logo-text-group">
              <span className="logo-title">Cheng <span className="logo-highlight">Virak</span></span>
              <span className="logo-subtitle">Software & Frontend</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-item-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-label">{link.label}</span>
                    {isActive && <span className="active-pill-indicator"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action / Status */}
          <div className="nav-right-actions">
            <div className="status-badge d-none d-md-inline-flex">
              <span className="status-dot"></span>
              <span>Available for hire</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer glass-panel">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span className="nav-icon">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-drawer-footer">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
