// src/components/AboutSection.jsx
function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2>About Shubhaam Logistics</h2>
          <p>
            Shubhaam Logistics is a transport and logistics company providing
            reliable, on‑time deliveries with a strong network of branches and
            fleet partners.
          </p>
          <p>
            The team focuses on safety, transparency, and real‑time tracking to
            keep your cargo secure and your business moving.
          </p>
        </div>
        <div className="about-highlights">
          <div>
            <h3>Pan‑India Presence</h3>
            <p>Operations across major industrial and commercial hubs.</p>
          </div>
          <div>
            <h3>Customer‑First</h3>
            <p>Dedicated relationship managers and tailored solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
