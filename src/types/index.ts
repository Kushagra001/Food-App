export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  deliveryTime: number;
  priceForTwo: number;
  promoted: boolean;
  discount?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
  spicy?: boolean;
  recommended?: boolean;
}

export interface Category {
  id: string;
  name: string;
  items: FoodItem[];
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface UserLocation {
  address: string;
  area: string;
}