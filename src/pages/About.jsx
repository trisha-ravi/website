// About.jsx - Modern Apple-Inspired About Page with Experience Section
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import aboutImage from '../assets/avatar-me.png';
import signatureImage from '../assets/signature.png';

const AboutHero = () => {
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
    <section ref={heroRef} className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-title">
            I'm Trisha, a Computer Science student passionate about creating 
            <span className="highlight"> human-centered AI experiences</span>
          </h1>
          <p className="about-subtitle">
            A Georgia Tech student focused on Human-Computer Interaction, blending technical expertise with user-centered design to create meaningful digital solutions.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={aboutImage} alt="Trisha" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

const AboutStory = () => {
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <section ref={storyRef} className="about-story">
      <div className="about-story-container">
        <div className="story-grid">
          <div className="story-content">
            <h2 className="story-title">My Journey</h2>
            <div className="story-text">
              <p>
                My journey in Computer Science at Georgia Tech has been driven by a fascination with the intersection of technology and human experience. Through my concentration in Intelligence & People (Human-Computer Interaction), I've discovered my passion for creating AI systems that truly serve people.
              </p>
              <p>
                From conducting user research at PARCE-Lab to leading design initiatives in Georgia Tech's competitive I2P program, I believe in building technology that is not only innovative but also accessible and intuitive. Every project is an opportunity to bridge the gap between complex systems and meaningful user experiences.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the latest developments in AI ethics, contributing to the AI @ GT community, or experimenting with new ways to make technology more human-centered.
              </p>
            </div>
            <div className="signature-container">
              <img src={signatureImage} alt="Trisha's Signature" className="signature-image" />
            </div>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <span className="stat-number">25%</span>
              <span className="stat-label">UI Navigation Improvement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Data Retrieval Speed Boost</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years at Georgia Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutExperience = () => {
  const experienceRef = useRef(null);

  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "PARCE-Lab | Georgia Institute of Technology",
      period: "February 2025 - Present",
      description: "Analyzing user interactions with virtual agents to enhance user trust and engagement. Conducting accessibility assessments for AI-driven educational tools and designing interactive learning interfaces with focus on usability and user comfort.",
      technologies: ["Human-Centered AI", "User Research", "Accessibility Testing", "UI Design"],
      type: "research"
    },
    {
      title: "Lead UI/UX + Backend Developer",
      company: "Idea-2-Prototype (I2P Program) | Georgia Tech",
      period: "August 2024 - Present",
      description: "Designed intuitive user interfaces resulting in 25% reduction in user navigation time. Developed backend systems with AI-driven insights, improving data processing efficiency by 20% and data retrieval speeds by 30%. Part of Georgia Tech's competitive Create-X Summer Launch program.",
      technologies: ["UI/UX Design", "Backend Development", "Azure", "OpenAI", "User Research"],
      type: "program"
    },
    {
      title: "Associate Director of Design",
      company: "Artificial Intelligence @ GT",
      period: "March 2024 - Present",
      description: "Spearheaded design of club's logo and visual assets, boosting brand identity and campus visibility. Produced engaging graphics, flyers, and social media content to promote events and grow membership within the AI community.",
      technologies: ["Brand Design", "Graphic Design", "Social Media", "Adobe Creative Suite"],
      type: "leadership"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'research': return '🔬';
      case 'program': return '🚀';
      case 'leadership': return '👥';
      case 'project': return '💻';
      default: return '💼';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'research': return '#4facfe';
      case 'program': return '#667eea';
      case 'leadership': return '#f093fb';
      case 'project': return '#764ba2';
      default: return '#667eea';
    }
  };

  return (
    <section ref={experienceRef} className="about-experience">
      <div className="about-experience-container">
        <h2 className="experience-title">Experience & Growth</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" style={{'--accent-color': getTypeColor(exp.type)}}>
              <div className="experience-marker">
                <span className="experience-icon">{getTypeIcon(exp.type)}</span>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSkills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { 
      category: 'Programming', 
      items: ['Java', 'Python', 'JavaScript', 'ReactJS', 'Node.js'],
      icon: '💻'
    },
    { 
      category: 'Design & UX', 
      items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research'],
      icon: '🎨'
    },
    { 
      category: 'Development', 
      items: ['Android Studio', 'Database Management', 'Backend Systems', 'Agile Methodologies'],
      icon: '🛠️'
    },
    { 
      category: 'Tools & Cloud', 
      items: ['GitHub', 'Figma', 'AWS', 'Adobe Creative Suite'],
      icon: '☁️'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section ref={skillsRef} className="about-skills">
      <div className="about-skills-container">
        <h2 className="skills-title">Skills & Passions</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <div className="skill-header">
                <span className="skill-icon">{skillGroup.icon}</span>
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <ul className="skill-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Let's Create Something Amazing Together</h2>
          <p className="cta-subtitle">
            Dive into my portfolio to see where my imagination and coding expertise have taken me, 
            and feel free to reach out if you'd like to collaborate or share a story!
          </p>
          <div className="cta-buttons">
            <a href="/projects" className="btn-primary">View My Work</a>
            <a href="/contact" className="btn-secondary">Get In Touch →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <AboutSkills />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;