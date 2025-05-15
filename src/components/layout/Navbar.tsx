
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, Sprout } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  userType?: "farmer" | "user" | null;
}

const Navbar = ({ userType }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-market-primary">
              <Sprout size={28} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-display font-bold text-market-primary">
              FarmX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-market-primary">
              Home
            </Link>
            {userType === "farmer" ? (
              <>
                <Link to="/farmer/dashboard" className="text-gray-700 hover:text-market-primary">
                  Dashboard
                </Link>
                <Link to="/farmer/guides" className="text-gray-700 hover:text-market-primary">
                  Growing Guides
                </Link>
                <Link to="/farmer/assistant" className="text-gray-700 hover:text-market-primary">
                  AI Assistant
                </Link>
              </>
            ) : userType === "user" ? (
              <>
                <Link to="/user/products" className="text-gray-700 hover:text-market-primary">
                  Shop
                </Link>
                <Link to="/user/farmers" className="text-gray-700 hover:text-market-primary">
                  Farmers
                </Link>
                <Link to="/user/cart" className="text-gray-700 hover:text-market-primary flex items-center gap-1">
                  <ShoppingCart size={16} />
                  Cart
                </Link>
              </>
            ) : (
              <>
                <Link to="/about" className="text-gray-700 hover:text-market-primary">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-market-primary">
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {userType ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-market-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {userType === "farmer" ? (
                <>
                  <Link 
                    to="/farmer/dashboard" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/farmer/guides" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Growing Guides
                  </Link>
                  <Link 
                    to="/farmer/assistant" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Assistant
                  </Link>
                </>
              ) : userType === "user" ? (
                <>
                  <Link 
                    to="/user/products" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/user/farmers" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Farmers
                  </Link>
                  <Link 
                    to="/user/cart" 
                    className="text-gray-700 hover:text-market-primary py-2 flex items-center gap-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingCart size={16} />
                    Cart
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/about" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-gray-700 hover:text-market-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              {!userType && (
                <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 mt-2">
                  <Link 
                    to="/login" 
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link 
                    to="/signup" 
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
