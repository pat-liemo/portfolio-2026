const links = [
  {
    label: 'Email',
    href: 'mailto:aloopat51@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" />
        <path d="m4 6 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pat-liemo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.24 9.24 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pat-aloo/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM21 21v-6.8c0-3.64-1.94-5.33-4.53-5.33-2.09 0-3.02 1.15-3.54 1.96V8.5H9.55c.04.98 0 12.5 0 12.5h3.38v-6.98c0-.37.03-.75.14-1.02.3-.75.99-1.53 2.14-1.53 1.51 0 2.12 1.15 2.12 2.84V21H21Z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-gradient-to-br from-accent-500/20 to-accent-300/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-mono tracking-widest text-accent-400 mb-3">CONTACT</p>
        <h2 className="font-display font-normal text-4xl sm:text-5xl text-white mb-5">
          Let's build something.
        </h2>

        <p className="max-w-lg mx-auto text-slate-400 leading-relaxed mb-12">
          I'm looking for software developer roles and always up for talking through an
          interesting problem, a full-stack idea, or a spatial-computing rabbit hole.
        </p>

        <div className="flex justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              title={l.label}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 transition-all duration-300 ease-apple hover:text-accent-400 hover:border-accent-500/40 hover:bg-accent-500/10 hover:-translate-y-1"
            >
              <span className="w-5 h-5">{l.icon}</span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs font-mono tracking-widest text-slate-600">
          EMAIL · GITHUB · LINKEDIN
        </p>
      </div>
    </section>
  )
}
