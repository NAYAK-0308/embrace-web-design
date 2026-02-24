import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingCardsSection from "@/components/FloatingCardsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BigQuoteSection from "@/components/BigQuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FloatingCardsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BigQuoteSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
