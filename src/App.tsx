import React, { useState } from 'react';
import { restaurants, restaurantMenus } from './data/restaurants';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Banner from './components/Banner';
import FoodCategories from './components/FoodCategories';
import RestaurantList from './components/RestaurantList';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';
import Cart from './components/Cart';
import LocationModal from './components/LocationModal';

function App() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState('HSR Layout, Bangalore');
  
  const selectedRestaurant = selectedRestaurantId 
    ? restaurants.find(r => r.id === selectedRestaurantId) 
    : null;
    
  const restaurantMenu = selectedRestaurantId 
    ? restaurantMenus[selectedRestaurantId] || []
    : [];
    
  const featuredRestaurants = restaurants.filter(r => r.promoted);
  const otherRestaurants = restaurants.filter(r => !r.promoted);
  
  const handleSelectRestaurant = (id: string) => {
    setSelectedRestaurantId(id);
    window.scrollTo(0, 0);
  };
  
  const handleBackToHome = () => {
    setSelectedRestaurantId(null);
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const openLocationModal = () => {
    setIsLocationModalOpen(true);
  };
  
  const handleSelectLocation = (location: string) => {
    setUserLocation(location);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header 
          onLocationClick={openLocationModal}
          location={userLocation}
        />
        
        <main className="flex-grow pt-16 md:pt-20">
          {selectedRestaurant ? (
            <RestaurantMenu 
              restaurant={selectedRestaurant}
              menu={restaurantMenu}
              onBack={handleBackToHome}
            />
          ) : (
            <div className="container mx-auto px-4 py-6">
              <Banner />
              <FoodCategories />
              
              <RestaurantList 
                title="Top Picks For You"
                restaurants={featuredRestaurants} 
                onSelectRestaurant={handleSelectRestaurant}
              />
              
              <RestaurantList 
                title="All Restaurants Nearby"
                restaurants={otherRestaurants} 
                onSelectRestaurant={handleSelectRestaurant}
              />
            </div>
          )}
        </main>
        
        <Footer />
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <LocationModal 
          isOpen={isLocationModalOpen}
          onClose={() => setIsLocationModalOpen(false)}
          onSelectLocation={handleSelectLocation}
        />
        
        {!isCartOpen && (
          <button 
            onClick={toggleCart}
            className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 z-40"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        )}
      </div>
    </CartProvider>
  );
}

export default App;