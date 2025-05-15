
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/user/CartItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const initialCartItems = [
  {
    id: "1",
    name: "Organic Red Tomatoes",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=635",
    price: 119.70, // 3.99 * 30
    unit: "kg",
    quantity: 2,
    farmer: {
      name: "Green Valley Farm",
    }
  },
  {
    id: "2",
    name: "Fresh Organic Strawberries",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=642",
    price: 179.70, // 5.99 * 30
    unit: "kg",
    quantity: 1,
    farmer: {
      name: "Berry Good Farms",
    }
  },
  {
    id: "3",
    name: "Purple Carrots",
    image: "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?auto=format&fit=crop&q=80&w=635",
    price: 74.70, // 2.49 * 30
    unit: "kg",
    quantity: 3,
    farmer: {
      name: "Rainbow Acres",
    }
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  const shipping = 50; // Updated shipping to be in EGP (was 5.99)
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Order placed!",
        description: "Your order has been successfully placed.",
      });
      setLoading(false);
      setCartItems([]);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="user" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-market-dark-green mb-8">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    onUpdateQuantity={updateQuantity} 
                    onRemove={removeItem} 
                  />
                ))}
              </div>
              
              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{subtotal.toFixed(2)} EGP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping.toFixed(2)} EGP</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{total.toFixed(2)} EGP</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleCheckout} 
                      className="w-full bg-market-primary hover:bg-market-dark-green" 
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        "Checkout"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Button 
                onClick={() => window.location.href = '/user/products'}
                className="bg-market-primary hover:bg-market-dark-green"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
