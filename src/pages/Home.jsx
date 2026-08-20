import { Link } from 'react-router-dom';
import Profile from '../commponants/Profile';
import '../style/Home.css';

function Home() {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      title: 'Frontend Development',
      desc: 'Building responsive, accessible web interfaces using modern React, JavaScript (ES6+), and clean CSS.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      title: 'Backend & Databases',
      desc: 'Working with PHP, RESTful API endpoints, and structured relational database schemas with MySQL.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'Clean Code & Performance',
      desc: 'Writing structured, maintainable code with Git version control and modern build tooling.'
    }
  ];

  const techStack = [
    {
      name: 'React.js',
      color: '#38bdf8',
      icon: (
        <svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#38bdf8" />
          <g stroke="#38bdf8" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'JavaScript ES6+',
      color: '#f59e0b',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#f59e0b" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.5 0 2.4-.7 2.4-1.9v-7.1H10v7.1c0 .7-.4 1.1-1.1 1.1-.4 0-.9-.1-1.3-.3l-.6 1.3zm7.8.2c1.3 0 2.2-.6 2.8-1.5l-1.3-.8c-.3.5-.8.9-1.5.9-.9 0-1.5-.5-1.5-1.3 0-.8.5-1.2 1.6-1.6l.5-.2c1.7-.6 2.5-1.4 2.5-2.8 0-1.6-1.3-2.7-3.1-2.7-1.4 0-2.4.5-3.1 1.6l1.3.8c.4-.6.9-.9 1.7-.9.9 0 1.5.5 1.5 1.2 0 .7-.5 1.1-1.4 1.5l-.6.2c-1.7.7-2.7 1.5-2.7 3 0 1.7 1.3 2.6 3.1 2.6z" fill="#0b0f19" />
        </svg>
      )
    },
    {
      name: 'PHP',
      color: '#818cf8',
      icon: (
        <svg width="24" height="20" viewBox="0 0 24 24" fill="#818cf8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-6.2 13.2l1.3-6.4h2.4c1.2 0 2 .67 1.8 1.87-.18 1.2-1.2 1.87-2.4 1.87h-1.2l-.5 2.66H5.8zm2.5-4h.8c.58 0 .98-.31 1.07-.8.09-.49-.22-.8-.8-.8h-.8l-.27 1.6zm5.1 4l1.3-6.4h1.4l-.5 2.5h1.9l.5-2.5h1.4l-1.3 6.4h-1.4l.5-2.5h-1.9l-.5 2.5h-1.4zm6.4 0l1.3-6.4h2.4c1.2 0 2 .67 1.8 1.87-.18 1.2-1.2 1.87-2.4 1.87h-1.2l-.5 2.66h-1.4zm2.5-4h.8c.58 0 .98-.31 1.07-.8.09-.49-.22-.8-.8-.8h-.8l-.27 1.6z" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      color: '#06b6d4',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm-7 4.35C6.46 10.09 9.07 10.5 12 10.5s5.54-.41 7-1.15V11c0 .66-3.13 2-7 2s-7-1.34-7-2V9.35zm0 4.5C6.46 14.59 9.07 15 12 15s5.54-.41 7-1.15V15c0 .66-3.13 2-7 2s-7-1.34-7-2v-1.15zm0 4.5C6.46 19.09 9.07 19.5 12 19.5s5.54-.41 7-1.15V17c0 .66-3.13 2-7 2s-7-1.34-7-2v-1.15z" fill="#06b6d4" />
          <circle cx="16" cy="7" r="1.5" fill="#f59e0b" />
        </svg>
      )
    },
    {
      name: 'Bootstrap 5',
      color: '#a855f7',
      icon: (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="#a855f7">
          <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm4.146 12.077H5.49V3.923h3.013c1.782 0 2.766.866 2.766 2.378 0 .914-.528 1.624-1.353 1.942v.08c1.077.26 1.776 1.05 1.776 2.17 0 1.66-1.18 2.584-3.54 2.584m-1.31-6.947v2.222h1.277c.866 0 1.405-.41 1.405-1.127 0-.742-.55-1.095-1.464-1.095zm0 3.324v2.54h1.493c.96 0 1.597-.442 1.597-1.282 0-.88-.636-1.258-1.633-1.258z" />
        </svg>
      )
    },
    {
      name: 'Git',
      color: '#f43f5e',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#f43f5e">
          <path d="M21.62 10.79l-8.41-8.41a2.38 2.38 0 0 0-3.37 0l-2.1 2.1 2.82 2.82a2.83 2.83 0 0 1 3.58 3.58l2.72 2.72a2.83 2.83 0 1 1-1.69 1.69l-2.55-2.55v4.2a2.83 2.83 0 1 1-2.38 0V11.2a2.83 2.83 0 0 1-1.52-3.71L6.1 5.11 2.38 8.83a2.38 2.38 0 0 0 0 3.37l8.41 8.41a2.38 2.38 0 0 0 3.37 0l7.46-7.45a2.38 2.38 0 0 0 0-3.37z" />
        </svg>
      )
    }
  ];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="home-hero-section container">
        <div className="home-hero-content">
          <h1 className="hero-headline animate-fade-up">
            Hi, I'm <span className="gradient-text">Cheng Virak</span>
            <br />
            Building practical web applications.
          </h1>

          <p className="hero-description animate-fade-up delay-2">
            IT Engineering student at the <strong>Royal University of Phnom Penh (RUPP)</strong>.
            I focus on developing responsive frontend interfaces with React and structured backend solutions with PHP and MySQL.
          </p>

          <div className="hero-action-buttons animate-fade-up delay-3">
            <Link to="/projects" className="btn-glow">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </Link>

            <Link to="/contact" className="btn-glass">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              </svg>
            </Link>

            <Link to="/about" className="btn-glass hero-btn-secondary">
              <span>About Me</span>
            </Link>
          </div>

          {/* Quick tech stack icons */}
          <div className="hero-tech-pills animate-fade-up delay-4">
            <span className="tech-pills-label">Tech Stack:</span>
            <div className="tech-icons-group">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-icon-badge"
                  style={{ '--icon-color': tech.color }}
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <span className="tech-icon-svg">{tech.icon}</span>
                  <span className="tech-tooltip">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-hero-profile animate-fade-up delay-2">
          <Profile />
        </div>
      </section>

      {/* What I Do Highlights */}
      <section className="highlights-section container">
        <div className="section-title-wrap text-center">
          <span className="page-subtitle-badge">Overview</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Focused on solid software engineering fundamentals and clean frontend development.</p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card glass-card">
              <div className="highlight-icon-box">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner-section container">
        <div className="cta-banner glass-panel">
          <div className="cta-content">
            <h2 className="cta-title">Looking for an intern or junior developer?</h2>
            <p className="cta-desc">
              I am open to internship and junior engineering opportunities in web and software development.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-glow">
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;