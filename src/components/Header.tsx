import React, { useState, useEffect } from 'react';
import { MapPin, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onLocationClick: () => void;
  location: string;
}

const Header: React.FC<HeaderProps> = ({ onLocationClick, location }) => {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white md:bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-8">
            <svg width="34" height="34" viewBox="0 0 200 200" fill="none" className="text-orange-500">
              <path 
                d="M125.8 68.5l-39.7 35.8H20.8c9.3-42 46.6-73.5 92.5-73.5 32.5 0 61.2 15.7 78.8 39.9l-33.6 33.6c-7.8-16.4-24.2-27.7-43.3-27.7-18.3 0-34.2 10.6-42 25.9l52.6-33.9z" 
                fill="currentColor"
              />
              <path 
                d="M170.5 94.9l-45.9 29.5c-8.2 6.8-18.8 10.9-30.5 10.9-26.4 0-47.8-21.4-47.8-47.8 0-2.8.2-5.5.7-8.1h31.5c-.5 2.6-.8 5.3-.8 8.1 0 21.2 17.2 38.4 38.4 38.4 16.2 0 30-10 35.6-24.1l18.8-6.9z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          <button 
            onClick={onLocationClick}
            className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
          >
            <span className="font-medium mr-1 hidden md:inline">{location}</span>
            <span className="text-sm text-gray-500 mr-1 truncate max-w-[120px] md:max-w-[200px]">{location}</span>
            <ChevronDown size={16} />
          </button>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
            <Search size={20} className="mr-1" />
            <span className="hidden md:inline">Search</span>
          </button>
          
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
            <User size={20} className="mr-1" />
            <span className="hidden md:inline">Profile</span>
          </button>
          
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors relative">
            <ShoppingBag size={20} className="mr-1" />
            <span className="hidden md:inline">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;