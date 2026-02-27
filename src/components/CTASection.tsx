import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-dark overflow-hidden py-16 sm:py-20 px-8"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, hsl(258,62%,56%), hsl(290,60%,55%))", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-15 pointer-events-none"
            style={{ background: "linear-gradient(135deg, hsl(340,75%,62%), hsl(20,90%,65%))", filter: "blur(60px)" }} />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Next-Level Opportunities,
            </h2>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-accent mb-6">
              All In One Place
            </h2>

            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed">
              Join thousands of professionals discovering opportunities they love. Your next great role is just a click away.
            </p>

            <Button
              size="lg"
              className="gradient-accent text-primary-foreground border-0 shadow-glow hover:opacity-90 text-base px-8 rounded-full"
            >
              Join our waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
