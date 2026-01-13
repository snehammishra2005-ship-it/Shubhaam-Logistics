// src/components/TestimonialSlider.jsx
function TestimonialSlider() {
  return (
    <section
      className="
        bg-slate-50
        py-12
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              text-slate-900
              mb-3
            "
          >
            What Our Clients Say
          </h2>
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
            Trusted by businesses across industries for reliable logistics
            solutions.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="flex justify-center">
          <article
            className="
              bg-white
              rounded-3xl
              shadow-[0_20px_50px_rgba(15,23,42,0.08)]
              p-6
              sm:p-8
              md:p-10
              max-w-xl
              sm:max-w-2xl
              text-center
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]
            "
          >
            {/* Quote */}
            <p
              className="
                text-sm
                sm:text-base
                md:text-lg
                text-slate-700
                leading-relaxed
                mb-6
                italic
              "
            >
              “Professional team, timely deliveries, and great support. They
              handle our pan-India distribution smoothly.”
            </p>

            {/* Author */}
            <div className="mt-4">
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                Client Name
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                Company
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
