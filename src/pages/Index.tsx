import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <ProductCategories />
      <About />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
