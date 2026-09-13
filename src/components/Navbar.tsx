import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/Hamburger.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Toggle navigation menu"
        >
          <img src={hamburger} alt="Menu" className="h-6 w-6" />
        </button>

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
        <img src={logo} alt="Dev Stack" className="h-6 w-auto md:h-8" />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-slate-700 transition hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-semibold text-slate-700 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
          
            className="text-sm font-semibold text-slate-700 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-slate-700 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-slate-700 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href="#signin"
            className="hidden min-[420px]:block text-xs font-semibold text-slate-700 sm:text-sm"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-lg bg-slate-950 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-slate-800 sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Contact
            </a>

            <a
              href="#signin"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;