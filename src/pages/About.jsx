// About.jsx - Modern Apple-Inspired About Page
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
            I'm Trisha, a designer passionate about creating 
            <span className="highlight"> meaningful digital experiences</span>
          </h1>
          <p className="about-subtitle">
            A student and creative soul with a passion for drawing, travel, design, and coding.
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
                My artistic journey is fueled by the places I explore and the stories I gather along the way. 
                I love blending my creativity with my technical skills to craft unique and captivating designs and websites.
              </p>
              <p>
                Every project is an opportunity to tell a story, solve a problem, and create something beautiful. 
                I believe great design should be both functional and emotionally resonant.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new places, sketching in my notebook, 
                or experimenting with new creative tools and coding techniques.
              </p>
            </div>
            <div className="signature-container">
              <img src={signatureImage} alt="Trisha's Signature" className="signature-image" />
            </div>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Created</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Ideas Generated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSkills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { 
      category: 'Design', 
      items: ['UI/UX Design', 'Graphic Design', 'Brand Identity', 'Illustration'],
      icon: '🎨'
    },
    { 
      category: 'Development', 
      items: ['React', 'JavaScript', 'HTML/CSS', 'Web Development'],
      icon: '💻'
    },
    { 
      category: 'Creative', 
      items: ['Drawing', 'Sketching', 'Digital Art', 'Photography'],
      icon: '✏️'
    },
    { 
      category: 'Tools', 
      items: ['Figma', 'Adobe Suite', 'VS Code', 'Git'],
      icon: '🛠️'
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
      <AboutSkills />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;