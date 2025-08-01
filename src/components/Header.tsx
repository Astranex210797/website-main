import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const products = [
    { name: 'Machine Room Elevator', path: '/machine-room-lift' },
    { name: 'MRL Elevator', path: '/mrl-elevator' },
    { name: 'Hydraulic Passenger Lift', path: '/hydraulic-passenger-lift' },
    { name: 'Car Lift', path: '/car-lift' },
    { name: 'Hydraulic Goods Lift', path: '/hydraulic-goods-lift' },
  ];

  const services = [
    { name: 'AMC Services', path: '/amc-services' },
    { name: 'Lift Modernization', path: '/lift-modernization' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-bottle-green-solid/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-start">
            <img src="/logo.jpg" alt="Peak Elevator Group Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-bottle-green-solid hover:text-bottle-green transition-colors duration-200 ${
                location.pathname === '/' ? 'text-bottle-green font-medium' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-bottle-green-solid hover:text-bottle-green transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-bottle-green font-medium' : ''
              }`}
            >
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-bottle-green-solid hover:text-bottle-green transition-colors duration-200">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-bottle-green-solid/20 py-2 overflow-hidden"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-4 py-2.5 text-bottle-green-solid hover:bg-pearlescent-subtle hover:text-bottle-green transition-colors duration-150"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-bottle-green-solid hover:text-bottle-green transition-colors duration-200">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-bottle-green-solid/20 py-2 overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2.5 text-bottle-green-solid hover:bg-pearlescent-subtle hover:text-bottle-green transition-colors duration-150"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`text-bottle-green-solid hover:text-bottle-green transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-bottle-green font-medium' : ''
              }`}
            >
              Contact
            </Link>

            <Link to="/contact">
              <button className="btn-bottle-green px-6 py-2 rounded-lg transition-colors duration-200 font-medium shadow-md">
                <span className="text-bottle-green-solid">Book Site Visit</span>
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-3 rounded-lg hover:bg-pearlescent-subtle transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7 text-bottle-green-solid" /> : <Menu className="w-7 h-7 text-bottle-green-solid" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white border-t border-bottle-green-solid/20 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="py-3 space-y-1">
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/" onClick={closeMenu} className="block px-4 py-2.5 text-bottle-green-solid hover:bg-pearlescent transition-colors duration-150 text-base">Home</Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/about" onClick={closeMenu} className="block px-4 py-2.5 text-bottle-green-solid hover:bg-pearlescent transition-colors duration-150 text-base">About Us</Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 py-1">
                  <div className="text-bottle-green-solid font-medium mb-1.5 text-base">Products</div>
                  {products.map((product) => (
                    <motion.div key={product.path} variants={mobileMenuItemVariants}>
                      <Link
                        to={product.path}
                        onClick={closeMenu}
                        className="block pl-4 py-1.5 text-bottle-green-solid/70 hover:text-bottle-green transition-colors duration-150 text-sm"
                      >
                        {product.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 py-1">
                  <div className="text-bottle-green-solid font-medium mb-1.5 text-base">Services</div>
                  {services.map((service) => (
                    <motion.div key={service.path} variants={mobileMenuItemVariants}>
                      <Link
                        to={service.path}
                        onClick={closeMenu}
                        className="block pl-4 py-1.5 text-bottle-green-solid/70 hover:text-bottle-green transition-colors duration-150 text-sm"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/contact" onClick={closeMenu} className="block px-4 py-2.5 text-bottle-green-solid hover:bg-pearlescent transition-colors duration-150 text-base">Contact</Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 pt-2 pb-2">
                  <Link to="/contact">
                    <button onClick={closeMenu} className="w-full btn-bottle-green px-4 py-2.5 rounded-lg transition-colors duration-200 font-medium shadow-md text-sm">
                      <span className="text-bottle-green-solid">Book Site Visit</span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
