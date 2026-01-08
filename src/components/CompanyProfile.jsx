// src/components/CompanyProfile.jsx
function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Company Profile
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Discover our company profile excellence through comprehensive profile
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* PDF Viewer - Left */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex-1">
                  Company Profile
                </h3>
                <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
                  <span>📄</span>
                  <span>1/5</span>
                  <span>-</span>
                  <span>+</span>
                  <span>📱</span>
                  <span>📋</span>
                  <span>🔗</span>
                </div>
              </div>
              
              {/* PDF Embed */}
              <div className="aspect-[4/5] sm:aspect-[3/4] md:h-[500px] lg:h-[600px] rounded-xl border-0 shadow-lg overflow-hidden">
                <iframe
                  src="/Shubhaam Logistics Profile.pdf"
                  className="w-full h-full"
                  title="Company Profile PDF"
                />
              </div>
            </div>

            {/* Company Info & Controls - Right */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              
              {/* Company Header */}
              <div className="text-center py-8 sm:py-12 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold">SM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                  SHUBHAAM LOGISTICS SERVICES
                </h2>
                <div className="bg-white/20 rounded-lg px-4 sm:px-6 py-3 mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg opacity-90">302 Satyam Apartment, 40002</p>
                </div>
                <div className="space-y-2 text-xs sm:text-sm opacity-90">
                  <p>📞 9329085759 | 9819111202</p>
                  <p>✉️ shubhamlogistic@yahoo.com</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="/Shubhaam Logistics Profile.pdf"
                  download
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 px-6 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base sm:text-lg"
                >
                  📥 Download PDF
                </a>
                <a
                  href="/Shubhaam Logistics Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white border-2 border-orange-500 text-orange-600 py-3 sm:py-4 px-6 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base sm:text-lg hover:bg-orange-50"
                >
                  👁️ View in New Tab
                </a>
              </div>

              {/* Footer Note */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-6 text-center">
                <p className="text-slate-700 font-medium mb-2 text-sm sm:text-base">
                  This comprehensive profile provides detailed insights into our operations
                </p>
                <p className="text-sm text-blue-600 text-xs sm:text-sm">
                  Download the PDF for more information about our services
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
