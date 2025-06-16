// Projects.jsx - Using ProjectBox Component
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
  const projects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'A web application designed to provide users with an engaging and visually appealing experience, allowing them to view their annual music insights anytime. As a key contributor, I focused on UI design to create an aesthetically pleasing and user-friendly interface.',
      image: wrapped,
      url: 'https://mewkat36.wixstudio.io/spotifywrapped',
      category: 'Web Application',
      tags: ['React', 'UI Design', 'Data Visualization'],
      status: 'live',
      featured: true
    },
    {
      id: 2,
      title: 'College Scheduler App',
      description: 'Built with Android Studio, the College Scheduler App offers a user-friendly solution for managing class schedules, exams, assignments, and tasks. It allows students to input courses, add tasks, and track exam dates.',
      image: schedulerApp,
      url: 'https://anishbandari19.wixsite.com/collegeappscheduler',
      category: 'Mobile Application',
      tags: ['Android Studio', 'Java', 'Mobile Development'],
      status: 'live'
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Handlers for project interactions
  const handleLearnMore = (project) => {
    console.log('Learn more about:', project.title);
    // Navigate to project detail page or show modal
    // Example: navigate(`/projects/${project.id}`);
  };

  const handleCaseStudy = (project) => {
    console.log('View case study for:', project.title);
    // Navigate to case study page or show detailed view
    // Example: navigate(`/case-studies/${project.id}`);
  };

  return (
    <section className="projects-grid-section">
      <div className="projects-grid-container">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="featured-section">
            <h2 className="projects-section-title">Featured Work</h2>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <ProjectBox
                  key={project.id}
                  project={project}
                  featured={true}
                  onLearnMore={handleLearnMore}
                  onCaseStudy={handleCaseStudy}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="other-projects-section">
            <h2 className="projects-section-title">
              {featuredProjects.length > 0 ? 'More Projects' : 'All Projects'}
            </h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <ProjectBox
                  key={project.id}
                  project={project}
                  featured={false}
                  onLearnMore={handleLearnMore}
                  onCaseStudy={handleCaseStudy}
                />
              ))}
            </div>
          </div>
        )}

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
      <AppleBackground />
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
};

export default Projects;