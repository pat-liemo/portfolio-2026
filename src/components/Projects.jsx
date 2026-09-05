import { projects } from '../data/content'
import Reveal from './Reveal'

const statusDot = {
  completed: 'bg-accent-400',
  progress: 'bg-amber-400',
}

function ProjectRow({ project, index }) {
  const flip = index % 2 === 1

  return (
    <Reveal delay={index * 60}>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className={flip ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-2 text-xs font-mono tracking-wide text-accent-400 mb-4">
            <span className={`w-2 h-2 rounded-full ${statusDot[project.status]}`} />
            {project.statusLabel.toUpperCase()}
            <span className="text-white/25">· {project.period}</span>
          </div>
          <h3 className="font-display font-normal text-3xl text-white mb-1">{project.title}</h3>
          {project.subtitle && <p className="text-lg text-neutral-300 mb-3">{project.subtitle}</p>}
          <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-md">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-normal text-accent-400 hover:text-accent-500 transition-colors"
            >
              View on GitHub →
            </a>
          )}
        </div>

        <div className={`card p-6 aspect-[4/3] flex items-center justify-center ${flip ? 'lg:order-1' : ''}`}>
          {project.code ? (
            <div className="w-full font-mono text-[13px] leading-6 overflow-x-auto">
              {project.code.map((line, i) => (
                <div
                  key={i}
                  className={line.ok ? 'text-accent-400' : line.c ? 'text-neutral-500' : 'text-neutral-200'}
                >
                  {line.t || ' '}
                </div>
              ))}
            </div>
          ) : (
            <span className="font-display font-normal text-8xl text-white/10">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-5xl mx-auto px-6">
      <Reveal>
        <p className="text-xs font-mono tracking-widest text-accent-400 mb-3">PROJECTS</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-normal text-4xl sm:text-5xl text-white mb-16">
          Things I've built.
        </h2>
      </Reveal>

      <div className="space-y-24">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
