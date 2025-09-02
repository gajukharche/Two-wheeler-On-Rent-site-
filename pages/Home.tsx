
import React from 'react';
import { Link } from 'react-router-dom';
import { BIKES, TESTIMONIALS } from '../constants';
import BikeCard from '../components/BikeCard';
import TestimonialCard from '../components/TestimonialCard';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">Ride the City, Your Way</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">The key to unlocking your city. Rent a two-wheeler from our diverse fleet and experience true freedom.</p>
          <Link to="/plans" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300 transform hover:scale-105">
            Explore Our Plans
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Why Vroom Rentals?</h2>
            <p className="text-lg text-gray-600 mt-2">Your best choice for convenient and affordable rides.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                title="Affordable Rates"
                description="Competitive pricing with no hidden fees. Choose a plan that fits your budget perfectly."
            />
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Well-Maintained Fleet"
                description="Our bikes are regularly serviced and inspected to ensure your safety and comfort on the road."
            />
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                title="Easy Online Booking"
                description="Rent your favorite bike in just a few clicks with our simple and secure online booking system."
            />
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Featured Fleet</h2>
            <p className="text-lg text-gray-600 mt-2">A bike for every need and every adventure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BIKES.map(bike => <BikeCard key={bike.id} bike={bike} />)}
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">What Our Riders Say</h2>
                <p className="text-lg text-gray-600 mt-2">Stories from our happy community of renters.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.slice(0,3).map(testimonial => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/testimonials" className="text-primary font-semibold hover:text-primary-dark transition duration-300">
                View All Testimonials &rarr;
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
