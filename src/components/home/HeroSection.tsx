import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);
  
  const handleVideoPlay = () => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5500);
    
    return () => clearTimeout(timer);
  };
  
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/BG.mp4"
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object-[center_85%]"
          onPlay={handleVideoPlay}
          controls={false}
          autoPlay
          loop={false}
          muted
          playsInline
          preload="none"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      
      {/* Text Content */}
      <div className={`relative z-10 text-center text-white px-4 ${showText ? 'animate-elegantText' : 'opacity-0'}`}>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
          Elevate Your Space with Precision
        </h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-md md:max-w-2xl mx-auto">
          Premium Lift Solutions Tailored for Modern Needs
        </p>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Explore Products <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;