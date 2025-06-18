// SpotifyWrappedProject.jsx - Place this in src/pages/
import React, { useEffect, useRef } from 'react';
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

        <div className="tech-stack fade-in-element">
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

        <div className="project-challenges fade-in-element">
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

const SpotifyWrappedProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="spotify-wrapped-project">
      <Navbar />
      <ProjectHero />
      <ProjectDetails />
      <Footer />
    </div>
  );
};

export default SpotifyWrappedProject;