import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Skills.css';

function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const skillList = [
    {
      name: 'React.js',
      category: 'frontend',
      level: 'Advanced',
      percentage: 85,
      icon: '⚛️',
      color: '#38bdf8',
      desc: 'Hooks, React Router, Component Life Cycles, SPA Architecture, State Management.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'languages',
      level: 'Advanced',
      percentage: 88,
      icon: '⚡',
      color: '#f59e0b',
      desc: 'Async/Await, Promises, Closures, Array methods, DOM manipulation, Modern syntax.'
    },
    {
      name: 'HTML5 & Semantic Web',
      category: 'frontend',
      level: 'Expert',
      percentage: 95,
      icon: '🌐',
      color: '#f97316',
      desc: 'Semantic structure, accessibility standards, SEO tags, responsive viewport configuration.'
    },
    {
      name: 'CSS3 & Modern Layouts',
      category: 'frontend',
      level: 'Advanced',
      percentage: 90,
      icon: '🎨',
      color: '#3b82f6',
      desc: 'Flexbox, CSS Grid, Glassmorphism, CSS Custom Properties, Animations, Media Queries.'
    },
    {
      name: 'Bootstrap 5',
      category: 'frontend',
      level: 'Advanced',
      percentage: 88,
      icon: '🅱️',
      color: '#a855f7',
      desc: 'Responsive grid system, utilities, interactive components, custom theming.'
    },
    {
      name: 'PHP',
      category: 'backend',
      level: 'Proficient',
      percentage: 80,
      icon: '🐘',
      color: '#818cf8',
      desc: 'Server-side scripting, OOP PHP, session management, REST API endpoints, form handling.'
    },
    {
      name: 'MySQL & Relational DB',
      category: 'backend',
      level: 'Proficient',
      percentage: 82,
      icon: '🐬',
      color: '#06b6d4',
      desc: 'Schema design, normalization, foreign keys, complex JOIN queries, query optimization.'
    },
    {
      name: 'Java',
      category: 'languages',
      level: 'Proficient',
      percentage: 78,
      icon: '☕',
      color: '#ef4444',
      desc: 'Object-Oriented Programming, data structures, algorithms, foundational engineering.'
    },
    {
      name: 'Python',
      category: 'languages',
      level: 'Intermediate',
      percentage: 72,
      icon: '🐍',
      color: '#10b981',
      desc: 'Algorithm implementation, scripting, data manipulation, automation tasks.'
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Advanced',
      percentage: 85,
      icon: '🐙',
      color: '#f43f5e',
      desc: 'Version control, branch management, merge conflict resolution, team repositories.'
    },
    {
      name: 'Vite & Build Tooling',
      category: 'tools',
      level: 'Advanced',
      percentage: 85,
      icon: '⚡',
      color: '#eab308',
      desc: 'Fast HMR, asset bundling, build optimization, dev server configuration.'
    },
    {
      name: 'Linux CLI & Apache/XAMPP',
      category: 'tools',
      level: 'Proficient',
      percentage: 75,
      icon: '🐧',
      color: '#14b8a6',
      desc: 'Command-line navigation, file permissions, local server hosting, environment config.'
    }
  ];

  const roadmapItems = [
    {
      title: 'Next.js & Server Components',
      category: 'Full-Stack React',
      status: 'In Progress',
      progress: 60,
      icon: '▲'
    },
    {
      title: 'TypeScript',
      category: 'Type-Safe Development',
      status: 'In Progress',
      progress: 50,
      icon: '🔷'
    },
    {
      title: 'Laravel & Fullstack PHP',
      category: 'Backend Framework',
      status: 'Next Up',
      progress: 35,
      icon: '🔴'
    },
    {
      title: 'Docker & Containerization',
      category: 'DevOps',
      status: 'Planned',
      progress: 20,
      icon: '🐳'
    }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeFilter);

  return (
    <div className="skills-page-container page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-subtitle-badge">Technical Arsenal</span>
          <h1 className="page-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h1>
          <p className="page-description">
            A comprehensive breakdown of the languages, frameworks, databases, and development tools I use to build scalable web applications.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="skills-filter-container">
          <div className="filter-pill-group glass-panel">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-interactive-grid mb-5">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap" style={{ background: `${skill.color}15`, borderColor: `${skill.color}40` }}>
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <div className="skill-meta">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level-badge" style={{ color: skill.color }}>{skill.level}</span>
                </div>
                <div className="skill-percent-text">{skill.percentage}%</div>
              </div>

              {/* Progress bar */}
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill"
                  style={{ 
                    width: `${skill.percentage}%`,
                    background: `linear-gradient(90deg, ${skill.color}, #38bdf8)` 
                  }}
                ></div>
              </div>

              <p className="skill-description">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Learning Roadmap / Future Exploration */}
        <section className="roadmap-section glass-panel">
          <div className="section-header-compact">
            <span className="section-tag">Continuous Growth</span>
            <h2 className="section-heading">Current Learning & Roadmap</h2>
            <p className="section-desc-sub">Technologies I am currently exploring and integrating into my engineering stack.</p>
          </div>

          <div className="roadmap-grid">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="roadmap-card glass-card">
                <div className="roadmap-top">
                  <span className="roadmap-icon">{item.icon}</span>
                  <span className="roadmap-badge">{item.status}</span>
                </div>
                <h4 className="roadmap-title">{item.title}</h4>
                <p className="roadmap-category">{item.category}</p>

                <div className="roadmap-progress-wrap">
                  <div className="roadmap-progress-bar">
                    <div 
                      className="roadmap-progress-fill" 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="roadmap-percent">{item.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Banner */}
        <div className="skills-cta-wrap mt-5 text-center">
          <p className="skills-cta-text">Want to see these skills in real-world application?</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/projects" className="btn-glow">
              <span>View Projects Built With These Skills</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
