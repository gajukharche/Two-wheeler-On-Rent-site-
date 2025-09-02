
import React from 'react';
import { PLANS } from '../constants';
import PlanCard from '../components/PlanCard';

const Plans: React.FC = () => {
  return (
    <div className="bg-light-gray">
      {/* Page Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Rental Plans</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Simple, flexible, and transparent pricing to get you on the road.</p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {PLANS.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-secondary">What documents do I need to rent a bike?</h3>
                    <p className="text-gray-600 mt-2">You'll need a valid driver's license for two-wheelers and a government-issued ID (like a passport or national ID card).</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-secondary">Is there a security deposit?</h3>
                    <p className="text-gray-600 mt-2">Yes, a refundable security deposit is required for all rentals. The amount varies depending on the bike model. It will be returned to you after the bike is returned in good condition.</p>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-secondary">What is included in the rental price?</h3>
                    <p className="text-gray-600 mt-2">The rental price includes the bike, a helmet, and basic insurance. Mileage limits vary by plan. Additional helmets and gear are available for a small fee.</p>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-secondary">What happens in case of a breakdown?</h3>
                    <p className="text-gray-600 mt-2">Our Weekend, Weekly, and Monthly plans come with roadside assistance. For Daily plans, please contact our support number, and we will assist you as quickly as possible.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
