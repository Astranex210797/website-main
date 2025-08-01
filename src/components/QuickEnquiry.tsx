import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickEnquiry = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
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

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isVisible && !isFooterVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rounded-lg overflow-hidden"
        >
          <button
            onClick={handleClick}
            className="bg-gradient-to-b from-emerald-700 to-emerald-600 text-white px-1.5 py-3 sm:px-2 sm:py-4 flex flex-col items-center justify-center group hover:shadow-lg border border-emerald-800/40 w-8 sm:w-10"
            style={{ 
              writingMode: 'vertical-rl', 
              textOrientation: 'sideways-right',
              transform: 'rotate(180deg)',
            }}
            aria-label="Get in touch"
          >
            <span className="font-semibold text-[10px] sm:text-xs leading-tight tracking-wider">
              Get In Touch
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default QuickEnquiry;