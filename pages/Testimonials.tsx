
import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">What Our Riders Say</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Real stories from our community of happy and adventurous riders.</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
