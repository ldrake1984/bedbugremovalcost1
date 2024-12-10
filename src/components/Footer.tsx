import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Emergency Bug Pros</h3>
            <p className="text-gray-400">
              Innovation Plaza<br />
              Flanders, New Jersey, USA<br />
              <a href="mailto:inspiremy888@gmail.com">inspiremy888@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white">Disclaimer</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/affiliate" className="text-gray-400 hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white">Accessibility Statement</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Information</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <a
              href="tel:8778195061"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-lg inline-block font-bold hover:from-orange-600 hover:to-red-700 transition-colors"
            >
              Call Now: 877-819-5061
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Viking Bug Pros LLC. All rights reserved.</p>
          <p className="mt-2">This calculator is for informational purposes only. Results may vary.</p>
        </div>
      </div>
    </footer>
  );
};