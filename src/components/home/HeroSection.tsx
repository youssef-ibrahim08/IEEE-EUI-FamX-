
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-market-light-green py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-market-dark-green">
              Fresh Organic Products <br />
              <span className="text-market-primary">Farm to Table</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Connect directly with local farmers for the freshest organic produce. 
              Support sustainable agriculture and enjoy healthier food options.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/user/products">
                <Button size="lg" className="w-full sm:w-auto bg-market-primary hover:bg-market-dark-green">
                  Shop Products
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-market-primary text-market-primary hover:bg-market-light-green">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=687"
              alt="Organic produce"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-market-secondary opacity-20"></div>
      <div className="absolute top-12 right-8 w-16 h-16 rounded-full bg-market-accent opacity-20"></div>
    </section>
  );
};

export default HeroSection;
