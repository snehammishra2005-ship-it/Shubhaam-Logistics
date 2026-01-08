// src/components/ContactForm.jsx
function ContactForm() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50/50 to-blue-50/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl shadow-lg">
            ☎️
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Ready to streamline your logistics? Contact us for reliable freight 
            forwarding and custom clearance services with 24/7 support.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.6fr)] gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left: Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="h-12 sm:h-14 px-4 py-3 rounded-xl border border-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  className="h-12 sm:h-14 px-4 py-3 rounded-xl border border-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="tel"
                  placeholder="+91 Mobile number"
                  className="h-12 sm:h-14 px-4 py-3 rounded-xl border border-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm"
                />
                <select className="h-12 sm:h-14 px-4 py-3 rounded-xl border border-gray-200 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm appearance-none">
                  <option>Select a service</option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Custom Clearance</option>
                  <option>Warehousing</option>
                  <option>Transportation</option>
                </select>
              </div>

              <textarea
                rows="4"
                placeholder="Tell us about your shipping requirements (optional)"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm min-h-[120px]"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-5 lg:space-y-6">
            
            {/* Colored Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl px-4 sm:px-5 py-5 text-white shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background: 'linear-gradient(135deg, #0078ff 0%, #0056b3 100%)'}}>
                <p className="font-semibold text-sm mb-1">Main Office</p>
                <p className="text-xs leading-tight">302, Sitaram Apt, Swadeshi Mill Road</p>
                <p className="text-xs leading-tight">Sion, Chunabhatti, Mumbai – 400022.</p>
              </div>
              
              <div className="rounded-xl px-4 sm:px-5 py-5 text-white shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background: 'linear-gradient(135deg, #00a53b 0%, #008f2e 100%)'}}>
                <p className="font-semibold text-sm mb-1">Phone Numbers</p>
                <p className="text-xs leading-tight">+91 9820036594</p>
                <p className="text-xs leading-tight">+91 9890939592</p>
              </div>
              
              <div className="rounded-xl px-4 sm:px-5 py-5 text-white shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background: 'linear-gradient(135deg, #7b2cff 0%, #5a1fb3 100%)'}}>
                <p className="font-semibold text-sm mb-1">Email Address</p>
                <p className="text-xs leading-tight">info.shubhaamlogistics@gmail.com</p>
              </div>
              
              <div className="rounded-xl px-4 sm:px-5 py-5 text-white shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300" style={{background: 'linear-gradient(135deg, #ff5b1f 0%, #e64a0d 100%)'}}>
                <p className="font-semibold text-sm mb-1">Operating Hours</p>
                <p className="text-xs leading-tight">24/7 Operations</p>
                <p className="text-xs leading-tight">365 Days a Year</p>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">
                Office Locations
              </h4>
              <div className="space-y-4 text-sm sm:text-base text-slate-700">
                <div className="space-y-1">
                  <p className="font-semibold flex items-center gap-2">
                    Air Cargo Complex 
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                      Head Office
                    </span>
                  </p>
                  <p>Star Cargo Building, Air Cargo Complex</p>
                  <p className="text-slate-600">Sahar, Mumbai – 72, India</p>
                </div>
                <div className="space-y-1 pt-4 border-t border-gray-100">
                  <p className="font-semibold">JNPT Office</p>
                  <p>Jawaharlal Nehru Port Trust</p>
                  <p className="text-slate-600">Navi Mumbai – 400 702, India</p>
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
