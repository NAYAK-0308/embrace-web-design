import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-dark overflow-hidden p-10 sm:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Curious what true career clarity feels like?
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              Let's finally anchor your path to success.
            </p>
            <Button
              size="lg"
              className="gradient-hero text-primary-foreground border-0 shadow-glow hover:opacity-90 text-base px-10"
            >
              Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
