import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Zap, Users } from 'lucide-react';
import BookVisitButton from '../../components/BookVisitButton'; // <-- Import the component

const MachineRoomLiftPage = () => {
  const specifications = [
    'Capacity: 272–1632 kg',
    'Maximum Stops: 15 floors',
    'Speed: 1.0–2.5 m/s',
    'Auto/Manual Door Options',
    'Suitable for Residential & High-rise',
    'Energy Efficient Drive System',
    'Advanced Safety Features',
    'Customizable Interior Design'
  ];
  const features = [
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'Multiple safety systems ensure passenger protection at all times'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Modern drive systems reduce energy consumption by up to 40%'
    },
    {
      icon: Users,
      title: 'High Capacity',
      description: 'Designed to handle heavy traffic in commercial and residential buildings'
    }
  ];
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-31">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/machine-room-elevator.jpg"
            alt="Machine Room Elevator"
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
            Machine Room Elevators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-base sm:text-lg font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-6 max-w-[350px] whitespace-nowrap"
          >
            Elevate with Power, Precision, and Style
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <BookVisitButton
              className="relative bg-gradient-to-r from-[#145943] to-[#0D3B2E] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:border-[#E6FAF4] hover:shadow-[0_0_20px_#E6FAF4]"
              label="Book Site Visit"
              icon={<ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />}
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
            <h2 className="text-lg sm:text-xl font-bold text-[#145943] mb-6 whitespace-nowrap">
              Why Choose Our Machine Room Elevators?
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
                Our machine room elevators are engineered to meet the highest standards 
                of performance, safety, and reliability.
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
                    <h4 className="font-semibold text-[#145943]">Commercial Buildings</h4>
                    <p className="text-[#0D3B2E]">Office complexes, shopping centers, hotels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Residential Towers</h4>
                    <p className="text-[#0D3B2E]">High-rise apartments, luxury homes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Healthcare Facilities</h4>
                    <p className="text-[#0D3B2E]">Hospitals, clinics, medical centers</p>
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
              Ready to Elevate Your Building?
            </h2>
            <p className="text-lg text-[#C3E7DF] mb-8 max-w-3xl">
              Let our experts help you choose the perfect machine room elevator solution 
              for your project. Get a free consultation today.
            </p>
            <div className="flex justify-center">
              <BookVisitButton
                className="relative bg-gradient-to-r from-[#145943] to-[#0D3B2E] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-[#E6FAF4] hover:shadow-[0_0_20px_#E6FAF4] flex items-center justify-center gap-3 shadow-lg"
                label="Book Site Visit"
                icon={<ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />}
              />
            </div>
          </motion.div>
        </div>
      </section>