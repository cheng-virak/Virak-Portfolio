function CardProject({ 
  title, 
  description, 
  imageUrl, 
  tags = ['React', 'CSS3', 'JavaScript'], 
  demoUrl = '#', 
  githubUrl = 'https://github.com/cheng-virak',
  featured = false 
}) {
  return (
    <div className={`project-card-item glass-card ${featured ? 'featured-card' : ''}`}>
      <div className="project-card-banner">
        <img src={imageUrl} alt={title} className="project-img" />
        <div className="project-overlay">
          <div className="overlay-actions">
            {demoUrl && demoUrl !== '#' && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glow btn-sm"
                title="View Live Demo"
              >
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
            )}
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-glass btn-sm"
              title="View Source Code"
            >
              <span>Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tech-tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}

export default CardProject;