import { Link } from 'react-router-dom';
import Profile from '../commponants/Profile';
import '../style/Home.css';

function Home() {
  const stats = [
    { label: 'Academic & Dev Journey', value: '3+ Yrs' },
    { label: 'Core Technologies', value: '10+' },
    { label: 'Engineering Major', value: 'ITE @ RUPP' },
    { label: 'Code Passion', value: '100%' }
  ];

  const highlights = [
    {
      icon: '💻',
      title: 'Frontend Engineering',
      desc: 'Crafting responsive, pixel-perfect user interfaces with React, modern CSS, and JavaScript.'
    },
    {
      icon: '🗄️',
      title: 'Backend & Database',
      desc: 'Designing relational database schemas with MySQL, REST APIs, and PHP backend integration.'
    },
    {
      icon: '⚡',
      title: 'Performance & UX',
      desc: 'Focusing on clean modular code, fast load times, accessible design, and smooth interactions.'
    }
  ];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="home-hero-section container">
        <div className="home-hero-content">
          <div className="hero-greeting-badge">
            <span className="badge-glow-dot"></span>
            <span>Frontend Developer & IT Engineer</span>
          </div>

          <h1 className="hero-headline">
            Hi, I'm <span className="gradient-text">Cheng Virak</span>
            <br />
            Building <span className="gradient-text-cyan">Modern Web</span> Solutions.
          </h1>

          <p className="hero-description">
            Information Technology Engineering student at the <strong>Royal University of Phnom Penh (RUPP)</strong>.
            I turn complex ideas and design concepts into clean, high-performance, and user-centric web applications.
          </p>

          <div className="hero-action-buttons">
            <Link to="/projects" className="btn-glow">
              <span>Explore My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </Link>

            <Link to="/contact" className="btn-glass">
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              </svg>
            </Link>

            <Link to="/about" className="btn-glass hero-btn-secondary">
              <span>About Me</span>
            </Link>
          </div>

          {/* Quick tech stack tags */}
          <div className="hero-tech-pills">
            <span className="tech-pills-label">Tech Stack:</span>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">JavaScript ES6+</span>
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">Bootstrap 5</span>
            <span className="tech-tag">Git</span>
          </div>
        </div>

        <div className="home-hero-profile">
          <Profile />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-banner container">
        <div className="stats-grid glass-panel">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do Highlights */}
      <section className="highlights-section container">
        <div className="section-title-wrap text-center">
          <span className="page-subtitle-badge">Core Competencies</span>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="section-subtitle">Combining solid software engineering principles with contemporary frontend design.</p>
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
            <h2 className="cta-title">Interested in collaborating or hiring?</h2>
            <p className="cta-desc">
              I'm actively seeking internship and junior engineering opportunities where I can contribute and grow.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-glow">
              <span>Get In Touch</span>
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