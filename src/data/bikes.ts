export interface Bike {
  id: string;
  name: string;
  price: number;
  category: 'Adventure' | 'Motorcycle' | 'Scooter';
  image: string;
}

export const bikes: Bike[] = [
  {
    id: 'himalayan-440',
    name: 'Himalayan 440',
    price: 2200,
    category: 'Adventure',
    image: '/images/bikes/himalayan-440.jpg',
  },
  {
    id: 'himalayan-411',
    name: 'Himalayan 411',
    price: 1800,
    category: 'Adventure',
    image: '/images/bikes/himalayan-411.jpg',
  },
  {
    id: 'v-strom-250',
    name: 'Suzuki V-Strom 250',
    price: 1600,
    category: 'Adventure',
    image: '/images/bikes/v-strom-250.jpg',
  },
  {
    id: 'xpulse-210',
    name: 'Hero Xpulse 210',
    price: 1500,
    category: 'Adventure',
    image: '/images/bikes/xpulse-210.jpg',
  },
  {
    id: 'classic-350',
    name: 'Royal Enfield Classic',
    price: 1200,
    category: 'Motorcycle',
    image: '/images/bikes/classic.jpg',
  },
  {
    id: 'hunter-350',
    name: 'Royal Enfield Hunter',
    price: 1200,
    category: 'Motorcycle',
    image: '/images/bikes/hunter.jpg',
  },
  {
    id: 'hunter-metro',
    name: 'Royal Enfield Metro',
    price: 1500,
    category: 'Motorcycle',
    image: '/images/bikes/metro.jpg',
  },
  {
    id: 'ntorq',
    name: 'TVS Ntorq',
    price: 850,
    category: 'Scooter',
    image: '/images/bikes/ntorq.jpg',
  },
  {
    id: 'burgman-new',
    name: 'Suzuki Burgman New',
    price: 800,
    category: 'Scooter',
    image: '/images/bikes/burgman-new.jpg',
  },
  {
    id: 'burgman',
    name: 'Suzuki Burgman',
    price: 800,
    category: 'Scooter',
    image: '/images/bikes/burgman.jpg',
  },
  {
    id: 'activa',
    name: 'Honda Activa',
    price: 650,
    category: 'Scooter',
    image: '/images/bikes/activa.jpg',
  },
];
