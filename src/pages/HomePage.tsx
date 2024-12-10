import React from 'react';
import { Calculator } from '../components/Calculator';
import { ProductGrid } from '../components/ProductGrid';
import { SeoContent } from '../components/SeoContent';
import { Bug, Phone, Calculator as CalcIcon, DollarSign, MapPin } from 'lucide-react';

export const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bed Bug Removal Cost Calculator
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Get an instant estimate for professional bed bug removal services in your area.
            Our calculator takes into account your location, infestation level, and preferred treatment method.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <Calculator />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">DIY Pest Control Options</h2>
          <ProductGrid />
        </section>

        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use the Bed Bug Removal Cost Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <CalcIcon className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Treatment Method Selection</h3>
              </div>
              <p className="text-gray-700">
                Choose between three primary treatment options:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Heat Treatment: Most effective but typically more expensive</li>
                <li>• Chemical Treatment: Traditional and cost-effective</li>
                <li>• Integrated Pest Management: Comprehensive approach</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Square Footage Impact</h3>
              </div>
              <p className="text-gray-700">
                Input your home's total square footage or the affected area. This crucial measurement helps determine:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Treatment scope required</li>
                <li>• Amount of materials needed</li>
                <li>• Overall service duration</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Bug className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Infestation Level Assessment</h3>
              </div>
              <p className="text-gray-700">Select the severity of your bed bug problem:</p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Low: Early signs, limited to one area</li>
                <li>• Medium: Multiple rooms affected</li>
                <li>• High: Widespread infestation throughout</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Location Factors</h3>
              </div>
              <p className="text-gray-700">
                Select your state to account for regional variations in:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Local labor costs</li>
                <li>• State regulations</li>
                <li>• Market conditions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">Need Professional Help?</h3>
            </div>
            <p className="mb-4">
              While our calculator provides an estimate, every situation is unique. For a precise quote and professional consultation, call our experts today.
            </p>
            <a
              href="tel:8778195061"
              className="inline-block bg-white text-red-600 py-3 px-6 rounded-lg font-bold hover:bg-red-50 transition-colors"
            >
              Call Now: 877-819-5061
            </a>
          </div>
        </section>

        <SeoContent />
      </div>
    </div>
  );
};