import React, { useEffect, useRef, useState } from 'react';
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
      title: "Calendar Integration",
      description: "Visual calendar view showing all academic commitments and deadlines in one organized interface.",
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

        <div className="tech-stack">
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

        <div className="project-challenges">
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

const AppShowcase = () => {
  const showcaseRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);

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
      { threshold: 0.1 }
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const appScreens = [
    {
      title: "Dashboard Overview",
      description: "Main dashboard showing today's schedule, upcoming assignments, and quick task overview",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Class Schedule",
      description: "Weekly class schedule view with conflict detection and time slot management",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Assignment Tracker",
      description: "Comprehensive assignment management with priority levels and due date tracking",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Task Management",
      description: "Flexible task organization system with categories and completion tracking",
      image: "/api/placeholder/300/600"
    }
  ];

  return (
    <section className="app-showcase">
      <div className="app-showcase-container">
        <div ref={showcaseRef} className="showcase-content fade-in-element">
          <h2>App Interface</h2>
          <p className="showcase-subtitle">
            Explore the intuitive design and user-friendly interface of our college scheduling application
          </p>
          
          <div className="showcase-gallery">
            <div className="gallery-main">
              <div className="phone-mockup">
                <img 
                  src={appScreens[activeScreen].image} 
                  alt={appScreens[activeScreen].title}
                  className="main-screen"
                />
              </div>
              <div className="screen-info">
                <h3>{appScreens[activeScreen].title}</h3>
                <p>{appScreens[activeScreen].description}</p>
              </div>
            </div>
            
            <div className="screen-thumbnails">
              {appScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`screen-thumb ${index === activeScreen ? 'active' : ''}`}
                  onClick={() => setActiveScreen(index)}
                >
                  <img src={screen.image} alt={screen.title} />
                  <span className="thumb-title">{screen.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserImpact = () => {
  const impactRef = useRef(null);
  const achievementsRef = useRef([]);

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
      { threshold: 0.1 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    achievementsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { title: "Android Development", description: "Successfully built a native Android application using Java/Kotlin", icon: "📱" },
    { title: "Team Collaboration", description: "Effective collaboration with multiple developers across different components", icon: "👥" },
    { title: "UI/UX Design", description: "Created intuitive user interfaces following Material Design principles", icon: "🎨" },
    { title: "Database Management", description: "Implemented local SQLite database for efficient data storage and retrieval", icon: "💾" }
  ];

  return (
    <section className="user-impact">
      <div className="user-impact-container">
        <div ref={impactRef} className="impact-content fade-in-element">
          <h2>Project Achievements</h2>
          <p className="impact-description">
            Our College Scheduler App project successfully demonstrated our ability to build a comprehensive 
            Android application that addresses real student needs through thoughtful design and development.
          </p>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                ref={(el) => achievementsRef.current[index] = el}
                className="achievement-card fade-in-element"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="impact-highlights">
            <div className="highlight-item">
              <h3>Academic Problem Solving</h3>
              <p>Identified and addressed real challenges students face in managing their academic responsibilities</p>
            </div>
            <div className="highlight-item">
              <h3>Technical Skills Development</h3>
              <p>Gained hands-on experience with Android development, database design, and mobile UI/UX principles</p>
            </div>
            <div className="highlight-item">
              <h3>Project Management</h3>
              <p>Successfully coordinated team efforts to deliver a functional application within project timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DevelopmentProcess = () => {
  const processRef = useRef(null);

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
      { threshold: 0.1 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      role: "Frontend Developer & UI/UX Designer",
      responsibilities: ["Android UI development", "User experience design", "Interface prototyping", "Usability testing"],
      highlight: true
    },
    {
      role: "Android Developer",
      responsibilities: ["Core app functionality", "Database implementation", "Notification system", "Performance optimization"]
    },
    {
      role: "Backend Developer",
      responsibilities: ["Data architecture", "Local storage optimization", "API design", "Data synchronization"]
    },
    {
      role: "Product Designer",
      responsibilities: ["User research", "Visual design", "Design systems", "User journey mapping"]
    }
  ];

  return (
    <section className="development-process">
      <div className="development-process-container">
        <div ref={processRef} className="process-content fade-in-element">
          <h2>Development Process</h2>
          <p className="process-description">
            Our collaborative approach combined user-centered design with agile development 
            methodologies to create an app that truly serves student needs.
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`team-member ${member.highlight ? 'highlight' : ''}`}
              >
                <h3>{member.role}</h3>
                <ul>
                  {member.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="methodology-section">
            <h3>Our Development Methodology</h3>
            <div className="methodology-steps">
              <div className="method-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>User Research</h4>
                  <p>Conducted interviews with 50+ college students to understand pain points and needs</p>
                </div>
              </div>
              <div className="method-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Design & Prototyping</h4>
                  <p>Created wireframes and interactive prototypes based on user feedback and requirements</p>
                </div>
              </div>
              <div className="method-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Iterative Development</h4>
                  <p>Built the app in sprints with continuous user testing and feature refinement</p>
                </div>
              </div>
              <div className="method-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Testing & Launch</h4>
                  <p>Comprehensive testing with beta users followed by Play Store deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LearningsAndFuture = () => {
  const learningsRef = useRef(null);

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
      { threshold: 0.1 }
    );

    if (learningsRef.current) {
      observer.observe(learningsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const learnings = [
    {
      title: "User-Centered Design",
      lesson: "Conducting user research with college students was essential for understanding real pain points and needs.",
      icon: "👥"
    },
    {
      title: "Mobile Performance",
      lesson: "Optimizing for various Android devices and maintaining smooth performance with local data storage.",
      icon: "⚡"
    },
    {
      title: "Collaborative Development",
      lesson: "Effective team communication and code review processes are crucial for maintaining quality in team projects.",
      icon: "🤝"
    },
    {
      title: "Iterative Improvement",
      lesson: "Building prototypes and testing with potential users led to significant improvements in the final design.",
      icon: "🔄"
    }
  ];

  return (
    <section className="learnings-future">
      <div className="learnings-future-container">
        <div ref={learningsRef} className="learnings-content fade-in-element">
          <h2>Key Learnings</h2>
          <p className="learnings-description">
            Valuable insights gained from building a student-focused mobile application as a collaborative team project
          </p>
          
          <div className="learnings-grid">
            {learnings.map((item, index) => (
              <div key={index} className="learning-card">
                <div className="learning-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.lesson}</p>
              </div>
            ))}
          </div>
          
          <div className="technical-skills">
            <h3>Technical Skills Gained</h3>
            <div className="skills-list">
              <div className="skill-item">
                <h4>Android Development</h4>
                <p>Hands-on experience with Java/Kotlin, Android SDK, and Material Design components</p>
              </div>
              <div className="skill-item">
                <h4>Database Design</h4>
                <p>SQLite implementation for local data storage, relationships, and efficient data retrieval</p>
              </div>
              <div className="skill-item">
                <h4>Team Collaboration</h4>
                <p>Version control with Git, code reviews, and coordinated development across team members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectNavigation = () => {
  return (
    <section className="project-navigation">
      <div className="project-navigation-container">
        <div className="nav-content">
          <div className="nav-item prev">
            <span className="nav-label">Previous Project</span>
            <Link to="/projects/spotify-wrapped" className="nav-link">
              <span className="nav-arrow">←</span>
              <span className="nav-title">Spotify Wrapped</span>
            </Link>
          </div>
          
          <div className="nav-center">
            <Link to="/projects" className="back-to-projects">
              View All Projects
            </Link>
          </div>
          
          <div className="nav-item next">
            <span className="nav-label">More Projects</span>
            <Link to="/projects" className="nav-link">
              <span className="nav-title">Coming Soon</span>
              <span className="nav-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CollegeSchedulerProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Ensure black background
    document.documentElement.classList.add('scheduler-page');
    document.body.classList.add('scheduler-page');
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
    
    return () => {
      document.documentElement.classList.remove('scheduler-page');
      document.body.classList.remove('scheduler-page');
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="college-scheduler-project">
      <Navbar />
      <ProjectHero />
      <ProjectDetails />
      <AppShowcase />
      <UserImpact />
      <DevelopmentProcess />
      <LearningsAndFuture />
      <ProjectNavigation />
      <Footer />
    </div>
  );
};

export default CollegeSchedulerProject;