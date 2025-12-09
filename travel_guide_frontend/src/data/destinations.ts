export type Destination = {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number; // 0..5
  country: string;
  tags: string[];
};

export const mockDestinations: Destination[] = [
  {
    id: "paris",
    title: "Paris",
    description: "Iconic city of art, fashion and the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1543342386-cd0b06c0910f?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
    country: "France",
    tags: ["romance", "culture", "city"],
  },
  {
    id: "kyoto",
    title: "Kyoto",
    description: "Historic temples, bamboo forests and tea houses.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    country: "Japan",
    tags: ["temples", "nature", "culture"],
  },
  {
    id: "bali",
    title: "Bali",
    description: "Tropical beaches, rice terraces and serene retreats.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop",
    rating: 4.6,
    country: "Indonesia",
    tags: ["beach", "island", "relax"],
  },
  {
    id: "new-york",
    title: "New York",
    description: "Skyscrapers, Broadway, and a city that never sleeps.",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=1600&auto=format&fit=crop",
    rating: 4.5,
    country: "USA",
    tags: ["city", "nightlife", "culture"],
  },
  {
    id: "rome",
    title: "Rome",
    description: "Colosseum, ancient ruins and delicious cuisine.",
    image: "https://images.unsplash.com/photo-1526481280698-8fcc12e8d785?q=80&w=1600&auto=format&fit=crop",
    rating: 4.6,
    country: "Italy",
    tags: ["history", "culture", "food"],
  },
  {
    id: "cape-town",
    title: "Cape Town",
    description: "Table Mountain views and vibrant waterfront.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    rating: 4.4,
    country: "South Africa",
    tags: ["mountains", "ocean", "adventure"],
  },
  {
    id: "santorini",
    title: "Santorini",
    description: "White-washed villages and breathtaking sunsets.",
    image: "https://images.unsplash.com/photo-1504123010103-b1f3fe484a32?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    country: "Greece",
    tags: ["island", "beach", "romance"],
  },
  {
    id: "banff",
    title: "Banff",
    description: "Turquoise lakes, alpine scenery, and wildlife.",
    image: "https://images.unsplash.com/photo-1455210988449-0cddb3e2f4c6?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
    country: "Canada",
    tags: ["mountains", "nature", "hiking"],
  },
  // Additional to ensure >= 8
  {
    id: "sydney",
    title: "Sydney",
    description: "Harbour Bridge, Opera House and sunny beaches.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad77?q=80&w=1600&auto=format&fit=crop",
    rating: 4.5,
    country: "Australia",
    tags: ["beach", "city", "harbour"],
  },
];
