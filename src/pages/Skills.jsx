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
      icon: (
        <svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#38bdf8" />
          <g stroke="#38bdf8" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      color: '#38bdf8',
      desc: 'Hooks, React Router, Component Life Cycles, SPA Architecture, State Management.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'languages',
      level: 'Advanced',
      percentage: 88,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#f59e0b" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.5 0 2.4-.7 2.4-1.9v-7.1H10v7.1c0 .7-.4 1.1-1.1 1.1-.4 0-.9-.1-1.3-.3l-.6 1.3zm7.8.2c1.3 0 2.2-.6 2.8-1.5l-1.3-.8c-.3.5-.8.9-1.5.9-.9 0-1.5-.5-1.5-1.3 0-.8.5-1.2 1.6-1.6l.5-.2c1.7-.6 2.5-1.4 2.5-2.8 0-1.6-1.3-2.7-3.1-2.7-1.4 0-2.4.5-3.1 1.6l1.3.8c.4-.6.9-.9 1.7-.9.9 0 1.5.5 1.5 1.2 0 .7-.5 1.1-1.4 1.5l-.6.2c-1.7.7-2.7 1.5-2.7 3 0 1.7 1.3 2.6 3.1 2.6z" fill="#0b0f19" />
        </svg>
      ),
      color: '#f59e0b',
      desc: 'Async/Await, Promises, Closures, Array methods, DOM manipulation, Modern syntax.'
    },
    {
      name: 'HTML5 & Semantic Web',
      category: 'frontend',
      level: 'Expert',
      percentage: 95,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
          <path d="M3 2l1.5 17L12 21l7.5-2L21 2zm15.5 4.5H8l.3 2.5h9.8l-.9 9-5.2 1.4-5.2-1.4-.4-4h2.4l.2 2 3 .8 3-.8.3-3.5H7.4L6.9 6.5h11.4z"/>
        </svg>
      ),
      color: '#f97316',
      desc: 'Semantic structure, accessibility standards, SEO tags, responsive viewport configuration.'
    },
    {
      name: 'CSS3 & Modern Layouts',
      category: 'frontend',
      level: 'Advanced',
      percentage: 90,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
          <path d="M3 2l1.5 17L12 21l7.5-2L21 2zm15.5 4.5H8l.3 2.5h9.8-.3l-.3 3H9.3l.2 2h7.8l-.5 5-4.8 1.3-4.8-1.3-.3-3h2.3l.2 1.5 2.6.7 2.6-.7.3-3H8.7l-.9-9h12.2z"/>
        </svg>
      ),
      color: '#3b82f6',
      desc: 'Flexbox, CSS Grid, Glassmorphism, CSS Custom Properties, Animations, Media Queries.'
    },
    {
      name: 'Bootstrap 5',
      category: 'frontend',
      level: 'Advanced',
      percentage: 88,
      icon: (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="#a855f7">
          <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm4.146 12.077H5.49V3.923h3.013c1.782 0 2.766.866 2.766 2.378 0 .914-.528 1.624-1.353 1.942v.08c1.077.26 1.776 1.05 1.776 2.17 0 1.66-1.18 2.584-3.54 2.584m-1.31-6.947v2.222h1.277c.866 0 1.405-.41 1.405-1.127 0-.742-.55-1.095-1.464-1.095zm0 3.324v2.54h1.493c.96 0 1.597-.442 1.597-1.282 0-.88-.636-1.258-1.633-1.258z"/>
        </svg>
      ),
      color: '#a855f7',
      desc: 'Responsive grid system, utilities, interactive components, custom theming.'
    },
    {
      name: 'PHP',
      category: 'backend',
      level: 'Proficient',
      percentage: 80,
      icon: (
        <svg width="22" height="20" viewBox="0 0 24 24" fill="#818cf8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-6.2 13.2l1.3-6.4h2.4c1.2 0 2 .67 1.8 1.87-.18 1.2-1.2 1.87-2.4 1.87h-1.2l-.5 2.66H5.8zm2.5-4h.8c.58 0 .98-.31 1.07-.8.09-.49-.22-.8-.8-.8h-.8l-.27 1.6zm5.1 4l1.3-6.4h1.4l-.5 2.5h1.9l.5-2.5h1.4l-1.3 6.4h-1.4l.5-2.5h-1.9l-.5 2.5h-1.4zm6.4 0l1.3-6.4h2.4c1.2 0 2 .67 1.8 1.87-.18 1.2-1.2 1.87-2.4 1.87h-1.2l-.5 2.66h-1.4zm2.5-4h.8c.58 0 .98-.31 1.07-.8.09-.49-.22-.8-.8-.8h-.8l-.27 1.6z"/>
        </svg>
      ),
      color: '#818cf8',
      desc: 'Server-side scripting, OOP PHP, session management, REST API endpoints, form handling.'
    },
    {
      name: 'MySQL & Relational DB',
      category: 'backend',
      level: 'Proficient',
      percentage: 82,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#06b6d4">
          <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm-7 4.35C6.46 10.09 9.07 10.5 12 10.5s5.54-.41 7-1.15V11c0 .66-3.13 2-7 2s-7-1.34-7-2V9.35zm0 4.5C6.46 14.59 9.07 15 12 15s5.54-.41 7-1.15V15c0 .66-3.13 2-7 2s-7-1.34-7-2v-1.15zm0 4.5C6.46 19.09 9.07 19.5 12 19.5s5.54-.41 7-1.15V17c0 .66-3.13 2-7 2s-7-1.34-7-2v-1.15z" />
        </svg>
      ),
      color: '#06b6d4',
      desc: 'Schema design, normalization, foreign keys, complex JOIN queries, query optimization.'
    },
    {
      name: 'Java',
      category: 'languages',
      level: 'Proficient',
      percentage: 78,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#ef4444">
          <path d="M8.85 16.5s-.8.46.57.62c1.66.19 2.51.16 4.34-.18 0 0 .48.3 1.15.56-4.09 1.75-9.26-.1-6.06-.99zm-.5-2.3s-.9.67.47.79c1.77.18 3.17.2 5.6-.27 0 0 .34.34.87.53-4.96 1.45-10.49.11-6.94-1.05zm4.6-4.4c1.01 1.16-.27 2.2-.27 2.2s2.56-1.32 1.38-2.97c-1.1-1.54-1.94-2.3 2.61-4.93 0 0-7.14 1.78-3.72 5.7zm2.9 7.72s.59.49-.65.86c-2.35.71-9.77.92-11.84.03-.74-.32.65-.77 1.09-.86.46-.1.72-.08.72-.08-.83-.58-5.36 1.14-2.3 1.64 8.34 1.35 15.2-.61 12.98-1.59zm-7.35-5.36s-3.78.9-1.34 1.22c1.03.13 3.08.1 4.99-.05 1.56-.13 3.13-.39 3.13-.39s-.55.24-1.21.51c-4.87 1.28-14.27.68-11.56-.5 2.31-1 5.99-.79 5.99-.79zm6.77 3.78c4.95-2.57 2.66-5.04 1.07-4.71-.39.08-.57.15-.57.15s.15-.23.43-.33c3.2-1.12 5.66 3.32-1.03 5.08 0-.01.08-.08.1-.19zm-6.12 4.64c4.76.3 12.08-.17 12.25-2.38 0 0-.33.85-3.94 1.52-4.08.77-9.12.68-12.1.19 0 0 .61.5 3.79.67z"/>
        </svg>
      ),
      color: '#ef4444',
      desc: 'Object-Oriented Programming, data structures, algorithms, foundational engineering.'
    },
    {
      name: 'Python',
      category: 'languages',
      level: 'Intermediate',
      percentage: 72,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.27 2 8 3.55 8 4.5v1.5h4V7H5.5C4.12 7 3 8.12 3 9.5v3C3 13.88 4.12 15 5.5 15H7v-2.5C7 11.12 8.12 10 9.5 10H14.5C15.88 10 17 8.88 17 7.5V4.5C17 3.12 15.88 2 14.5 2H12zm-1 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" fill="#10b981"/>
          <path d="M12 22c3.73 0 4-1.55 4-2.5v-1.5h-4V17h6.5c1.38 0 2.5-1.12 2.5-2.5v-3C21 10.12 19.88 9 18.5 9H17v2.5C17 12.88 15.88 14 14.5 14H9.5C8.12 14 7 15.12 7 16.5v3C7 20.88 8.12 22 9.5 22H12zm1-1.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" fill="#059669"/>
        </svg>
      ),
      color: '#10b981',
      desc: 'Algorithm implementation, scripting, data manipulation, automation tasks.'
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Advanced',
      percentage: 85,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#f43f5e">
          <path d="M21.62 10.79l-8.41-8.41a2.38 2.38 0 0 0-3.37 0l-2.1 2.1 2.82 2.82a2.83 2.83 0 0 1 3.58 3.58l2.72 2.72a2.83 2.83 0 1 1-1.69 1.69l-2.55-2.55v4.2a2.83 2.83 0 1 1-2.38 0V11.2a2.83 2.83 0 0 1-1.52-3.71L6.1 5.11 2.38 8.83a2.38 2.38 0 0 0 0 3.37l8.41 8.41a2.38 2.38 0 0 0 3.37 0l7.46-7.45a2.38 2.38 0 0 0 0-3.37z"/>
        </svg>
      ),
      color: '#f43f5e',
      desc: 'Version control, branch management, merge conflict resolution, team repositories.'
    },
    {
      name: 'Vite & Build Tooling',
      category: 'tools',
      level: 'Advanced',
      percentage: 85,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 3 12 21.5 3 3h4l5 10 5-10h4z" fill="#eab308"/>
          <path d="M14 3l-2 4-2-4H8l4 8 4-8h-2z" fill="#a78bfa"/>
        </svg>
      ),
      color: '#eab308',
      desc: 'Fast HMR, asset bundling, build optimization, dev server configuration.'
    },
    {
      name: 'Linux CLI & Apache/XAMPP',
      category: 'tools',
      level: 'Proficient',
      percentage: 75,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      ),
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
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 17.51-6.19-8.48v8.48H9.83V6.49h1.64l6.19 8.48V6.49h1.64v11.02h-1.64z"/>
        </svg>
      )
    },
    {
      title: 'TypeScript',
      category: 'Type-Safe Development',
      status: 'In Progress',
      progress: 50,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
          <rect width="20" height="20" x="2" y="2" rx="3"/>
          <path d="M7 8h6M10 8v8M14 9h3a1.5 1.5 0 0 1 0 3h-3v4"/>
        </svg>
      )
    },
    {
      title: 'Laravel & Fullstack PHP',
      category: 'Backend Framework',
      status: 'Next Up',
      progress: 35,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      )
    },
    {
      title: 'Docker & Containerization',
      category: 'DevOps',
      status: 'Planned',
      progress: 20,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
          <rect width="3" height="3" x="4" y="9"/>
          <rect width="3" height="3" x="8" y="9"/>
          <rect width="3" height="3" x="12" y="9"/>
          <rect width="3" height="3" x="8" y="5"/>
          <rect width="3" height="3" x="12" y="5"/>
        </svg>
      )
    }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeFilter);

  return (
    <div className="skills-page-container page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="page-header animate-fade-up">
          <span className="page-subtitle-badge">Toolbox</span>
          <h1 className="page-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="page-description">
            Technologies, frameworks, and developer tools I work with to build web projects.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="skills-filter-container animate-fade-up delay-1">
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
        <div className="skills-interactive-grid mb-5 animate-fade-up delay-2">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <div className="skill-meta">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
                <div className="skill-percent-text">{skill.percentage}%</div>
              </div>

              {/* Progress bar */}
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>

              <p className="skill-description">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Learning Roadmap / Future Exploration */}
        <section className="roadmap-section glass-panel">
          <div className="section-header-compact">
            <span className="section-tag">Learning</span>
            <h2 className="section-heading">Currently Exploring</h2>
            <p className="section-desc-sub">Technologies and tools I am practicing and learning next.</p>
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
