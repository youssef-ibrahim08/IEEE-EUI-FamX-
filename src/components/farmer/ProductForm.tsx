
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { value: "vegetables", label: "Vegetables" },
  { value: "fruits", label: "Fruits" },
  { value: "herbs", label: "Herbs" },
  { value: "dairy", label: "Dairy Products" },
  { value: "eggs", label: "Eggs" },
  { value: "honey", label: "Honey" },
  { value: "nuts", label: "Nuts & Seeds" }
];

interface ProductFormProps {
  onSuccess?: () => void;
  existingProduct?: any;
}

const ProductForm = ({ onSuccess, existingProduct }: ProductFormProps) => {
  const [name, setName] = useState(existingProduct?.name || "");
  const [description, setDescription] = useState(existingProduct?.description || "");
  const [price, setPrice] = useState(existingProduct?.price || "");
  const [quantity, setQuantity] = useState(existingProduct?.quantity || "");
  const [unit, setUnit] = useState(existingProduct?.unit || "kg");
  const [category, setCategory] = useState(existingProduct?.category || "");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(existingProduct?.image || "");
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: existingProduct ? "Product updated" : "Product added",
        description: existingProduct 
          ? `${name} has been updated successfully.`
          : `${name} has been added to your product listings.`,
      });
      
      setLoading(false);
      
      if (onSuccess) {
        onSuccess();
      }
      
      // Clear form if it's a new product
      if (!existingProduct) {
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setUnit("kg");
        setCategory("");
        setImage(null);
        setImagePreview("");
      }
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{existingProduct ? "Edit Product" : "Add New Product"}</CardTitle>
        <CardDescription>
          {existingProduct 
            ? "Update your product information" 
            : "List your organic product for customers to purchase"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Organic Heirloom Tomatoes"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product, including growing methods, freshness, etc."
              rows={4}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity Available</Label>
              <Input
                id="quantity"
                type="number"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="0"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select value={unit} onValueChange={setUnit} required>
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Kilogram (kg)</SelectItem>
                  <SelectItem value="lb">Pound (lb)</SelectItem>
                  <SelectItem value="g">Gram (g)</SelectItem>
                  <SelectItem value="oz">Ounce (oz)</SelectItem>
                  <SelectItem value="each">Each</SelectItem>
                  <SelectItem value="bunch">Bunch</SelectItem>
                  <SelectItem value="dozen">Dozen</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="cursor-pointer"
              required={!existingProduct}
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Product preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          
          <CardFooter className="px-0 pt-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  <span>{existingProduct ? "Updating..." : "Adding Product..."}</span>
                </div>
              ) : (
                <>{existingProduct ? "Update Product" : "Add Product"}</>
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
