import React from 'react';
import Card from './ui/Card';

const categories = [
  {
    id: 1,
    name: 'Offers',
    image: 'https://images.pexels.com/photos/6633717/pexels-photo-6633717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Pizza',
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Biryani',
    image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Burgers',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Chinese',
    image: 'https://images.pexels.com/photos/5836429/pexels-photo-5836429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Dessert',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const FoodCategories: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">What's on your mind?</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map(category => (
          <div key={category.id} className="flex-shrink-0">
            <Card className="w-24 h-32 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;