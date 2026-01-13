// src/components/Navbar.jsx
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* ================= LOGO ================= */}
          <a
            href="/#home"
            className="font-bold text-base sm:text-lg text-primary whitespace-nowrap"
          >
            Shubhaam Logistics
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="
                  relative
                  text-slate-700
                  hover:text-primary
                  transition-colors
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-primary
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:block">
            <a
              href="/company-profile"
              className="
                px-5 py-2
                rounded-full
                bg-primary
                text-white
                text-sm
                font-semibold
                shadow-sm
                transition-all
                hover:bg-primary-dark
                hover:-translate-y-px
                hover:shadow-md
              "
            >
              Company Profile
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              inline-flex items-center justify-center
              rounded-lg
              p-2
              text-slate-700
              hover:bg-slate-100
              focus:outline-none
            "
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3 text-sm font-medium">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-3 py-2
                  rounded-lg
                  text-slate-700
                  hover:bg-slate-100
                  hover:text-primary
                  transition-colors
                "
              >
                {item}
              </a>
            ))}

            <a
              href="/company-profile"
              onClick={() => setOpen(false)}
              className="
                block
                mt-3
                px-4 py-2
                rounded-lg
                bg-primary
                text-white
                text-center
                font-semibold
                transition-all
                hover:bg-primary-dark
              "
            >
              Company Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
