// Home.jsx
import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const homeRef = useRef(null);

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

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div ref={homeRef} className="home">
        <h2 className="fade-in">
          <span className="letter">h</span>
          <span className="letter">e</span>
          <span className="letter">l</span>
          <span className="letter">l</span>
          <span className="letter">o</span>
          <span className="letter">o</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;