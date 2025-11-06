import { Restaurant, Category } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Biryani Paradise',
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Biryani', 'North Indian', 'Mughlai'],
    rating: 4.3,
    deliveryTime: 28,
    priceForTwo: 400,
    promoted: true,
    discount: '50% OFF up to ₹100'
  },
  {
    id: '2',
    name: 'The Burger Club',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Burgers', 'American', 'Fast Food'],
    rating: 4.1,
    deliveryTime: 33,
    priceForTwo: 350,
    promoted: false,
    discount: '30% OFF up to ₹75'
  },
  {
    id: '3',
    name: 'Pizza Heaven',
    image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Pizza', 'Italian', 'Pasta'],
    rating: 4.4,
    deliveryTime: 30,
    priceForTwo: 450,
    promoted: true,
  },
  {
    id: '4',
    name: 'Chai Point',
    image: 'https://images.pexels.com/photos/1876029/pexels-photo-1876029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Beverages', 'Snacks', 'Healthy Food'],
    rating: 4.2,
    deliveryTime: 20,
    priceForTwo: 200,
    promoted: false,
    discount: '15% OFF on all orders'
  },
  {
    id: '5',
    name: 'South Indian Delight',
    image: 'https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['South Indian', 'Dosa', 'Idli'],
    rating: 4.5,
    deliveryTime: 25,
    priceForTwo: 300,
    promoted: true,
  },
  {
    id: '6',
    name: 'Chinese Wok',
    image: 'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Chinese', 'Pan Asian', 'Thai'],
    rating: 4.0,
    deliveryTime: 35,
    priceForTwo: 400,
    promoted: false,
    discount: '40% OFF up to ₹120'
  },
  {
    id: '7',
    name: 'Healthy Bowls',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Salads', 'Healthy Food', 'Continental'],
    rating: 4.6,
    deliveryTime: 22,
    priceForTwo: 350,
    promoted: true,
  },
  {
    id: '8',
    name: 'Ice Cream Factory',
    image: 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: ['Desserts', 'Ice Cream', 'Beverages'],
    rating: 4.8,
    deliveryTime: 18,
    priceForTwo: 250,
    promoted: false,
    discount: 'Buy 1 Get 1 Free'
  }
];

export const restaurantMenus: Record<string, Category[]> = {
  '1': [
    {
      id: 'cat1',
      name: 'Recommended',
      items: [
        {
          id: 'item1',
          name: 'Hyderabadi Chicken Biryani',
          description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices',
          price: 250,
          image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          veg: false,
          recommended: true
        },
        {
          id: 'item2',
          name: 'Mutton Biryani',
          description: 'Aromatic biryani with tender pieces of mutton cooked to perfection',
          price: 320,
          image: 'https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          veg: false,
          recommended: true
        }
      ]
    },
    {
      id: 'cat2',
      name: 'Biryani',
      items: [
        {
          id: 'item3',
          name: 'Veg Biryani',
          description: 'Fragrant rice cooked with mixed vegetables and spices',
          price: 180,
          image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          veg: true
        },
        {
          id: 'item4',
          name: 'Egg Biryani',
          description: 'Aromatic rice with boiled eggs and spices',
          price: 200,
          image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          veg: false
        }
      ]
    },
    {
      id: 'cat3',
      name: 'Starters',
      items: [
        {
          id: 'item5',
          name: 'Chicken 65',
          description: 'Spicy deep-fried chicken marinated with aromatic spices',
          price: 220,
          image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          veg: false,
          spicy: true
        }
      ]
    }
  ]
};