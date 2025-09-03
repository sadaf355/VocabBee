import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveModules from "@/components/InteractiveModules";
import LSRWSkills from "@/components/LSRWSkills";
import AboutVocaBee from "@/components/AboutVocaBee";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <Hero />
      <InteractiveModules />
      <LSRWSkills />
      <AboutVocaBee />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
