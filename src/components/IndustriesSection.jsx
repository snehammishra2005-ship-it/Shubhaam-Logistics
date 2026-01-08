// src/components/IndustriesSection.jsx
const industries = [
  {
    title: "Automotive",
    desc: "Complete supply chain solutions for automotive parts and vehicle logistics.",
    bullets: ["OEM Supply Chain", "Just-in-Time Delivery", "Parts Distribution"],
    icon: "🚗"
  },
  {
    title: "FMCG & Retail",
    desc: "Efficient distribution networks for fast-moving consumer goods and retail supply chains.",
    bullets: ["Daily Deliveries", "Reverse Logistics", "Inventory Management"],
    icon: "🛒"
  },
  {
    title: "Pharmaceuticals",
    desc: "Temperature-controlled logistics for medical supplies and pharmaceuticals.",
    bullets: ["Cold Chain", "GMP Compliance", "Healthcare Distribution"],
    icon: "💊"
  },
  {
    title: "Industrial Goods",
    desc: "Heavy machinery and industrial equipment transportation solutions.",
    bullets: ["Oversized Cargo", "Project Cargo", "Machinery Transport"],
    icon: "⚙️"
  },
  {
    title: "E‑commerce",
    desc: "Fast and reliable last-mile delivery for online shopping platforms.",
    bullets: ["Same-Day Delivery", "Returns Management", "Order Fulfillment"],
    icon: "📦"
  },
  {
    title: "Textiles",
    desc: "Global textile supply chain management and fabric logistics.",
    bullets: ["Bulk Fabric Transport", "Export Documentation", "Warehouse Solutions"],
    icon: "👕"
  }
];

function IndustriesSection() {
  return (
    <section id="industries" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl shadow-2xl shadow-orange-500/30">
            🏭
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-slate-900 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900/80 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Customized logistics solutions for multiple sectors
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 border border-slate-100/50 hover:border-orange-200/60 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
            >
              {/* Icon Header */}
              <div className="h-28 sm:h-32 md:h-36 bg-gradient-to-br from-orange-50/90 to-orange-100/80 p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-2xl shadow-orange-500/50 group-hover:shadow-orange-500/75 group-hover:scale-110 transition-all duration-500">
                  <span>{industry.icon}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-4 sm:mb-5 text-slate-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 lg:mb-10 flex-1 leading-relaxed line-clamp-3">
                  {industry.desc}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-slate-600">
                  {industry.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-3 group-hover:text-slate-700 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full scale-75 group-hover:scale-100 transition-transform origin-center" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
