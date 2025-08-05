import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Car, Building, Wrench } from 'lucide-react';
const CarLiftPage = () => {
  const specifications = [
    'Vehicle Weight: Up to 3000 kg',
    'Platform Size: Customizable',
    'Travel Height: Up to 20 meters',
    'Safety Features: Multiple backup systems',
    'Operation: Automatic/Manual control',
    'Power Supply: 415V, 3-phase',
    'Installation: Indoor/Outdoor options',
    'Maintenance: Minimal requirements'
  ];
  const features = [
    {
      icon: Car,
      title: 'Space Optimization',
      description: 'Maximize parking capacity in minimal space with vertical solutions'
    },
    {
      icon: Building,
      title: 'Urban Solution',
      description: 'Perfect for urban areas where space is at a premium'
    },
    {
      icon: Wrench,
      title: 'Reliable Operation',
      description: 'Robust construction ensures years of trouble-free operation'
    }
  ];
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-31">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/WhatsApp Image 2025-07-11 at 11.57.25_2ca2df59.jpg"
            alt="Car Lift"
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Vertical Car Lifts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-10 max-w-3xl"
          >
            Vertical Mobility for Urban Spaces
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
              className="relative bg-gradient-to-r from-[#145943] to-[#0D3B2E] text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:border-[#E6FAF4] hover:shadow-[0_0_20px_#E6FAF4]"
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
            <h2 className="text-1xl sm:text-xl font-bold text-[#145943] mb-6 whitespace-nowrap">
              Why Choose Our Car Lifts?
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
                Our car lifts are engineered to handle various vehicle types 
                with maximum safety and efficiency.
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
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Perfect For:</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Commercial Buildings</h4>
                    <p className="text-[#0D3B2E]">Office complexes, shopping malls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Residential Complexes</h4>
                    <p className="text-[#0D3B2E]">Apartment buildings, condominiums</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Service Centers</h4>
                    <p className="text-[#0D3B2E]">Auto repair shops, car dealerships</p>
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
            <h2 className="text-4xl font-bold mb-6 text-[#E6FAF4]">
              Maximize Your Parking Space
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8 max-w-3xl">
              Transform your parking challenges into smart solutions. 
              Let our experts design the perfect car lift system for your needs.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const bookVisitButton = document.querySelector('[aria-label="Book a visit"]');
                  if (bookVisitButton) {
                    bookVisitButton.click();
                  }
                }}
                className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border-2 border-transparent hover:border-white hover:shadow-[0_0_20px_#E6FAF4]"
              >
                Book Site Visit
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default CarLiftPage;