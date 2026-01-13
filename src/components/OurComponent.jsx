// src/components/OurComponent.jsx
function OurComponent() {
  const services = [
    {
      title: "Customs Clearance",
      desc:
        "Complete import & export clearance services with full documentation support and compliance management",
      icon: "📄",
    },
    {
      title: "Freight Forwarding",
      desc:
        "Comprehensive ocean and air freight forwarding services with all INCO Terms coverage",
      icon: "🌍",
    },
    {
      title: "ODD Dimension Handling",
      desc:
        "Specialized loading, unloading, and transportation services for oversized and heavy cargo",
      icon: "📦",
    },
    {
      title: "Warehousing & Storage",
      desc:
        "Secure storage facilities with advanced inventory management and distribution services",
      icon: "🏬",
    },
    {
      title: "Documentation Services",
      desc:
        "Complete pre and post shipment documentation support with regulatory compliance",
      icon: "🛡️",
    },
    {
      title: "Container Stuffing",
      desc:
        "Professional dock stuffing and factory stuffing services with quality assurance",
      icon: "🚢",
    },
  ];

  return (
    <section
      className="
        relative
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/warehouse-bg.jpg')", // put image in /public
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 sm:p-12">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Core Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Professional logistics operations with end-to-end service coverage
              and industry-leading expertise
            </p>
          </div>

          {/* ================= SERVICES GRID ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {services.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  gap-4
                  p-6
                  rounded-2xl
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/20
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-orange-500
                    text-white
                    text-xl
                    shrink-0
                  "
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-12 text-center">
            <a
              href="/#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                bg-orange-500
                text-white
                font-semibold
                shadow-lg
                hover:bg-orange-600
                hover:-translate-y-1
                transition-all
              "
            >
              💬 Get Service Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurComponent;
