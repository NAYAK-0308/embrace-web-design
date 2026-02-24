import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mark Thompson",
    handle: "@MarkT",
    text: "Job hunt was a stressful mess of spreadsheets. Now everything is organized and clear. Total game-changer!",
  },
  {
    name: "Alex Kim",
    handle: "@AlexK",
    text: "Anchor cut my application time in half. I stopped wasting time and landed my offer faster than I ever thought.",
  },
  {
    name: "Sarah Lee",
    handle: "@SarahL",
    text: "The goal-tracking system is motivating. Building streaks keeps me consistent, even when the search felt overwhelming.",
  },
  {
    name: "Sophia Rossi",
    handle: "@Sophia12",
    text: "Anchor truly anchored my chaotic job search, providing a clear path and eliminating the daily stress. A lifesaver!",
  },
  {
    name: "Julian Thorne",
    handle: "@Julian19",
    text: "The personalized path planning is spot-on. It's like having a dedicated career coach guiding me through every single step.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Wall of <span className="gradient-text">Love</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear what some of our early users had to say.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground mb-4 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
