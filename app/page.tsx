import Image from "next/image";
import Contact from "./component/Contact";
import About from "./component/Abou";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SkillsSection from "./component/SkillSection";
import TestimonialsSection from "./component/TestimonialSection";
import ServicesSection from "./component/Services";
import Footer from "./component/Footer";

export default function Home() {
  return (
 <div className="min-h-screen  bg-[#08080c] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
