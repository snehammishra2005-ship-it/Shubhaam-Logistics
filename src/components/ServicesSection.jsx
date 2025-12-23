// src/components/ServicesSection.jsx

const services = [
  {
    title: "Air Freight",
    desc: "Fast and reliable air cargo services with global reach and express delivery options for time‑sensitive shipments.",
    bullets: ["Express Delivery", "Global Network", "Real‑time Tracking"],
    image:
      "https://shubhaamlogistics.com/wp-content/uploads/2021/06/air-freight-1.jpg",
  },
  {
    title: "Sea Freight",
    desc: "Cost‑effective ocean freight solutions for bulk cargo and container shipments with worldwide coverage.",
    bullets: ["LCL & FCL", "Port‑to‑Port", "Door‑to‑Door"],
    image:
      "https://shubhaamlogistics.com/wp-content/uploads/2021/06/sea-freight-1.jpg",
  },
  {
    title: "Land Transport",
    desc: "Comprehensive ground transportation services including trucking and rail freight for domestic and cross‑border delivery.",
    bullets: ["Door Delivery", "Interstate", "Last Mile"],
    image:
      "https://shubhaamlogistics.com/wp-content/uploads/2021/06/land-transport-1.jpg",
  },
  {
    title: "Cargo Handling",
    desc: "Professional cargo handling and specialized equipment for safe transportation of all types of goods.",
    bullets: ["Safe Handling", "Special Equipment", "Documentation"],
    image:
      "https://shubhaamlogistics.com/wp-content/uploads/2021/06/cargo-handling-1.jpg",
  },
  {
    title: "Import & Export Perishable Goods",
    desc: "Specialized solutions for exporting temperature‑sensitive goods such as food, flowers, and pharmaceuticals.",
    bullets: [
      "Cold Chain Logistics",
      "Time‑Critical Delivery",
      "Compliance & Certifications",
    ],
    image:
      "https://shubhaamlogistics.com/wp-content/uploads/2021/06/perishable-goods-1.jpg",
  },
];

const specialized = [
  {
    title: "General Cargo",
    text: "Standard freight and cargo handling with reliable service.",
  },
  {
    title: "Industrial Goods",
    text: "Heavy machinery and industrial equipment transportation.",
  },
  {
    title: "Pharmaceutical",
    text: "Temperature‑controlled medical and pharmaceutical shipments.",
  },
  {
    title: "Hazardous Materials",
    text: "Certified dangerous goods handling with safety compliance.",
  },
  {
    title: "Express Courier",
    text: "Fast delivery for documents and small packages.",
  },
  {
    title: "Export Perishable Goods",
    text: "Cold chain logistics and export services for temperature‑sensitive items.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-[#f5fbff] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* heading */}
        <div className="mb-10">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
            ⚙
          </div>
          <h2 className="text-3xl font-semibold">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
            Comprehensive freight, logistics & transportation solutions with
            professional courier services and global network coverage.
          </p>
        </div>

        {/* main service cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 mb-14">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.08)] flex flex-col text-left"
            >
              <div
                className="h-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold mb-2">{s.title}</h3>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-auto space-y-1 text-[11px] text-gray-600">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="text-orange-500 text-xs">◉</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Specialized Solutions block */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] px-6 md:px-10 py-10">
          <h3 className="text-xl font-semibold mb-1">Specialized Solutions</h3>
          <p className="text-xs text-gray-500 mb-8">
            We handle diverse cargo types with specialized expertise and
            equipment for every industry need.
          </p>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 text-left text-xs">
            {specialized.map((item) => (
              <div
                key={item.title}
                className="bg-[#f7fbff] rounded-2xl px-4 py-5 flex flex-col items-start text-gray-600"
              >
                <div className="w-8 h-8 mb-3 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-lg">
                  ⬤
                </div>
                <p className="font-semibold text-[13px] mb-1 text-slate-800">
                  {item.title}
                </p>
                <p className="text-[11px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
