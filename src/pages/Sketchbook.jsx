// pages/Sketchbook.jsx - Creative Sketchbook Page
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Sketchbook.css';

const SketchbookHero = () => {
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
    <section ref={heroRef} className="sketchbook-hero">
      <div className="sketchbook-hero-container">
        <h1 className="sketchbook-title">
          Creative
          <span className="highlight"> Explorations</span>
        </h1>
        <p className="sketchbook-subtitle">
          A collection of sketches, experiments, and creative ideas that fuel my design process.
        </p>
      </div>
    </section>
  );
};

const SketchbookGrid = () => {
  const gridRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'UI Sketches', 'Illustrations', 'Wireframes', 'Concepts'];

  const sketches = [
    {
      id: 1,
      title: "Mobile App Flow",
      category: "UI Sketches",
      description: "Early wireframe sketches for a social media app",
      type: "sketch",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Character Design",
      category: "Illustrations",
      description: "Digital character illustration studies",
      type: "illustration",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Dashboard Concepts",
      category: "Wireframes",
      description: "Data visualization layout explorations",
      type: "wireframe",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "Icon Set",
      category: "UI Sketches",
      description: "Minimalist icon design exploration",
      type: "icons",
      color: "#96CEB4"
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "Concepts",
      description: "Logo and branding concept development",
      type: "branding",
      color: "#FFEAA7"
    },
    {
      id: 6,
      title: "User Journey",
      category: "Wireframes",
      description: "User experience flow mapping",
      type: "flow",
      color: "#DDA0DD"
    },
    {
      id: 7,
      title: "Typography Study",
      category: "Concepts",
      description: "Experimental typography layouts",
      type: "typography",
      color: "#FFB6C1"
    },
    {
      id: 8,
      title: "Nature Study",
      category: "Illustrations",
      description: "Digital landscape and nature studies",
      type: "landscape",
      color: "#98D8C8"
    },
    {
      id: 9,
      title: "AR Interface",
      category: "UI Sketches",
      description: "Augmented reality interface concepts",
      type: "ar",
      color: "#F7DC6F"
    }
  ];

  const filteredSketches = selectedCategory === 'All' 
    ? sketches 
    : sketches.filter(sketch => sketch.category === selectedCategory);

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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section ref={gridRef} className="sketchbook-grid-section">
      <div className="sketchbook-container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sketches Grid */}
        <div className="sketches-grid">
          {filteredSketches.map((sketch, index) => (
            <div
              key={sketch.id}
              className="sketch-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div 
                className="sketch-preview"
                style={{ backgroundColor: sketch.color }}
              >
                <div className="sketch-overlay">
                  <span className="sketch-type">{sketch.type}</span>
                </div>
              </div>
              <div className="sketch-info">
                <h3 className="sketch-title">{sketch.title}</h3>
                <p className="sketch-category">{sketch.category}</p>
                <p className="sketch-description">{sketch.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="sketchbook-cta">
          <h2 className="cta-title">Like what you see?</h2>
          <p className="cta-description">
            These are just a few examples from my creative process. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Get In Touch</a>
            <a href="/work" className="btn-secondary">View Projects →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sketchbook = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sketchbook-page">
      <Navbar />
      <SketchbookHero />
      <SketchbookGrid />
      <Footer />
    </div>
  );
};

export default Sketchbook;