// src/components/ContactForm.jsx
function ContactForm() {
  return (
    <section
      id="contact"
      className="
        bg-gradient-to-b from-blue-50/60 to-blue-50/0
        py-12
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= HEADING ================= */}
        <div
          className="
            text-center
            mb-10
            sm:mb-14
            md:mb-18
          "
        >
          <div
            className="
              mx-auto mb-5
              w-12 h-12
              sm:w-14 sm:h-14
              rounded-full
              bg-orange-500
              flex items-center justify-center
              text-white text-xl
              shadow-lg
            "
          >
            ☎️
          </div>

          <h2
            className="
              font-bold
              text-slate-900
              mb-3
              sm:mb-4
              text-2xl
              sm:text-3xl
              md:text-4xl
            "
          >
            Get in <span className="text-orange-500">Touch</span>
          </h2>

          <p
            className="
              mx-auto
              max-w-xl
              sm:max-w-2xl
              text-slate-600
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
            "
          >
            Ready to streamline your logistics? Contact us for reliable freight
            forwarding and custom clearance services with 24/7 support.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:gap-8
            lg:grid-cols-[minmax(0,3fr)_minmax(0,2.6fr)]
            lg:gap-12
            items-start
          "
        >
          {/* ================= FORM ================= */}
          <div
            className="
              bg-white/80
              backdrop-blur-sm
              rounded-2xl
              border border-white/50
              shadow-xl
              p-5
              sm:p-8
              lg:p-10
            "
          >
            <div className="mb-6 sm:mb-8">
              <h3
                className="
                  font-bold
                  text-slate-900
                  mb-1
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                "
              >
                Send us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  className="
                    h-12
                    sm:h-14
                    px-4
                    rounded-xl
                    border border-gray-200
                    text-sm
                    sm:text-base
                    shadow-sm
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-500
                  "
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  required
                  className="
                    h-12
                    sm:h-14
                    px-4
                    rounded-xl
                    border border-gray-200
                    text-sm
                    sm:text-base
                    shadow-sm
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-500
                  "
                />
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="tel"
                  placeholder="+91 Mobile number"
                  className="
                    h-12
                    sm:h-14
                    px-4
                    rounded-xl
                    border border-gray-200
                    text-sm
                    sm:text-base
                    shadow-sm
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-500
                  "
                />
                <select
                  className="
                    h-12
                    sm:h-14
                    px-4
                    rounded-xl
                    border border-gray-200
                    bg-white
                    text-sm
                    sm:text-base
                    shadow-sm
                    appearance-none
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-500
                  "
                >
                  <option>Select a service</option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Custom Clearance</option>
                  <option>Warehousing</option>
                  <option>Transportation</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Tell us about your shipping requirements (optional)"
                className="
                  w-full
                  min-h-[120px]
                  px-4 py-3
                  rounded-xl
                  border border-gray-200
                  text-sm
                  sm:text-base
                  shadow-sm
                  resize-y
                  focus:outline-none
                  focus:ring-2 focus:ring-orange-500
                "
              />

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  sm:px-10
                  py-3.5
                  sm:py-4
                  rounded-xl
                  bg-gradient-to-r from-orange-500 to-orange-600
                  text-white
                  font-semibold
                  text-sm
                  sm:text-base
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:from-orange-600 hover:to-orange-700
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="space-y-5 lg:space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  title: "Main Office",
                  lines: [
                    "302, Sitaram Apt, Swadeshi Mill Road",
                    "Sion, Chunabhatti, Mumbai – 400022.",
                  ],
                  bg: "from-blue-600 to-blue-800",
                },
                {
                  title: "Phone Numbers",
                  lines: ["+91 9820036594", "+91 9890939592"],
                  bg: "from-green-600 to-green-800",
                },
                {
                  title: "Email Address",
                  lines: ["info.shubhaamlogistics@gmail.com"],
                  bg: "from-purple-600 to-purple-800",
                },
                {
                  title: "Operating Hours",
                  lines: ["24/7 Operations", "365 Days a Year"],
                  bg: "from-orange-500 to-orange-700",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`
                    rounded-xl
                    px-4 sm:px-5
                    py-5
                    text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    bg-gradient-to-br ${item.bg}
                  `}
                >
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-xs leading-tight">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Locations */}
            <div
              className="
                bg-white/80
                backdrop-blur-sm
                rounded-2xl
                border border-white/50
                shadow-xl
                p-6
                sm:p-8
              "
            >
              <h4 className="font-bold text-slate-900 text-lg sm:text-xl mb-4 sm:mb-6">
                Office Locations
              </h4>

              <div className="space-y-4 text-sm sm:text-base text-slate-700">
                <div className="space-y-1">
                  <p className="font-semibold flex items-center gap-2">
                    Air Cargo Complex
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      Head Office
                    </span>
                  </p>
                  <p>Star Cargo Building, Air Cargo Complex</p>
                  <p className="text-slate-600">
                    Sahar, Mumbai – 72, India
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-1">
                  <p className="font-semibold">JNPT Office</p>
                  <p>Jawaharlal Nehru Port Trust</p>
                  <p className="text-slate-600">
                    Navi Mumbai – 400 702, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
