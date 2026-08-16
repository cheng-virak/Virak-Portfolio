import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-bracket">&lt;</span>
              <span className="footer-logo-text">Cheng Virak</span>
              <span className="footer-logo-bracket">/&gt;</span>
            </Link>
            <p className="footer-tagline">
              Information Technology Engineering student at RUPP. Building modern, performant, and accessible web experiences.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot"></span>
              <span>Open to internship & junior roles</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/skills">Skills & Toolkit</Link></li>
              <li><Link to="/projects">Featured Projects</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-social-list">
              <li>
                <a href="mailto:virakbczin05@gmail.com" className="social-pill-link">
                  <span>✉️ Email</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/cheng-virak" target="_blank" rel="noreferrer" className="social-pill-link">
                  <span>🐙 GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill-link">
                  <span>💼 LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://t.me" target="_blank" rel="noreferrer" className="social-pill-link">
                  <span>✈️ Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <span className="text-white">Cheng Virak</span>. Built with React & Modern CSS.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
            <span>Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
