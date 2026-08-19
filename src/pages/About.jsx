import { Link } from 'react-router-dom';
import Profile from '../commponants/Profile';
import '../style/About.css';

function About() {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Information Technology Engineering',
      institution: 'Royal University of Phnom Penh (RUPP)',
      period: '2022 - Present',
      description: 'Focusing on core computer science foundations, algorithms, relational database design, data structures, network security, and software engineering methodologies.',
      status: 'Current Student'
    }
  ];

  const engineeringPrinciples = [
    {
      icon: '🔍',
      title: 'Root-Cause Problem Solving',
      description: 'I enjoy investigating beneath surface-level bugs—diving into server configurations, SQL query execution plans, and component life cycles to build robust solutions.'
    },
    {
      icon: '📱',
      title: 'Responsive & Accessible UX',
      description: 'Crafting user interfaces that function seamlessly across all viewport sizes, keeping touch targets, typography hierarchy, and fast render times at the forefront.'
    },
    {
      icon: '🔄',
      title: 'Git Version Control & Clean Code',
      description: 'Committed to atomic git commits, structured branching, clean code conventions, and modular component architecture ready for team scale.'
    },
    {
      icon: '🚀',
      title: 'Continuous Tech Exploration',
      description: 'Constantly testing new web frameworks and modern backend tooling to stay ahead with industry best practices and high-efficiency tooling.'
    }
  ];

  const skillIcons = {
    // Languages
    'JavaScript (ES6+)': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="3" fill="#f0c040"/><path d="M7 17.5c.8.5 1.7.8 2.6.8 1.5 0 2.4-.7 2.4-1.9v-7.1H10v7.1c0 .7-.4 1.1-1.1 1.1-.4 0-.9-.1-1.3-.3l-.6 1.3zm7.8.2c1.3 0 2.2-.6 2.8-1.5l-1.3-.8c-.3.5-.8.9-1.5.9-.9 0-1.5-.5-1.5-1.3 0-.8.5-1.2 1.6-1.6l.5-.2c1.7-.6 2.5-1.4 2.5-2.8 0-1.6-1.3-2.7-3.1-2.7-1.4 0-2.4.5-3.1 1.6l1.3.8c.4-.6.9-.9 1.7-.9.9 0 1.5.5 1.5 1.2 0 .7-.5 1.1-1.4 1.5l-.6.2c-1.7.7-2.7 1.5-2.7 3 0 1.7 1.3 2.6 3.1 2.6z" fill="#1a1a1a"/></svg>
    ),
    'PHP': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#9b7fd4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 13.2 1.3-6.4h-1.4l.5-2.6H8.8L7.5 12.8h1.4L7.5 13.2c-.2 1-.1 2.4 2.3 2l.2-1.3c-.9.2-1.3-.2-1.2-.7zm3.2 0 1.3-6.4h1.4l-.5 2.5h1.9l.5-2.5h1.4l-1.3 6.4H17l.5-2.5h-1.9l-.5 2.5h-1.4z"/></svg>
    ),
    'HTML5': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#e44d26"><path d="M3 2l1.5 17L12 21l7.5-2L21 2zm15.5 4.5H8l.3 2.5h9.8l-.9 9-5.2 1.4-5.2-1.4-.4-4h2.4l.2 2 3 .8 3-.8.3-3.5H7.4L6.9 6.5h11.4z"/></svg>
    ),
    'CSS3': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#264de4"><path d="M3 2l1.5 17L12 21l7.5-2L21 2zm15.5 4.5H8l.3 2.5h9.8-.3l-.3 3H9.3l.2 2h7.8l-.5 5-4.8 1.3-4.8-1.3-.3-3h2.3l.2 1.5 2.6.7 2.6-.7.3-3H8.7l-.9-9h12.2z"/></svg>
    ),
    'Java': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#f89820"><path d="M8.85 16.5s-.8.46.57.62c1.66.19 2.51.16 4.34-.18 0 0 .48.3 1.15.56-4.09 1.75-9.26-.1-6.06-.99zm-.5-2.3s-.9.67.47.79c1.77.18 3.17.2 5.6-.27 0 0 .34.34.87.53-4.96 1.45-10.49.11-6.94-1.05zm4.6-4.4c1.01 1.16-.27 2.2-.27 2.2s2.56-1.32 1.38-2.97c-1.1-1.54-1.94-2.3 2.61-4.93 0 0-7.14 1.78-3.72 5.7zm2.9 7.72s.59.49-.65.86c-2.35.71-9.77.92-11.84.03-.74-.32.65-.77 1.09-.86.46-.1.72-.08.72-.08-.83-.58-5.36 1.14-2.3 1.64 8.34 1.35 15.2-.61 12.98-1.59zm-7.35-5.36s-3.78.9-1.34 1.22c1.03.13 3.08.1 4.99-.05 1.56-.13 3.13-.39 3.13-.39s-.55.24-1.21.51c-4.87 1.28-14.27.68-11.56-.5 2.31-1 5.99-.79 5.99-.79zm6.77 3.78c4.95-2.57 2.66-5.04 1.07-4.71-.39.08-.57.15-.57.15s.15-.23.43-.33c3.2-1.12 5.66 3.32-1.03 5.08 0-.01.08-.08.1-.19zm-6.12 4.64c4.76.3 12.08-.17 12.25-2.38 0 0-.33.85-3.94 1.52-4.08.77-9.12.68-12.1.19 0 0 .61.5 3.79.67z"/></svg>
    ),
    'Python': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.27 2 8 3.55 8 4.5v1.5h4V7H5.5C4.12 7 3 8.12 3 9.5v3C3 13.88 4.12 15 5.5 15H7v-2.5C7 11.12 8.12 10 9.5 10H14.5C15.88 10 17 8.88 17 7.5V4.5C17 3.12 15.88 2 14.5 2H12zm-1 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" fill="#3572a5"/><path d="M12 22c3.73 0 4-1.55 4-2.5v-1.5h-4V17h6.5c1.38 0 2.5-1.12 2.5-2.5v-3C21 10.12 19.88 9 18.5 9H17v2.5C17 12.88 15.88 14 14.5 14H9.5C8.12 14 7 15.12 7 16.5v3C7 20.88 8.12 22 9.5 22H12zm1-1.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" fill="#ffd43b"/></svg>
    ),
    'SQL': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#00758f"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zM6 9.35C7.46 10.09 9.63 10.5 12 10.5s4.54-.41 6-1.15V11c0 .66-2.13 2-6 2s-6-1.34-6-2V9.35zm0 4C7.46 14.09 9.63 14.5 12 14.5s4.54-.41 6-1.15V15c0 .66-2.13 2-6 2s-6-1.34-6-2v-1.65zm0 4C7.46 18.09 9.63 18.5 12 18.5s4.54-.41 6-1.15V19c0 .66-2.13 2-6 2s-6-1.34-6-2v-1.65z"/></svg>
    ),
    // Frontend & UI
    'React.js': (
      <svg width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348" fill="none"><circle cx="0" cy="0" r="2.05" fill="#38bdf8"/><g stroke="#38bdf8" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
    ),
    'Bootstrap 5': (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#a855f7"><path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm4.146 12.077H5.49V3.923h3.013c1.782 0 2.766.866 2.766 2.378 0 .914-.528 1.624-1.353 1.942v.08c1.077.26 1.776 1.05 1.776 2.17 0 1.66-1.18 2.584-3.54 2.584m-1.31-6.947v2.222h1.277c.866 0 1.405-.41 1.405-1.127 0-.742-.55-1.095-1.464-1.095zm0 3.324v2.54h1.493c.96 0 1.597-.442 1.597-1.282 0-.88-.636-1.258-1.633-1.258z"/></svg>
    ),
    'Tailwind Principles': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#38bdf8"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/></svg>
    ),
    'Responsive Web Design': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M4 6h18v2H4zm0 5h18v2H4zm0 5h18v2H4z"/></svg>
    ),
    'DOM API': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>
    ),
    // Backend & Database
    'MySQL': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#00758f"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 4c0 .66-2.13 2-6 2S6 7.66 6 7s2.13-2 6-2 6 1.34 6 2zM6 9.35C7.46 10.09 9.63 10.5 12 10.5s4.54-.41 6-1.15V11c0 .66-2.13 2-6 2s-6-1.34-6-2V9.35zm0 4C7.46 14.09 9.63 14.5 12 14.5s4.54-.41 6-1.15V15c0 .66-2.13 2-6 2s-6-1.34-6-2v-1.65zm0 4C7.46 18.09 9.63 18.5 12 18.5s4.54-.41 6-1.15V19c0 .66-2.13 2-6 2s-6-1.34-6-2v-1.65z"/></svg>
    ),
    'Relational Schema Design': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
    ),
    'RESTful APIs': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"/></svg>
    ),
    'Apache / XAMPP': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#cc2927"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
    ),
    'PHP MVC': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#9b7fd4"><path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z"/></svg>
    ),
    // Tools & DevOps
    'Git & GitHub': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#f43f5e"><path d="M21.62 10.79l-8.41-8.41a2.38 2.38 0 0 0-3.37 0l-2.1 2.1 2.82 2.82a2.83 2.83 0 0 1 3.58 3.58l2.72 2.72a2.83 2.83 0 1 1-1.69 1.69l-2.55-2.55v4.2a2.83 2.83 0 1 1-2.38 0V11.2a2.83 2.83 0 0 1-1.52-3.71L6.1 5.11 2.38 8.83a2.38 2.38 0 0 0 0 3.37l8.41 8.41a2.38 2.38 0 0 0 3.37 0l7.46-7.45a2.38 2.38 0 0 0 0-3.37z"/></svg>
    ),
    'Linux CLI': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 13H5v-2h14v2zM7.5 9.5 6 11l4 4 4-4-1.5-1.5L11 11V7H9v4L7.5 9.5z"/></svg>
    ),
    'Vite': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 3 12 21.5 3 3h4l5 10 5-10h4z" fill="#f0c040"/><path d="M14 3l-2 4-2-4H8l4 8 4-8h-2z" fill="#a78bfa"/></svg>
    ),
    'VS Code': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#007acc"><path d="M17.583 1.038 9.37 9.25 4.12 5.042 2 6.125v11.75l2.12 1.083L9.37 14.75l8.213 8.212L22 21.042V2.958l-4.417-1.92zM20 18.317l-10.43-6.317L20 5.683v12.634z"/></svg>
    ),
    'Postman': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff6c37"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.9 7.5l-5 2.5c-.3.15-.65.1-.9-.1l-3.5-2.5c-.35-.25-.4-.75-.1-1.05l1-1c.3-.3.75-.3 1.05 0l2.55 2.05 4.05-2.05c.4-.2.9 0 1.05.45.15.4-.05.85-.45 1.05l-1.8.65zM8 14.5c-.83 0-1.5-.67-1.5-1.5S7.17 11.5 8 11.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    ),
    'npm': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#cb3837"><path d="M0 0v24h24V0H0zm4 20V8h4v8h4V8h4v12H4z"/></svg>
    ),
  };

  const toolkitCategories = [
    {
      category: 'Languages',
      color: '#f0c040',
      skills: ['JavaScript (ES6+)', 'PHP', 'HTML5', 'CSS3', 'Java', 'Python', 'SQL']
    },
    {
      category: 'Frontend & UI',
      color: '#38bdf8',
      skills: ['React.js', 'Bootstrap 5', 'Tailwind Principles', 'Responsive Web Design', 'DOM API']
    },
    {
      category: 'Backend & Database',
      color: '#00758f',
      skills: ['MySQL', 'Relational Schema Design', 'RESTful APIs', 'Apache / XAMPP', 'PHP MVC']
    },
    {
      category: 'Tools & DevOps',
      color: '#f43f5e',
      skills: ['Git & GitHub', 'Linux CLI', 'Vite', 'VS Code', 'Postman', 'npm']
    }
  ];

  return (
    <div className="about-page-container page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <span className="page-subtitle-badge">About Me</span>
          <h1 className="page-title">
            Engineering Software with <span className="gradient-text">Precision</span> & Passion
          </h1>
          <p className="page-description">
            Get to know my academic background, technical journey, core philosophy, and what drives my development workflow.
          </p>
        </div>

        {/* Hero Story Section */}
        <section className="about-hero-grid glass-panel mb-5">
          <div className="about-bio-col">
            
            <h2 className="bio-headline">
              I'm <span className="gradient-text-cyan">Cheng Virak</span>, an IT Engineering student & Frontend Developer.
            </h2>
            <p className="bio-lead">
              Currently pursuing my degree at the Royal University of Phnom Penh (RUPP), I combine systematic engineering principles with a passion for sleek, interactive web interfaces.
            </p>
            <p className="bio-body">
              My journey started with curiosity about how complex software works under the hood. From designing relational MySQL databases and writing clean PHP endpoints, I have expanded into modern full-stack web applications using React.js and Vite.
            </p>
            <div className="bio-ctas">
              <Link to="/projects" className="btn-glow">
                <span>View My Projects</span>
              </Link>
              <Link to="/contact" className="btn-glass">
                <span>Let's Connect</span>
              </Link>
            </div>
          </div>

          <div className="about-profile-col">
            <Profile />
          </div>
        </section>

        {/* Education & Academic Timeline */}
        <section className="about-section mb-5">
          <div className="section-header-compact">
            <span className="section-tag">Academic Background</span>
            <h2 className="section-heading">Education & Degree</h2>
          </div>

          <div className="education-cards">
            {educationItems.map((edu, idx) => (
              <div key={idx} className="education-card glass-card">
                <div className="edu-top">
                  <div className="edu-icon-badge">🎓</div>
                  <div className="edu-header-meta">
                    <span className="edu-status-pill">{edu.status}</span>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Toolkit Matrix */}
        <section className="about-section mb-5">
          <div className="section-header-compact">
            <span className="section-tag">Technical Stack</span>
            <h2 className="section-heading">Full Technical Toolkit</h2>
          </div>

          <div className="toolkit-matrix-grid">
            {toolkitCategories.map((group, idx) => (
              <div key={idx} className="toolkit-group-card glass-card">
                <div className="group-header">
                  <div className="group-header-left">
                    <span className="group-accent-dot" style={{ background: group.color }} />
                    <h3 className="group-title">{group.category}</h3>
                  </div>
                  <span className="group-count">{group.skills.length} tools</span>
                </div>
                <div className="group-pills">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-icon-pill">
                      <span className="skill-pill-icon">{skillIcons[skill]}</span>
                      <span className="skill-pill-label">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Philosophy / Core Principles */}
        <section className="about-section mb-5">
          <div className="section-header-compact">
            <span className="section-tag">Work Philosophy</span>
            <h2 className="section-heading">How I Approach Software Development</h2>
          </div>

          <div className="principles-grid">
            {engineeringPrinciples.map((item, idx) => (
              <div key={idx} className="principle-card glass-card">
                <div className="principle-icon">{item.icon}</div>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Banner */}
        <section className="about-connect-banner glass-panel">
          <div className="banner-text">
            <h2>Ready to start a conversation?</h2>
            <p>Whether you have a technical question or an internship opening, feel free to reach out.</p>
          </div>
          <Link to="/contact" className="btn-glow">
            <span>Send Me a Message</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default About;
