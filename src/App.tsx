import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Build Your Toolkit
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Explore Technologies
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Choose the technologies that match your goals and build a
                powerful development stack.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-60 items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
                  <p className="text-sm font-medium text-slate-500">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stack.some(
                        (item) => item.id === technology.id
                      )}
                      onAdd={addToStack}
                    />
                  ))}
                </div>

                <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Your Stack
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {stack.length}{" "}
                        {stack.length === 1 ? "technology" : "technologies"}{" "}
                        selected
                      </p>
                    </div>

                    {stack.length > 0 && (
                      <button
                        onClick={removeAll}
                        className="text-sm font-semibold text-red-500 transition hover:text-red-700"
                      >
                        Remove All
                      </button>
                    )}
                  </div>

                  {stack.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
                      <p className="font-semibold text-slate-600">
                        Your stack is empty
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Add technologies from the list to start building your
                        stack.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {stack.map((technology) => (
                        <div
                          key={technology.id}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3"
                        >
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-9 w-9 object-contain"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-bold text-slate-800">
                              {technology.name}
                            </p>

                            <p className="text-xs text-slate-400">
                              {technology.category}
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromStack(technology.id)}
                            aria-label={`Remove ${technology.name}`}
                            className="rounded-lg px-2 py-1 text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </aside>
              </div>
            )}
          </div>
        </section>

        <section
          id="projects"
          className="bg-slate-50 px-6 py-20"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
              Build With Confidence
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              From Ideas to Production
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
              A modern development stack helps you create scalable,
              maintainable, and production-ready applications.
            </p>
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              About Dev Stack
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Dev Stack is a simple toolkit builder for developers who want to
              explore popular technologies and create their own personalized
              development stack.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">
              Ready to Build Your Stack?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Explore the technologies, choose your favorites, and start
              planning your next project.
            </p>

            <a
              href="#technologies"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Technologies
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;