
import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from '../types';

interface BikeCardProps {
  bike: Bike;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="relative">
        <img src={bike.imageUrl} alt={bike.name} className="w-full h-56 object-cover" />
        <div className="absolute top-0 right-0 bg-primary text-white text-sm font-semibold px-3 py-1 m-2 rounded-full">{bike.type}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-secondary mb-2">{bike.name}</h3>
        <p className="text-gray-600 mb-4">Starting from <span className="text-primary font-bold text-xl">${bike.pricePerDay}</span>/day</p>
        <Link 
          to="/plans"
          className="w-full block text-center bg-secondary text-white py-2 rounded-md hover:bg-gray-900 group-hover:bg-primary transition-colors duration-300 font-semibold"
        >
          View Plans
        </Link>
      </div>
    </div>
  );
};

export default BikeCard;
