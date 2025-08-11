import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen text-brand-text overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Card Section */}
      <section className="flex justify-center items-center py-8 px-4">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-[#1ABC9C]/20 p-8 text-center">
          <h2 className="text-3xl font-bold text-[#145943] mb-4">About Us</h2>
          <p className="text-lg text-[#0D3B2E] mb-2">
            <span className="font-semibold text-[#1ABC9C]">Peak Elevator</span> is dedicated to elevating experiences and redefining vertical mobility. 
            Our vision is to set new standards in safety, innovation, and reliability—delivering seamless journeys for every passenger, every time.
          </p>
          <p className="text-base text-[#145943]">
            With a passion for engineering excellence and a commitment to customer satisfaction, we strive to create elevators that not only move people, but inspire confidence and trust in every ascent.
          </p>
        </div>
      </section>
      
      {/* Elegant divider with fade effect */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-2 sm:my-4"></div>
      
      {/* Content Sections with refined spacing */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-start">
          {/* ProductGrid now aligned to the extreme left */}
          <div className="flex-grow">
            {/* Added padding above ProductGrid to make "Our Product Range" feel more connected */}
            <div className="pt-4">
              <ProductGrid />
            </div>
          </div>
        </div>
        
        {/* Elegant divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-6 sm:my-8"></div>
        
        <TestimonialsSection />
        
        {/* Elegant divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-6 sm:my-8"></div>
        
        <PartnersSection />
      </div>
      
      {/* Clear divider between PartnersSection and footer */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/80 to-transparent my-8"></div>
      
         </div>
  );
};

export default HomePage;