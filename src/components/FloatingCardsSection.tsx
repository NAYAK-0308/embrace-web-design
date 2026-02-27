import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, TrendingUp, Search as SearchIcon } from "lucide-react";

const FloatingCardsSection = () => {
  return (
    <section className="py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated border border-border p-5 w-64 -rotate-3"
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-sm">Highest-Paying Sectors</span>
            </div>
            <div className="space-y-2">
              {["UI/UX Designer", "Data Scientist", "Product Manager"].map((role, i) => (
                <div key={role} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{role}</span>
                  <span className="font-semibold text-foreground">${["6,500", "7,200", "8,100"][i]}/mo</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
              <TrendingUp className="w-3 h-3" /> +12% job listings this month
            </div>
          </motion.div>

          {/* Center: Main job card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated border border-border p-6 w-72 z-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">TechFlow</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> San Francisco, CA
                </p>
              </div>
            </div>
            <h3 className="font-display font-semibold mb-2">Senior Product Designer</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">Full Time</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Permanent</span>
              <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> $8,000–12,000/Mo</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">Lead product design for our core platform. Remote-friendly.</p>
          </motion.div>

          {/* Right: Top companies card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated border border-border p-5 w-64 rotate-3"
          >
            <div className="flex items-center gap-2 mb-3">
              <SearchIcon className="w-5 h-5 text-secondary" />
              <span className="font-display font-semibold text-sm">Top Companies Hiring</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Google", "Airbnb", "Meta", "Stripe", "Notion"].map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground font-medium">{c}</span>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-1.5">
              {["Software Engineer", "Product Designer", "Data Analyst", "Frontend Dev"].map((r) => (
                <p key={r} className="text-xs text-muted-foreground">{r}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloatingCardsSection;
