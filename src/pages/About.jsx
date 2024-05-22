// About.jsx
import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutImage from '../assets/avatar-me.png';
import signatureImage from '../assets/signature.png'; 

const About = () => {
  const aboutRef = useRef(null);

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
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container">
      <div ref={aboutRef} className="about">
        <img src={aboutImage} alt="About Me" className="about-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p className='about-paragraph'>Hi, I'm Trisha, a student and creative soul with a passion for drawing, travel, design, and coding. 
            My artistic journey is fueled by the places I explore and the stories I gather along the way. 
            I love blending my creativity with my technical skills to craft unique and captivating designs and websites. 
            Dive into my portfolio to see where my imagination and coding expertise have taken me, and feel free to reach out if you’d like to collaborate or share a story!</p>
        </div>
        <img src={signatureImage} alt="Signature Image" className="signature" /> 
      </div>
    </div>
  );
};

export default About;