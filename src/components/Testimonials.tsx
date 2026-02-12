import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Interior Designer",
    content:
      "CURV Tiles transformed our client's villa with their exceptional collection. The quality and finish of their vitrified tiles are simply unmatched in the market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Homeowner",
    content:
      "From selection to installation guidance, the team at CURV was incredibly helpful. Our new floor tiles have completely elevated our living space.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "Architect",
    content:
      "As an architect, I appreciate their vast range of designs and the expertise they bring. The AGL collection they offer is perfect for luxury projects.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Business Owner",
    content:
      "Renovating our office space was a breeze with CURV. Their artificial granite selection gave us the premium look we wanted at a reasonable price.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      if (dir > 0) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden section-snap"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />

      {/* Large Quote Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Quote className="w-[40vw] h-[40vw] text-primary" />
      </motion.div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground"
          >
            What Our <span className="text-gradient-gold">Clients</span> Say
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto perspective-1000">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="relative p-8 lg:p-12 bg-card/50 backdrop-blur-sm border border-border/50"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/30 mb-6" />

              {/* Content */}
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed mb-8">
                "{testimonials[current].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-xl font-serif font-bold text-primary-foreground">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-accent text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Floating Shadow */}
              <div className="absolute -bottom-4 left-8 right-8 h-8 bg-gradient-to-b from-background/50 to-transparent blur-lg" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
