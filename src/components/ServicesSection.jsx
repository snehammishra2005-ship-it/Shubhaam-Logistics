// src/components/ServicesSection.jsx

/* ======================= DATA ======================= */

const services = [
  {
    title: "Air Freight",
    desc: "Fast and reliable air cargo services with global reach and express delivery options for time-sensitive shipments.",
    bullets: ["Express Delivery", "Global Network", "Real-time Tracking"],
    image: "/air-freight-1.jpg",
  },
  {
    title: "Sea Freight",
    desc: "Cost-effective ocean freight solutions for bulk cargo and container shipments with worldwide coverage.",
    bullets: ["LCL & FCL", "Port-to-Port", "Door-to-Door"],
    image: "/ocean.png",
  },
  {
    title: "Land Transport",
    desc: "Comprehensive ground transportation services including trucking and rail freight for domestic and cross-border delivery.",
    bullets: ["Door Delivery", "Interstate", "Last Mile"],
    image: "/land.jpg",
  },
  {
    title: "Cargo Handling",
    desc: "Professional cargo handling and specialized equipment for safe transportation of all types of goods.",
    bullets: ["Safe Handling", "Special Equipment", "Documentation"],
    image: "/cargo.png",
  },
  {
    title: "Import & Export Perishable Goods",
    desc: "Specialized solutions for exporting temperature-sensitive goods such as food, flowers, and pharmaceuticals.",
    bullets: [
      "Cold Chain Logistics",
      "Time-Critical Delivery",
      "Compliance & Certifications",
    ],
    image: "/fruit.jpg",
  },
];

const specialized = [
  { title: "General Cargo", text: "Standard freight and cargo handling with reliable service." },
  { title: "Industrial Goods", text: "Heavy machinery and industrial equipment transportation." },
  { title: "Pharmaceutical", text: "Temperature-controlled medical and pharmaceutical shipments." },
  { title: "Hazardous Materials", text: "Certified dangerous goods handling with safety compliance." },
  { title: "Express Courier", text: "Fast delivery for documents and small packages." },
  { title: "Export Perishable Goods", text: "Cold chain logistics and export services for temperature-sensitive items." },
];

const industries = [
  {
    title: "Automotive",
    desc: "Complete supply chain solutions for automotive parts and vehicle logistics.",
    bullets: ["OEM Supply Chain", "Just-in-Time Delivery", "Parts Distribution"],
    icon: "🚗",
  },
  {
    title: "FMCG & Retail",
    desc: "Efficient distribution networks for fast-moving consumer goods and retail supply chains.",
    bullets: ["Daily Deliveries", "Reverse Logistics", "Inventory Management"],
    icon: "🛒",
  },
  {
    title: "Pharmaceuticals",
    desc: "Temperature-controlled logistics for medical supplies and pharmaceuticals.",
    bullets: ["Cold Chain", "GMP Compliance", "Healthcare Distribution"],
    icon: "💊",
  },
  {
    title: "Industrial Goods",
    desc: "Heavy machinery and industrial equipment transportation solutions.",
    bullets: ["Oversized Cargo", "Project Cargo", "Machinery Transport"],
    icon: "⚙️",
  },
  {
    title: "E-commerce",
    desc: "Fast and reliable last-mile delivery for online shopping platforms.",
    bullets: ["Same-Day Delivery", "Returns Management", "Order Fulfillment"],
    icon: "📦",
  },
  {
    title: "Textiles",
    desc: "Global textile supply chain management and fabric logistics.",
    bullets: ["Bulk Fabric Transport", "Export Documentation", "Warehouse Solutions"],
    icon: "👕",
  },
];

const coreOperations = [
  {
    title: "Customs Clearance",
    desc: "Complete import & export clearance services with full documentation support and compliance management",
    icon: "📄",
  },
  {
    title: "Freight Forwarding",
    desc: "Comprehensive ocean and air freight forwarding services with all INCO Terms coverage",
    icon: "🌍",
  },
  {
    title: "ODD Dimension Handling",
    desc: "Specialized loading, unloading, and transportation services for oversized and heavy cargo",
    icon: "📦",
  },
  {
    title: "Warehousing & Storage",
    desc: "Secure storage facilities with advanced inventory management and distribution services",
    icon: "🏬",
  },
  {
    title: "Documentation Services",
    desc: "Complete pre and post shipment documentation support with regulatory compliance",
    icon: "🛡️",
  },
  {
    title: "Container Stuffing",
    desc: "Professional dock stuffing and factory stuffing services with quality assurance",
    icon: "🚢",
  },
];

/* ======================= COMPONENT ======================= */

function ServicesSection() {
  return (
    <>
      {/* ======================= OUR SERVICES ======================= */}
      <section id="services" className="bg-[#f5fbff] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 mb-12">
            Comprehensive freight, logistics & transportation solutions with global reach.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition">
                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="p-5 text-left">
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                  <ul className="text-sm space-y-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-orange-500">◉</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Specialized */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-xl font-semibold mb-6">Specialized Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {specialized.map((item) => (
                <div key={item.title} className="bg-[#f7fbff] rounded-2xl p-5 text-left">
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= INDUSTRIES ======================= */}
      <section id="industries" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-black mb-14">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((i) => (
              <div key={i.title} className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 transition">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl mb-5">
                  {i.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{i.title}</h3>
                <p className="text-gray-600 mb-4">{i.desc}</p>
                <ul className="space-y-2 text-sm">
                  {i.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ======================= CORE OPERATIONS ======================= */}
<section className="relative py-24">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/warehouse-bg.jpg')" }}
  />

  {/* Dark overlay (FIXED) */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-10">
      <h2 className="text-center text-white text-4xl font-bold mb-6">
        Core Operations
      </h2>

      <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
        End-to-end logistics operations with industry-leading expertise
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreOperations.map((op) => (
          <div
            key={op.title}
            className="flex gap-4 p-6 bg-white/10 rounded-2xl text-white"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-xl">
              {op.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{op.title}</h3>
              <p className="text-sm text-slate-300">{op.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/#contact"
          className="inline-block px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          💬 Get Service Quote
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default ServicesSection;
