import React from 'react';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide buttons when footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsFooterVisible(footerRect.top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919990858886?text=Hi, I would like to know more about your elevator services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919990858886';
  };

  return (
    <div className={`fixed bottom-6 left-0 right-0 z-40 flex justify-between px-6 pointer-events-none transition-opacity duration-300 ${isFooterVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="pointer-events-auto bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="pointer-events-auto bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default FloatingActions;