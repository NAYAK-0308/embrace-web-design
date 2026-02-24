import { motion } from "framer-motion";
import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mark Thompson",
    role: "Software Engineer",
    text: "Job hunt was a stressful mess of spreadsheets. Now everything is organized and clear. Total game-changer!",
    color: "hsl(162,72%,42%)",
  },
  {
    name: "Alex Kim",
    role: "Data Analyst",
    text: "Anchor cut my application time in half. I stopped wasting time and landed my offer faster than I ever thought.",
    color: "hsl(250,65%,60%)",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Coordinator",
    text: "The goal-tracking system is motivating. Building streaks keeps me consistent, even when the search felt overwhelming.",
    color: "hsl(30,90%,60%)",
  },
  {
    name: "Sophia Rossi",
    role: "UX Designer",
    text: "Anchor truly anchored my chaotic job search, providing a clear path and eliminating the daily stress. A lifesaver!",
    color: "hsl(350,70%,60%)",
  },
  {
    name: "Julian Thorne",
    role: "Product Manager",
    text: "The personalized path planning is spot-on. It's like having a dedicated career coach guiding me through every single step.",
    color: "hsl(200,80%,50%)",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(2);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            What Our Users <span className="gradient-text-primary">Say</span>
          </h2>
        </motion.div>

        {/* Quote display */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
          <p className="text-lg text-foreground leading-relaxed mb-6">
            {testimonials[active].text}
          </p>
          <p className="font-display font-semibold">{testimonials[active].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
        </motion.div>

        {/* Avatar row */}
        <div className="flex items-center justify-center gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`relative rounded-full transition-all duration-300 ${
                i === active ? "w-16 h-16 ring-2 ring-primary ring-offset-2 ring-offset-background" : "w-12 h-12 opacity-60 hover:opacity-100"
              }`}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center font-bold text-primary-foreground"
                style={{ background: t.color, fontSize: i === active ? "1.25rem" : "0.875rem" }}
              >
                {t.name.charAt(0)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
