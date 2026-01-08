// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-white/90 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl shadow-orange-500/25">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white drop-shadow-lg">SML</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Your trusted partner for freight forwarding, custom clearance, and 
              logistics solutions with 17+ years of excellence.
            </p>
            <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl">
              <a href="#" className="group p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-[-5deg] hover:scale-110">
                <span>📘</span>
              </a>
              <a href="#" className="group p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-[5deg] hover:scale-110">
                <span>💼</span>
              </a>
              <a href="#" className="group p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-[-8deg] hover:scale-110">
                <span>📷</span>
              </a>
              <a href="#" className="group p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-[8deg] hover:scale-110">
                <span>🎥</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-4 sm:mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Home', 'About', 'Services', 'Company Profile', 'Contact'
              ].map((item) => (
                <li key={item} className="group">
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-2 flex items-center gap-2 group-hover:text-orange-400 transition-all duration-300">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform origin-left mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-4 sm:mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Air Freight', 'Sea Freight', 'Land Transport', 
                'Custom Clearance', 'Warehousing', 'Cargo Insurance'
              ].map((service) => (
                <li key={service} className="group">
                  <a href="#" 
                     className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-2 flex items-center gap-2 group-hover:text-orange-400 transition-all duration-300">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform origin-left mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-4 sm:mb-6 text-white tracking-wide">Contact Us</h4>
            
            {/* Main Office */}
            <div className="mb-6 sm:mb-8">
              <p className="font-semibold text-xs sm:text-sm mb-3 text-orange-400">Main Office – Mumbai</p>
              <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                <p>302 Sitaram Apt, Swadeshi Mill Road</p>
                <p>Sion Chunabhatti, Mumbai - 400022</p>
                <p className="font-mono text-orange-400">+91 9820036594</p>
                <p className="font-mono text-orange-400">+91 9819391592</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="font-mono text-xs sm:text-sm text-slate-300 mb-1 truncate">
                info@shubhaamlogistics.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-800/50 mt-12 pt-6 sm:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <p>© {year} Shubhaam Logistics Services. All rights reserved.</p>
            <div className="flex items-center gap-4 text-orange-400 font-semibold text-xs sm:text-sm">
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
