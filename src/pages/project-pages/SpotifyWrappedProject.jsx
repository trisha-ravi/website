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
              <span className="highlight"> Mobile App</span>
            </h1>
            <p className="project-subtitle">
              A reimagined mobile application that transforms your music listening habits into beautiful, personalized insights and shareable visualizations.
            </p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="icon">📅</span>
                <span>2024</span>
              </div>
              <div className="meta-item">
                <span className="icon">📱</span>
                <span>Mobile Development</span>
              </div>
              <div className="meta-item">
                <span className="icon">🎨</span>
                <span>UI/UX Design</span>
              </div>
              <div className="meta-item">
                <span className="icon">✏️</span>
                <span>Figma Prototyping</span>
              </div>
            </div>
            <a 
              href="https://mewkat36.wixstudio.io/spotifywrapped" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="external-link">↗</span>
              View Design Mockups
            </a>
          </div>
          <div className="project-hero-image">
            <img src={wrapped} alt="Spotify Wrapped Mobile App Interface" />
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
      description: "Deep dive into your music listening patterns with comprehensive mobile-optimized statistics and trends.",
      icon: "📊"
    },
    {
      title: "Mobile-First Design",
      description: "Intuitive touch-based interface designed specifically for mobile devices with smooth gestures.",
      icon: "📱"
    },
    {
      title: "Social Sharing",
      description: "Create beautiful shareable cards optimized for social media platforms directly from your phone.",
      icon: "🔗"
    },
    {
      title: "Interactive Visualizations",
      description: "Touch-friendly charts and graphs that respond to gestures for exploring your music data.",
      icon: "🎨"
    },
    {
      title: "Spotify Integration",
      description: "Seamless connection with your Spotify account to access listening history and preferences.",
      icon: "🎵"
    },
    {
      title: "Personalized Insights",
      description: "AI-powered recommendations and mood analysis tailored to your unique listening habits.",
      icon: "🤖"
    }
  ];

  return (
    <section className="project-details">
      <div className="project-details-container">
        <div ref={detailsRef} className="project-overview fade-in-element">
          <h2>Project Overview</h2>
          <p>
            The Spotify Wrapped Mobile App is a personal project that reimagines how users interact with their 
            music analytics on mobile devices. Recognizing that most music consumption happens on smartphones, 
            I designed a mobile-first experience that goes beyond Spotify's annual Wrapped feature with 
            year-round insights and enhanced personalization.
          </p>
          <p>
            This project focused on creating an intuitive mobile interface that makes complex music data 
            accessible and engaging through thoughtful UI/UX design. Using Figma for comprehensive mockups 
            and prototyping, I developed a design system that prioritizes mobile usability while maintaining 
            visual appeal and data clarity.
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
          <h2>Design & Development Approach</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>Mobile Development</h3>
              <ul>
                <li>Native Android development for optimal performance</li>
                <li>Material Design principles and components</li>
                <li>Touch-optimized interfaces and gesture controls</li>
                <li>Responsive layouts for various screen sizes</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Design Process</h3>
              <ul>
                <li>Figma for wireframing and high-fidelity mockups</li>
                <li>Interactive prototyping for user flow validation</li>
                <li>Component-based design system creation</li>
                <li>Mobile-first design methodology</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>API Integration</h3>
              <ul>
                <li>Spotify Web API for music data access</li>
                <li>OAuth 2.0 authentication implementation</li>
                <li>Real-time data synchronization</li>
                <li>Offline data caching strategies</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>User Experience</h3>
              <ul>
                <li>User research and persona development</li>
                <li>Accessibility-focused design decisions</li>
                <li>Performance optimization for mobile devices</li>
                <li>Intuitive navigation and information architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-challenges">
          <h2>Design Challenges & Solutions</h2>
          <div className="challenges-grid">
            <div className="challenge-item">
              <h3>Mobile Data Visualization</h3>
              <p>
                Presenting complex music analytics on small screens required innovative visualization approaches. 
                I developed touch-friendly chart interactions and progressive disclosure patterns that reveal 
                detailed information without overwhelming the mobile interface.
              </p>
            </div>
            <div className="challenge-item">
              <h3>Performance on Mobile</h3>
              <p>
                Ensuring smooth performance while handling large datasets required careful optimization strategies. 
                I implemented lazy loading, data caching, and efficient rendering techniques to maintain 60fps 
                interactions even with complex visualizations.
              </p>
            </div>
            <div className="challenge-item">
              <h3>User Engagement</h3>
              <p>
                Creating an app that users would want to use year-round, not just annually, required thoughtful 
                feature planning. I designed dynamic content updates, personalized notifications, and social 
                sharing features to maintain ongoing engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const DesignShowcase = () => {
//   const showcaseRef = useRef(null);
//   const [activeImage, setActiveImage] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in-visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (showcaseRef.current) {
//       observer.observe(showcaseRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const mockups = [
//     {
//       title: "Home Dashboard",
//       description: "Clean, mobile-optimized dashboard showing personalized music insights and quick access to features",
//       image: "/api/placeholder/300/600"
//     },
//     {
//       title: "Analytics Deep Dive",
//       description: "Interactive charts and graphs designed for touch navigation with detailed listening statistics",
//       image: "/api/placeholder/300/600"
//     },
//     {
//       title: "Social Sharing",
//       description: "Beautifully designed shareable cards with customizable templates for social media",
//       image: "/api/placeholder/300/600"
//     },
//     {
//       title: "Profile & Settings",
//       description: "User profile management with Spotify integration and personalization options",
//       image: "/api/placeholder/300/600"
//     }
//   ];

//   return (
//     <section className="project-showcase">
//       <div className="project-showcase-container">
//         <div ref={showcaseRef} className="showcase-content fade-in-element">
//           <h2>Design Mockups</h2>
//           <p className="showcase-subtitle">
//             Explore the mobile interface design created in Figma, showcasing the user experience and visual design
//           </p>
          
//           <div className="showcase-gallery">
//             <div className="gallery-main">
//               <img 
//                 src={mockups[activeImage].image} 
//                 alt={mockups[activeImage].title}
//                 className="main-image mobile-mockup"
//               />
//               <div className="image-overlay">
//                 <h3>{mockups[activeImage].title}</h3>
//                 <p>{mockups[activeImage].description}</p>
//               </div>
//             </div>
            
//             <div className="gallery-thumbnails">
//               {mockups.map((mockup, index) => (
//                 <div
//                   key={index}
//                   className={`thumbnail ${index === activeImage ? 'active' : ''}`}
//                   onClick={() => setActiveImage(index)}
//                 >
//                   <img src={mockup.image} alt={mockup.title} />
//                   <span className="thumbnail-title">{mockup.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const DesignProcess = () => {
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

  return (
    <section className="team-collaboration">
      <div className="team-collaboration-container">
        <div ref={processRef} className="team-content fade-in-element">
          <h2>Design Process</h2>
          <p className="team-description">
            A comprehensive mobile-first design approach that prioritized user experience and technical feasibility 
            throughout the development process.
          </p>
          
          <div className="collaboration-process">
            <h3>Development Workflow</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Research & Analysis</h4>
                  <p>User research, competitive analysis of music apps, and identification of pain points in existing solutions</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Figma Mockups</h4>
                  <p>Wireframing, high-fidelity designs, and interactive prototypes to validate user flows</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Mobile Development</h4>
                  <p>Native Android implementation with API integration and performance optimization</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Testing & Iteration</h4>
                  <p>User testing, performance analysis, and iterative improvements based on feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div className="design-principles" style={{ marginTop: '4rem' }}>
            <h3>Design Principles</h3>
            <div className="team-grid">
              <div className="team-member">
                <h3>Mobile-First Approach</h3>
                <ul>
                  <li>Touch-optimized interface design</li>
                  <li>Thumb-friendly navigation patterns</li>
                  <li>Responsive layouts for all devices</li>
                  <li>Performance optimization for mobile</li>
                </ul>
              </div>
              <div className="team-member">
                <h3>User-Centered Design</h3>
                <ul>
                  <li>Intuitive information architecture</li>
                  <li>Accessibility-first design decisions</li>
                  <li>Progressive disclosure of complex data</li>
                  <li>Consistent design language</li>
                </ul>
              </div>
              <div className="team-member">
                <h3>Visual Design</h3>
                <ul>
                  <li>Spotify-inspired color palette</li>
                  <li>Modern typography and spacing</li>
                  <li>Engaging micro-interactions</li>
                  <li>Beautiful data visualizations</li>
                </ul>
              </div>
              <div className="team-member">
                <h3>Technical Implementation</h3>
                <ul>
                  <li>Native Android development</li>
                  <li>Spotify API integration</li>
                  <li>Real-time data processing</li>
                  <li>Offline functionality support</li>
                </ul>
              </div>
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
    { title: "Mobile-First Development", description: "Successfully designed and built a native Android application with intuitive mobile UX", icon: "📱" },
    { title: "Figma Prototyping", description: "Created comprehensive design system and interactive prototypes for user validation", icon: "🎨" },
    { title: "API Integration", description: "Implemented Spotify Web API integration with OAuth 2.0 authentication", icon: "🔗" },
    { title: "Data Visualization", description: "Built touch-friendly analytics and charts optimized for mobile interaction", icon: "📊" }
  ];

  return (
    <section className="project-impact">
      <div className="project-impact-container">
        <div ref={impactRef} className="impact-content fade-in-element">
          <h2>Project Achievements</h2>
          <p className="impact-description">
            This mobile-focused project successfully demonstrated advanced mobile development skills and user-centered 
            design thinking while creating an enhanced alternative to Spotify's annual Wrapped feature.
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
              <h3>Mobile Expertise</h3>
              <p>Gained deep understanding of mobile-first design principles and Android development patterns</p>
            </div>
            <div className="highlight-item">
              <h3>Design Systems</h3>
              <p>Created comprehensive design system in Figma with reusable components and consistent styling</p>
            </div>
            <div className="highlight-item">
              <h3>User Experience</h3>
              <p>Developed intuitive touch-based interactions that make complex data accessible on mobile devices</p>
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
      title: "Mobile-First Design",
      lesson: "Designing for mobile first requires different thinking about information hierarchy and user interactions.",
      icon: "📱"
    },
    {
      title: "API Integration",
      lesson: "Working with third-party APIs like Spotify requires careful handling of authentication and data processing.",
      icon: "⚡"
    },
    {
      title: "User Testing",
      lesson: "Regular testing with real users revealed important insights about mobile usability and gesture preferences.",
      icon: "👤"
    },
    {
      title: "Performance Optimization",
      lesson: "Mobile devices require special attention to performance, especially when handling large datasets.",
      icon: "🚀"
    }
  ];

  return (
    <section className="lessons-learned">
      <div className="lessons-learned-container">
        <div ref={lessonsRef} className="lessons-content fade-in-element">
          <h2>Key Learnings</h2>
          <p className="lessons-description">
            Valuable insights gained from designing and developing a complex mobile application with rich data visualizations
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
                <h4>Android Development</h4>
                <p>Native mobile development with Material Design principles and performance optimization</p>
              </div>
              <div className="skill-item">
                <h4>Figma Design</h4>
                <p>Advanced prototyping, component systems, and interactive mockup creation for mobile interfaces</p>
              </div>
              <div className="skill-item">
                <h4>API Integration</h4>
                <p>OAuth 2.0 implementation, data processing, and real-time synchronization with Spotify's API</p>
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
              <span className="nav-title">Portfolio</span>
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
              <span className="nav-title">Coming Soon</span>
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
      {/* <DesignShowcase /> */}
      <ProjectImpact />
      <DesignProcess />
      <LessonsLearned />
      <ProjectNavigation />
      <Footer />
    </div>
  );
};

export default SpotifyWrappedProject;