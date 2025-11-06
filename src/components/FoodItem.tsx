import React from 'react';
import { useCart } from '../context/CartContext';
import { FoodItem as FoodItemType } from '../types';
import Button from './ui/Button';
import Badge from './ui/Badge';

interface FoodItemProps {
  item: FoodItemType;
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  const increaseQuantity = () => {
    if (cartItem) {
      updateQuantity(item.id, cartItem.quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (cartItem && cartItem.quantity > 0) {
      updateQuantity(item.id, cartItem.quantity - 1);
    }
  };

  return (
    <div className="flex justify-between py-6 border-b">
      <div className="flex-1 pr-4">
        <div className="flex items-center">
          {item.veg ? (
            <div className="w-4 h-4 border border-green-600 flex items-center justify-center mr-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          ) : (
            <div className="w-4 h-4 border border-red-600 flex items-center justify-center mr-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
          )}
          <h3 className="font-medium">{item.name}</h3>
          {item.recommended && (
            <Badge color="orange" className="ml-2">Bestseller</Badge>
          )}
        </div>
        <div className="mt-1 text-gray-700">₹{item.price}</div>
        <p className="mt-2 text-gray-500 text-sm">{item.description}</p>
      </div>
      
      <div className="w-24 h-24 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
        
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center">
          {!cartItem || cartItem.quantity === 0 ? (
            <Button 
              variant="outline" 
              size="sm"
              className="shadow-md bg-white"
              onClick={handleAddToCart}
            >
              ADD
            </Button>
          ) : (
            <div className="flex items-center bg-white shadow-md rounded-md border border-gray-200">
              <button 
                className="px-2 py-1 text-orange-500 font-bold"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-2 py-1">{cartItem.quantity}</span>
              <button 
                className="px-2 py-1 text-orange-500 font-bold"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;