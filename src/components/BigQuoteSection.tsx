import { motion } from "framer-motion";

const BigQuoteSection = () => {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      <div className="blob-decoration top-0 right-0 w-[400px] h-[400px]"
        style={{ background: "linear-gradient(135deg, hsl(340,80%,75%), hsl(20,90%,80%))" }} />
      <div className="blob-decoration bottom-0 left-0 w-[300px] h-[300px] opacity-20"
        style={{ background: "linear-gradient(135deg, hsl(258,60%,75%), hsl(290,50%,78%))" }} />

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
