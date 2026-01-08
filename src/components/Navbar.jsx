// src/components/Navbar.jsx
function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
         
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="#home" className="font-bold text-lg text-primary">
              Shubhaam Logistics
            </a>
          </div>

          {/* Centered Menu */}
          <nav className="flex-1 flex justify-center mx-8">
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#home" 
                className="relative text-slate-700 font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="relative text-slate-700 font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Services
              </a>
              <a 
                href="#about" 
                className="relative text-slate-700 font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                About
              </a>
              <a 
                href="#contact"
                className="relative text-slate-700 font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Company Profile Button - Right */}
          <div className="flex-shrink-0">
            <a 
              href="/company-profile"
              className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark hover:-translate-y-px transition-all shadow-sm hover:shadow-md"
            >Company Profile 
</a>
          </div>
         
        </div>
      </div>
    </header>
  );
}

export default Navbar;
