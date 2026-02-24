import { motion } from "framer-motion";
import { Target, BarChart3, Zap, Flame } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Goal-Aligned Planning",
    desc: "Anchor learns your goals and builds a personalized job search path tailored to you.",
  },
  {
    icon: BarChart3,
    title: "Success Tracking",
    desc: "Visualize your progress, manage incoming offers, and celebrate every milestone.",
  },
  {
    icon: Zap,
    title: "Career Acceleration",
    desc: "Streamline your workflow to apply faster and land your dream role sooner.",
  },
  {
    icon: Flame,
    title: "Motivation & Rewards",
    desc: "Earn points, build streaks, and unlock rewards as you stay consistent.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text-accent">Anchor?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Seamlessly track, organize, and accelerate your job search — all in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
