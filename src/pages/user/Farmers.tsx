
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const farmers = [
  {
    id: "1",
    name: "Green Valley Farm",
    location: "Cairo",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1171",
    description: "Family-owned organic farm specializing in heirloom vegetables and herbs. Our farming practices focus on sustainability and biodiversity.",
    specialties: ["Tomatoes", "Lettuce", "Herbs"],
    since: 2005
  },
  {
    id: "2",
    name: "Berry Good Farms",
    location: "Alexandria",
    image: "https://images.unsplash.com/photo-1625246333195-78d73c5207fd?auto=format&fit=crop&q=80&w=1170",
    description: "Certified organic berry farm growing strawberries, blueberries, and raspberries. We use natural pest management and focus on soil health.",
    specialties: ["Strawberries", "Blueberries", "Raspberries"],
    since: 2010
  },
  {
    id: "3",
    name: "Rainbow Acres",
    location: "Ismailia",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1170",
    description: "Diverse organic farm growing over 40 varieties of vegetables, including rare and colorful varieties of common vegetables.",
    specialties: ["Rainbow Carrots", "Purple Potatoes", "Heirloom Varieties"],
    since: 2008
  },
  {
    id: "4",
    name: "Sunshine Orchards",
    location: "Cairo",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1170",
    description: "Organic citrus and avocado farm with sustainable water practices and solar power. We specialize in rare citrus varieties.",
    specialties: ["Avocados", "Blood Oranges", "Meyer Lemons"],
    since: 2003
  }
];

const FarmersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredFarmers = farmers.filter(farmer => 
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const viewFarmProducts = (farmerId: string) => {
    navigate(`/user/products?farmerId=${farmerId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="user" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-market-dark-green mb-4">Our Farmers</h1>
            <p className="text-gray-600 max-w-2xl">
              Meet the passionate farmers who grow the organic products available on our platform. 
              Learn about their sustainable farming practices and specialties.
            </p>
          </div>

          <div className="mb-8">
            <Input
              placeholder="Search farmers by name, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFarmers.map((farmer) => (
              <Card key={farmer.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[2/1] w-full overflow-hidden">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{farmer.name}</CardTitle>
                  <CardDescription>{farmer.location} • Since {farmer.since}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{farmer.description}</p>
                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {farmer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="bg-market-light-green text-market-dark-green">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => viewFarmProducts(farmer.id)}
                    >
                      View Products
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredFarmers.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-gray-600 mb-2">No farmers found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FarmersPage;
