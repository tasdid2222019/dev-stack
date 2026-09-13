import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
            Build Your Developer Toolkit
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your
            <span
              className="ml-2 bg-[var(--gradient-primary)] bg-clip-text text-transparent"
            >
              Perfect Dev Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Discover modern development technologies, compare your options,
            and build a personalized stack for your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 font-bold text-white shadow-lg shadow-pink-100 transition hover:-translate-y-0.5"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-slate-700 transition hover:border-slate-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <img
              src={banner}
              alt="Development technology stack"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;