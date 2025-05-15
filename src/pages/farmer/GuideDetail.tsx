
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideDetails from "@/components/farmer/GuideDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock guide data - in a real app this would come from an API
const guides = [
  {
    id: "tomatoes",
    name: "Tomatoes",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=1000",
    description: "Tomatoes are a warm-season crop and one of the most popular vegetables for home gardeners. They're versatile, nutritious, and come in many varieties from small cherry types to large beefsteaks.",
    growingSeason: ["Spring", "Summer"],
    difficulty: "Medium" as const,
    daysToMaturity: "60-85 days",
    spacing: "18-36 inches apart",
    sunlight: "Full sun (6-8 hours daily)",
    waterNeeds: "1-2 inches per week",
    soilType: "Well-draining, rich in organic matter, pH 6.0-6.8",
    nutrientRequirements: [
      { nutrient: "Nitrogen (N)", amount: "Low to moderate", importance: "Essential early in growth, reduce as plant matures to prevent excessive foliage" },
      { nutrient: "Phosphorus (P)", amount: "High", importance: "Critical for root development, flowering, and fruiting" },
      { nutrient: "Potassium (K)", amount: "High", importance: "Promotes disease resistance and improves fruit quality" },
      { nutrient: "Calcium (Ca)", amount: "Moderate", importance: "Prevents blossom end rot and strengthens cell walls" },
      { nutrient: "Magnesium (Mg)", amount: "Moderate", importance: "Essential for chlorophyll production and photosynthesis" }
    ],
    commonPests: [
      "Tomato hornworms",
      "Aphids",
      "Whiteflies",
      "Early blight",
      "Late blight",
      "Blossom end rot (caused by calcium deficiency)"
    ],
    tips: [
      "Stake or cage plants early to provide support",
      "Mulch around plants to retain moisture and prevent soil-borne diseases",
      "Prune suckers for indeterminate varieties to improve air circulation",
      "Water at the base of plants in the morning to reduce disease risk",
      "Rotate crops yearly to prevent soil-borne diseases"
    ]
  },
  {
    id: "strawberries",
    name: "Strawberries",
    image: "https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&q=80&w=1000",
    description: "Strawberries are perennial fruits that are relatively easy to grow and highly rewarding. They produce sweet, juicy berries that are perfect for fresh eating, preserves, or desserts.",
    growingSeason: ["Spring", "Early Summer"],
    difficulty: "Easy" as const,
    daysToMaturity: "90-110 days from planting to first harvest",
    spacing: "12-18 inches apart, rows 2-3 feet apart",
    sunlight: "Full sun (6-8 hours daily)",
    waterNeeds: "1-1.5 inches per week",
    soilType: "Well-draining, rich in organic matter, pH 5.5-6.8",
    nutrientRequirements: [
      { nutrient: "Nitrogen (N)", amount: "Moderate", importance: "Important early in plant growth, reduce before fruiting" },
      { nutrient: "Phosphorus (P)", amount: "High", importance: "Essential for strong root development and flower production" },
      { nutrient: "Potassium (K)", amount: "High", importance: "Critical for fruit quality and plant vigor" },
      { nutrient: "Boron (B)", amount: "Low", importance: "Important for complete pollination and well-formed fruit" },
      { nutrient: "Iron (Fe)", amount: "Moderate", importance: "Necessary for chlorophyll formation and plant respiration" }
    ],
    commonPests: [
      "Slugs and snails",
      "Spider mites",
      "Strawberry crown borer",
      "Leaf spot",
      "Powdery mildew",
      "Fruit rot"
    ],
    tips: [
      "Plant in early spring as soon as soil can be worked",
      "Remove runners to strengthen mother plants, or direct runners for new plants",
      "Mulch around plants with straw to keep berries clean and prevent rot",
      "Replace plants every 3-4 years as production decreases",
      "Protect from birds with netting when berries begin to ripen"
    ]
  },
  {
    id: "lettuce",
    name: "Lettuce",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=1000",
    description: "Lettuce is a cool-season crop that's perfect for beginners. It grows quickly, takes up little space, and can be harvested multiple times if you pick outer leaves.",
    growingSeason: ["Spring", "Fall"],
    difficulty: "Easy" as const,
    daysToMaturity: "45-65 days",
    spacing: "6-12 inches apart, depending on variety",
    sunlight: "Partial shade to full sun (3-6 hours daily)",
    waterNeeds: "1 inch per week",
    soilType: "Well-draining, rich in organic matter, pH 6.0-7.0",
    nutrientRequirements: [
      { nutrient: "Nitrogen (N)", amount: "Moderate to high", importance: "Critical for leaf growth and development" },
      { nutrient: "Phosphorus (P)", amount: "Low to moderate", importance: "Supports root development and overall plant health" },
      { nutrient: "Potassium (K)", amount: "Moderate", importance: "Enhances disease resistance and quality" },
      { nutrient: "Calcium (Ca)", amount: "Moderate", importance: "Prevents tip burn and improves leaf quality" },
      { nutrient: "Magnesium (Mg)", amount: "Low to moderate", importance: "Essential for chlorophyll production" }
    ],
    commonPests: [
      "Aphids",
      "Slugs and snails",
      "Cutworms",
      "Downy mildew",
      "Powdery mildew",
      "Bacterial leaf spot"
    ],
    tips: [
      "Succession plant every 2-3 weeks for continuous harvest",
      "Provide afternoon shade in warm regions",
      "Harvest in the morning for crispest leaves",
      "Keep soil consistently moist to prevent bitterness",
      "Use row covers to protect from pests and extend seasons"
    ]
  }
];

const GuideDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const guide = guides.find(g => g.id === id);
  
  if (!guide) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar userType="farmer" />
        <main className="flex-grow py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-market-dark-green mb-4">Guide Not Found</h1>
              <p className="text-gray-600 mb-8">
                The growing guide you're looking for doesn't exist.
              </p>
              <Link to="/farmer/guides">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Guides
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="farmer" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link to="/farmer/guides" className="inline-flex items-center text-market-primary hover:text-market-dark-green mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Growing Guides
          </Link>
          
          <GuideDetails guide={guide} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetailPage;
