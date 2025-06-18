// Contact.jsx - Clean Contact Page with Footer Component
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const AppleBackground = () => {
  return (
    <div className="apple-background">
      <div className="apple-mesh"></div>
      <div className="apple-orb-1"></div>
      <div className="apple-orb-2"></div>
      <div className="apple-orb-3"></div>
      <div className="apple-grid"></div>
      <div className="apple-line-1"></div>
      <div className="apple-line-2"></div>
      <div className="apple-shape-1"></div>
      <div className="apple-shape-2"></div>
      <div className="apple-center-glow"></div>
    </div>
  );
};

const ContactHero = () => {
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
    <section ref={heroRef} className="contact-hero">
      <div className="contact-hero-container">
        <h1 className="contact-title">
          Let's create something 
          <span className="highlight"> extraordinary together</span>
        </h1>
        <p className="contact-subtitle">
          I'm always excited to collaborate on meaningful projects and bring innovative ideas to life.
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={formRef} className="contact-form-section">
      <div className="contact-form-container">
        <div className="form-content">
          <div className="form-header">
            <h2 className="form-title">Get in Touch</h2>
            <p className="form-description">
              Ready to start a project or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Tell me about your project or just say hello..."
                rows="6"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const infoRef = useRef(null);

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

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  const contactMethods = [
    {
      title: 'Email',
      value: 'hello@trisha.com',
      href: 'mailto:trisha02.r@gmail.com',
      icon: '✉️'
    },
    {
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/trisha-ravichandran/',
      icon: '💼'
    },
    {
      title: 'Location',
      value: 'Available Worldwide',
      href: null,
      icon: '🌍'
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      icon: '⚡'
    }
  ];

  return (
    <section ref={infoRef} className="contact-info-section">
      <div className="contact-info-container">
        <h2 className="info-title">Other Ways to Connect</h2>
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method">
              <div className="method-icon">{method.icon}</div>
              <div className="method-content">
                <h3 className="method-title">{method.title}</h3>
                {method.href ? (
                  <a 
                    href={method.href} 
                    className="method-value link"
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="method-value">{method.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <AppleBackground />
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;