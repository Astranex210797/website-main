import React from 'react';
import { motion } from 'framer-motion';

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#1a1f1c] to-[#101413] flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="flex items-center gap-4 text-gold/90 text-[1.8rem] font-light tracking-wide"
      >
        {/* Left Dot */}
        <motion.div
          className="w-4 h-4 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(255,215,0,0.4)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', delay: 0.1, ease: 'easeInOut' }}
        />

        {/* Text */}
        <div className="relative">
          <span className="text-gold font-light tracking-wider">Loading Peak Experience...</span>
          {/* Optional shimmer text effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-10 blur-sm" />
        </div>

        {/* Right Dot */}
        <motion.div
          className="w-4 h-4 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(255,215,0,0.4)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', delay: 0.3, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default FullPageLoader;
