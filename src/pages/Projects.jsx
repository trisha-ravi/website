import React, { useEffect, useRef } from 'react';
import ProjectBox from '../components/ProjectBox';
import CurvyLine from './CurvyLine'; 
import './Projects.css';
import wrapped from '../assets/wrapped-logo.png';
import butterfly from '../assets/butterfly.png';
import schedulerApp from '../assets/scheduler-app.png'; // Import the new project's image

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spotify Wrapped App',
      description: 'A web application designed to provide users with an engaging and visually appealing experience, allowing them to view their annual music insights anytime. As a key contributor, I focused on UI design to create an aesthetically pleasing and user-friendly interface. Additionally, I played a significant role in backend development, ensuring the smooth integration of UI elements with backend functionalities for a seamless user experience. My efforts in designing innovative features and cohesive integration resulted in highly positive user feedback.',
      gradientColors: ['#F3F3F3', '#F79256', '#A6D9F7'],
      size: { width: 1300, height: 650 },
      position: 'relative',
      image: wrapped,
      url: 'https://mewkat36.wixstudio.io/spotifywrapped'
    },
    {
      id: 2,
      title: 'College Scheduler App',
      description: 'Built with Android Studio, the College Scheduler App offers a user-friendly solution for managing class schedules, exams, assignments, and tasks. It allows students to input courses, add tasks, and track exam dates. A detailed tutorial website was also created to guide users on using Android Studio.',
      gradientColors: ['#FF66B2', '#FFB347'],
      size: { width: 1300, height: 650 },
      position: 'relative',
      image: schedulerApp,
      url: 'https://anishbandari19.wixsite.com/collegeappscheduler'
    },
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="projects-container">
      <div className="intro-text">
        <CurvyLine/>
        <p className="projects-intro animate-in">
          <strong>welcome to my portfolio, where innovation comes to life!</strong>
        </p>
        <img src={butterfly} alt="Butterfly" className="butterfly-overlay" />
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            className="project-box-wrapper"
          >
            <ProjectBox
              title={project.title}
              description={project.description}
              gradientColors={project.gradientColors}
              width={project.size.width}
              height={project.size.height}
              position={project.position}
              image={project.image}
              style={{ width: `${project.size.width}px`, height: `${project.size.height}px` }}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
