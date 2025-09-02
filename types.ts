
export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Bike {
  id: number;
  name: string;
  type: string;
  pricePerDay: number;
  imageUrl: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}
