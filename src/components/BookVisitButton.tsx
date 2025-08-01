import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, Building, Calendar as Cal, Wrench } from 'lucide-react';

const BookVisitButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    liftType: '',
    installYear: '',
    floors: '',
    amc: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsFormOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !isFooterVisible && !isFormOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-50 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-b from-emerald-700 to-emerald-600 text-white px-1.5 py-3 sm:px-2 sm:py-4 flex flex-col items-center justify-center group hover:shadow-lg border border-emerald-800/40 w-8 sm:w-10"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'sideways-right',
                transform: 'rotate(180deg)',
              }}
              aria-label="Book a visit"
            >
              <span className="font-semibold text-[10px] sm:text-xs leading-tight tracking-wider">
                Book a Visit
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto relative z-10"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-emerald-700">Book a Site Visit</h2>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="text-emerald-600 hover:text-red-500 transition duration-150"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center border-b border-emerald-300">
                  <User className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                    required 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <Phone className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                    required 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="address" 
                    placeholder="Site Address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                    required 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <Building className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="liftType" 
                    placeholder="Lift Type" 
                    value={formData.liftType} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <Cal className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="installYear" 
                    placeholder="Installation Year" 
                    value={formData.installYear} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <Wrench className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="floors" 
                    placeholder="No. of Floors" 
                    value={formData.floors} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                  />
                </div>
                <div className="flex items-center border-b border-emerald-300">
                  <Wrench className="w-4 h-4 mr-2 text-emerald-500" />
                  <input 
                    type="text" 
                    name="amc" 
                    placeholder="AMC Details" 
                    value={formData.amc} 
                    onChange={handleChange} 
                    className="w-full py-1 outline-none text-sm" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-lg transition-all font-medium"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default BookVisitButton;