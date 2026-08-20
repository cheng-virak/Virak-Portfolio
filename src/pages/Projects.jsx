import { useState } from 'react';
import CardProject from "../commponants/CardProject";
import cShopImage from '../assets/image_copy.png';
import autocarShop from '../assets/car-shop.png';
import Portfolio from '../assets/Portfolio.png';
import LAF from '../assets/lostandfound.png';
import '../style/Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'fullstack', label: 'Fullstack & Backend' },
    { id: 'academic', label: 'Engineering & CS' },
    { id: 'team', label: 'Team Projects' }
  ];

  const projectList = [
    {
      id: 1,
      title: "C-Shop E-Commerce Store",
      category: "frontend",
      description: "A modern responsive online fashion and clothing store interface with interactive product discovery, category filtering, cart overview, and promotional deal banners.",
      imageUrl: cShopImage,
      tags: ["React.js", "CSS3", "JavaScript", "Responsive UI"],
      demoUrl: "https://cheng-virak.github.io/ShopWeb/",
      githubUrl: "https://github.com/cheng-virak/ShopWeb.git",
      featured: false
    },
    {
      id: 2,
      title: "Personal Developer Portfolio",
      category: "frontend",
      description: "High-performance personal developer portfolio built with React 19, Vite, and a custom clean responsive CSS design system.",
      imageUrl: Portfolio,
      tags: ["React.js", "Vite", "Modern CSS", "SPA"],
      demoUrl: "#",
      githubUrl: "https://github.com/cheng-virak/Virak-Portfolio.git",
      featured: false,
    },
    {
      id: 3,
      title: "Car Shop E-commerce",
      category: "fullstack",
      description: "Car shop e-commerce is a web application that helps people buy and sell cars.",
      imageUrl: autocarShop,
      tags: ["React.js", "Railway", "Bootstrap 5", "Relational DB"],
      demoUrl: "https://shop.rachhy.online/",
      githubUrl: "https://github.com/sothunrachhy/henghuy-autocars.git",
      featured: false,
      isTeamProject: true
    },
    {
      id: 4,
      title: "Lost And Found project",
      category: "fullstack",
      description: "Lost and Found is a web application that helps people find lost and found items.",
      imageUrl: LAF,
      tags: ["React.js", "Node.js", "MongoDB", "Team Build"],
      demoUrl: "https://www.lostfound.wtf/",
      githubUrl: "https://github.com/sothunrachhy/lostandfound.git",
      featured: false,
      isTeamProject: true
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectList
    : projectList.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page-container page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="page-header animate-fade-up">
          <span className="page-subtitle-badge">Portfolio</span>
          <h1 className="page-title">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-description">
            Web applications and programming projects I have built during university and self-study.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar animate-fade-up delay-1">
          <div className="filter-pill-group glass-panel">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-container mb-5 animate-fade-up delay-2">
          {filteredProjects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
              isTeamProject={project.isTeamProject || false}
            />
          ))}
        </div>

        {/* GitHub Stats / Collaboration Callout */}
        <div className="github-callout glass-panel">
          <div className="github-callout-content">
            <div className="github-icon-large">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </div>
            <div>
              <h3 className="callout-title">Looking for more repositories?</h3>
              <p className="callout-desc">
                Visit my GitHub to check out my open repositories and coursework code.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/cheng-virak"
            target="_blank"
            rel="noreferrer"
            className="btn-glow"
          >
            <span>View GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
