
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    unit: string;
    category: string;
    farmer: {
      name: string;
      location: string;
    };
    organic: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? 'items' : 'item'} of ${product.name} added to your cart.`,
    });
  };

  return (
    <Card className="product-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.organic && (
          <Badge className="absolute top-2 right-2 bg-market-primary">
            Organic
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.farmer.name} • {product.farmer.location}</p>
          </div>
          <div className="text-lg font-semibold text-market-dark-green">
            {product.price.toFixed(2)} EGP/kg
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600">Category: {product.category}</p>
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <div className="w-full flex items-center gap-2">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0" 
              onClick={decreaseQuantity}
            >
              -
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0" 
              onClick={increaseQuantity}
            >
              +
            </Button>
          </div>
          <Button 
            className="flex-1 bg-market-primary hover:bg-market-dark-green" 
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
