import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wrench, Clock, Award } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'AMC Services',
      subtitle: 'Annual Maintenance Contracts You Can Trust',
      description: 'Comprehensive maintenance plans to keep your elevators running safely and smoothly with expert care and 24/7 support.',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/amc-services',
      features: ['24/7 Emergency Support', 'Preventive Maintenance', 'Safety Inspections', 'Compliance Certifications'],
      icon: Shield
    },
    {
      id: 2,
      title: 'Lift Modernization',
      subtitle: 'Upgrade Safety, Speed & Style',
      description: 'Transform your old elevator systems with cutting-edge technology and fresh interiors for enhanced performance and aesthetics.',
      image: '/oldnew.png',
      link: '/lift-modernization',
      features: ['Smart Control Systems', 'Energy Efficiency', 'Modern Aesthetics', 'Enhanced Safety'],
      icon: Wrench
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency support for critical situations'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record of excellence in elevator services'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Uncompromising commitment to passenger safety and compliance'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-[#145943] via-[#1ABC9C] to-[#E6FAF4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#E6FAF4] drop-shadow-xl">
              Our Services
            </h1>
            <p className="text-xl text-[#C3E7DF] max-w-3xl mx-auto">
              From comprehensive maintenance to complete modernization, we provide expert services to keep your elevators performing at their best.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6 max-w-md">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-[#1ABC9C]" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-[#145943]">{service.title}</h2>
                        <p className="text-lg text-[#1ABC9C] italic">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-[#0D3B2E] leading-relaxed">{service.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#1ABC9C] rounded-full" />
                          <span className="text-[#145943]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={service.link} className="inline-flex items-center bg-[#1ABC9C] hover:bg-[#145943] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group shadow-md">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group transition-all hover:-translate-y-1">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl border-4 border-[#1ABC9C]/30 shadow-md lg:translate-y-[20%]"
                      loading="lazy"
                      initial={{ opacity: 0.7, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#145943]/40 to-transparent rounded-2xl backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
