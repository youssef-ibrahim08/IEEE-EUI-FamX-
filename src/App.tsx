
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Farmer pages
import FarmerDashboard from "./pages/farmer/Dashboard";
import FarmerGuides from "./pages/farmer/Guides";
import FarmerAssistant from "./pages/farmer/Assistant";

// User pages
import UserProducts from "./pages/user/Products";
import UserCart from "./pages/user/Cart";
import UserFarmers from "./pages/user/Farmers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Farmer routes */}
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/guides" element={<FarmerGuides />} />
          <Route path="/farmer/assistant" element={<FarmerAssistant />} />

          {/* User routes */}
          <Route path="/user/products" element={<UserProducts />} />
          <Route path="/user/cart" element={<UserCart />} />
          <Route path="/user/farmers" element={<UserFarmers />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
