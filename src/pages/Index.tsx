
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ChoosePathSection from "@/components/home/ChoosePathSection";
import FeaturesSection from "@/components/home/FeaturesSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChoosePathSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
