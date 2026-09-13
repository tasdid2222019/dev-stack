function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="./assets/logo-text.png"
            alt="Dev Stack"
            className="h-8"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <a href="#signin">Sign In</a>
          <a
            href="#signup"
            className="rounded-lg bg-black px-5 py-2 text-white"
          >
            Sign Up
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;