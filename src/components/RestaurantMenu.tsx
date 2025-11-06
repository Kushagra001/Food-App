import React from 'react';
import { Restaurant, Category } from '../types';
import FoodItem from './FoodItem';
import { Star, Clock, Wallet } from 'lucide-react';

interface RestaurantMenuProps {
  restaurant: Restaurant;
  menu: Category[];
  onBack: () => void;
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({
  restaurant,
  menu,
  onBack
}) => {
  return (
    <div className="bg-white">
      {/* Restaurant Info */}
      <div className="relative h-64 bg-gray-800">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-lg"
        >
          ←
        </button>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="text-gray-200 mt-1">{restaurant.cuisine.join(', ')}</div>
          
          <div className="flex items-center mt-2 space-x-4">
            <div className="flex items-center">
              <Star size={16} className="mr-1 fill-white" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{restaurant.deliveryTime} mins</span>
            </div>
            <div className="flex items-center">
              <Wallet size={16} className="mr-1" />
              <span>₹{restaurant.priceForTwo} for two</span>
            </div>
          </div>
          
          {restaurant.discount && (
            <div className="mt-2 bg-blue-600 inline-block px-2 py-0.5 text-sm rounded">
              {restaurant.discount}
            </div>
          )}
        </div>
      </div>
      
      {/* Menu */}
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {menu.map(category => (
            <div key={category.id} className="mb-8">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">{category.name} ({category.items.length})</h2>
              <div className="space-y-2">
                {category.items.map(item => (
                  <FoodItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;