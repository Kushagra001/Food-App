import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full md:w-96 h-full overflow-auto shadow-xl transform transition-transform duration-300 ease-in-out z-10">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 p-4">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">Your cart is empty</p>
            <p className="text-gray-400 text-sm text-center mt-2">Add items from a restaurant to order</p>
            <Button
              className="mt-6"
              onClick={onClose}
            >
              Browse Restaurants
            </Button>
          </div>
        ) : (
          <>
            <div className="p-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex justify-between items-center py-3 border-b"
                >
                  <div className="flex items-start">
                    <div className="w-2 h-2 mt-2 rounded-full mr-2" style={{ 
                      backgroundColor: item.veg ? '#3f9651' : '#d83a3a' 
                    }}></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-2 py-1 text-orange-500"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-2 py-1">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 text-orange-500"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      className="ml-2 text-gray-400 hover:text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              
              <button 
                className="mt-4 text-red-500 text-sm font-medium flex items-center"
                onClick={clearCart}
              >
                <Trash2 size={14} className="mr-1" />
                Clear Cart
              </button>
            </div>
            
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between py-2">
                <span>Item Total</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between py-2 font-bold border-t border-dashed mt-2 pt-2">
                <span>To Pay</span>
                <span>₹{cartTotal + 40}</span>
              </div>
              
              <Button
                fullWidth
                className="mt-4"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;