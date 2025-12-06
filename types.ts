export interface Package {
  id: string;
  name: string;
  slug: string;
  image: string;
  duration: string;
  priceFrom: number;
  rating: number;
  reviews: number;
  shortDescription: string;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  terms: string;
  category: 'Beach' | 'Mountain' | 'Culture' | 'City' | 'Luxury' | 'Safari';
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  packageId: string;
  message?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
}
