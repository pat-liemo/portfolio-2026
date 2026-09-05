const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3', label: 'Internships' },
  { value: '3', label: 'Certifications' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <p className="text-xs font-mono tracking-widest text-accent-400 mb-3">PROFILE</p>
      <h2 className="font-display font-normal text-4xl sm:text-5xl text-white mb-12 max-w-xl">
        Code first, <span className="gradient-text">then everything else.</span>
      </h2>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="card p-8 sm:col-span-2 sm:row-span-2 space-y-4">
          <p className="text-slate-300 leading-relaxed">
            I'm <span className="text-white">Pat Liemo</span>, a Software Developer from Nairobi,
            Kenya, and a Kenyatta University Computer Science graduate currently interning at{' '}
            <span className="text-white">Shopzetu</span>. I work across the stack — React and
            Flask on the web, Kotlin and Jetpack Compose on Android, Swift and ARKit for native
            spatial capture, and Three.js / WebXR when the interface needs to be spatial instead
            of flat.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Three internships — at <span className="text-white">Shopzetu</span>,{' '}
            <span className="text-white">Brance Technologies</span>, and{' '}
            <span className="text-white">Flag 42</span> — taught me what "production-ready"
            actually means: RESTful architecture, indexed queries, code reviews, and shipping in
            sprints rather than in one big leap.
          </p>
        </div>

        {stats.map((s) => (
          <div key={s.label} className="card p-6 flex flex-col justify-center">
            <div className="font-display text-3xl gradient-text mb-1">{s.value}</div>
            <div className="text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
