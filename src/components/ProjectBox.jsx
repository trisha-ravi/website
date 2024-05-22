// ProjectBox.jsx
import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ title, description, gradientColors, width, height, position, image, url }) => {
  // Style for gradient overlay
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientColors.join(', ')})`
  };

  // Style for the box container
  const boxStyle = {
    width: width ? `${width}px` : '250px',
    height: height ? `${height}px` : '250px',
    position: position || 'relative',
    cursor: 'pointer'
  };

  // Style for the project image (with marginLeft)
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
    display: 'block',
    marginLeft: '330px' 
  };

  // Handle the click event
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="project" style={boxStyle} onClick={handleClick}>
      {/* Gradient overlay */}
      <div className="project-gradient" style={gradientStyle}></div>
      {/* Image inside the box (if provided) */}
      {image && <img src={image} alt={title} className="project-image" style={imageStyle} />}
      {/* Title and Description */}
      <div className="project-text">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;