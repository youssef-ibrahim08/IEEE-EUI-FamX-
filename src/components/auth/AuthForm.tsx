
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

interface AuthFormProps {
  formType: "login" | "signup";
}

const AuthForm = ({ formType }: AuthFormProps) => {
  const [searchParams] = useSearchParams();
  const defaultUserType = searchParams.get("type") as "farmer" | "user" || "user";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<"farmer" | "user">(defaultUserType);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formType === "signup" && !validatePassword(password)) {
      return;
    }
    
    setLoading(true);

    // Simulate authentication delay
    setTimeout(() => {
      setLoading(false);
      
      // Save user type to localStorage for persistence
      localStorage.setItem("userType", userType);
      
      // Success message
      toast({
        title: formType === "login" ? "Welcome back!" : "Account created!",
        description: formType === "login" 
          ? "You have successfully logged in."
          : `Your ${userType} account has been created successfully.`,
      });

      // Redirect based on user type
      if (userType === "farmer") {
        navigate("/farmer/dashboard");
      } else {
        navigate("/user/products");
      }
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          {formType === "login" ? "Login to Your Account" : "Create an Account"}
        </CardTitle>
        <CardDescription>
          {formType === "login"
            ? "Enter your email and password to access your account"
            : "Join FarmX today and start your journey"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formType === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (formType === "signup") {
                    validatePassword(e.target.value);
                  }
                }}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            {passwordError && (
              <p className="text-sm text-destructive">{passwordError}</p>
            )}
            {formType === "signup" && (
              <p className="text-xs text-muted-foreground mt-1">
                Password must be at least 8 characters long
              </p>
            )}
          </div>

          <div className="space-y-3 pt-2">
            <Label>I am a:</Label>
            <RadioGroup
              value={userType}
              onValueChange={(value) => setUserType(value as "farmer" | "user")}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="farmer" id="farmer" />
                <Label htmlFor="farmer" className="cursor-pointer">Farmer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user" className="cursor-pointer">Consumer</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full mt-6" disabled={loading}>
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                <span>{formType === "login" ? "Logging In..." : "Creating Account..."}</span>
              </div>
            ) : (
              <>{formType === "login" ? "Login" : "Sign Up"}</>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {formType === "login" ? (
            <>
              Don't have an account?{" "}
              <a href="/signup" className="text-primary underline hover:text-primary/90">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-primary underline hover:text-primary/90">
                Login
              </a>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
