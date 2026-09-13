import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/Hamburger.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
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
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
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
            href="#projects"
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
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#signin"
            className="hidden text-sm font-semibold text-slate-700 sm:block"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
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