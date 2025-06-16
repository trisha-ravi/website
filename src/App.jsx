import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Projects />} />
          <Route path="/home" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Placeholder routes for navigation items that don't have pages yet */}
          <Route path="/sketchbook" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Sketchbook - Coming Soon</h1></div>} />
          <Route path="/store" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Store - Coming Soon</h1></div>} />
          <Route path="/gallery" element={<div style={{padding: '120px 4rem 4rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff'}}><h1>Gallery - Coming Soon</h1></div>} />
          
          {/* Legacy route support */}
          <Route path="/website" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;