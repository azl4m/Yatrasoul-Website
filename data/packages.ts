import { Package } from '../types';

export const packages: Package[] = [
  {
    id: "pkg-001",
    name: "Beach Escape",
    slug: "beach-escape",
    image: "https://picsum.photos/seed/beach-escape/800/600",
    duration: "5 Days / 4 Nights",
    priceFrom: 1299,
    rating: 4.8,
    reviews: 124,
    shortDescription: "Relax on palm-fringed beaches with a luxury stay and private island tours.",
    itinerary: [
      "Day 1: Arrival & Welcome Cocktail",
      "Day 2: Private Island Hopping Tour",
      "Day 3: Snorkeling at Coral Reefs",
      "Day 4: Sunset Cruise & Dinner",
      "Day 5: Leisure Morning & Departure"
    ],
    inclusions: ["Luxury Accommodation", "Daily Breakfast", "Airport Transfers", "Guided Tours"],
    exclusions: ["International Airfare", "Personal Expenses", "Travel Insurance"],
    terms: "Prices subject to availability. 20% deposit required to book.",
    category: 'Beach'
  },
  {
    id: "pkg-002",
    name: "Mountain Trek Adventure",
    slug: "mountain-trek",
    image: "https://picsum.photos/seed/mountain-trek/800/600",
    duration: "7 Days / 6 Nights",
    priceFrom: 1850,
    rating: 4.9,
    reviews: 89,
    shortDescription: "Conquer the peaks and enjoy breathtaking views in the high altitude wilderness.",
    itinerary: [
      "Day 1: Base Camp Arrival",
      "Day 2: Acclimatization Hike",
      "Day 3: Ascent to Ridge Camp",
      "Day 4: Summit Push",
      "Day 5: Descent to Valley",
      "Day 6: Hot Springs Relaxation",
      "Day 7: Departure"
    ],
    inclusions: ["Mountain Guide", "Camping Gear", "All Meals on Trek", "Permits"],
    exclusions: ["Hiking Boots", "Sleeping Bag (Rentals available)", "Tips"],
    terms: "Moderate fitness level required. Weather dependent.",
    category: 'Mountain'
  },
  {
    id: "pkg-003",
    name: "Cultural Heritage Tour",
    slug: "cultural-heritage",
    image: "https://picsum.photos/seed/culture/800/600",
    duration: "6 Days / 5 Nights",
    priceFrom: 1450,
    rating: 4.7,
    reviews: 210,
    shortDescription: "Immerse yourself in ancient traditions, temples, and local culinary delights.",
    itinerary: [
      "Day 1: City Arrival & Market Tour",
      "Day 2: Ancient Temple Visit",
      "Day 3: Traditional Cooking Class",
      "Day 4: Heritage Village Stay",
      "Day 5: Museum & Art Gallery",
      "Day 6: Souvenir Shopping & Departure"
    ],
    inclusions: ["Heritage Hotels", "Local Guide", "Entrance Fees", "Cooking Class"],
    exclusions: ["Dinner (except welcome dinner)", "Alcoholic Beverages"],
    terms: "Dress code applies for temple visits.",
    category: 'Culture'
  },
  {
    id: "pkg-004",
    name: "Wildlife Safari",
    slug: "wildlife-safari",
    image: "https://picsum.photos/seed/safari/800/600",
    duration: "4 Days / 3 Nights",
    priceFrom: 2100,
    rating: 4.9,
    reviews: 56,
    shortDescription: "Spot the big five in their natural habitat with expert naturalists.",
    itinerary: [
      "Day 1: Arrival & Evening Game Drive",
      "Day 2: Full Day Safari",
      "Day 3: Bush Walk & Night Safari",
      "Day 4: Morning Bird Watching & Departure"
    ],
    inclusions: ["Luxury Tented Camp", "4x4 Safari Vehicle", "Park Fees", "All Meals"],
    exclusions: ["International Flights", "Binoculars", "Gratuities"],
    terms: "Early morning starts expected.",
    category: 'Safari'
  },
  {
    id: "pkg-005",
    name: "City Break Lux",
    slug: "city-break",
    image: "https://picsum.photos/seed/city/800/600",
    duration: "3 Days / 2 Nights",
    priceFrom: 999,
    rating: 4.6,
    reviews: 340,
    shortDescription: "A fast-paced, stylish tour of the city's best rooftop bars and shopping districts.",
    itinerary: [
      "Day 1: Arrival & Rooftop Dinner",
      "Day 2: Private Shopping Tour & Theatre",
      "Day 3: Brunch & Departure"
    ],
    inclusions: ["5-Star Hotel", "Concierge Service", "Show Tickets"],
    exclusions: ["Meals not specified", "Shopping budget"],
    terms: "Smart casual dress code for evening venues.",
    category: 'City'
  },
   {
    id: "pkg-006",
    name: "Luxury Cruise",
    slug: "luxury-cruise",
    image: "https://picsum.photos/seed/cruise/800/600",
    duration: "8 Days / 7 Nights",
    priceFrom: 3200,
    rating: 4.9,
    reviews: 45,
    shortDescription: "Sail the azure waters in unmatched comfort on a private charter yacht.",
    itinerary: [
      "Day 1: Boarding & Champagne Welcome",
      "Day 2: Coastal Sailing",
      "Day 3: Port Visit & Dining",
      "Day 4: Water Sports Day",
      "Day 5-7: Island Hopping",
      "Day 8: Disembarkation"
    ],
    inclusions: ["Private Yacht Cabin", "Chef on board", "Water Sports Equipment"],
    exclusions: ["Fuel Surcharge", "Docking Fees (if extra)", "Crew Tips"],
    terms: "Passport valid for 6 months required.",
    category: 'Luxury'
  }
];

export const testimonials: import('../types').Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "New York, USA",
    image: "https://picsum.photos/seed/sarah/200/200",
    text: "The Beach Escape was exactly what we needed. Every detail was taken care of!"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Toronto, Canada",
    image: "https://picsum.photos/seed/marcus/200/200",
    text: "Hiking the ridges with Travelsoul was life-changing. The guides were incredibly professional."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "https://picsum.photos/seed/elena/200/200",
    text: "I've never felt more connected to a culture. The heritage tour is a must-do."
  }
];
