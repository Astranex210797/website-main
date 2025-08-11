import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, Shield, Zap } from 'lucide-react';
import BookVisitButton from '../../components/BookVisitButton';

type BookVisitButtonHandle = {
  openForm: () => void;
};

const HydraulicGoodsLiftPage = () => {
  const specifications = [
    'Load Capacity: 500–5000 kg',
    'Platform Size: Customizable',
    'Travel Height: Up to 15 meters',
    'Speed: 0.15–0.25 m/s',
    'Safety Features: Emergency stop, overload protection',
    'Control: Push button/Remote operation',
    'Construction: Heavy-duty steel frame',
    'Installation: Indoor/Outdoor compatible'
  ];
  const features = [
    {
      icon: Package,
      title: 'Heavy-Duty Performance',
      description: 'Engineered to handle substantial loads with consistent reliability'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Multiple safety systems protect both operators and cargo'
    },
    {
      icon: Zap,
      title: 'Efficient Operation',
      description: 'Optimized hydraulic systems for energy-efficient performance'
    }
  ];

  // Ref for BookVisitButton
  const bookVisitBtnRef = useRef<BookVisitButtonHandle>(null);

  // Handler for your custom button
  const handleCustomButtonClick = () => {
    if (bookVisitBtnRef.current) {
      bookVisitBtnRef.current.openForm();
    }
  };

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/WhatsApp Image 2025-07-11 at 12.10.03_3d6771cc.jpg"
            alt="Hydraulic Goods Lift"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Hydraulic Goods Lifts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-10 max-w-3xl"
          >
            Heavy-duty Performance, Reliable Results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <button 
              onClick={handleCustomButtonClick}
              className="relative bg-gradient-to-r from-[#145943] to-[#0D3B2E] text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:border-[#E6FAF4] hover:shadow-[0_0_20px_#E6FAF4]"
              aria-label="Book a visit"
              type="button"
            >
              <span className="relative z-10">Book Site Visit</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            {/* BookVisitButton instance for modal logic, floating button hidden */}
            <BookVisitButton
              ref={bookVisitBtnRef}
              showFloating={false}
            />
          </motion.div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-1xl sm:text-xl font-bold text-[#145943] mb-6 whitespace-nowrap">
              Why Choose Our Hydraulic Goods Lifts?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 rounded-3xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#145943] mb-4">{feature.title}</h3>
                <p className="text-[#0D3B2E]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* SPECIFICATIONS SECTION */}
      <section className="py-20 bg-[#E6FAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#145943] mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-[#1ABC9C] mb-8">
                Our hydraulic goods lifts are built to handle the toughest industrial 
                and commercial material handling requirements.
              </p>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E] text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-[#1ABC9C]/20"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Ideal For:</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Manufacturing Plants</h4>
                    <p className="text-[#0D3B2E]">Factories, production facilities, assembly lines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">📦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Warehouses</h4>
                    <p className="text-[#0D3B2E]">Distribution centers, storage facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Commercial Buildings</h4>
                    <p className="text-[#0D3B2E]">Retail stores, restaurants, service centers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HydraulicGoodsLiftPage;