const links = [
  { label: 'Profile', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="card pointer-events-auto flex items-center gap-1 px-2 py-2">
        <a href="#top" className="font-display text-sm text-white px-3 py-1.5">
          Pat<span className="gradient-text">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-px h-5 bg-white/10 mx-1" />
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-xs uppercase tracking-wide text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
