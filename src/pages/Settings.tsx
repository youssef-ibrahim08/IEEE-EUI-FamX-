
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const { toast } = useToast();
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
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    toast({
      title: "Preferences updated",
      description: "Your preferences have been saved successfully.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="user" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-market-dark-green mb-6">Settings</h1>
          
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
                        <p className="text-sm text-gray-500">Receive updates via email</p>
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
                        <p className="text-sm text-gray-500">Receive promotional offers and updates</p>
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
                        <p className="text-sm text-gray-500">Get notifications about your orders</p>
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
                        <p className="text-sm text-gray-500">Use dark theme</p>
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
