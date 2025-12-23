// src/components/ContactForm.jsx
function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#f5fbff] py-20 flex justify-center px-4"
    >
      <div className="max-w-5xl w-full text-center">
        {/* heading */}
        <div className="mb-10">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
            ☎
          </div>
          <h2 className="text-3xl font-semibold">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            Ready to streamline your logistics? Contact us for reliable freight
            forwarding and custom clearance services with 24/7 support.
          </p>
        </div>

        {/* main cards */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.6fr)] items-start">
          {/* left: form card */}
          <div className="bg-white rounded-xl shadow-lg px-8 py-8 text-left">
            <h3 className="text-lg font-semibold mb-1">Send us a Message</h3>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the form below and we’ll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="h-10 rounded-md border border-gray-200 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  className="h-10 rounded-md border border-gray-200 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="+91 Mobile number"
                  className="h-10 rounded-md border border-gray-200 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <select className="h-10 rounded-md border border-gray-200 px-3 text-xs text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500">
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
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs resize-none focus:outline-none focus:ring-1 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="mt-2 w-full md:w-auto px-10 h-10 rounded-full bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* right: info cards */}
          <div className="space-y-4 text-left">
            {/* top colored cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg px-4 py-4 text-xs text-white bg-[#0078ff]">
                <p className="font-semibold mb-1">Main Office</p>
                <p>302, Sitaram Apt, Swadeshi Mill Road</p>
                <p>Sion, Chunabhatti, Mumbai – 400022.</p>
              </div>
              <div className="rounded-lg px-4 py-4 text-xs text-white bg-[#00a53b]">
                <p className="font-semibold mb-1">Phone Numbers</p>
                <p>+91 9820036594</p>
                <p>+91 9890939592</p>
              </div>
              <div className="rounded-lg px-4 py-4 text-xs text-white bg-[#7b2cff]">
                <p className="font-semibold mb-1">Email Address</p>
                <p>info.shubhaamlogistics@gmail.com</p>
              </div>
              <div className="rounded-lg px-4 py-4 text-xs text-white bg-[#ff5b1f]">
                <p className="font-semibold mb-1">Operating Hours</p>
                <p>24/7 Operations</p>
                <p>365 Days a Year</p>
              </div>
            </div>

            {/* office locations card */}
            <div className="bg-white rounded-xl shadow-lg px-6 py-5 text-xs">
              <h4 className="font-semibold mb-3">Office Locations</h4>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold">
                    Air Cargo Complex{" "}
                    <span className="text-[10px] text-gray-500">
                      (Head Office)
                    </span>
                  </p>
                  <p>Star Cargo Building, Air Cargo Complex</p>
                  <p>Sahar, Mumbai – 72, India</p>
                </div>

                <div>
                  <p className="font-semibold">JNPT Office</p>
                  <p>Jawaharlal Nehru Port Trust</p>
                  <p>Navi Mumbai – 400 702, India</p>
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
