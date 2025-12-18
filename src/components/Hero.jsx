// src/components/Hero.jsx
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            Reliable Logistics & Transportation
          </h1>
          <p>
            Pan‑India transportation, warehousing, and supply chain solutions
            tailored for manufacturers, traders and enterprises.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
        </div>
        <div className="hero-image">
          {/* replace with real image */}
          <div className="hero-placeholder">Truck Image</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
