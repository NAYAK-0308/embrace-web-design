import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "hsl(340, 80%, 82%)" }} />
      <div className="absolute -top-16 left-16 w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "hsl(258, 50%, 82%)" }} />
      <div className="absolute -top-20 -right-16 w-[420px] h-[420px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "hsl(20, 80%, 88%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Entire Job Search{" "}
            <span className="gradient-text-primary">Organized</span>{" "}
            In One Place
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Set your goals, track every application, and build daily momentum.
            Let's anchor your path to success — starting today.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto bg-card rounded-full shadow-elevated border border-border flex items-center p-2 gap-2"
          >
            <div className="flex items-center gap-2 flex-1 pl-4">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full"
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 flex-1 pl-4 border-l border-border">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Location"
                className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full"
              />
            </div>
            <button className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex-shrink-0">
              Search
            </button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="flex -space-x-2">
              {["M", "A", "S", "J", "R"].map((initial, i) => (
                <div key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground border-2 border-background"
                  style={{
                    background: [
                      "hsl(258,62%,56%)",
                      "hsl(340,75%,62%)",
                      "hsl(200,70%,55%)",
                      "hsl(30,85%,60%)",
                      "hsl(162,60%,45%)"
                    ][i]
                  }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">1,000+</span> job seekers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
