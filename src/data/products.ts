import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'bronze-watch',
    name: 'Bronze Watch',
    price: 149.99,
    tagline: 'Raw character, lasting style',
    description:
      'Crafted with a bronze-tone alloy case, this timepiece exudes vintage appeal and rugged charm. Perfect for those who appreciate character that develops over time.',
    features: [
      'Bronze-tone alloy case',
      'Japanese quartz movement',
      'Genuine leather strap',
      'Water resistant to 30m',
      '2-year warranty',
    ],
    imageSrc: '/images/bronze-watch.jpg',
    accentColor: '#CD7F32',
  },
  {
    id: 'silver-watch',
    name: 'Silver Watch',
    price: 249.99,
    tagline: 'Timeless precision',
    description:
      'A stainless steel masterpiece that combines sophistication with everyday durability. Swiss quartz precision ensures you are always on time.',
    features: [
      'Stainless steel case',
      'Swiss quartz movement',
      'Sapphire crystal glass',
      'Water resistant to 50m',
      '5-year warranty',
    ],
    imageSrc: '/images/silver-watch.jpg',
    accentColor: '#A8A9AD',
  },
  {
    id: 'gold-watch',
    name: 'Gold Watch',
    price: 449.99,
    tagline: 'Opulence, redefined',
    description:
      'Adorned with a gold-plated steel case, this luxury timepiece makes a bold statement. Swiss automatic movement powers a watch built to last generations.',
    features: [
      'Gold-plated steel case',
      'Swiss automatic movement',
      'Sapphire crystal glass',
      'Water resistant to 100m',
      'Lifetime warranty',
    ],
    imageSrc: '/images/gold-watch.jpg',
    accentColor: '#FFD700',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
