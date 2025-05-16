
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState({
    email: "user@example.com",
    name: "John Doe",
    phone: "(555) 123-4567",
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    marketingEmails: false,
    orderUpdates: true,
    darkMode: false,
  });

  // Get user type from localStorage
  const [userType, setUserType] = useState<"farmer" | "user">("user");

  // Check localStorage for dark mode setting and user type on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedUserType = localStorage.getItem("userType") as "farmer" | "user";
    
    setPreferences(prev => ({
      ...prev,
      darkMode: savedDarkMode
    }));
    
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    if (savedUserType) {
      setUserType(savedUserType);
    }
  }, []);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleChange = (name: string, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Handle dark mode toggle
    if (name === "darkMode") {
      if (value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", value.toString());
    }
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage for demo purposes
    localStorage.setItem("userName", accountData.name);
    localStorage.setItem("userEmail", accountData.email);
    localStorage.setItem("userPhone", accountData.phone);
    
    toast({
      title: "Account updated",
      description: "Your account information has been updated successfully.",
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would call an API to update the password
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    });
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage for demo purposes
    localStorage.setItem("emailNotifications", preferences.emailNotifications.toString());
    localStorage.setItem("marketingEmails", preferences.marketingEmails.toString());
    localStorage.setItem("orderUpdates", preferences.orderUpdates.toString());
    
    toast({
      title: "Preferences updated",
      description: "Your preferences have been saved successfully.",
    });
  };

  const handleBackToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType={userType} />
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-market-dark-green dark:text-market-light-green">Settings</h1>
            <Button variant="outline" onClick={handleBackToProfile}>
              Back to Profile
            </Button>
          </div>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details here.</CardDescription>
                </CardHeader>
                <form onSubmit={handleAccountSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={accountData.name} 
                        onChange={handleAccountChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={accountData.email} 
                        onChange={handleAccountChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={accountData.phone} 
                        onChange={handleAccountChange} 
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">Save Changes</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <form onSubmit={handlePasswordSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="text-sm font-medium">Current Password</label>
                      <Input 
                        id="currentPassword" 
                        name="currentPassword" 
                        type="password" 
                        value={passwordData.currentPassword} 
                        onChange={handlePasswordChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                      <Input 
                        id="newPassword" 
                        name="newPassword" 
                        type="password" 
                        value={passwordData.newPassword} 
                        onChange={handlePasswordChange} 
                      />
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters long
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</label>
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        value={passwordData.confirmPassword} 
                        onChange={handlePasswordChange} 
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">Update Password</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage your notification settings.</CardDescription>
                </CardHeader>
                <form onSubmit={handlePreferencesSubmit}>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
                      </div>
                      <Switch 
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) => handleToggleChange("emailNotifications", checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing Emails</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive promotional offers and updates</p>
                      </div>
                      <Switch 
                        checked={preferences.marketingEmails}
                        onCheckedChange={(checked) => handleToggleChange("marketingEmails", checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Order Updates</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Get notifications about your orders</p>
                      </div>
                      <Switch 
                        checked={preferences.orderUpdates}
                        onCheckedChange={(checked) => handleToggleChange("orderUpdates", checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Use dark theme</p>
                      </div>
                      <Switch 
                        checked={preferences.darkMode}
                        onCheckedChange={(checked) => handleToggleChange("darkMode", checked)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">Save Preferences</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
