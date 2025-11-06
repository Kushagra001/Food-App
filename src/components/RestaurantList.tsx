import React from 'react';
import { Restaurant } from '../types';
import RestaurantCard from './RestaurantCard';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (id: string) => void;
  title: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ 
  restaurants, 
  onSelectRestaurant,
  title
}) => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="w-full">
            <RestaurantCard
              restaurant={restaurant}
              onClick={() => onSelectRestaurant(restaurant.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;