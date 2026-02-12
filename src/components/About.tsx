import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import aboutImage from "@/assets/about-showroom.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  // Counter animation
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (counterInView) {
      const duration = 2000;
      const start = 2020;
      const end = 2023;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeProgress);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [counterInView]);

  const stats = [
    { value: "500+", label: "Premium Designs" },
    { value: "50+", label: "Brand Partners" },
    { value: "1000+", label: "Happy Clients" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden section-snap"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="relative h-[50vh] lg:h-[80vh] overflow-hidden order-2 lg:order-1"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0"
            >
              <img
                src={aboutImage}
                alt="CURV Showroom"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay Frame */}
            <div className="absolute inset-4 border border-primary/30 pointer-events-none" />

            {/* Year Badge */}
            <motion.div
              ref={counterRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={counterInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm px-6 py-4 border border-border"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Serving Since
              </p>
              <p className="text-4xl font-serif font-bold text-gradient-primary">
                {count}
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div ref={textRef} className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-8"
            >
              Crafting <span className="text-gradient-gold">Excellence</span> in
              Every Tile
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              At CURV Tiles & Artificial, we believe that every space deserves
              to be extraordinary. Since our establishment in 2023, we've been
              dedicated to bringing you the finest selection of premium tiles
              and artificial granite that combine aesthetic beauty with
              exceptional durability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground mb-12 leading-relaxed"
            >
              Our curated collection features designs from world-renowned brands
              including AGL, ensuring that you have access to the latest trends
              and timeless classics in tile design.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <motion.a
                href="#contact"
                className="btn-gold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Our Showroom
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent origin-left"
      />
    </section>
  );
};

export default About;
