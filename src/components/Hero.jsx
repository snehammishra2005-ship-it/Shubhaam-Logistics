// src/components/Hero.jsx
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[540px] lg:min-h-[620px] text-white"
    >
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://shubhaamlogistics.com/wp-content/uploads/2021/06/home-banner.jpg')",
        }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
            Shubhaam Logistics Services
          </h1>
          <p className="mt-3 text-sm lg:text-base text-orange-400 font-semibold">
            17+ Years of Excellence in{" "}
            <span className="text-white">Freight Forwarding</span>
          </p>

          <p className="mt-4 text-xs lg:text-sm leading-relaxed text-gray-100 max-w-md">
            From air and sea freight to custom clearance and warehousing, we
            provide comprehensive logistics solutions with 24/7 operations,
            ensuring your cargo reaches its destination safely and on time.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center px-4 py-2 text-xs lg:text-sm bg-orange-500 hover:bg-orange-600 transition-colors rounded-sm"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-xs lg:text-sm bg-white/10 border border-white/60 hover:bg-white/20 transition-colors rounded-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
