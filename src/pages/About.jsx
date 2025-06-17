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
                My journey in Computer Science at Georgia Tech began with a simple curiosity about how technology could better serve people. What started as an interest in programming quickly evolved into a deep fascination with the intersection of artificial intelligence and human experience. Through my concentration in Intelligence & People (Human-Computer Interaction), I've discovered that the most powerful technology isn't just about what it can do, but how it makes people feel and how seamlessly it integrates into their lives.
              </p>
              <p>
                At PARCE-Lab, I dive deep into understanding how users interact with virtual agents, always asking the critical question: how can we make AI more trustworthy and engaging? This research has shaped my perspective that technology should amplify human potential, not replace human connection. Whether I'm analyzing user interactions or designing accessible interfaces, I'm constantly thinking about the person on the other side of the screen.
              </p>
              <p>
                My experience leading UI/UX and backend development in Georgia Tech's competitive I2P program has taught me that great products emerge from the marriage of technical excellence and user empathy. When I achieved a 25% reduction in user navigation time or improved data processing efficiency by 20%, those weren't just numbers—they represented real people having better, more intuitive experiences with technology.
              </p>
              <p>
                Beyond the classroom and lab, I've found my voice in the AI community at Georgia Tech, where I've had the privilege of shaping our organization's visual identity and growing our community of future AI innovators. Every design I create, every interface I build, and every research question I pursue is driven by my belief that technology should be a force for human flourishing.
              </p>
              <p>
                When I'm not immersed in code or conducting user research, you'll find me exploring the latest developments in AI ethics, sketching interface ideas, or brainstorming new ways to make complex systems more human-centered. I'm constantly inspired by the challenge of building technology that doesn't just work, but truly serves and uplifts the people who use it.
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
      category: 'Programming Languages', 
      items: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Swift', level: 70 }
      ],
      icon: '💻',
      color: '#667eea'
    },
    { 
      category: 'Frontend & Design', 
      items: [
        { name: 'ReactJS', level: 85 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma', level: 95 },
        { name: 'Adobe Creative Suite', level: 80 }
      ],
      icon: '🎨',
      color: '#f093fb'
    },
    { 
      category: 'Backend & Cloud', 
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Database Management', level: 80 },
        { name: 'AWS', level: 70 },
        { name: 'Azure', level: 75 }
      ],
      icon: '☁️',
      color: '#4facfe'
    },
    { 
      category: 'Research & Development', 
      items: [
        { name: 'User Research', level: 90 },
        { name: 'Human-Computer Interaction', level: 85 },
        { name: 'Android Studio', level: 85 },
        { name: 'A/B Testing', level: 80 }
      ],
      icon: '🔬',
      color: '#764ba2'
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
            <div key={index} className="skill-group" style={{'--skill-color': skillGroup.color}}>
              <div className="skill-header">
                <span className="skill-icon">{skillGroup.icon}</span>
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <div className="skill-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{'--progress': `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
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