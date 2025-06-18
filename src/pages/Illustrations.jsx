// Illustrations.jsx
import React from 'react';
import './styles/Illustrations.css';
import aboutImage from '../assets/avatar-me.png';

const illustrations = [
  {
    id: 1,
    title: 'Illustration 1',
    imgSrc: aboutImage,
    description: 'Description for illustration 1',
  },
  {
    id: 2,
    title: 'Illustration 2',
    imgSrc: 'https://via.placeholder.com/300',
    description: 'Description for illustration 2',
  },
  {
    id: 3,
    title: 'Illustration 3',
    imgSrc: 'https://via.placeholder.com/300',
    description: 'Description for illustration 3',
  },
  // Add more illustrations as needed
];

const Illustrations = () => {
  return (
    <div className="gallery">
      {illustrations.map(illustration => (
        <div key={illustration.id} className="gallery-item">
          <img src={illustration.imgSrc} alt={illustration.title} className="gallery-image" />
          <h3 className="gallery-title">{illustration.title}</h3>
          <p className="gallery-description">{illustration.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Illustrations;