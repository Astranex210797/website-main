import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Smartphone, Palette } from 'lucide-react';
const ModernizationPage = () => {
  const modernizationFeatures = [
    'Advanced control systems',
    'Energy-efficient motors',
    'Modern safety features',
    'Smart destination control',
    'LED lighting systems',
    'Touchscreen interfaces',
    'Emergency communication',
    'Accessibility compliance'
  ];
  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Faster, smoother, and more reliable elevator operation'
    },
    {
      icon: Shield,
      title: 'Improved Safety',
      description: 'Latest safety technologies protect passengers and property'
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'IoT integration and remote monitoring capabilities'
    },
    {
      icon: Palette,
      title: 'Modern Aesthetics',
      description: 'Contemporary designs that enhance building appeal'
    }
  ];
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative py-28 lg:py-36">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/oldnew.png"
            alt="Lift Modernization"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[400px]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Lift Modernization
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-10 max-w-3xl"
          >
            Upgrade Safety, Speed & Style
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => {
                // Find and click the BookVisitButton to open its form
                const bookVisitBtn = document.querySelector('button[aria-label="Book a visit"]');
                if (bookVisitBtn) {
                  bookVisitBtn.click();
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
      {/* BENEFITS SECTION */}
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
              Why Modernize Your Elevator?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-lg font-bold text-[#145943] mb-3">{benefit.title}</h3>
                <p className="text-[#0D3B2E] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* BEFORE/AFTER COMPARISON */}
      <section className="py-20 bg-[#E6FAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#145943] mb-6">
              The Transformation Process
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              See how we transform outdated elevator systems into modern marvels.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <span className="text-red-600 font-bold text-xl">OLD</span>
                </div>
                <h3 className="text-2xl font-bold text-[#145943]">Before Modernization</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Outdated control systems</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>High energy consumption</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Frequent breakdowns</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Poor ride quality</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Dated interior design</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Limited safety features</span>
                </div>
              </div>
            </motion.div>
            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1ABC9C]/30"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <span className="text-green-600 font-bold text-xl">NEW</span>
                </div>
                <h3 className="text-2xl font-bold text-[#145943]">After Modernization</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Smart control systems</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Energy-efficient operation</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Reliable performance</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Smooth, quiet rides</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Contemporary aesthetics</span>
                </div>
                <div className="flex items-center space-x-3 text-[#0D3B2E]">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span>Advanced safety systems</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MODERNIZATION FEATURES */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#145943] mb-6">
                Comprehensive Modernization
              </h2>
              <p className="text-xl text-[#1ABC9C] mb-8">
                Our modernization process covers every aspect of your elevator system, 
                from mechanical components to aesthetic enhancements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modernizationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#E6FAF4] rounded-2xl p-8 border border-[#1ABC9C]/30"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Modernization Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Cost Savings</h4>
                    <p className="text-[#0D3B2E]">Reduce energy costs by up to 50%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Property Value</h4>
                    <p className="text-[#0D3B2E]">Increase building value and appeal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Reduced Maintenance</h4>
                    <p className="text-[#0D3B2E]">Lower maintenance costs and downtime</p>
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
              Ready to Transform Your Elevator?
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8 max-w-3xl">
              Don't let an outdated elevator hold your building back. Our modernization 
              experts will assess your current system and design the perfect upgrade solution.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  // Find and click the BookVisitButton to open its form
                  const bookVisitBtn = document.querySelector('button[aria-label="Book a visit"]');
                  if (bookVisitBtn) {
                    bookVisitBtn.click();
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
export default ModernizationPage;