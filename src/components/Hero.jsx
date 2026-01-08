// src/components/Hero.jsx
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed lg:bg-fixed"
        style={{
          backgroundImage: "url('/hero-trucks-sunset.jpg')"  // Add to public/
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 lg:from-black/10 lg:via-black/50 lg:to-black/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white via-orange-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Shubhaam Logistics Services
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 text-orange-300/90 drop-shadow-lg">
            17+ Years of Excellence in <span className="text-white">Freight Forwarding</span>
          </p>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 sm:mb-10 md:mb-12 text-slate-200/90 max-w-2xl sm:max-w-3xl mx-auto drop-shadow-md">
            From air and sea freight to custom clearance and warehousing, we 
            provide comprehensive logistics solutions with 24/7 operations, 
            ensuring your cargo reaches its destination safely and on time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-lg mx-auto">
            <a
              href="#services"
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-2xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/75 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 bg-clip-padding backdrop-blur-sm border border-orange-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                Our Services 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
