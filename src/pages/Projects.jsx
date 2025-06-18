// Projects.jsx - Modified with scroll fade-in animations
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Projects.css';
import wrapped from '../assets/wrapped.png';
import schedulerApp from '../assets/collegeschedulerapp.png';

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
          Hello 👋 I'm a designer 📎 creating simple, intuitive, ⚡ and meaningful experiences for the 
          <span className="highlight"> digital space</span>
        </h1>
        <p className="projects-subtitle">
          💻 I create digital systems and experiences that connect people and technology.
        </p>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'A web application providing users with engaging annual music insights and visualizations.',
      image: wrapped,
      url: 'https://mewkat36.wixstudio.io/spotifywrapped'
    },
    {
      id: 2,
      title: 'College Scheduler App',
      description: 'Android app for managing class schedules, exams, assignments, and academic tasks.',
      image: schedulerApp,
      url: 'https://anishbandari19.wixsite.com/collegeappscheduler'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe the section title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe each project card
    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [projects.length]);

  return (
    <section className="projects-grid-section">
      <div className="projects-grid-container">
        <h2 
          ref={titleRef}
          className="projects-section-title fade-in-element"
        >
          My Work
        </h2>
        <div className="projects-image-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => projectRefs.current[index] = el}
              className="project-image-card fade-in-element"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-only"
                />
              </a>
              <h3 className="project-title-below">{project.title}</h3>
              <p className="project-description-below">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="empty-state">
            <h3>Projects Coming Soon</h3>
            <p>Stay tuned for exciting new projects!</p>
          </div>
        )}
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
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
};

export default Projects;