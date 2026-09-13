import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/50 bg-white/55 p-6 shadow-[0_8px_30px_-10px_rgba(59,130,246,0.25)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.35)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
        <div className="flex items-center gap-1">
          <span className="text-lg text-yellow-400">★</span>

          <span className="text-sm font-bold text-slate-700">
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
            isAdded
              ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;