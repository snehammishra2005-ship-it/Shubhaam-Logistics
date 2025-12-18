import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import IndustriesSection from "./components/IndustriesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ServicesSection />
        <IndustriesSection />
        <AboutSection />
        <TestimonialSlider />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
