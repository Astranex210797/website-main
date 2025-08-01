import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-pearlescent text-bottle-green-solid relative overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-8 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-bottle-green">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-bottle-green-solid/80 max-w-2xl mx-auto">
            Get in touch for expert consultation and tailored elevator solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
