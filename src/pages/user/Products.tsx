
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/user/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "1",
    name: "Organic Red Tomatoes",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=635",
    price: 3.99,
    unit: "kg",
    category: "Vegetables",
    farmer: {
      name: "Green Valley Farm",
      location: "California"
    },
    organic: true
  },
  {
    id: "2",
    name: "Fresh Organic Strawberries",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=642",
    price: 5.99,
    unit: "lb",
    category: "Fruits",
    farmer: {
      name: "Berry Good Farms",
      location: "Oregon"
    },
    organic: true
  },
  {
    id: "3",
    name: "Purple Carrots",
    image: "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?auto=format&fit=crop&q=80&w=635",
    price: 2.49,
    unit: "bunch",
    category: "Root Vegetables",
    farmer: {
      name: "Rainbow Acres",
      location: "Washington"
    },
    organic: true
  },
  {
    id: "4",
    name: "Fresh Avocados",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=668",
    price: 1.99,
    unit: "each",
    category: "Fruits",
    farmer: {
      name: "Sunshine Orchards",
      location: "California"
    },
    organic: true
  },
  {
    id: "5",
    name: "Organic Lettuce",
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&q=80&w=625",
    price: 1.79,
    unit: "head",
    category: "Leafy Greens",
    farmer: {
      name: "Fresh Fields",
      location: "Idaho"
    },
    organic: true
  },
  {
    id: "6",
    name: "Fresh Basil",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=680",
    price: 2.29,
    unit: "bunch",
    category: "Herbs",
    farmer: {
      name: "Herbal Essence Farm",
      location: "Oregon"
    },
    organic: true
  }
];

const categories = ["All", "Vegetables", "Fruits", "Herbs", "Root Vegetables", "Leafy Greens"];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [organicOnly, setOrganicOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }
    
    // Filter by organic
    if (organicOnly && !product.organic) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="user" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-market-dark-green mb-4">Shop Organic Products</h1>
            <p className="text-gray-600 max-w-2xl">
              Browse fresh, organic produce directly from local farmers. 
              All products are sustainably grown without synthetic pesticides or fertilizers.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-64">
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="organic"
                  checked={organicOnly}
                  onCheckedChange={(checked) => setOrganicOnly(!!checked)}
                />
                <Label htmlFor="organic">Organic Only</Label>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                Showing {filteredProducts.length} products
              </span>
              {selectedCategory !== "All" && (
                <Badge variant="outline" className="bg-gray-100">
                  {selectedCategory}
                  <button 
                    className="ml-2 text-xs"
                    onClick={() => setSelectedCategory("All")}
                  >
                    ×
                  </button>
                </Badge>
              )}
              {organicOnly && (
                <Badge variant="outline" className="bg-gray-100">
                  Organic
                  <button 
                    className="ml-2 text-xs"
                    onClick={() => setOrganicOnly(false)}
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
            <div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
