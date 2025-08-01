import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Homeowner, Gurgaon',
      quote: 'Peak Elevator Group transformed our home with their beautiful passenger lift.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Property Developer, Delhi',
      quote: 'Their machine room lifts are reliable, efficient, and beautifully designed.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Factory Owner, Noida',
      quote: 'The hydraulic goods lift revolutionized our operations. Delivered on time.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 4,
      name: 'Sunita Gupta',
      title: 'Apartment Owner, Faridabad',
      quote: 'Exceptional AMC service. Our lift has run smoothly for 3 years.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      title: 'Hotel Manager, Ghaziabad',
      quote: 'Modernized our lift system. Guests love the smooth ride.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 6,
      name: 'Neha Agarwal',
      title: 'Office Complex Owner, Delhi',
      quote: 'Professional and space-saving car lift installation.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section
      id="testimonials"
      className="pt-12 pb-4 bg-pearlescent-subtle text-bottle-green-solid relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url(/bg-texture.png)' }}></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[2.125rem] md:text-[2.875rem] font-bold mb-4 text-bottle-green drop-shadow-lg">
            Client Testimonials
          </h2>
          <p className="text-[0.875rem] md:text-[1.0625rem] text-bottle-green-solid/80 max-w-2xl mx-auto">
            Discover how Peak Elevator Group has elevated lives and spaces across India.
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative h-[18rem] overflow-hidden rounded-xl shadow-2xl bg-pearlescent backdrop-blur-xl border border-bottle-green-solid/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <div className="text-center max-w-xl">
                  <Quote className="w-7 h-7 text-bottle-green mx-auto mb-4" />
                  <blockquote className="text-[0.9375rem] md:text-[1.275rem] italic text-bottle-green-solid mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-bottle-green"
                    />
                    <div className="text-left text-[0.75rem]">
                      <div className="font-semibold text-bottle-green">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-bottle-green-solid/70 text-[0.65rem]">
                        {testimonials[currentIndex].title}
                      </div>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-[0.875rem] h-[0.875rem] fill-bottle-green text-bottle-green"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-bottle-green-solid/20 hover:bg-bottle-green-solid/40 backdrop-blur-md rounded-full flex items-center justify-center border border-bottle-green-solid/30 shadow"
          >
            <ChevronLeft className="w-5 h-5 text-bottle-green-solid" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-bottle-green-solid/20 hover:bg-bottle-green-solid/40 backdrop-blur-md rounded-full flex items-center justify-center border border-bottle-green-solid/30 shadow"
          >
            <ChevronRight className="w-5 h-5 text-bottle-green-solid" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-bottle-green scale-110 border-2 border-bottle-green-solid'
                    : 'bg-bottle-green-solid/40 hover:bg-bottle-green/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
