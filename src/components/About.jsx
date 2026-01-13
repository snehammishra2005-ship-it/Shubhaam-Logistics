// src/components/AboutSection.jsx
function AboutSection() {
  return (
    <section
      id="about"
      className="
        bg-gray-50
        py-12
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* 
          Layout strategy:
          - Mobile: stacked (1 column)
          - Tablet: stacked but balanced spacing
          - Desktop: 2 columns with custom ratio
        */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:gap-10
            md:gap-12
            lg:grid-cols-[1.7fr_1.3fr]
            lg:gap-16
            items-start
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              order-2
              md:order-1
              lg:pr-12
            "
          >
            <h2
              className="
                font-bold
                text-slate-900
                mb-5
                sm:mb-6
                md:mb-8
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                leading-tight
                bg-gradient-to-r from-slate-900 to-slate-700
                bg-clip-text text-transparent
              "
            >
              About Shubhaam Logistics
            </h2>

            <div
              className="
                max-w-2xl
                space-y-4
                sm:space-y-5
                md:space-y-6
                text-slate-600
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
              "
            >
              <p>
                Shubhaam Logistics is a transport and logistics company providing
                reliable, on-time deliveries with a strong network of branches and
                fleet partners.
              </p>

              <p>
                The team focuses on safety, transparency, and real-time tracking to
                keep your cargo secure and your business moving.
              </p>

              <blockquote
                className="
                  mt-6
                  sm:mt-8
                  pl-4
                  sm:pl-6
                  py-3
                  pr-4
                  border-l-4 border-orange-500
                  bg-orange-50/60
                  rounded-r-lg
                  italic
                  text-slate-700
                  text-xs
                  sm:text-sm
                  md:text-base
                "
              >
                "What clients say: great deliveries, great team. They handle our
                pan-India distribution smoothly."
              </blockquote>
            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div
            className="
              order-1
              md:order-2
              space-y-4
              sm:space-y-5
              lg:space-y-6
            "
          >
            {/* Card */}
            <div
              className="
                group
                bg-white
                border border-gray-100
                rounded-2xl
                p-5
                sm:p-6
                lg:p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-gray-200
              "
            >
              <h3
                className="
                  flex items-center gap-3
                  mb-2
                  text-base
                  sm:text-lg
                  font-bold
                  text-slate-900
                "
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Pan-India Presence
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Operations across major industrial and commercial hubs.
              </p>
            </div>

            {/* Card */}
            <div
              className="
                group
                bg-white
                border border-gray-100
                rounded-2xl
                p-5
                sm:p-6
                lg:p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-gray-200
              "
            >
              <h3
                className="
                  flex items-center gap-3
                  mb-2
                  text-base
                  sm:text-lg
                  font-bold
                  text-slate-900
                "
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Customer-First
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dedicated relationship managers and tailored solutions.
              </p>
            </div>

            {/* Card */}
            <div
              className="
                group
                bg-white
                border border-gray-100
                rounded-2xl
                p-5
                sm:p-6
                lg:p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-gray-200
              "
            >
              <h3
                className="
                  flex items-center gap-3
                  mb-2
                  text-base
                  sm:text-lg
                  font-bold
                  text-slate-900
                "
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                24/7 Operations
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Real-time tracking and round-the-clock support.
              </p>
            </div>

            {/* Highlight Card */}
            <div
              className="
                group
                bg-gradient-to-br from-orange-50 to-orange-100
                border-2 border-orange-200
                rounded-2xl
                p-5
                sm:p-6
                lg:p-7
                shadow-md
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-orange-300
              "
            >
              <h3
                className="
                  flex items-center gap-3
                  mb-2
                  font-black
                  text-orange-700
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                "
              >
                <span className="w-3 h-3 bg-orange-500 rounded-full" />
                17+ Years
              </h3>
              <p className="text-orange-800 font-semibold text-sm sm:text-base">
                Trusted logistics partner since 2008
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
