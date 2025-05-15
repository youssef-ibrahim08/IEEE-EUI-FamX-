
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuidesGrid from "@/components/farmer/GuidesGrid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Vegetables", label: "Vegetables" },
  { value: "Fruits", label: "Fruits" },
  { value: "Herbs", label: "Herbs" },
  { value: "Root Vegetables", label: "Root Vegetables" },
  { value: "Leafy Greens", label: "Leafy Greens" },
];

const GuidesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="farmer" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-market-dark-green mb-4">Growing Guides</h1>
            <p className="text-gray-600 max-w-3xl">
              Access comprehensive guides on organic farming practices, pest management, 
              seasonal planting, and more. Find the information you need to grow your 
              organic produce successfully.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-64">
              <Input
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-64">
              <Select 
                value={selectedCategory || "all"} 
                onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <GuidesGrid category={selectedCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuidesPage;
