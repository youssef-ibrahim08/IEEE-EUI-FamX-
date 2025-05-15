
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  // Mock data - in a real app, this would come from your backend
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    userType: "user", // or "farmer"
    joinDate: "Jan 2023",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    bio: "Passionate about organic food and sustainable living. Looking for the freshest products directly from local farmers.",
    location: "San Francisco, CA",
    purchases: 12,
    reviews: 8,
    favorites: 5,
  };

  // Mock orders data
  const orders = [
    { 
      id: "ORD-1234",
      date: "2025-04-28",
      total: "$45.50",
      items: 3,
      status: "Delivered",
    },
    { 
      id: "ORD-1235",
      date: "2025-04-15",
      total: "$32.75",
      items: 2,
      status: "Delivered",
    },
    { 
      id: "ORD-1236",
      date: "2025-03-22",
      total: "$67.20",
      items: 5,
      status: "Delivered",
    },
  ];
  
  // Mock reviews data
  const reviews = [
    {
      id: "REV-001",
      product: "Organic Strawberries",
      farmer: "Green Valley Farm",
      rating: 5,
      comment: "These strawberries were incredibly fresh and sweet. Definitely buying again!",
      date: "2025-04-26",
    },
    {
      id: "REV-002",
      product: "Heirloom Tomatoes",
      farmer: "Sunshine Farms",
      rating: 4,
      comment: "Great variety of tomatoes with excellent flavor. Slightly bruised on delivery.",
      date: "2025-04-10",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="user" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src={userProfile.avatar} 
                        alt={userProfile.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold">{userProfile.name}</h2>
                    <p className="text-gray-500 mb-2">{userProfile.email}</p>
                    <Badge variant="outline" className="mb-4 bg-market-light-green text-market-dark-green">
                      {userProfile.userType === "user" ? "Shopper" : "Farmer"}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-6">
                      Member since {userProfile.joinDate}
                    </p>
                    <div className="w-full">
                      <Button variant="outline" className="w-full">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t pt-6">
                    <h3 className="font-medium mb-3">About</h3>
                    <p className="text-gray-600 text-sm">{userProfile.bio}</p>
                  </div>
                  
                  <div className="mt-6 border-t pt-6">
                    <h3 className="font-medium mb-3">Location</h3>
                    <p className="text-gray-600 text-sm">{userProfile.location}</p>
                  </div>
                  
                  <div className="mt-6 border-t pt-6">
                    <h3 className="font-medium mb-3">Stats</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xl font-semibold text-market-primary">{userProfile.purchases}</p>
                        <p className="text-xs text-gray-500">Purchases</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-market-primary">{userProfile.reviews}</p>
                        <p className="text-xs text-gray-500">Reviews</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-market-primary">{userProfile.favorites}</p>
                        <p className="text-xs text-gray-500">Favorites</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Profile Content */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>View and manage your activity on Organic Market</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="orders" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="orders">Orders</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                      <TabsTrigger value="favorites">Favorites</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="orders">
                      {orders.length > 0 ? (
                        <div className="space-y-4">
                          {orders.map((order) => (
                            <Card key={order.id}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="font-medium">{order.id}</p>
                                    <p className="text-sm text-gray-500">{order.date} • {order.items} items</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">{order.total}</p>
                                    <Badge variant="outline" className="bg-green-50 text-green-600">
                                      {order.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="mt-4 flex justify-end">
                                  <Button variant="outline" size="sm">View Details</Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">You haven't placed any orders yet.</p>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="reviews">
                      {reviews.length > 0 ? (
                        <div className="space-y-4">
                          {reviews.map((review) => (
                            <Card key={review.id}>
                              <CardContent className="p-4">
                                <div>
                                  <div className="flex justify-between mb-2">
                                    <p className="font-medium">{review.product}</p>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <svg 
                                          key={i} 
                                          xmlns="http://www.w3.org/2000/svg" 
                                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                          viewBox="0 0 20 20" 
                                          fill="currentColor"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-500 mb-2">From {review.farmer} • {review.date}</p>
                                  <p className="text-gray-600">{review.comment}</p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">You haven't reviewed any products yet.</p>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="favorites">
                      <div className="text-center py-8">
                        <p className="text-gray-500">You don't have any favorite products yet.</p>
                        <Button className="mt-4" variant="outline">Browse Products</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                
                <CardFooter className="border-t bg-gray-50 flex justify-between">
                  <p className="text-sm text-gray-500">Need help with your account?</p>
                  <Button variant="link" className="p-0 h-auto text-market-primary">Contact Support</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
