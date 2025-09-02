
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg" src={member.imageUrl} alt={member.name} />
        <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
        <p className="text-primary">{member.role}</p>
    </div>
);


const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">About Vroom Rentals</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Revolutionizing urban mobility, one ride at a time.</p>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Vroom, our mission is to provide an affordable, convenient, and enjoyable two-wheeler rental experience for everyone. We believe in the freedom of the open road and aim to make exploring cities easier and more exciting.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to maintaining a diverse fleet of high-quality, safe, and reliable bikes. Whether you're a daily commuter, a weekend adventurer, or a tourist looking to discover hidden gems, we have the perfect ride for you.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/mission/800/600" alt="Rider enjoying the view" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-secondary mb-2">Customer First</h3>
                <p className="text-gray-600">We prioritize your needs and satisfaction in every decision we make.</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-secondary mb-2">Safety & Reliability</h3>
                <p className="text-gray-600">Our commitment to regular maintenance ensures you have a safe and dependable ride.</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-secondary mb-2">Passion for Riding</h3>
                <p className="text-gray-600">We are enthusiasts at heart, dedicated to sharing the joy of two-wheeling.</p>
              </div>
            </div>
          </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Meet Our Team</h2>
                <p className="text-lg text-gray-600 mt-2">The passionate people behind your perfect ride.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map(member => <TeamMemberCard key={member.id} member={member} />)}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
