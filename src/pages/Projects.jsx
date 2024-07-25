// src/Projects.js
import React, { useEffect, useRef } from 'react';
import ProjectBox from '../components/ProjectBox';
import CurvyLine from './CurvyLine'; 
import './Projects.css';
import wrapped from '../assets/wrapped-logo.png';
import butterfly from '../assets/butterfly.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'Spotify Wrapped functionality redesigned.',
      gradientColors: ['#F3F3F3', '#F79256', '#A6D9F7'],
      size: { width: 1300, height: 650 },
      position: 'relative',
      image: wrapped,
      url: 'https://mewkat36.wixstudio.io/spotifywrapped'
    },
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="projects-container">
      <div className="intro-text">
        <CurvyLine/>
        <p className="projects-intro animate-in">
          <strong>welcome to my portfolio, where innovation comes to life!</strong>
        </p>
        <img src={butterfly} alt="Butterfly" className="butterfly-overlay" />
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            className="project-box-wrapper"
          >
            <ProjectBox
              title={project.title}
              description={project.description}
              gradientColors={project.gradientColors}
              width={project.size.width}
              height={project.size.height}
              position={project.position}
              image={project.image}
              style={{ width: `${project.size.width}px`, height: `${project.size.height}px` }}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;