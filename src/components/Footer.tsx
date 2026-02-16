import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/c_curv_v?igsh=MXI4YnhidXVvM3JjNw%3D%3D&utm_source=qr" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919637969705" },
  ];

  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer ref={footerRef} className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background" />

      {/* Parallax Decorative Elements */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-64"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              hsl(var(--primary)) 10px,
              hsl(var(--primary)) 11px
            )`,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
              CURV
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Tiles & Artificial
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              "Tiles that Inspire, Spaces that Breathe"
            </p>
            <a
              href="tel:9637969705"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium"> 963 796 9705</span>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300"
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-border mb-8 origin-left"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © 2023 CURV Tiles & Artificial. All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
