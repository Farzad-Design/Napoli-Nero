export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badges: string[];
  category: string;
}

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Margherita Classica',
    description: 'San Marzano DOP tomatoes, fior di latte mozzarella, fresh Genovese basil, and extra-virgin Sicilian olive oil. A timeless Neapolitan classic.',
    price: 18,
    image: '/images/pizza1.jpg',
    badges: ['Chef Choice', 'Best Seller'],
    category: 'Classiche',
  },
  {
    id: '2',
    name: 'Tartufo Nero',
    description: 'Fresh Périgord black truffle shavings, taleggio cream, wild mushroom medley, and aged parmigiano reggiano over slow-fermented dough.',
    price: 35,
    image: '/images/pizza2.jpg',
    badges: ['Chef Choice', 'Best Seller'],
    category: 'Speciali',
  },
  {
    id: '3',
    name: 'Pepperoni Nero',
    description: 'Double-layered Italian pepperoni, spicy calabrese salami, smoked fior di latte, and ember-roasted San Marzano tomato sauce.',
    price: 21,
    image: '/images/pizza3.jpg',
    badges: ['Best Seller'],
    category: 'Classiche',
  },
  {
    id: '4',
    name: 'Quattro Formaggi',
    description: 'A symphonic blend of fior di latte, gorgonzola dolce, aged taleggio, and 24-month parmigiano reggiano on a white cream base.',
    price: 22,
    image: '/images/pizza4.jpg',
    badges: ['Chef Choice'],
    category: 'Classiche',
  },
  {
    id: '5',
    name: 'Diavola Piccante',
    description: 'Fiery \'nduja Calabrese, Calabrian chili oil, ember-roasted peppers, smoked scamorza, and fresh basil. For the bold palate.',
    price: 24,
    image: '/images/pizza5.jpg',
    badges: ['Best Seller'],
    category: 'Speciali',
  },
  {
    id: '6',
    name: 'Napoli Nero Speciale',
    description: 'Our signature creation — squid ink infused dough, burrata di bufala, prosciutto di Parma 24 mesi, fig reduction, and aged balsamic di Modena.',
    price: 38,
    image: '/images/pizza1.jpg',
    badges: ['Chef Choice'],
    category: 'Speciali',
  },
];
