import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);
  
  // Function to handle video play event
  const handleVideoPlay = () => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5500); // Show text after 5.5 seconds
    
    return () => clearTimeout(timer);
  };
  
  // Set up IntersectionObserver for lazy loading and autoplay
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Load and play the video when it comes into view
          videoElement.load();
          videoElement.play().catch(error => {
            console.log("Autoplay prevented:", error);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(videoElement);
    
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/BG.mp4"
          alt="Hero Background"
          className="w-full h-full object-cover object-bottom"
          onPlay={handleVideoPlay}
          controls={false}
          autoPlay
          loop={false}
          muted
          playsInline
          preload="none"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Text Content - appears after 5.5 seconds and remains visible */}
      <div className={`relative z-10 text-center text-white px-4 ${showText ? 'animate-fadeIn' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
          Elevate Your Space with Precision
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-lg text-white/90">
          Premium Lift Solutions Tailored for Modern Needs
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Products <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;