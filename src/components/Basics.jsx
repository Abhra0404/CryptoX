import basicsContent from '../data/basicsContent'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Basics() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [headerRef, headerVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  
  const categories = ['All', 'Foundations', 'Networks', 'Trading', 'Security', 'DeFi', 'NFTs']
  
  const filteredContent = selectedCategory === 'All' 
    ? basicsContent 
    : basicsContent.filter(item => item.category === selectedCategory)

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-blue-500/20 text-blue-200',
      'Intermediate': 'bg-yellow-500/20 text-yellow-200',
      'Advanced': 'bg-purple-500/20 text-purple-200',
      'Essential': 'bg-emerald-500/20 text-emerald-200'
    }
    return colors[difficulty] || 'bg-slate-500/20 text-slate-200'
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.16em] text-emerald-200">Start here</p>
          <h2 className="mt-2 text-4xl font-bold">Crypto Basics</h2>
          <p className="mt-2 text-lg text-slate-400">Master the fundamentals with our comprehensive lessons.</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'border border-white/20 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">{basicsContent.length}</p>
            <p className="text-sm text-slate-400">Total Lessons</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">{categories.length - 1}</p>
            <p className="text-sm text-slate-400">Categories</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">Free</p>
            <p className="text-sm text-slate-400">Forever</p>
          </div>
        </div>

        {/* Lessons Grid */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2">
          {filteredContent.map((item, idx) => (
            <article 
              key={idx} 
              className={`group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="mb-3 flex items-start justify-between">
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-200">{item.category}</p>
                <div className="flex gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                    {item.readTime}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-emerald-300">{item.title}</h3>
              <p className="mb-4 text-sm text-slate-300">{item.summary}</p>
              <ul className="mb-4 list-disc space-y-1 pl-4 text-xs text-slate-400">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className="mt-2 flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300">
                Read lesson
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </article>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400">No lessons found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Basics
