import { useState } from 'react';
import CardProject from "../commponants/CardProject";
import cShopImage from '../assets/image.png';
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
    { id: 'team', label: '👥 Team Projects' }
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
        <div className="page-header">
          <span className="page-subtitle-badge">Featured Work</span>
          <h1 className="page-title">
            Crafted with <span className="gradient-text">Code</span> & Innovation
          </h1>
          <p className="page-description">
            A curated showcase of web applications, full-stack database solutions, and engineering projects I have built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
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
        <div className="projects-grid-container mb-5">
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
            <div className="github-icon-large">🐙</div>
            <div>
              <h3 className="callout-title">Looking for more source code and experiments?</h3>
              <p className="callout-desc">
                Visit my GitHub profile to explore my open repositories, algorithm exercises, and ongoing projects.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/cheng-virak"
            target="_blank"
            rel="noreferrer"
            className="btn-glow"
          >
            <span>Explore GitHub Profile</span>
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
