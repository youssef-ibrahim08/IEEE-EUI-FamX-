
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"farmer" | "user" | null>(null);
  
  useEffect(() => {
    // Get user type from URL params or localStorage
    const paramUserType = searchParams.get("type") as "farmer" | "user";
    const savedUserType = localStorage.getItem("userType") as "farmer" | "user";
    
    const newUserType = paramUserType || savedUserType || "user";
    setUserType(newUserType);
    
    // Store the user type in localStorage to persist between sessions
    if (paramUserType) {
      localStorage.setItem("userType", paramUserType);
    }
  }, [searchParams]);

  // Redirect to the appropriate dashboard after signup
  const handleSuccessfulSignup = () => {
    if (userType === "farmer") {
      navigate("/farmer/dashboard");
    } else {
      navigate("/user/products");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType={userType || "user"} />
      <main className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
          <AuthForm formType="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
