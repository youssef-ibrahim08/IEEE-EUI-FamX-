
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    unit: string;
    quantity: number;
    farmer: {
      name: string;
    };
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { toast } = useToast();

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
    toast({
      title: "Item removed",
      description: `${item.name} has been removed from your cart.`,
    });
  };

  return (
    <Card className="p-4 flex flex-col sm:flex-row gap-4">
      <div className="sm:w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">Farmer: {item.farmer.name}</p>
            <p className="text-sm text-gray-500">
              {item.price} EGP/{item.unit}
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{(item.price * quantity).toFixed(2)} EGP</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
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
            variant="ghost" 
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
