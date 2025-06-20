import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './SpotifyWrappedProject.css';
import wrapped from '../../assets/wrapped.png';

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
              Spotify Wrapped
              <span className="highlight"> Reimagined</span>
            </h1>
            <p className="project-subtitle">
              A personalized music analytics platform that transforms your listening habits into beautiful, shareable insights and visualizations.
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
              href="https://mewkat36.wixstudio.io/spotifywrapped" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="external-link">↗</span>
              View Live Project
            </a>
          </div>
          <div className="project-hero-image">
            <img src={wrapped} alt="Spotify Wrapped App Interface" />
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
      title: "Personalized Analytics",
      description: "Deep dive into your music listening patterns with comprehensive statistics and trends over time.",
      icon: "📊"
    },
    {
      title: "Beautiful Visualizations",
      description: "Transform raw data into stunning charts and graphics that tell your musical story.",
      icon: "🎨"
    },
    {
      title: "Social Sharing",
      description: "Create shareable cards and stories to showcase your music taste with friends and followers.",
      icon: "📱"
    },
    {
      title: "Genre Discovery",
      description: "Explore new music recommendations based on your listening history and preferences.",
      icon: "🎵"
    },
    {
      title: "Timeline View",
      description: "See how your music taste has evolved throughout the year with interactive timelines.",
      icon: "📅"
    },
    {
      title: "Artist Insights",
      description: "Get detailed information about your top artists and discover similar musicians.",
      icon: "🎤"
    }
  ];

  return (
    <section className="project-details">
      <div className="project-details-container">
        <div ref={detailsRef} className="project-overview fade-in-element">
          <h2>Project Overview</h2>
          <p>
            The Spotify Wrapped Reimagined project was a collaborative team effort to create a more comprehensive 
            and visually appealing alternative to Spotify's annual Wrapped feature. As a team, we wanted to push 
            the boundaries of what music analytics could look like with enhanced visualizations, deeper data analysis, 
            and more personalization options across both mobile and web platforms.
          </p>
          <p>
            This application was developed for both Android and web platforms, connecting to users' Spotify accounts 
            through the official API to analyze listening history and present data through interactive charts, 
            personalized recommendations, and shareable content cards. My role focused on frontend development and 
            UI/UX design, working closely with the team to create an experience that feels both informative and entertaining.
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
              <h3>Frontend & Web</h3>
              <ul>
                <li>React.js for component-based architecture</li>
                <li>Chart.js for data visualizations</li>
                <li>CSS3 with modern animations and transitions</li>
                <li>Responsive design for all device sizes</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Android Development</h3>
              <ul>
                <li>Native Android development with Java/Kotlin</li>
                <li>Material Design components</li>
                <li>Android SDK for mobile-specific features</li>
                <li>Cross-platform data synchronization</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend & APIs</h3>
              <ul>
                <li>Spotify Web API for music data</li>
                <li>OAuth 2.0 for secure authentication</li>
                <li>Node.js for server-side processing</li>
                <li>RESTful API design patterns</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Design & UX</h3>
              <ul>
                <li>Figma for wireframing and prototyping</li>
                <li>User research and testing methodologies</li>
                <li>Accessibility-first design approach</li>
                <li>Cross-platform design consistency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Solutions</h2>
          <div className="challenges-grid">
            <div className="challenge-item">
              <h3>Cross-Platform Consistency</h3>
              <p>
                Maintaining design and functionality consistency between Android and web platforms required careful 
                coordination between team members. We established design systems and shared components to ensure 
                a unified user experience across all platforms.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Team Collaboration</h3>
              <p>
                Working with multiple developers across different platforms required effective communication and 
                version control strategies. We implemented agile methodologies and used collaborative tools to 
                keep the project synchronized and on track.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Performance Optimization</h3>
              <p>
                With large datasets and complex animations across multiple platforms, performance was crucial. 
                Each platform required specific optimization strategies while maintaining feature parity and 
                smooth user interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectShowcase = () => {
  const showcaseRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

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

  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Comprehensive analytics dashboard showing top tracks, artists, and listening patterns",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Personalized Insights",
      description: "AI-powered recommendations and mood analysis based on listening history",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Social Sharing",
      description: "Beautiful shareable cards for social media with custom design templates",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Mobile Experience",
      description: "Seamless Android app with native performance and offline capabilities",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section className="project-showcase">
      <div className="project-showcase-container">
        <div ref={showcaseRef} className="showcase-content fade-in-element">
          <h2>Visual Showcase</h2>
          <p className="showcase-subtitle">
            Explore the user interface and experience across different platforms and features
          </p>
          
          <div className="showcase-gallery">
            <div className="gallery-main">
              <img 
                src={screenshots[activeImage].image} 
                alt={screenshots[activeImage].title}
                className="main-image"
              />
              <div className="image-overlay">
                <h3>{screenshots[activeImage].title}</h3>
                <p>{screenshots[activeImage].description}</p>
              </div>
            </div>
            
            <div className="gallery-thumbnails">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={screenshot.image} alt={screenshot.title} />
                  <span className="thumbnail-title">{screenshot.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectImpact = () => {
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
    { title: "Full-Stack Development", description: "Successfully built both web and mobile platforms with consistent functionality", icon: "💻" },
    { title: "API Integration", description: "Implemented Spotify Web API integration with OAuth 2.0 authentication", icon: "🔗" },
    { title: "Cross-Platform Design", description: "Created cohesive user experience across Android and web platforms", icon: "📱" },
    { title: "Data Visualization", description: "Built interactive charts and analytics using Chart.js and custom components", icon: "📊" }
  ];

  return (
    <section className="project-impact">
      <div className="project-impact-container">
        <div ref={impactRef} className="impact-content fade-in-element">
          <h2>Project Achievements</h2>
          <p className="impact-description">
            Our Spotify Wrapped reimagination successfully demonstrated advanced web and mobile development skills 
            while creating a more comprehensive alternative to Spotify's annual feature.
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
              <h3>Technical Complexity</h3>
              <p>Successfully handled complex data processing and visualization across multiple platforms</p>
            </div>
            <div className="highlight-item">
              <h3>Team Coordination</h3>
              <p>Effective collaboration between frontend, backend, and mobile development team members</p>
            </div>
            <div className="highlight-item">
              <h3>Design Innovation</h3>
              <p>Created enhanced user experience with additional features beyond standard Spotify Wrapped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCollaboration = () => {
  const teamRef = useRef(null);

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

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      role: "Frontend Developer & UI/UX Designer",
      responsibilities: ["React.js development", "Responsive design", "User experience optimization", "Design system creation"],
      highlight: true
    },
    {
      role: "Android Developer",
      responsibilities: ["Native Android development", "Material Design implementation", "Cross-platform synchronization", "Performance optimization"]
    },
    {
      role: "Backend Developer",
      responsibilities: ["API integration", "Data processing", "Authentication systems", "Server architecture"]
    },
    {
      role: "Data Analyst",
      responsibilities: ["Music data analysis", "Recommendation algorithms", "User behavior insights", "Performance metrics"]
    }
  ];

  return (
    <section className="team-collaboration">
      <div className="team-collaboration-container">
        <div ref={teamRef} className="team-content fade-in-element">
          <h2>Team Collaboration</h2>
          <p className="team-description">
            This project showcased the power of collaborative development, bringing together diverse skills 
            to create a cohesive and impactful user experience across multiple platforms.
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
          
          <div className="collaboration-process">
            <h3>Our Development Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Research & Planning</h4>
                  <p>User research, competitive analysis, and technical architecture planning</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Design & Prototyping</h4>
                  <p>Wireframing, visual design, and interactive prototypes for user testing</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Development & Testing</h4>
                  <p>Parallel development across platforms with continuous integration and testing</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Launch & Iteration</h4>
                  <p>User feedback collection and continuous improvement based on analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LessonsLearned = () => {
  const lessonsRef = useRef(null);

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

    if (lessonsRef.current) {
      observer.observe(lessonsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const lessons = [
    {
      title: "Cross-Platform Development",
      lesson: "Maintaining design consistency across web and mobile platforms requires early planning and shared design systems.",
      icon: "🔄"
    },
    {
      title: "API Integration",
      lesson: "Working with third-party APIs like Spotify requires careful handling of authentication and rate limiting.",
      icon: "⚡"
    },
    {
      title: "Data Visualization",
      lesson: "Creating meaningful visualizations from complex music data requires thoughtful design and user testing.",
      icon: "👤"
    },
    {
      title: "Team Collaboration",
      lesson: "Clear communication protocols and regular check-ins are crucial for successful team collaboration.",
      icon: "💬"
    }
  ];

  return (
    <section className="lessons-learned">
      <div className="lessons-learned-container">
        <div ref={lessonsRef} className="lessons-content fade-in-element">
          <h2>Key Learnings</h2>
          <p className="lessons-description">
            Valuable insights gained from building a complex, multi-platform application with a collaborative team
          </p>
          
          <div className="lessons-grid">
            {lessons.map((item, index) => (
              <div key={index} className="lesson-card">
                <div className="lesson-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.lesson}</p>
              </div>
            ))}
          </div>
          
          <div className="technical-skills">
            <h3>Technical Skills Gained</h3>
            <div className="skills-list">
              <div className="skill-item">
                <h4>React.js Development</h4>
                <p>Advanced component architecture, state management, and responsive design implementation</p>
              </div>
              <div className="skill-item">
                <h4>Android Development</h4>
                <p>Native mobile development with cross-platform design consistency and performance optimization</p>
              </div>
              <div className="skill-item">
                <h4>API Integration</h4>
                <p>OAuth 2.0 implementation, data processing, and real-time visualization with Chart.js</p>
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
            <span className="nav-label">More Projects</span>
            <Link to="/projects" className="nav-link">
              <span className="nav-arrow">←</span>
              <span className="nav-title">Coming Soon</span>
            </Link>
          </div>
          
          <div className="nav-center">
            <Link to="/projects" className="back-to-projects">
              View All Projects
            </Link>
          </div>
          
          <div className="nav-item next">
            <span className="nav-label">Next Project</span>
            <Link to="/projects/college-scheduler" className="nav-link">
              <span className="nav-title">College Scheduler</span>
              <span className="nav-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main component with all sections included
const SpotifyWrappedProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Ensure black background by adding classes to html and body
    document.documentElement.classList.add('spotify-page');
    document.body.classList.add('spotify-page');
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
    
    // Cleanup function to remove classes when component unmounts
    return () => {
      document.documentElement.classList.remove('spotify-page');
      document.body.classList.remove('spotify-page');
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="spotify-wrapped-project">
      <Navbar />
      <ProjectHero />
      <ProjectDetails />
      <ProjectShowcase />
      <ProjectImpact />
      <TeamCollaboration />
      <LessonsLearned />
      <ProjectNavigation />
      <Footer />
    </div>
  );
};

// This is the crucial default export that was missing
export default SpotifyWrappedProject;