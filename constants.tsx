
import { NavLinkItem, Bike, Plan, Testimonial, TeamMember } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Plans', path: '/plans' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact Us', path: '/contact' },
];

export const BIKES: Bike[] = [
  { id: 1, name: 'Urban Cruiser', type: 'Scooter', pricePerDay: 25, imageUrl: 'https://picsum.photos/seed/bike1/600/400' },
  { id: 2, name: 'Mountain Maverick', type: 'Adventure', pricePerDay: 45, imageUrl: 'https://picsum.photos/seed/bike2/600/400' },
  { id: 3, name: 'City Sprinter', type: 'Commuter', pricePerDay: 30, imageUrl: 'https://picsum.photos/seed/bike3/600/400' },
  { id: 4, name: 'Retro Classic', type: 'Cruiser', pricePerDay: 40, imageUrl: 'https://picsum.photos/seed/bike4/600/400' },
];

export const PLANS: Plan[] = [
  {
    name: 'Daily Rider',
    price: '$25',
    period: 'per day',
    features: ['150km mileage limit', 'Basic insurance included', '1 Helmet provided'],
    isPopular: false,
  },
  {
    name: 'Weekend Warrior',
    price: '$60',
    period: 'per weekend',
    features: ['400km mileage limit', 'Comprehensive insurance', '2 Helmets provided', 'Roadside assistance'],
    isPopular: true,
  },
  {
    name: 'Weekly Commuter',
    price: '$150',
    period: 'per week',
    features: ['1000km mileage limit', 'Comprehensive insurance', '2 Helmets provided', 'Roadside assistance', 'Free bike swap'],
    isPopular: false,
  },
    {
    name: 'Monthly Pro',
    price: '$450',
    period: 'per month',
    features: ['Unlimited mileage', 'Premium insurance coverage', '2 Premium Helmets', 'Priority roadside assistance', 'Monthly servicing included'],
    isPopular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Sarah L.', location: 'New York', quote: 'The best bike rental experience I\'ve ever had! The scooter was in perfect condition and the process was super smooth. Highly recommend Vroom!', avatarUrl: 'https://picsum.photos/seed/person1/100/100' },
  { id: 2, name: 'Mike R.', location: 'San Francisco', quote: 'Rented the adventure bike for a weekend trip. It handled the trails beautifully. The team was helpful and professional. Will definitely be back.', avatarUrl: 'https://picsum.photos/seed/person2/100/100' },
  { id: 3, name: 'Jessica P.', location: 'Austin', quote: 'Affordable prices and great service. The weekly plan is perfect for my commute. It\'s so much more fun than taking the bus!', avatarUrl: 'https://picsum.photos/seed/person3/100/100' },
  { id: 4, name: 'David C.', location: 'Miami', quote: 'Booking was a breeze through their website. The bike was delivered to my hotel on time. Fantastic service from start to finish.', avatarUrl: 'https://picsum.photos/seed/person4/100/100' },
  { id: 5, name: 'Emily T.', location: 'Los Angeles', quote: 'The Retro Classic bike was a head-turner! Had an amazing time cruising down the coast. The staff gave me great tips on scenic routes.', avatarUrl: 'https://picsum.photos/seed/person5/100/100' },
  { id: 6, name: 'Chris B.', location: 'Chicago', quote: 'I\'ve been using their monthly plan for three months now. It\'s reliable, cost-effective, and the bikes are always well-maintained. A+ service.', avatarUrl: 'https://picsum.photos/seed/person6/100/100' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'Alex Johnson', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/team1/400/400' },
  { id: 2, name: 'Maria Garcia', role: 'Head of Operations', imageUrl: 'https://picsum.photos/seed/team2/400/400' },
  { id: 3, name: 'Sam Chen', role: 'Lead Mechanic', imageUrl: 'https://picsum.photos/seed/team3/400/400' },
];

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
    <span className="text-2xl font-bold text-secondary">Vroom</span>
  </div>
);

export const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
