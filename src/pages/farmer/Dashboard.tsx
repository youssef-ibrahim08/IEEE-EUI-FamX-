
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from "@/components/farmer/ProductForm";

const mockProducts = [
  {
    id: "1",
    name: "Organic Red Tomatoes",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=635",
    price: 79.8, // 3.99 * 20
    unit: "kg",
    quantity: 50,
    sold: 15,
    category: "vegetables",
    dateAdded: "2023-04-10",
    location: "Cairo, Egypt"
  },
  {
    id: "2",
    name: "Fresh Organic Strawberries",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=642",
    price: 119.8, // 5.99 * 20
    unit: "kg",
    quantity: 30,
    sold: 22,
    category: "fruits",
    dateAdded: "2023-04-15",
    location: "Alexandria, Egypt"
  },
  {
    id: "3",
    name: "Purple Carrots",
    image: "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?auto=format&fit=crop&q=80&w=635",
    price: 49.8, // 2.49 * 20
    unit: "kg",
    quantity: 25,
    sold: 10,
    category: "vegetables",
    dateAdded: "2023-04-18",
    location: "Ismailia, Egypt"
  }
];

const mockOrders = [
  {
    id: "1001",
    customer: "Alice Johnson",
    date: "2023-05-02",
    items: ["Organic Red Tomatoes", "Purple Carrots"],
    total: 319.2, // 15.96 * 20
    status: "Delivered"
  },
  {
    id: "1002",
    customer: "Bob Smith",
    date: "2023-05-05",
    items: ["Fresh Organic Strawberries"],
    total: 239.6, // 11.98 * 20
    status: "Processing"
  },
  {
    id: "1003",
    customer: "Carol Davis",
    date: "2023-05-06",
    items: ["Organic Red Tomatoes", "Fresh Organic Strawberries", "Purple Carrots"],
    total: 498.8, // 24.94 * 20
    status: "Pending"
  }
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="farmer" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-market-dark-green">Farmer Dashboard</h1>
              <p className="text-gray-600">Manage your products, orders, and farm details</p>
            </div>
            
            {activeTab === "products" && !showAddProduct && (
              <Button 
                className="mt-4 md:mt-0"
                onClick={() => setShowAddProduct(true)}
              >
                Add New Product
              </Button>
            )}
            
            {activeTab === "products" && showAddProduct && (
              <Button 
                variant="outline"
                className="mt-4 md:mt-0"
                onClick={() => setShowAddProduct(false)}
              >
                Back to Products
              </Button>
            )}
          </div>

          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Total Products</CardTitle>
                    <CardDescription>Your listed products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-market-primary">{mockProducts.length}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Total Sales</CardTitle>
                    <CardDescription>This month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-market-primary">2,490 LE</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Pending Orders</CardTitle>
                    <CardDescription>Need your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-market-primary">2</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>The latest orders for your products</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Order ID</th>
                          <th className="text-left py-3 px-2">Customer</th>
                          <th className="text-left py-3 px-2">Date</th>
                          <th className="text-left py-3 px-2">Amount</th>
                          <th className="text-left py-3 px-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.slice(0, 3).map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-3 px-2">#{order.id}</td>
                            <td className="py-3 px-2">{order.customer}</td>
                            <td className="py-3 px-2">{order.date}</td>
                            <td className="py-3 px-2">{order.total.toFixed(2)} LE</td>
                            <td className="py-3 px-2">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              {showAddProduct ? (
                <ProductForm 
                  onSuccess={() => setShowAddProduct(false)}
                />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Your Products</CardTitle>
                    <CardDescription>Manage your product listings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-2">Product</th>
                            <th className="text-left py-3 px-2">Price</th>
                            <th className="text-left py-3 px-2">Quantity</th>
                            <th className="text-left py-3 px-2">Sold</th>
                            <th className="text-left py-3 px-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockProducts.map((product) => (
                            <tr key={product.id} className="border-b">
                              <td className="py-3 px-2">
                                <div className="flex items-center gap-3">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-10 h-10 rounded object-cover"
                                  />
                                  <span>{product.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-2">{product.price.toFixed(2)} LE/{product.unit}</td>
                              <td className="py-3 px-2">{product.quantity}</td>
                              <td className="py-3 px-2">{product.sold}</td>
                              <td className="py-3 px-2">
                                <div className="flex gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                  >
                                    Edit
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Orders</CardTitle>
                  <CardDescription>Manage customer orders for your products</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Order ID</th>
                          <th className="text-left py-3 px-2">Customer</th>
                          <th className="text-left py-3 px-2">Date</th>
                          <th className="text-left py-3 px-2">Products</th>
                          <th className="text-left py-3 px-2">Amount</th>
                          <th className="text-left py-3 px-2">Status</th>
                          <th className="text-left py-3 px-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-3 px-2">#{order.id}</td>
                            <td className="py-3 px-2">{order.customer}</td>
                            <td className="py-3 px-2">{order.date}</td>
                            <td className="py-3 px-2">
                              <div className="max-w-[200px] truncate">
                                {order.items.join(", ")}
                              </div>
                            </td>
                            <td className="py-3 px-2">{order.total.toFixed(2)} LE</td>
                            <td className="py-3 px-2">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 px-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                              >
                                Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
