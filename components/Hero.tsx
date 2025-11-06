import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const images = [
  "https://images.unsplash.com/photo-1594312919269-80521c7f5349?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620891345520-c3193d599256?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden text-white">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${index === currentImageIndex ? 'animate-kenburns' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-red-900/50 to-slate-900 opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down text-shadow-lg"
          style={{ animationDelay: '0.2s' }}
        >
          Start Your Career Journey at <span className="text-red-300">Cybotech Campus</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mb-8 text-slate-100 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          We provide practical, job-focused training in computers and English to help you succeed. Join our classes and take the first step towards a better future.
        </p>
        <div 
          className="animate-fade-in-up" 
          style={{ animationDelay: '0.8s' }}
        >
          <NavLink
            to="/courses"
            className="bg-pinterest-red text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-pinterest-red-hover transition-all duration-300 transform hover:scale-110 shadow-lg animate-pulse-cta"
          >
            Explore Our Courses
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;