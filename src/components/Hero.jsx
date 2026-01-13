// src/components/Hero.jsx
import { useEffect, useState } from "react";

const slides = [
  "/hero/slide1.jpg",
  "/hero/slide2.jpg",
  "/hero/slide3.jpg",
  "/hero/slide4.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="home"
      className="relative min-h-[520px] lg:min-h-[820px] overflow-hidden"
    >
      {/* ================= SLIDER BACKGROUND ================= */}
      <div className="absolute inset-0">
        {slides.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* ================= CONTENT GRID ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-10 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-5">
              Shubhaam Logistics Services
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-300 mb-6">
              17+ Years of Excellence in{" "}
              <span className="text-white">Freight Forwarding</span>
            </p>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 mb-8">
              From air and sea freight to custom clearance and warehousing, we
              provide comprehensive logistics solutions with 24/7 operations,
              ensuring your cargo reaches its destination safely and on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#services"
                className="px-8 py-4 bg-orange-500 rounded-xl font-bold hover:bg-orange-600 transition"
              >
                Our Services →
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 border-2 border-white/40 rounded-xl font-bold hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="bg-[#0b1b2c]/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              📞 Get In Touch
            </h3>

            <form className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              />
              <input
                type="email"
                placeholder="example@company.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="+91 Mobile number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              />

              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none">
                <option>Select a service</option>
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Custom Clearance</option>
              </select>

              <textarea
                rows="3"
                placeholder="Tell us about your requirements"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold transition"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 text-white rounded-full text-2xl items-center justify-center hover:bg-orange-500"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 text-white rounded-full text-2xl items-center justify-center hover:bg-orange-500"
      >
        ›
      </button>
    </section>
  );
}

export default Hero;
