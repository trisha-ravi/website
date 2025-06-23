import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SpotifyWrappedProject from './pages/project-pages/SpotifyWrappedProject';
import CollegeSchedulerProject from './pages/project-pages/CollegeSchedulerProject';
import './App.css';

const App = () => {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          {/* Main routes - Projects page as default */}
          <Route path="/" element={<Projects />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/spotify-wrapped" element={<SpotifyWrappedProject />} />
          <Route path="/projects/college-scheduler" element={<CollegeSchedulerProject />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Placeholder routes for navigation items that don't have pages yet */}
          <Route path="/sketchbook" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Sketchbook - Coming Soon</h1></div>} />
          <Route path="/store" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Store - Coming Soon</h1></div>} />
          <Route path="/gallery" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Gallery - Coming Soon</h1></div>} />
          
          {/* Catch-all route - redirects any unknown paths to Projects */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;