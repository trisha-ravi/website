import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ title, description, gradientColors, width, height, position, image, url }) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientColors.join(', ')})`,
  };

  const boxStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    position: position || 'relative',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="project-wrapper">
      <div className="project" style={boxStyle} onClick={handleClick}>
        <div className="image-container" style={gradientStyle}>
          {image && <img src={image} alt={title} className="project-image" />}
        </div>
      </div>
      <div className="text-container">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
