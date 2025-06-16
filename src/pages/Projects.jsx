// Projects.jsx - Black Theme to Match Portfolio
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectBox from '../components/ProjectBox';
import './Projects.css';
import wrapped from '../assets/wrapped-logo.png';
import schedulerApp from '../assets/scheduler-app.png';

const AppleBackground = () => {
  return (
    <div className="apple-background">
      <div className="apple-mesh"></div>
      <div className="apple-orb-1"></div>
      <div className="apple-orb-2"></div>
      <div className="apple-orb-3"></div>
      <div className="apple-grid"></div>
      <div className="apple-line-1"></div>
      <div className="apple-line-2"></div>
      <div className="apple-shape-1"></div>
      <div className="apple-shape-2"></div>
      <div className="apple-center-glow"></div>
    </div>
  );
};

const ProjectsHero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="projects-hero">
      <div className="projects-hero-container">
        <h1 className="projects-main-title">
          Welcome to my portfolio, where 
          <span className="highlight"> innovation comes to life</span>
        </h1>
        <p className="projects-subtitle">
          Explore my latest work and creative solutions that bring ideas to reality.
        </p>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'A web application designed to provide users with an engaging and visually appealing experience, allowing them to view their annual music insights anytime. As a key contributor, I focused on UI design to create an aesthetically pleasing and user-friendly interface.',
      image: wrapped,
      url: 'https://mewkat36.wixstudio.io/spotifywrapped',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'College Scheduler App',
      description: 'Built with Android Studio, the College Scheduler App offers a user-friendly solution for managing class schedules, exams, assignments, and tasks. It allows students to input courses, add tasks, and track exam dates.',
      image: schedulerApp,
      url: 'https://anishbandari19.wixsite.com/collegeappscheduler',
      category: 'Mobile Application'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
    <section className="projects-grid-section">
      <div className="projects-grid-container">
        <h2 className="projects-section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="project-card"
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-actions">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <button className="btn-secondary">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <AppleBackground />
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
};

export default Projects;