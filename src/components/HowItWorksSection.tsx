import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, ClipboardList, Gift } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    desc: "Sign up in minutes and set your job goals so Anchor can personalize your experience.",
  },
  {
    icon: CalendarCheck,
    title: "Get Your Smart Daily Plan",
    desc: "Anchor builds a simple, personalized plan of daily tasks — applications, interview prep, networking, and skill practice.",
  },
  {
    icon: ClipboardList,
    title: "Track Every Application",
    desc: "See what's applied, interviewing, pending, and follow-ups — without forgetting anything.",
  },
  {
    icon: Gift,
    title: "Earn Rewards & Stay Motivated",
    desc: "Complete tasks, build streaks, earn points, and redeem them for rewards while moving closer to your dream job.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experience goal-aligned planning and effortless career acceleration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-card shadow-card flex items-center justify-center mb-5 border border-border">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-hero text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
