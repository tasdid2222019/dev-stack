import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />

          <p className="mt-5 max-w-md leading-7 text-slate-500">
            Curated tools, technologies, and resources for developers building modern softwares.
          </p>

          <div className="mt-6 flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-600 transition hover:text-pink-500"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-600 transition hover:text-pink-500"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-600 transition hover:text-pink-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Product</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
            <a href="#technologies" className="hover:text-pink-500">
              Technologies
            </a>

            <a href="#projects" className="hover:text-pink-500">
              Projects
            </a>

            <a href="#technologies" className="hover:text-pink-500">
              Your Stack
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Company</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
            <a href="#about" className="hover:text-pink-500">
              About
            </a>

            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>

                        <a href="#home" className="hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Legal</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-pink-500">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#terms" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;