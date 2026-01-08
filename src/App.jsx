import Navbar from "./components/Navbar.jsx";  // Fix casing
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import IndustriesSection from "./components/IndustriesSection.jsx";
import AboutSection from "./components/About.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import CompanyProfile from './components/CompanyProfile.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>  {/* ← OUTSIDE main + ADD / route */}
        <Route path="/" element={
          <>
            <Hero />
            <StatsStrip />
            <ServicesSection />
            <IndustriesSection />
            <AboutSection />
            <TestimonialSlider />
            <ContactForm />
          </>
        } />
        <Route path="/company-profile" element={<CompanyProfile/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
