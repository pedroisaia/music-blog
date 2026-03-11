export interface Article {
  id: number;
  title: string;
  keywords: string;
  description: string;
  date: string;
  image: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Future of Digital Sound",
    keywords: "Technology",
    description: "Exploring how AI is reshaping the way we produce and consume music in the modern era.",
    date: "2024-05-20",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Vinyl's Great Comeback",
    keywords: "Music",
    description: "Why physical media is seeing a massive surge in the digital age among younger collectors.",
    date: "2024-05-18",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Modern Minimalist Fashion",
    keywords: "Fashion",
    description: "How simplicity became the ultimate statement in the early 2020s fashion scene.",
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Hidden Gems of Kyoto",
    keywords: "Travel",
    description: "A guide to the quietest temples and best hidden tea houses in the heart of Japan.",
    date: "2024-05-10",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "The Rise of Cyberpunk Literature",
    keywords: "Literature",
    description: "Analyzing the neon-soaked roots and the philosophical weight of modern sci-fi writing.",
    date: "2024-05-05",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Sustainable Travel Tips",
    keywords: "Travel",
    description: "Practical ways to explore the world while maintaining a low environmental footprint.",
    date: "2024-05-01",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Studio Design Evolution",
    keywords: "Technology",
    description: "How home studios are matching the quality of professional recording environments.",
    date: "2024-04-28",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "The Jazz Renaissance",
    keywords: "Music",
    description: "A new generation of musicians is bringing jazz back to the forefront of global culture.",
    date: "2024-04-25",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop"
  }
];