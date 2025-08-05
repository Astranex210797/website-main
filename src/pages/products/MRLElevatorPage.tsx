import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Building, Wrench } from 'lucide-react';

const MRLElevatorPage = () => {
  const specifications = [
    'Capacity: 320–1600 kg',
    'Maximum Stops: Up to 20 floors',
    'Speed: 1.0–2.5 m/s',
    'No machine room required',
    'Space efficient design',
    'Energy efficient drive system',
    'Advanced safety systems',
    'Modern control technology'
  ];
  const features = [
    {
      icon: Zap,
      title: 'Space Efficient',
      description: 'No machine room required, maximizing usable building space'
    },
    {
      icon: Building,
      title: 'Modern Technology',
      description: 'Latest gearless traction systems for superior performance'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Accessible components reduce maintenance time and costs'
    }
  ];
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative py-17 lg:py-31">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/pexels-cottonbro-8453049.jpg"
            alt="MRL Elevator"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[340px]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            MRL Elevators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg sm:text-xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-6 max-w-xs"
          >
            Space-Saving Innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => {
                const bookVisitButton = document.querySelector('[aria-label="Book a visit"]');
                if (bookVisitButton) {
                  bookVisitButton.click();
                }
              }}
              className="relative bg-gradient-to-r from-[#145943] to-[#0D3B2E] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:border-[#E6FAF4] hover:shadow-[0_0_20px_#E6FAF4]"
            >
              <span className="relative z-10">Book Site Visit</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
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
            <h2 className="text-lg sm:text-xl font-bold text-[#145943] mb-6 whitespace-nowrap">
              Why Choose Our MRL Elevators?
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
                className="text-center p-8 rounded-3xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-14 h-14 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-7 h-7 text-[#1ABC9C]" />
                </div>
                <h3 className="text-lg font-bold text-[#145943] mb-3">{feature.title}</h3>
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
              <h2 className="text-3xl font-bold text-[#145943] mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg text-[#1ABC9C] mb-8">
                Our MRL elevators combine cutting-edge technology with space-efficient design 
                for optimal performance in modern buildings.
              </p>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <h3 className="text-xl font-bold text-[#145943] mb-6">Perfect For:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Modern Buildings</h4>
                    <p className="text-[#0D3B2E]">New construction with space constraints</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Residential Towers</h4>
                    <p className="text-[#0D3B2E]">Apartments where space is premium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-xl">🏪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Commercial Spaces</h4>
                    <p className="text-[#0D3B2E]">Offices, retail, mixed-use developments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#1ABC9C] to-[#145943] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#E6FAF4]">
              Experience Space-Saving Innovation
            </h2>
            <p className="text-lg text-[#C3E7DF] mb-8 max-w-3xl">
              Discover how MRL technology can maximize your building's potential. 
              Get expert consultation and see why MRL is the smart choice for modern construction.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const bookVisitButton = document.querySelector('[aria-label="Book a visit"]');
                  if (bookVisitButton) {
                    bookVisitButton.click();
                  }
                }}
                className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border-2 border-transparent hover:border-white hover:shadow-[0_0_20px_#E6FAF4]"
              >
                Book Site Visit
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default MRLElevatorPage;