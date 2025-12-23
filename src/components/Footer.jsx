// src/components/Footer.jsx
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#283244] text-white pt-16 pb-6 text-sm">
      {/* top footer */}
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,1.6fr)]">
        {/* Brand + text */}
        <div>
          {/* replace with your logo */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-md mb-6">
            <span className="text-2xl font-semibold text-orange-500">SML</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Your trusted partner for freight forwarding, custom clearance, and
            logistics solutions with 17+ years of excellence.
          </p>
          <div className="flex gap-4 mt-6 text-xl text-gray-300">
            <i className="ri-facebook-line"></i>
            <i className="ri-linkedin-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-youtube-line"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Home
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> About
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Services
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Contact
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Air Freight
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Sea Freight
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Custom Clearance
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Warehousing
            </li>
            <li className="flex items-center gap-2">
              <span className="h-px w-4 bg-orange-500" /> Transportation
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>

          <div className="mb-5">
            <p className="font-semibold mb-2">Main Office – Mumbai</p>
            <ul className="space-y-1 text-gray-300">
              <li>302 Sitaram Apt, Swadeshi Mill Road, Sion Chunabhatti</li>
              <li>Mumbai - 400022</li>
              <li>Office: +91 9820036594</li>
              <li>Mobile: +91 9819391592</li>
              <li>Email: lmpcs1.shubhaamlogistics@gmail.com</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Port Operations – JNPT</p>
            <ul className="space-y-1 text-gray-300">
              <li>Jawaharlal Nehru Port Trust, Air Cargo Complex</li>
              <li>Mobile: +91 9820036594</li>
              <li>Email: lmpcs1.shubhaamlogistics@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-[#384359] mt-10 pt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-300 text-xs">
          <p>© {year} Shubhaam Logistics Services. All rights reserved.</p>
          <p>
            Operating 24/7, 365 days a year |{" "}
            <span className="text-orange-500 font-semibold">
              17+ Years of Experience
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
