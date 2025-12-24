import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Basics', path: '/basics' },
    { name: 'Safety', path: '/safety' },
    { name: 'Guides', path: '/guides' },
    { name: 'Prices', path: '/prices' },
    { name: 'Glossary', path: '/glossary' },
    { name: 'Quiz', path: '/quiz', isQuiz: true }
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button - Left Side */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 transition hover:opacity-80" onClick={() => setIsOpen(false)}>
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
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-xl sm:text-2xl font-bold leading-tight tracking-tight text-transparent">CryptoX</span>
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-slate-500">Learn & Earn</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => 
            item.isQuiz ? (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `rounded-full px-3 py-1 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-400/40 transition ${
                  isActive ? 'bg-emerald-400 text-slate-950 scale-[1.02]' : 'bg-emerald-400/70 text-slate-950 hover:scale-[1.02] hover:bg-emerald-400'
                }`}
              >
                {item.name}
              </NavLink>
            ) : (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `transition hover:text-white ${isActive ? 'text-white font-semibold' : ''}`}
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t border-white/10 bg-slate-900/50 backdrop-blur px-6 py-4 lg:hidden animate-fadeInDown">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => 
              item.isQuiz ? (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    isActive 
                      ? 'bg-emerald-400 text-slate-950' 
                      : 'bg-emerald-400/70 text-slate-950 hover:bg-emerald-400'
                  }`}
                >
                  {item.name}
                </NavLink>
              ) : (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `px-4 py-2.5 rounded-lg transition ${
                    isActive 
                      ? 'bg-white/10 text-white font-semibold' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
