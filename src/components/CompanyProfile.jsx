// src/components/CompanyProfile.jsx
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";  // if you have one

function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Company Profile
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our company profile excellence through comprehensive profile
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* PDF Viewer - Left */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Company Profile</h3>
                <div className="flex gap-2 text-sm text-slate-500">
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
              <iframe
                src="/Shubhaam Logistics Profile.pdf"  // Update with your PDF path
                className="w-full h-[600px] rounded-xl border-0 shadow-lg"
                title="Company Profile PDF"
              />
            </div>

            {/* Company Info & Controls - Right */}
            <div className="space-y-8">
              
              {/* Company Header */}
              <div className="text-center py-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl px-8">
                <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">SM</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  SHUBHAAM LOGISTICS SERVICES
                </h2>
                <div className="bg-white/20 rounded-lg px-6 py-3 mb-6">
                  <p className="text-lg opacity-90">302 Satyam Apartment, 40002</p>
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <p>📞 9329085759 | 9819111202</p>
                  <p>✉️ shubhamlogistic@yahoo.com</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/company-profile.pdf"
                  download
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                >
                  📥 Download PDF
                </a>
                <a
                  href="/company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border-2 border-orange-500 text-orange-600 py-4 px-6 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg hover:bg-orange-50"
                >
                  👁️ View in New Tab
                </a>
              </div>

              {/* Footer Note */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                <p className="text-slate-700 font-medium mb-2">This comprehensive profile provides detailed insights into our operations</p>
                <p className="text-sm text-blue-600">Download the PDF for more information about our services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}

export default CompanyProfile;
