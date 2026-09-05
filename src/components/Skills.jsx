import { useState } from 'react'
import { skills } from '../data/content'

export default function Skills() {
  const [active, setActive] = useState(0)
  const current = skills[active]

  return (
    <section id="skills" className="py-28 max-w-5xl mx-auto px-6">
      <p className="text-xs font-mono tracking-widest text-accent-400 mb-3">STACK</p>
      <h2 className="font-display font-normal text-4xl sm:text-5xl text-white mb-12">
        What I work with.
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm transition-colors duration-300 ${
              i === active
                ? 'bg-gradient-to-r from-accent-300 to-accent-500 text-ink-950'
                : 'card text-slate-400 hover:text-white'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="card p-8">
        <p className="text-slate-300 mb-6 max-w-xl">{current.desc}</p>
        <div className="flex flex-wrap gap-2">
          {current.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
