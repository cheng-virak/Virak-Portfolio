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

  const toolkitCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'PHP', 'HTML5', 'CSS3', 'Java', 'Python', 'SQL']
    },
    {
      category: 'Frontend & UI',
      skills: ['React.js', 'Bootstrap 5', 'Tailwind Principles', 'Responsive Web Design', 'DOM API']
    },
    {
      category: 'Backend & Database',
      skills: ['MySQL', 'Relational Schema Design', 'RESTful APIs', 'Apache / XAMPP', 'PHP MVC']
    },
    {
      category: 'Tools & DevOps',
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
            <div className="about-bio-badge">
              <span>👋 Hello there!</span>
            </div>
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
                  <h3 className="group-title">{group.category}</h3>
                  <span className="group-count">{group.skills.length} tools</span>
                </div>
                <div className="group-pills">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag skill-pill">
                      {skill}
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
