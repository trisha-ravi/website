// ProjectBox.jsx - Reusable Project Card Component
import React, { useRef, useEffect } from 'react';
import './ProjectBox.css';

const ProjectBox = ({ 
  project, 
  featured = false, 
  className = '',
  onLearnMore,
  onCaseStudy 
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const {
    id,
    title,
    description,
    image,
    url,
    category,
    tags = [],
    status = 'live' // 'live', 'coming-soon', 'in-progress'
  } = project;

  const handlePrimaryAction = () => {
    if (status === 'live' && url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore(project);
    }
  };

  const handleCaseStudy = () => {
    if (onCaseStudy) {
      onCaseStudy(project);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`project-box ${featured ? 'featured-project' : ''} ${className}`}
    >
      <div className="project-image-container">
        <img 
          src={image} 
          alt={title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay">
          {featured ? (
            <div className="project-overlay-content">
              <h3 className="overlay-title">{title}</h3>
              <p className="overlay-category">{category}</p>
              {status === 'live' && (
                <button 
                  className="overlay-button"
                  onClick={handlePrimaryAction}
                  aria-label={`View ${title} project`}
                >
                  View Project
                </button>
              )}
            </div>
          ) : (
            <button 
              className="project-link"
              onClick={handlePrimaryAction}
              disabled={status !== 'live'}
              aria-label={`View ${title} project`}
            >
              {status === 'live' ? 'View Project →' : 'Coming Soon'}
            </button>
          )}
        </div>
        
        {/* Status Badge */}
        {status !== 'live' && (
          <div className="project-status-badge">
            {status === 'coming-soon' && 'Coming Soon'}
            {status === 'in-progress' && 'In Progress'}
          </div>
        )}
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <div className="project-category">{category}</div>
          {tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-actions">
          {status === 'live' ? (
            <button 
              className="btn-primary"
              onClick={handlePrimaryAction}
              aria-label={`View ${title} live demo`}
            >
              {url === '#' ? 'Coming Soon' : 'Live Demo'}
            </button>
          ) : (
            <button 
              className="btn-primary disabled"
              disabled
              aria-label="Project coming soon"
            >
              Coming Soon
            </button>
          )}
          
          <button 
            className="btn-secondary"
            onClick={featured ? handleCaseStudy : handleLearnMore}
            aria-label={`Learn more about ${title}`}
          >
            {featured ? 'Case Study →' : 'Learn More →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
