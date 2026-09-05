export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
        Built by Pat — React, Vite &amp; Tailwind CSS · © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
