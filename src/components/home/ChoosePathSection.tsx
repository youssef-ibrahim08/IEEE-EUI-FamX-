
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const ChoosePathSection = () => {
  const [hoverFarmer, setHoverFarmer] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-market-dark-green">Choose Your Path</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a farmer looking to sell your organic products or a consumer searching for healthy options,
            Organic Market has the tools you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Farmer Path */}
          <div 
            className={`p-8 rounded-xl transition-all duration-300 ${
              hoverFarmer ? 'bg-market-light-green shadow-lg scale-[1.02]' : 'bg-gray-50'
            }`}
            onMouseEnter={() => setHoverFarmer(true)}
            onMouseLeave={() => setHoverFarmer(false)}
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-market-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-market-dark-green mb-2">I'm a Farmer</h3>
              <p className="text-gray-600 mb-6">
                Join our network of organic producers, sell your products directly to consumers,
                and access resources to help your farm thrive.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>List and sell your organic products</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access AI-powered farming assistance</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find growing guides and resources</span>
                </li>
              </ul>
              <Link to="/signup?type=farmer">
                <Button className="bg-market-primary hover:bg-market-dark-green w-full">
                  Join as a Farmer
                </Button>
              </Link>
            </div>
          </div>

          {/* User Path */}
          <div 
            className={`p-8 rounded-xl transition-all duration-300 ${
              hoverUser ? 'bg-market-light-green shadow-lg scale-[1.02]' : 'bg-gray-50'
            }`}
            onMouseEnter={() => setHoverUser(true)}
            onMouseLeave={() => setHoverUser(false)}
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-market-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-market-dark-green mb-2">I'm a Consumer</h3>
              <p className="text-gray-600 mb-6">
                Discover fresh, locally-grown organic produce directly from farmers and have it delivered to your doorstep.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-secondary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Browse fresh, organic products</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-secondary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with local farmers</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-market-secondary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get farm-fresh deliveries</span>
                </li>
              </ul>
              <Link to="/signup?type=user">
                <Button className="bg-market-secondary hover:bg-market-dark-green w-full">
                  Join as a Consumer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePathSection;
