import React from 'react';
import { Bug, Rat, Mouse, Sprout } from 'lucide-react';
import type { Product } from '../types/calculator';

const products: Product[] = [
  {
    title: "Termite Treatment",
    description: "Professional-grade termite control solution",
    link: "https://amzn.to/4fQc5CG",
    icon: Bug
  },
  {
    title: "Bed Bug Extermination",
    description: "Complete bed bug elimination kit",
    link: "https://amzn.to/4eVZZqv",
    icon: Sprout
  },
  {
    title: "Mouse Traps",
    description: "Effective rodent control solution",
    link: "https://lvnta.com/lv_rlUBN7usPyfsVkAMnw",
    icon: Mouse
  },
  {
    title: "Rodent Repellent",
    description: "Natural rodent deterrent",
    link: "https://amzn.to/3COVoZz",
    icon: Rat
  }
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const IconComponent = product.icon;
        return (
          <a
            key={product.title}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </a>
        )
      })}
    </div>
  );
};