// src/components/AboutSection.jsx
function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.7fr_1.3fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          
          {/* Left: Main content */}
          <div className="order-2 md:order-1 lg:pr-12 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-tight">
              About Shubhaam Logistics
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              <p>
                Shubhaam Logistics is a transport and logistics company providing 
                reliable, on‑time deliveries with a strong network of branches and 
                fleet partners.
              </p>
              <p>
                The team focuses on safety, transparency, and real‑time tracking to 
                keep your cargo secure and your business moving.
              </p>
              <blockquote className="mt-6 sm:mt-8 pl-4 sm:pl-6 border-l-4 border-orange-500 italic text-slate-700 text-sm sm:text-base bg-orange-50/50 py-3 px-4 rounded-r-lg">
                "What clients say: great deliveries, great team. They handle our pan-India distribution smoothly."
              </blockquote>
            </div>
          </div>

          {/* Right: Highlights cards */}
          <div className="order-1 md:order-2 md:col-span-2 lg:col-span-1 space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="group p-5 sm:p-6 lg:p-7 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                Pan‑India Presence
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Operations across major industrial and commercial hubs.
              </p>
            </div>

            <div className="group p-5 sm:p-6 lg:p-7 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                Customer‑First
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dedicated relationship managers and tailored solutions.
              </p>
            </div>

            <div className="group p-5 sm:p-6 lg:p-7 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                24/7 Operations
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Real-time tracking and round-the-clock support.
              </p>
            </div>

            {/* Years Highlight - Orange accent */}
            <div className="group p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl border-2 border-orange-200 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-black text-orange-700 mb-3 flex items-center gap-3">
                <span className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></span>
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
