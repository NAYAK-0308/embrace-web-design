import { motion } from "framer-motion";
import { Target, Trophy, Rocket, Star } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Job Search Momentum",
    desc: "Anchor brings clarity, structure, and daily momentum to your job search.",
  },
  {
    icon: Target,
    title: "Aim High, Stand Out",
    desc: "Target the perfect job and make your application shine with personalized guidance.",
  },
  {
    icon: Trophy,
    title: "Win the Offer",
    desc: "Secure the reward and launch your career to new heights with confidence.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    desc: "Streamline your workflow to apply faster and land your dream role sooner.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Why Job Seekers <span className="gradient-text">Love Anchor</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to stay organized, motivated, and ahead of the competition.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
