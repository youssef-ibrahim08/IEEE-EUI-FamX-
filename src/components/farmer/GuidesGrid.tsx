
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Guide {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const guides: Guide[] = [
  {
    id: "tomatoes",
    title: "Growing Organic Tomatoes",
    category: "Vegetables",
    description: "A complete guide to growing delicious, healthy tomatoes using organic methods.",
    imageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=635",
    difficulty: "Beginner"
  },
  {
    id: "strawberries",
    title: "Organic Strawberry Cultivation",
    category: "Fruits",
    description: "Learn how to grow sweet, juicy strawberries without chemical fertilizers or pesticides.",
    imageUrl: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=642",
    difficulty: "Intermediate"
  },
  {
    id: "carrots",
    title: "Carrot Growing Guide",
    category: "Root Vegetables",
    description: "Master the art of growing crisp, flavorful carrots in any organic garden.",
    imageUrl: "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?auto=format&fit=crop&q=80&w=635",
    difficulty: "Beginner"
  },
  {
    id: "avocados",
    title: "Avocado Tree Care",
    category: "Fruits",
    description: "Everything you need to know about growing avocados organically.",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=668",
    difficulty: "Advanced"
  },
  {
    id: "lettuce",
    title: "Organic Lettuce Varieties",
    category: "Leafy Greens",
    description: "Grow different lettuce varieties year-round using organic methods.",
    imageUrl: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&q=80&w=625",
    difficulty: "Beginner"
  },
  {
    id: "herbs",
    title: "Culinary Herbs Guide",
    category: "Herbs",
    description: "Start your organic herb garden with these easy-to-grow culinary varieties.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=680",
    difficulty: "Beginner"
  }
];

interface GuidesGridProps {
  category?: string;
}

const GuidesGrid = ({ category }: GuidesGridProps) => {
  const filteredGuides = category 
    ? guides.filter(guide => guide.category === category)
    : guides;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredGuides.map((guide) => (
        <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={guide.imageUrl} 
              alt={guide.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription className="mt-1">{guide.category}</CardDescription>
              </div>
              <div className={`text-xs rounded-full px-2 py-1 ${
                guide.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                guide.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }`}>
                {guide.difficulty}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{guide.description}</p>
          </CardContent>
          <CardFooter>
            <Link to={`/farmer/guides/${guide.id}`} className="w-full">
              <Button variant="outline" className="w-full">Read Guide</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default GuidesGrid;
