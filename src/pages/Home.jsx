import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const ProjectsShowcase = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Coming soon",
      subtitle: "Creating the next generation of immersive and spatial gaming.",
      category: "Product Design",
      type: "mobile"
    },
    {
      id: 2,
      title: "College Scheduler App",
      subtitle: "A new tablet experience to inspire and nurture kids' curiosity.",
      category: "Product Design",
      type: "tablet"
    },
    {
      id: 3,
      title: "Spotify Wrapped",
      subtitle: "Simplifying access to daily essentials.",
      category: "Product Design",
      type: "mobile-suite"
    }
  ];

  const handleProjectClick = (projectTitle) => {
    // Navigate to projects page - you can customize this later
    console.log(`Viewing project: ${projectTitle}`);
    // For now, you could navigate to a projects page:
    // window.location.href = '/projects';
  };

  return (
    <section ref={projectsRef} className="projects-showcase">
      <div className="projects-container">
        <h2 className="projects-title">Selected Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
            >
              {/* Project Info */}
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-buttons">
                  <button 
                    className="btn-primary"
                    onClick={() => handleProjectClick(project.title)}
                  >
                    View Project
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => handleProjectClick(project.title)}
                  >
                    Case Study →
                  </button>
                </div>
              </div>

              {/* Project Visual */}
              <div className="project-visual">
                {project.type === 'mobile' && (
                  <div className="device-mobile">
                    <div className="device-screen">
                      <div className="screen-placeholder">AR Gaming Interface</div>
                    </div>
                  </div>
                )}

                {project.type === 'tablet' && (
                  <div className="device-tablet">
                    <div className="device-screen">
                      <div className="screen-placeholder">Kids Tablet Interface</div>
                    </div>
                  </div>
                )}

                {project.type === 'mobile-suite' && (
                  <div className="device-suite">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={`device-suite-item device-${i}`}>
                        <div className="device-screen">
                          <div className="screen-placeholder">App {i + 1}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const homeRef = useRef(null);
  const heroTextRef = useRef(null);

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
      {
        threshold: 0.1,
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  // Mouse tracking effect for hero text
  const handleMouseMove = (e) => {
    if (!heroTextRef.current) return;
    
    const rect = heroTextRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    heroTextRef.current.style.textShadow = `
      ${(x - rect.width/2) * 0.01}px ${(y - rect.height/2) * 0.01}px 20px rgba(255, 255, 255, 0.1)
    `;
  };

  const handleMouseLeave = () => {
    if (heroTextRef.current) {
      heroTextRef.current.style.textShadow = 'none';
    }
  };

  return (
    <div className="home-page">
      {/* Your Custom Navbar */}
      <Navbar />

      <div className="home-container" id="home" ref={homeRef}>
        <main className="hero">
          <div 
            className="hero-text"
            ref={heroTextRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            Hello <span className="emoji">👋</span> I'm a designer <span className="emoji">📎</span> creating simple,
            intuitive,<span className="emoji">⚡</span> and meaningful experiences for the digital space.<span className="emoji">💻</span>
          </div>
          <div className="hero-description">
            I create digital systems and <br/>
            experiences that connect people and technology.
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-cta">
            <Link to="/about" className="btn-primary hero-btn">
              Learn More About Me
            </Link>
            <Link to="/projects" className="btn-secondary hero-btn">
              View My Work →
            </Link>
          </div>
        </main>
      </div>

      {/* Projects Showcase Section */}
      <div className="projects-section">
        <ProjectsShowcase />
      </div>
      
      {/* Footer Component - Using the reusable component */}
      <Footer />
    </div>
  );
};

export default Home;