// src/components/IndustriesSection.jsx
const industries = [
  "Automotive",
  "FMCG & Retail",
  "Pharmaceuticals",
  "Industrial Goods",
  "E‑commerce",
  "Textiles"
];

function IndustriesSection() {
  return (
    <section id="industries" className="section section-alt">
      <div className="container">
        <h2>Industries We Serve</h2>
        <p className="section-subtitle">
          Customized logistics solutions for multiple sectors.
        </p>
        <ul className="pill-list">
          {industries.map((name) => (
            <li key={name} className="pill">{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default IndustriesSection;
