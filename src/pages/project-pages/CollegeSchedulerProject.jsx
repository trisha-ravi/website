// CollegeSchedulerProject.jsx - Place this in src/pages/
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './CollegeSchedulerProject.css';
import schedulerApp from '../../assets/collegeschedulerapp.png';

const ProjectHero = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="project-hero">
      <div className="project-hero-container">
        <Link to="/projects" className="back-button">
          <span className="arrow-left">←</span>
          Back to Projects
        </Link>
        
        <div className="project-hero-content">
          <div className="project-hero-text">
            <h1 className="project-main-title">
              College Scheduler
              <span className="highlight"> App</span>
            </h1>
            <p className="project-subtitle">
              A comprehensive Android application designed to help college students manage their academic life with class schedules, assignments, exams, and task management all in one place.
            </p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="icon">📅</span>
                <span>2024</span>
              </div>
              <div className="meta-item">
                <span className="icon">👥</span>
                <span>Team Project</span>
              </div>
              <div className="meta-item">
                <span className="icon">📱</span>
                <span>Android Development</span>
              </div>
              <div className="meta-item">
                <span className="icon">💻</span>
                <span>Frontend Development</span>
              </div>
              <div className="meta-item">
                <span className="icon">🎨</span>
                <span>UI/UX Design</span>
              </div>
            </div>
            <a 
              href="https://anishbandari19.wixsite.com/collegeappscheduler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="external-link">↗</span>
              View Project Details
            </a>
          </div>
          <div className="project-hero-image">
            <img src={schedulerApp} alt="College Scheduler App Interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectDetails = () => {
  const detailsRef = useRef(null);
  const featuresRef = useRef([]);

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
      { threshold: 0.1, rootMargin: '50px 0px -50px 0px' }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    featuresRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Smart Class Scheduling",
      description: "Intuitive interface for adding and managing class schedules with conflict detection and time optimization.",
      icon: "📚"
    },
    {
      title: "Assignment Tracking",
      description: "Comprehensive assignment management with due dates, priority levels, and progress tracking.",
      icon: "📝"
    },
    {
      title: "Exam Management",
      description: "Dedicated exam scheduler with study reminders, countdown timers, and preparation tracking.",
      icon: "📋"
    },
    {
      title: "Task Organization",
      description: "Flexible task management system for academic and personal tasks with categorization and deadlines.",
      icon: "✅"
    },
    {
      title: "Unified Dashboard",
      description: "Centralized view combining classes, assignments, exams, and personal tasks in one organized interface.",
      icon: "📊"
    },
    {
      title: "Notification System",
      description: "Smart reminder system with customizable notifications for upcoming deadlines and classes.",
      icon: "🔔"
    }
  ];

  return (
    <section className="project-details">
      <div className="project-details-container">
        <div ref={detailsRef} className="project-overview fade-in-element">
          <h2>Project Overview</h2>
          <p>
            The College Scheduler App was developed as a collaborative team project to address the common challenges 
            college students face in managing their academic responsibilities. Our team recognized that students often 
            struggle with juggling multiple classes, assignments, exams, and personal tasks across different platforms 
            and decided to create a unified solution.
          </p>
          <p>
            This native Android application provides students with a comprehensive toolkit for academic organization, 
            featuring an intuitive interface that makes scheduling and task management effortless. My role in the project 
            focused on frontend development and UI/UX design, working closely with the development team to ensure a 
            user-friendly experience that actually helps students stay organized and reduce academic stress.
          </p>
        </div>

        <div className="features-section">
          <h2 className="section-title fade-in-element">Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={(el) => featuresRef.current[index] = el}
                className="feature-card fade-in-element"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-stack fade-in-element">
          <h2>Technical Implementation</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>Android Development</h3>
              <ul>
                <li>Native Android development with Java/Kotlin</li>
                <li>Material Design guidelines and components</li>
                <li>Android SDK and development tools</li>
                <li>SQLite database for local data storage</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Frontend & UI</h3>
              <ul>
                <li>Custom UI components and layouts</li>
                <li>Responsive design for various screen sizes</li>
                <li>Smooth animations and transitions</li>
                <li>Accessibility features and usability testing</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Data Management</h3>
              <ul>
                <li>Local database architecture and optimization</li>
                <li>Data persistence and retrieval</li>
                <li>Notification scheduling and management</li>
                <li>Data backup and export functionality</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Design & UX</h3>
              <ul>
                <li>User research with college students</li>
                <li>Wireframing and prototyping in Figma</li>
                <li>Usability testing and iteration</li>
                <li>Intuitive information architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-challenges fade-in-element">
          <h2>Challenges & Solutions</h2>
          <div className="challenges-grid">
            <div className="challenge-item">
              <h3>User Experience Design</h3>
              <p>
                Creating an interface that could handle complex scheduling without overwhelming users required extensive 
                user research and testing. We conducted interviews with students and iteratively refined the UI based 
                on feedback to achieve the right balance of functionality and simplicity.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Data Architecture</h3>
              <p>
                Designing a database structure that could efficiently handle recurring events, flexible scheduling, 
                and complex relationships between classes, assignments, and exams. Our team collaborated to create 
                a robust yet performant data model.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Team Coordination</h3>
              <p>
                Coordinating development across multiple team members while maintaining code quality and design 
                consistency. We implemented code review processes, shared design systems, and regular team syncs 
                to keep everyone aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CollegeSchedulerProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="college-scheduler-project">
      <Navbar />
      <ProjectHero />
      <ProjectDetails />
      <Footer />
    </div>
  );
};

export default CollegeSchedulerProject;