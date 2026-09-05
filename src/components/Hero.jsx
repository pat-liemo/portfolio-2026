import ScrambleText from './ScrambleText'

const stack = ['React', 'Flask', 'Kotlin', 'Swift', 'Three.js', 'WebXR', 'FastAPI', 'PostgreSQL']

export default function Hero() {
  return (
    <section id="top" className="relative pt-48 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-gradient-to-br from-accent-500/20 to-accent-300/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <p className="text-xs font-mono tracking-[0.3em] text-accent-400 mb-6">
          OPEN TO SOFTWARE DEVELOPER ROLES · NAIROBI, KENYA
        </p>

        <h1 className="font-display font-normal text-6xl sm:text-7xl leading-[0.95] tracking-tight">
          <ScrambleText
            text="Pat "
            className="text-white"
            startDelay={500}
            revealStep={180}
            scrambleTick={70}
            loop
            pauseDuration={3500}
          />
          <ScrambleText
            text="Liemo"
            className="gradient-text"
            startDelay={1220}
            revealStep={180}
            scrambleTick={70}
            loop
            pauseDuration={3500}
          />
        </h1>

        <p className="mt-8 max-w-lg text-lg text-slate-400 leading-relaxed">
          <span className="text-white">Software Developer</span> building full-stack, mobile,
          and spatial-computing products — with a habit of turning ideas into working, documented
          code.
        </p>

        <p className="mt-5 text-sm text-slate-500">
          BSc Computer Science, Kenyatta University · Currently at Shopzetu
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-accent-300 to-accent-500 px-7 py-3 text-sm font-normal text-ink-950 hover:opacity-90 transition-opacity"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-normal text-white hover:border-white/30 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-t border-white/5 pt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-14 animate-marquee whitespace-nowrap text-2xl font-display text-white/10">
          {[...stack, ...stack].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
