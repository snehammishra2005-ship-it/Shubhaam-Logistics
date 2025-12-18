// src/components/ServicesSection.jsx
const services = [
  {
    title: "Full Truck Load (FTL)",
    text: "Dedicated trucks for time‑sensitive and high‑volume shipments across India."
  },
  {
    title: "Part Truck Load (PTL)",
    text: "Cost‑effective shared capacity for small and medium consignments."
  },
  {
    title: "Warehousing & Distribution",
    text: "Secure storage and last‑mile delivery for your supply chain."
  },
  {
    title: "Express Cargo",
    text: "Premium express movement for urgent deliveries."
  }
];

function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          End‑to‑end logistics solutions for diverse business needs.
        </p>
        <div className="card-grid">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
