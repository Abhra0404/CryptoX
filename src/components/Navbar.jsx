import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3 transition hover:opacity-80">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 opacity-20 blur-xl transition group-hover:opacity-30"></div>
            <div className="relative flex h-full w-full items-center justify-center rounded-xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-sm">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#grad1)" opacity="0.9"/>
                <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="url(#grad2)" opacity="0.7"/>
                <path d="M2 12L12 17L22 12V7L12 12L2 7V12Z" fill="url(#grad3)" opacity="0.8"/>
                <defs>
                  <linearGradient id="grad1" x1="2" y1="2" x2="22" y2="12">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="grad2" x1="2" y1="12" x2="22" y2="22">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                  <linearGradient id="grad3" x1="2" y1="7" x2="22" y2="17">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold leading-tight tracking-tight text-transparent">CryptoX</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">Learn & Earn</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <NavLink to="/basics" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Basics</NavLink>
          <NavLink to="/safety" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Safety</NavLink>
          <NavLink to="/guides" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Guides</NavLink>
          <NavLink to="/prices" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Prices</NavLink>
          <NavLink to="/glossary" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white'}>Glossary</NavLink>
          <NavLink to="/quiz" className={({ isActive }) => 'rounded-full bg-emerald-400 px-3 py-1 text-slate-950 font-semibold shadow-lg shadow-emerald-400/40 hover:scale-[1.02] ' + (isActive ? 'scale-[1.02]' : '')}>Quiz</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
