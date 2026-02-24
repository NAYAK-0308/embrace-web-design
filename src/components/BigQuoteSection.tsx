import { motion } from "framer-motion";

const BigQuoteSection = () => {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      {/* Decorative swirls */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(40,90%,70%), hsl(350,70%,65%))", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(180,60%,70%), hsl(280,50%,75%))", filter: "blur(60px)" }} />

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
