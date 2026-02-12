import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Phone number counter animation
  const [displayNumber, setDisplayNumber] = useState("000 000 0000");
  const targetNumber = "963 796 9705";
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInView = useInView(phoneRef, { once: true });

  useEffect(() => {
    if (phoneInView) {
      const chars = targetNumber.split("");
      let current = "";
      
      chars.forEach((char, index) => {
        setTimeout(() => {
          current = targetNumber.substring(0, index + 1);
          const remaining = "0".repeat(targetNumber.length - index - 1);
          const formatted = (current + remaining)
            .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
          setDisplayNumber(formatted);
        }, index * 100);
      });
    }
  }, [phoneInView]);

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "963 796 9705",
      href: "tel:9637969705",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Premium Tile Showroom",
      href: "#",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sat: 9AM - 8PM",
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden section-snap"
    >
      {/* Background Texture Animation */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6"
          >
            Let's Create <span className="text-gradient-primary">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your space? Contact us for expert guidance and
            access to our premium tile collection.
          </motion.p>
        </div>

        {/* Large Phone Number CTA */}
        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.a
            href="tel:9637969705"
            className="inline-block group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px hsl(43 85% 55% / 0.2)",
                  "0 0 60px hsl(43 85% 55% / 0.4)",
                  "0 0 30px hsl(43 85% 55% / 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-12 py-8 border-2 border-primary bg-primary/5 backdrop-blur-sm"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Call Now
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary tracking-wider">
                {displayNumber}
              </p>
              <motion.div
                className="mt-4 flex items-center justify-center gap-2 text-primary"
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-sm uppercase tracking-wider">
                  Tap to Call
                </span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              {item.href ? (
                <motion.a
                  href={item.href}
                  className="block h-full p-8 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.a>
              ) : (
                <div className="block h-full p-8 border border-border/50 bg-card/30 backdrop-blur-sm">
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-xl font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
