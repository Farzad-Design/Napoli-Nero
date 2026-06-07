export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Giulia Moretti',
    role: 'Interior Designer',
    location: 'Milan, Italy',
    rating: 5,
    text: 'Absolutely stunning. The crust is perfect and the ingredients are exceptionally fresh. A true culinary highlight. Napoli Nero has set a new standard for what pizza can be.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&q=80',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Finance Executive',
    location: 'London, UK',
    rating: 5,
    text: 'The atmosphere, service, and the truffle pizza are impeccable. The burrata and black truffle combination was one truly divine experience. Will return without hesitation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  {
    id: '3',
    name: 'Sarah Dubois',
    role: 'Travel Journalist',
    location: 'Paris, France',
    rating: 5,
    text: "I've dined across Naples and beyond, but Napoli Nero's flavors, stunning presentation, and exceptional service set it truly apart. The Margherita Classica alone is worth the trip.",
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80',
  },
  {
    id: '4',
    name: 'Marco Bianchi',
    role: 'Restaurant Critic',
    location: 'Rome, Italy',
    rating: 5,
    text: 'A revelation. The wood-fired technique combined with premium imported ingredients creates something extraordinary. The Napoli Nero Speciale with squid ink dough is a masterpiece.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
  },
  {
    id: '5',
    name: 'Elena Vasquez',
    role: 'Food & Lifestyle Blogger',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'Napoli Nero has completely redefined pizza for me. The Diavola Piccante has just the right balance of heat and depth. The slow-fermented dough is transformative. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
  {
    id: '6',
    name: 'James Whitfield',
    role: 'Michelin Guide Inspector',
    location: 'New York, USA',
    rating: 5,
    text: "Rarely does a restaurant this focused on a single dish execute with such flawless precision. Every element of the Quattro Formaggi was balanced to perfection. Chef Marco's work is exceptional.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
  },
];
