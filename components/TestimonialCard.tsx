
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-light-gray p-8 rounded-xl shadow-md flex flex-col h-full">
      <div className="flex-grow mb-4">
        <svg className="w-10 h-10 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" transform="rotate(180 10 10)"></path></svg>
        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
      </div>
      <div className="flex items-center mt-auto">
        <img className="w-14 h-14 rounded-full object-cover mr-4" src={testimonial.avatarUrl} alt={testimonial.name} />
        <div>
          <p className="font-bold text-secondary">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
