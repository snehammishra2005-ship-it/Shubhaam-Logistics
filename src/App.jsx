import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import IndustriesSection from "./components/IndustriesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";   // if file is Footer.jsx


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
function Tailwind() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-700">
      <h1 className="text-3xl font-bold text-white">
        Tailwind + Vite is working!
      </h1>
    </div>
  );
}


export default App;
