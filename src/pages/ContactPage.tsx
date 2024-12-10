import React from 'react';
import { Bug, Mail, MapPin, Phone } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
        <p className="text-xl text-gray-600">
          Get in touch with our pest control experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Bug className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-bold">Emergency Bug Pros</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
              <p>
                Innovation Plaza<br />
                Flanders, New Jersey, USA
              </p>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <a href="tel:8778195061" className="text-red-600 font-bold hover:text-red-700">
                877-819-5061
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <a href="mailto:inspiremy888@gmail.com" className="text-blue-600 hover:text-blue-700">
                inspiremy888@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-bold mb-4">Emergency Service Available</h2>
          <p className="mb-6">
            Don't wait - call now for immediate assistance with your pest control needs. Our experts are ready to help 24/7.
          </p>
          <a
            href="tel:8778195061"
            className="block w-full bg-white text-red-600 py-3 px-4 rounded-lg text-center font-bold hover:bg-red-50 transition-colors"
          >
            Call Now: 877-819-5061
          </a>
        </div>
      </div>
    </div>
  );
};