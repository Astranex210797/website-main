import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Wrench } from 'lucide-react';
import BookVisitButton from '../../components/BookVisitButton';

type BookVisitButtonHandle = {
  openForm: () => void;
};

const AMCPage = () => {
  const comprehensiveFeatures = [
    'Complete preventive maintenance',
    'All spare parts included',
    'Emergency breakdown service',
    'Regular safety inspections',
    'Performance optimization',
    'Compliance certifications',
    'Priority response time',
    'Annual safety audit'
  ];
  const nonComprehensiveFeatures = [
    'Scheduled maintenance visits',
    'Basic safety checks',
    'Emergency call-out service',
    'Labor charges included',
    'Breakdown diagnosis',
    'Minor adjustments',
    'Maintenance reports',
    'Technical support'
  ];
  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency support for critical situations'
    },
    {
      icon: Shield,
      title: 'Safety Assured',
      description: 'Regular safety inspections ensure passenger protection'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience'
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
            src="/Technician.png"
            alt="AMC Services"
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
            Elevator AMC Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-10 max-w-3xl"
          >
            Annual Maintenance Contracts You Can Trust
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
              Why Choose Our AMC Services?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#145943] mb-4">{benefit.title}</h3>
                <p className="text-[#0D3B2E]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC TYPES SECTION */}
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
              Choose Your AMC Plan
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              We offer two comprehensive maintenance plans to suit different needs and budgets.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Comprehensive AMC */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1ABC9C]/30"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#145943] mb-2">Comprehensive AMC</h3>
                <p className="text-[#0D3B2E]">Complete peace of mind with all-inclusive coverage</p>
              </div>
              <div className="space-y-4 mb-8">
                {comprehensiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ABC9C] mb-2">Best Value</div>
                <p className="text-[#0D3B2E] mb-6">Includes all parts and labor</p>
                <Link to="/contact">
                  <button className="w-full bg-[#1ABC9C] hover:bg-[#145943] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Non-Comprehensive AMC */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#145943] mb-2">Non-Comprehensive AMC</h3>
                <p className="text-[#0D3B2E]">Essential maintenance with cost-effective coverage</p>
              </div>
              <div className="space-y-4 mb-8">
                {nonComprehensiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#145943] mb-2">Budget Friendly</div>
                <p className="text-[#0D3B2E] mb-6">Parts charged separately</p>
                <Link to="/contact">
                  <button className="w-full bg-[#145943] hover:bg-[#1ABC9C] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMCPage;