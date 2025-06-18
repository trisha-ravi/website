// src/CurvyLine.js
import React from 'react';
import './styles/CurvyLine.css';

const CurvyLine = () => {
  return (
    <svg className="curvy-line" width="100%" height="200" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#A6D9F7', stopOpacity: .5 }} />
          <stop offset="100%" style={{ stopColor: '#F79256', stopOpacity: .5 }} />
        </linearGradient>
      </defs>
      <path 
        className="line" 
        d="M 0,100 C 200,0 800,200 1000,120" 
        stroke="url(#gradient)" 
        strokeWidth="5" 
        fill="transparent" 
        strokeLinecap='round'
      />
    </svg>
  );
};

export default CurvyLine;
