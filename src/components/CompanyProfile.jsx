// src/components/CompanyProfile.jsx
function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* ================= PAGE HEADER ================= */}
      <section
        className="
          pt-20
          sm:pt-24
          pb-10
          sm:pb-12
          bg-gradient-to-b from-white to-gray-50
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-slate-800
              mb-3
              sm:mb-4
            "
          >
            Company Profile
          </h1>
          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-slate-600
              max-w-2xl
              mx-auto
            "
          >
            Discover our company profile excellence through a comprehensive
            overview of our logistics capabilities.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section
        className="
          py-12
          sm:py-16
          md:py-20
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-start
            "
          >
            {/* ================= PDF VIEWER ================= */}
            <div
              className="
                bg-white
                rounded-2xl
                shadow-xl
                border border-gray-100
                p-4
                sm:p-6
                lg:p-8
              "
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
                  Company Profile PDF
                </h3>
                <div className="hidden sm:flex gap-2 text-xs sm:text-sm text-slate-500">
                  <span>📄</span>
                  <span>Preview</span>
                </div>
              </div>

              <iframe
                src="/Shubhaam Logistics Profile.pdf"
                title="Company Profile PDF"
                className="
                  w-full
                  h-[360px]
                  sm:h-[480px]
                  md:h-[560px]
                  lg:h-[600px]
                  rounded-xl
                  border
                "
              />
            </div>

            {/* ================= COMPANY INFO ================= */}
            <div className="space-y-6 sm:space-y-8">
              {/* Company Card */}
              <div
                className="
                  text-center
                  py-8
                  sm:py-10
                  px-6
                  sm:px-8
                  bg-gradient-to-r from-orange-500 to-orange-600
                  text-white
                  rounded-2xl
                "
              >
                <div
                  className="
                    w-20 h-20
                    sm:w-24 sm:h-24
                    bg-white/20
                    rounded-2xl
                    flex items-center justify-center
                    mx-auto
                    mb-5
                  "
                >
                  <span className="text-2xl sm:text-3xl font-bold">
                    SM
                  </span>
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    font-bold
                    mb-3
                  "
                >
                  SHUBHAAM LOGISTICS SERVICES
                </h2>

                <div className="bg-white/20 rounded-lg px-4 py-3 mb-5">
                  <p className="text-sm sm:text-base opacity-90">
                    302 Satyam Apartment, Mumbai – 400022
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm opacity-90">
                  <p>📞 9329085759 | 9819111202</p>
                  <p>✉️ shubhamlogistic@yahoo.com</p>
                </div>
              </div>

              {/* ================= ACTION BUTTONS ================= */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Shubhaam Logistics Profile.pdf"
                  download
                  className="
                    flex-1
                    bg-gradient-to-r from-orange-500 to-orange-600
                    text-white
                    py-3
                    sm:py-4
                    px-6
                    rounded-xl
                    text-center
                    font-semibold
                    shadow-lg
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl
                    text-sm
                    sm:text-base
                    lg:text-lg
                  "
                >
                  📥 Download PDF
                </a>

                <a
                  href="/Shubhaam Logistics Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    bg-white
                    border-2 border-orange-500
                    text-orange-600
                    py-3
                    sm:py-4
                    px-6
                    rounded-xl
                    text-center
                    font-semibold
                    shadow-lg
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:bg-orange-50
                    text-sm
                    sm:text-base
                    lg:text-lg
                  "
                >
                  👁️ View in New Tab
                </a>
              </div>

              {/* ================= INFO NOTE ================= */}
              <div
                className="
                  bg-blue-50
                  border border-blue-100
                  rounded-xl
                  p-5
                  sm:p-6
                  text-center
                "
              >
                <p className="text-slate-700 font-medium mb-2 text-sm sm:text-base">
                  This comprehensive profile provides detailed insights into our
                  operations.
                </p>
                <p className="text-xs sm:text-sm text-blue-600">
                  Download the PDF for complete service information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default CompanyProfile;
