import { journey } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" className="py-28 max-w-5xl mx-auto px-6">
      <p className="text-xs font-mono tracking-widest text-accent-400 mb-3">TIMELINE</p>
      <h2 className="font-display font-normal text-4xl sm:text-5xl text-white mb-16">
        The road so far.
      </h2>

      <div className="space-y-5">
        {journey.map((j) => (
          <div
            key={j.year}
            className="card relative overflow-hidden p-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center"
          >
            <div className="relative z-10">
              <p className="text-xs font-mono text-accent-400 mb-2">{j.year}</p>
              <h3 className="font-display text-xl text-white mb-2">{j.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg">{j.desc}</p>
            </div>
            <span className="hidden sm:block font-display font-normal text-7xl gradient-text opacity-[0.15] leading-none select-none">
              {j.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
