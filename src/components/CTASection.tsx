import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Rocket, FolderOpen, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-dark overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, hsl(162,72%,42%), hsl(200,80%,50%))", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-10 pointer-events-none"
            style={{ background: "linear-gradient(135deg, hsl(250,65%,60%), hsl(300,60%,55%))", filter: "blur(60px)" }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-10 sm:p-14 items-center">
            {/* Left: Job card preview */}
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-border/20 p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-primary-foreground">SecureMind</p>
                  <p className="text-xs text-primary-foreground/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Singapore
                  </p>
                </div>
              </div>
              <h3 className="font-display font-semibold text-primary-foreground mb-2">Cybersecurity Analyst</h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground font-medium">Full Time</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-primary-foreground font-medium">Urgent</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-primary-foreground/60 mb-3">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Permanent</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> $5,500–9,000/Mo</span>
              </div>
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                Monitor network activity, detect threats, and safeguard digital infrastructure.
              </p>
            </div>

            {/* Right: CTA text */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                Next-Level Opportunities,
              </h2>
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text-primary mb-6">
                All In One Place
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Sparkles, text: "Build your profile to showcase real skills, not just job titles" },
                  { icon: FolderOpen, text: "Discover high-quality opportunities that match your potential" },
                  { icon: Rocket, text: "Track applications and stay on top of every opportunity" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-foreground/80">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="gradient-primary text-primary-foreground border-0 shadow-glow hover:opacity-90 text-base px-8 rounded-full"
              >
                Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
