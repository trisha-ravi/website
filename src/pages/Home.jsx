// Home.jsx - Homepage Component
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import wrapped from '../assets/wrapped-logo.png';
import schedulerApp from '../assets/scheduler-app.png';

const HomeHero = () => {
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
    <section ref={heroRef} className="home-hero">
      <div className="home-hero-container">
        <h1 className="home-main-title">
          Hello 👋 I'm a <span className="highlight">designer</span> 📎
        </h1>
        <p className="home-subtitle">
          creating simple, intuitive, ⚡ and meaningful experiences for the digital space. 💻
          <br />
          I create digital systems and experiences that connect people and technology.
        </p>
        <div className="home-cta">
          <Link to="/about" className="btn-secondary">
            Learn More About Me
          </Link>
          <Link to="/projects" className="btn-primary">
            View My Work →
          </Link>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [visibleStats, setVisibleStats] = useState([]);
  const statsRef = useRef([]);

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

    statsRef.current.forEach((stat) => {
      if (stat) {
        observer.observe(stat);
      }
    });

    return () => {
      statsRef.current.forEach((stat) => {
        if (stat) {
          observer.unobserve(stat);
        }
      });
    };
  }, []);

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a dedicated software developer with a passion for creating meaningful digital experiences. 
            My journey in technology has led me to specialize in web and mobile development, 
            with a focus on user-centered design and clean, efficient code.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community. I believe in continuous learning and 
            the power of technology to solve real-world problems.
          </p>
        </div>
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="stat-item"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectsPreview = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'A web application that provides users with engaging annual music insights, featuring beautiful UI design and data visualization.',
      image: wrapped,
      tags: ['React', 'UI Design', 'Data Visualization']
    },
    {
      id: 2,
      title: 'College Scheduler App',
      description: 'Mobile application built with Android Studio for managing class schedules, exams, and assignments with an intuitive interface.',
      image: schedulerApp,
      tags: ['Android Studio', 'Java', 'Mobile Development']
    }
  ];

  return (
    <section className="featured-preview-section">
      <div className="featured-preview-container">
        <h2 className="featured-preview-title">Featured Projects</h2>
        <div className="featured-preview-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="preview-card"
            >
              <div className="preview-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="preview-image"
                />
              </div>
              <div className="preview-content">
                <h3 className="preview-title">{project.title}</h3>
                <p className="preview-description">{project.description}</p>
                <div className="preview-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="preview-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-projects">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef([]);

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

    skillsRef.current.forEach((skill) => {
      if (skill) {
        observer.observe(skill);
      }
    });

    return () => {
      skillsRef.current.forEach((skill) => {
        if (skill) {
          observer.unobserve(skill);
        }
      });
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Mobile Development',
      skills: ['Android Studio', 'Java', 'Kotlin', 'React Native', 'Flutter']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL']
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="skill-category"
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <HomeHero />
      <AboutSection />
      <FeaturedProjectsPreview />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Home;