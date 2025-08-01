import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-8 bg-pearlescent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-pearlescent-subtle rounded-2xl p-6 sm:p-8 shadow-lg border border-bottle-green-solid/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-bottle-green-solid mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-3 bg-pearlescent border border-bottle-green-solid/30 placeholder-bottle-green-solid/50 text-bottle-green-solid text-sm focus:outline-none focus:ring-2 focus:ring-bottle-green focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-bottle-green-solid mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-3 bg-pearlescent border border-bottle-green-solid/30 placeholder-bottle-green-solid/50 text-bottle-green-solid text-sm focus:outline-none focus:ring-2 focus:ring-bottle-green focus:border-transparent transition"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-bottle-green-solid mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-pearlescent border border-bottle-green-solid/30 placeholder-bottle-green-solid/50 text-bottle-green-solid text-sm focus:outline-none focus:ring-2 focus:ring-bottle-green focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-bottle-green-solid mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-pearlescent border border-bottle-green-solid/30 placeholder-bottle-green-solid/50 text-bottle-green-solid text-sm focus:outline-none focus:ring-2 focus:ring-bottle-green focus:border-transparent transition resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-bottle-green font-medium text-base py-3 rounded-lg transition flex items-center justify-center group shadow-lg"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-bottle-green">Let's Start a Conversation</h3>
              <p className="text-base text-bottle-green-solid/80 leading-relaxed">
                Reach out to our team of elevator experts. We're here to discuss your project and provide tailored solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pearlescent-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-bottle-green" />
                </div>
                <div className="leading-tight">
                  <h4 className="font-medium text-bottle-green text-base mb-0.5">Call Us</h4>
                  <p className="text-sm text-bottle-green-solid/80">+91 9990858886</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pearlescent-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-bottle-green" />
                </div>
                <div className="leading-tight">
                  <h4 className="font-medium text-bottle-green text-base mb-0.5">Email Us</h4>
                  <p className="text-sm text-bottle-green-solid/80">Admin@peakelevatorgroup.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pearlescent-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-bottle-green" />
                </div>
                <div className="leading-tight">
                  <h4 className="font-medium text-bottle-green text-base mb-0.5">Address</h4>
                  <p className="text-sm text-bottle-green-solid/80">Plot No. 915, Krishna Apra Business Square, NSP, Delhi - 110034</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;