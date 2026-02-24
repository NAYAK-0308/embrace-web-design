import { motion } from "framer-motion";
import { Target, Trophy, Rocket, Star } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Job Search Momentum",
    desc: "Anchor brings clarity, structure, and daily momentum to your job search.",
    color: "hsl(162,72%,42%)",
  },
  {
    icon: Target,
    title: "Aim High, Stand Out",
    desc: "Target the perfect job and make your application shine with personalized guidance.",
    color: "hsl(250,65%,60%)",
  },
  {
    icon: Trophy,
    title: "Win the Offer",
    desc: "Secure the reward and launch your career to new heights with confidence.",
    color: "hsl(30,90%,60%)",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    desc: "Streamline your workflow to apply faster and land your dream role sooner.",
    color: "hsl(350,70%,60%)",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Explore Careers <span className="gradient-text-primary">Across Every Field</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover a wide range of career paths — from tech to design, healthcare to finance.
            Find roles that match your skills and passion.
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
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `${b.color}15` }}
              >
                <b.icon className="w-7 h-7" style={{ color: b.color }} />
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
