import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span
              className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent"
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options compare them side by side,
             and put together the stack that fits your next project. 
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 font-bold text-white shadow-lg shadow-pink-100 transition hover:-translate-y-0.5"
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
          <img
            src={banner}
            alt="Development technology stack"
            className="mx-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;