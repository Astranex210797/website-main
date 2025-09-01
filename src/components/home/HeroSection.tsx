import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true);

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BG.png"
          alt="Peak Elevator Group Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Enhanced gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 animate-elegantText">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 subtle-green-silver">
          Elevate Your Space with Precision
        </h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-md md:max-w-2xl mx-auto">
          Premium Lift Solutions Tailored for Modern Needs
        </p>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 btn-bottle-green"
        >
          Explore Products <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;