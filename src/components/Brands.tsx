import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "AGL", featured: true },
  { name: "Somany", featured: false },
  { name: "Kajaria", featured: false },
  { name: "RAK", featured: false },
  { name: "Orient Bell", featured: false },
  { name: "Nitco", featured: false },
];

const Brands = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="brands"
      className="relative py-24 lg:py-32 overflow-hidden section-snap"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground"
          >
            Premium <span className="text-gradient-primary">Brands</span>
          </motion.h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.77, 0, 0.175, 1],
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative aspect-square flex items-center justify-center border ${
                brand.featured
                  ? "border-accent/50 bg-accent/5"
                  : "border-border/50 bg-secondary/20"
              } backdrop-blur-sm transition-all duration-500 cursor-pointer`}
            >
              {/* Glow Effect for Featured */}
              {brand.featured && (
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px hsl(43 74% 49% / 0.2)",
                      "0 0 40px hsl(43 74% 49% / 0.4)",
                      "0 0 20px hsl(43 74% 49% / 0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                />
              )}

              {/* Brand Name */}
              <span
                className={`text-xl md:text-2xl font-serif font-medium ${
                  brand.featured
                    ? "text-accent"
                    : "text-muted-foreground group-hover:text-foreground"
                } transition-colors duration-300`}
              >
                {brand.name}
              </span>

              {/* Hover Border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 border-2 ${
                  brand.featured ? "border-accent" : "border-primary"
                }`}
              />

              {/* Featured Badge */}
              {brand.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-[10px] uppercase tracking-wider font-medium"
                >
                  Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* AGL Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 border border-accent/30 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 relative overflow-hidden"
        >
          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-20 h-[1px] bg-accent" />
          <div className="absolute top-0 left-0 w-[1px] h-20 bg-accent" />
          <div className="absolute bottom-0 right-0 w-20 h-[1px] bg-accent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-accent" />

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl md:text-8xl font-serif font-bold text-gradient-gold mb-4"
              >
                AGL
              </motion.div>
              <p className="text-muted-foreground max-w-md">
                As an authorized dealer of AGL Tiles, we bring you the finest
                collection of premium vitrified tiles, floor tiles, and wall
                tiles with cutting-edge designs and unmatched quality.
              </p>
            </div>
            <motion.a
              href="#products"
              className="btn-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View AGL Collection
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Sliding Logo Belt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-24 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-4xl font-serif text-border/50"
            >
              {brand.name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Brands;
