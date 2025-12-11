import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, delay }) => {
  if (item.isHeader) {
    return (
      <div 
        className="mt-6 mb-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/50 text-center animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h3 className="text-lg font-bold text-yellow-300 drop-shadow-md">{item.title}</h3>
      </div>
    );
  }

  return (
    <div 
      className="flex justify-between items-center bg-white/90 text-slate-900 p-3 mb-2 rounded-lg pixel-shadow hover:scale-[1.02] transition-transform duration-200 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-semibold text-sm md:text-base">{item.title}</span>
      <div className="bg-slate-800 text-yellow-400 px-3 py-1 rounded text-sm md:text-base font-bold min-w-[80px] text-center border-2 border-slate-600">
        {item.price}
      </div>
    </div>
  );
};

export default ServiceCard;