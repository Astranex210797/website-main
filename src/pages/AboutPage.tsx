import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Uncompromising commitment to passenger safety in every elevator we install and maintain'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality products and services that exceed industry standards'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through personalized service and dedicated support'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: '24/7 support and maintenance services ensuring your elevators run smoothly'
    }
  ];

  const achievements = [
    '500+ Projects Completed',
    '15+ Years of Experience',
    '24/7 Customer Support',
    'ISO Certified Quality',
    'Expert Technical Team',
    'Pan-India Service Network'
  ];

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-31">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/BG.png"
            alt="About Peak Elevator Group"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[340px]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            About Peak Elevator Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text mb-10 max-w-3xl"
          >
            Elevating Lives Through Innovation and Excellence
          </motion.p>
        </div>
      </section>

      {/* COMPANY STORY SECTION */}
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
                Our Story
              </h2>
              <p className="text-lg text-[#0D3B2E] mb-6 leading-relaxed">
                Founded with a vision to revolutionize vertical transportation in India, Peak Elevator Group has been at the forefront of elevator technology for over 15 years. We began our journey with a simple mission: to provide safe, reliable, and innovative elevator solutions that enhance the quality of life for people across the nation.
              </p>
              <p className="text-lg text-[#0D3B2E] mb-6 leading-relaxed">
                From our humble beginnings to becoming a trusted name in the elevator industry, we have consistently pushed the boundaries of innovation while maintaining our core values of safety, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-[#0D3B2E] leading-relaxed">
                Today, we proudly serve residential, commercial, and industrial clients with a comprehensive range of elevator solutions, backed by our expert team and state-of-the-art technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Our Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E] text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white hover:bg-[#F2FCF9] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#145943] mb-4">{value.title}</h3>
                <p className="text-[#0D3B2E]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1ABC9C]/30"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <span className="text-[#1ABC9C] font-bold text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-[#145943]">Our Mission</h3>
              </div>
              <p className="text-[#0D3B2E] text-lg leading-relaxed text-center">
                To provide innovative, safe, and reliable elevator solutions that enhance the quality of life for our customers while setting new standards of excellence in the vertical transportation industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <span className="text-[#1ABC9C] font-bold text-2xl">🔮</span>
                </div>
                <h3 className="text-2xl font-bold text-[#145943]">Our Vision</h3>
              </div>
              <p className="text-[#0D3B2E] text-lg leading-relaxed text-center">
                To be India's most trusted and innovative elevator company, recognized for our commitment to safety, quality, and customer satisfaction while contributing to the nation's infrastructure development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
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
              Our Expert Team
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              Meet the professionals who make Peak Elevator Group a leader in vertical transportation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-[#1ABC9C]/20"
            >
              <div className="w-20 h-20 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#1ABC9C] font-bold text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-[#145943] mb-2">Engineering Team</h3>
              <p className="text-[#0D3B2E]">Certified engineers with decades of experience in elevator design and installation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-[#1ABC9C]/20"
            >
              <div className="w-20 h-20 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#1ABC9C] font-bold text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-[#145943] mb-2">Technical Support</h3>
              <p className="text-[#0D3B2E]">24/7 technical support team ensuring your elevators operate at peak performance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-[#1ABC9C]/20"
            >
              <div className="w-20 h-20 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#1ABC9C] font-bold text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#145943] mb-2">Customer Service</h3>
              <p className="text-[#0D3B2E]">Dedicated customer service representatives committed to your satisfaction</p>
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
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8 max-w-3xl">
              Join hundreds of satisfied customers who trust Peak Elevator Group for their vertical transportation needs. 
              Let us elevate your space with our premium solutions.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border-2 border-transparent hover:border-white hover:shadow-[0_0_20px_#E6FAF4]">
                Get In Touch
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;