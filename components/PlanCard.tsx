
import React from 'react';
import { Link } from 'react-router-dom';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
}

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const cardClasses = `bg-white rounded-xl shadow-lg p-8 flex flex-col h-full transform transition-transform duration-300 ${plan.isPopular ? 'border-4 border-primary scale-105' : 'border'}`;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-center text-secondary">{plan.name}</h3>
      <div className="text-center my-6">
        <span className="text-5xl font-extrabold text-secondary">{plan.price}</span>
        <span className="text-gray-500">/{plan.period}</span>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        to="/contact"
        className={`w-full text-center py-3 rounded-lg font-semibold transition-colors duration-300 ${plan.isPopular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-secondary text-white hover:bg-gray-900'}`}
      >
        Choose Plan
      </Link>
    </div>
  );
};

export default PlanCard;
