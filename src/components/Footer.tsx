import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Swiggy Clone</h3>
            <p className="text-gray-400 text-sm">
              Order food from your favorite restaurants with free delivery.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Swiggy One</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help & Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partner with us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Ride with us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">We Deliver to</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Bangalore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Delhi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Mumbai</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">+ 500 cities</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; 2025 Swiggy Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;