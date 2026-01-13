// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950
        text-white/90
        pt-10
        sm:pt-14
        md:pt-18
        lg:pt-20
        pb-8
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:gap-10
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-12
          "
        >
          {/* ================= BRAND ================= */}
          <div className="md:col-span-2 lg:col-span-1">
            <div
              className="
                w-14 h-14
                sm:w-16 sm:h-16
                lg:w-20 lg:h-20
                mb-5
                sm:mb-6
                rounded-2xl
                bg-gradient-to-br from-orange-500 to-orange-400
                flex items-center justify-center
                shadow-2xl shadow-orange-500/30
              "
            >
              <span className="text-lg sm:text-xl lg:text-3xl font-black">
                SML
              </span>
            </div>

            <p
              className="
                max-w-sm
                text-xs
                sm:text-sm
                lg:text-base
                text-slate-300
                leading-relaxed
                mb-6
              "
            >
              Your trusted partner for freight forwarding, custom clearance, and
              logistics solutions with 17+ years of excellence.
            </p>

            <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
              {["📘", "💼", "📷", "🎥"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-2
                    rounded-xl
                    bg-white/10
                    transition-all duration-300
                    hover:bg-white/20
                    hover:scale-110
                    hover:rotate-[-6deg]
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4
              className="
                text-sm
                sm:text-base
                lg:text-lg
                font-bold
                mb-4
                sm:mb-6
                tracking-wide
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About", "Services", "Company Profile", "Contact"].map(
                (item) => (
                  <li key={item} className="group">
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="
                        flex items-center
                        text-xs
                        sm:text-sm
                        text-slate-300
                        transition-all duration-300
                        hover:text-orange-400
                        hover:translate-x-2
                      "
                    >
                      <span
                        className="
                          mr-2
                          w-1.5 h-1.5
                          rounded-full
                          bg-orange-500
                          scale-0
                          group-hover:scale-100
                          transition-transform origin-left
                        "
                      />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4
              className="
                text-sm
                sm:text-base
                lg:text-lg
                font-bold
                mb-4
                sm:mb-6
                tracking-wide
              "
            >
              Our Services
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              {[
                "Air Freight",
                "Sea Freight",
                "Land Transport",
                "Custom Clearance",
                "Warehousing",
                "Cargo Insurance",
              ].map((service) => (
                <li key={service} className="group">
                  <a
                    href="#"
                    className="
                      flex items-center
                      text-xs
                      sm:text-sm
                      text-slate-300
                      transition-all duration-300
                      hover:text-orange-400
                      hover:translate-x-2
                    "
                  >
                    <span
                      className="
                        mr-2
                        w-1.5 h-1.5
                        rounded-full
                        bg-orange-500
                        scale-0
                        group-hover:scale-100
                        transition-transform origin-left
                      "
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4
              className="
                text-sm
                sm:text-base
                lg:text-lg
                font-bold
                mb-4
                sm:mb-6
                tracking-wide
              "
            >
              Contact Us
            </h4>

            <div className="mb-6">
              <p className="text-orange-400 font-semibold text-xs sm:text-sm mb-2">
                Main Office – Mumbai
              </p>

              <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                <p>302 Sitaram Apt, Swadeshi Mill Road</p>
                <p>Sion Chunabhatti, Mumbai – 400022</p>
                <p className="font-mono text-orange-400">
                  +91 9820036594
                </p>
                <p className="font-mono text-orange-400">
                  +91 9819391592
                </p>
              </div>
            </div>

            <p className="font-mono text-xs sm:text-sm text-slate-300 truncate">
              info@shubhaamlogistics.com
            </p>
          </div>
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div
          className="
            mt-10
            sm:mt-12
            pt-6
            sm:pt-8
            border-t border-slate-800/60
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-3
              text-xs
              sm:text-sm
              text-slate-400
            "
          >
            <p>
              © {year} Shubhaam Logistics Services. All rights reserved.
            </p>

            <div className="flex gap-4 text-orange-400 font-semibold">
              <span>🕐 Operating 24/7</span>
              <span>⭐ 17+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
