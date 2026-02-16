import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import heroImage from "@/assets/hero-tiles.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);

  const headlineWords = ["Tiles", "that", "Inspire,"];
  const taglineWords = ["Spaces", "that", "Breathe"];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden section-snap"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
        <img
          src={heroImage}
          alt="Luxury marble tiles"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Geometric Elements */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/4 right-[10%] w-32 h-32 md:w-48 md:h-48 border border-primary/30 rotate-45 z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-1/4 left-[5%] w-24 h-24 md:w-40 md:h-40 border border-accent/20 z-10"
      />
      {/* Extra floating diamond */}
      <motion.div
        animate={{
          rotate: 180,
          y: [0, -30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[60%] right-[25%] w-16 h-16 md:w-24 md:h-24 border border-primary/10 rotate-12 z-10"
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 flex flex-col justify-center min-h-screen px-6 lg:px-12"
      >
        <div className="max-w-screen-2xl mx-auto w-full">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-accent border border-accent/30 bg-accent/5">
              Established 2023
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-medium leading-[0.9] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.15,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  className={`inline-block mr-4 ${i === 0 ? "text-gradient-primary" : "text-foreground"}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Tagline */}
          <div className="overflow-hidden mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light leading-[0.9] tracking-tight">
              {taglineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + i * 0.15,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  className={`inline-block mr-4 ${i === 0 ? "text-accent" : "text-foreground/80"}`}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Primary CTA */}
            <motion.a
              href="#products"
              className="btn-luxury"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collection
            </motion.a>

            {/* Location CTA */}
            <motion.a
              href="https://www.google.com/maps?q=Opp.+Indian+Oil+Petrol+Pump,+Near+Ankali+Phata,+Sangli+-+Kolhapur+Road,+Sangli+-+416+416"
              target="_blank"
              className="flex items-center gap-3 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-glow">
                <FaMapMarkerAlt className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Visit Us
                </p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                   Near Ankali Phata, Sangli - Kolhapur Road, Sangli - 416 416
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="writing-mode-vertical text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Premium Tiles & Artificial Granite
        </div>
      </motion.div>

      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Hero;
