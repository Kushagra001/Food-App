import React, { useState } from 'react';
import { MapPin, Search, X } from 'lucide-react';
import Button from './ui/Button';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const popularLocations = [
  'Indiranagar, Bangalore',
  'Koramangala, Bangalore',
  'HSR Layout, Bangalore',
  'Powai, Mumbai',
  'Andheri East, Mumbai',
  'Connaught Place, Delhi',
];

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onSelectLocation
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  if (!isOpen) return null;
  
  const handleSelectLocation = (location: string) => {
    onSelectLocation(location);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Select your location</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 border-b">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for area, street name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-10 py-2 border rounded-lg"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="mt-4 flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              <MapPin size={16} className="mr-1 text-orange-500" />
              Use current location
            </Button>
          </div>
        </div>
        
        <div className="overflow-y-auto flex-1 p-4">
          <h3 className="text-gray-500 text-sm font-medium mb-2">POPULAR LOCATIONS</h3>
          <div className="space-y-3">
            {popularLocations.map((location, index) => (
              <div 
                key={index}
                className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleSelectLocation(location)}
              >
                <MapPin size={18} className="mr-3 text-gray-400" />
                <div>
                  <p className="font-medium">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;