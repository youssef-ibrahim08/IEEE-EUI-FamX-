
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-market-dark-green mb-6">About Organic Market</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg mb-4">
                Organic Market is a platform that connects organic farmers directly with conscious consumers who value fresh, sustainable produce.
              </p>
              <p className="mb-4">
                We believe in promoting sustainable agriculture practices that protect our environment, support local communities, and provide healthier food options for everyone.
              </p>
              <p className="mb-4">
                Our mission is to make organic produce more accessible while ensuring farmers receive fair compensation for their hard work and dedication to sustainable farming.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Organic farming" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-market-dark-green mb-4">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-market-primary">Direct Farm-to-Table</h3>
                <p>
                  We eliminate middlemen, allowing farmers to sell directly to consumers. This ensures fresher products and better prices for both parties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-market-primary">Supporting Organic Farming</h3>
                <p>
                  Our platform exclusively features organic produce, promoting sustainable farming practices that protect our environment and biodiversity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-market-primary">Empowering Farmers</h3>
                <p>
                  We provide farmers with tools, resources, and AI assistance to improve their practices and expand their customer base.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-market-light-green rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-market-dark-green mb-4">Our Vision</h2>
            <p className="text-lg">
              We envision a world where organic farming is the norm, where farmers thrive using sustainable practices, 
              and where everyone has access to fresh, healthy, locally-grown organic produce. Organic Market is our contribution 
              to making this vision a reality.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-market-dark-green mb-4">Join Our Community</h2>
          <p className="mb-8">
            Whether you're a farmer looking to reach more customers or a consumer seeking fresh organic produce, 
            Organic Market welcomes you to join our growing community dedicated to sustainable agriculture and healthy living.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
