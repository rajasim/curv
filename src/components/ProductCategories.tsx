import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import vitrifiedImage from "@/assets/vitrified-tiles.jpg";
import floorImage from "@/assets/floor-tiles.jpg";
import wallImage from "@/assets/wall-tiles.jpg";
import graniteImage from "@/assets/artificial-granite.jpg";

const categories = [
  {
    id: 1,
    title: "Vitrified Tiles",
    description: "Premium low-porosity ceramic tiles with exceptional durability and elegant finish",
    image: vitrifiedImage,
    accent: "primary",
  },
  {
    id: 2,
    title: "Floor Tiles",
    description: "Transform your spaces with our curated collection of luxury floor tiles",
    image: floorImage,
    accent: "accent",
  },
  {
    id: 3,
    title: "Wall Tiles",
    description: "Sophisticated wall coverings that elevate any interior design",
    image: wallImage,
    accent: "primary",
  },
  {
    id: 4,
    title: "Artificial Granite",
    description: "Premium engineered stone surfaces with natural beauty and superior strength",
    image: graniteImage,
    accent: "accent",
  },
];

const ProductCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.77, 0, 0.175, 1],
      }}
      className="group relative cursor-pointer perspective-1000"
    >
      <motion.div
        whileHover={{
          rotateY: 5,
          rotateX: -5,
          scale: 1.03,
        }}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
        className="relative w-full h-[500px] md:h-[600px] preserve-3d overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Number */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className={`text-7xl md:text-8xl font-serif font-bold ${category.accent === "primary" ? "text-primary/20" : "text-accent/20"} mb-4`}
          >
            0{category.id}
          </motion.span>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-3"
          >
            {category.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className="text-sm text-muted-foreground mb-6 max-w-xs"
          >
            {category.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="flex items-center gap-2 text-sm font-medium"
            whileHover={{ x: 10 }}
          >
            <span className={category.accent === "primary" ? "text-primary" : "text-accent"}>
              View Collection
            </span>
            <ArrowRight className={`w-4 h-4 ${category.accent === "primary" ? "text-primary" : "text-accent"}`} />
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className={`absolute inset-0 border-2 ${category.accent === "primary" ? "border-primary" : "border-accent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </motion.div>
    </motion.div>
  );
};

const ProductCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6"
          >
            Product <span className="text-gradient-primary">Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our premium selection of tiles and surfaces crafted for modern living
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <ProductCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="btn-luxury inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Catalog
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={gridInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
      />
    </section>
  );
};

export default ProductCategories;
