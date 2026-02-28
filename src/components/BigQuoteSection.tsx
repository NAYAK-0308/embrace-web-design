import { motion } from "framer-motion";

const BigQuoteSection = () => {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "hsl(20, 80%, 88%)" }} />
      <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "hsl(258, 50%, 82%)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center"
        >
          <span className="gradient-text-warm">Bringing clarity to every job seeker</span>{" "}
          and helping you build daily momentum is essential for creating a smarter, more organized career journey.
        </motion.p>
      </div>
    </section>
  );
};

export default BigQuoteSection;
