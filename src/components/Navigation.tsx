import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Brands", href: "#brands" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring" as const,
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1] as const,
      },
    }),
  };

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12"
      >
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
              CURV
            </span>
            <span className="hidden sm:block text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Tiles & Artificial
            </span>
          </motion.a>

          {/* Contact & Menu */}
          <div className="flex items-center gap-6">
            {/* Phone Number */}
            <motion.a
              href="tel:9637969705"
              className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">963 796 9705</span>
            </motion.a>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl"
          >
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div 
                className="absolute inset-0 animate-grain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-center px-8 lg:px-24">
              <nav className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4"
                    >
                      <span className="text-xs text-muted-foreground font-medium">
                        0{i + 1}
                      </span>
                      <span className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground group-hover:text-accent transition-colors duration-500">
                        {item.name}
                      </span>
                      <motion.div
                        className="h-[2px] bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                        style={{ width: "100px" }}
                      />
                    </motion.a>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Info in Menu */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 pt-8 border-t border-border/30"
              >
                <a
                  href="tel:9637969705"
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-xl font-medium tracking-wide">963 796 9705</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
