import React from 'react';
import { Link } from 'react-router-dom';
import { Bug } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bug className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Emergency Bug Pros</span>
            </Link>
          </div>
          <div className="flex items-center">
            <a href="tel:8778195061" className="animate-pulse bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-100 transition-colors">
              Call Now: 877-819-5061
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};