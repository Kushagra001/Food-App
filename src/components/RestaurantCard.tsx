import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '../types';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  const {
    name,
    image,
    cuisine,
    rating,
    deliveryTime,
    priceForTwo,
    promoted,
    discount
  } = restaurant;

  return (
    <Card
      onClick={onClick}
      className="w-full cursor-pointer group"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {promoted && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-gray-900 to-black px-2 py-1 text-xs text-white font-medium rounded">
            PROMOTED
          </div>
        )}
        {discount && (
          <div className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 text-xs text-white font-medium rounded">
            {discount}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <div className="flex items-center mt-1">
          <span className="flex items-center bg-green-700 text-white px-1 py-0.5 text-sm rounded">
            <Star size={12} className="mr-0.5 fill-white" />
            {rating}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">{deliveryTime} mins</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">₹{priceForTwo} for two</span>
        </div>
        
        <div className="mt-2 text-gray-500 text-sm truncate">
          {cuisine.join(', ')}
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;