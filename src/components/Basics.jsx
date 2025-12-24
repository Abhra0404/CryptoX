import basicsContent from '../data/basicsContent'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Basics() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [headerRef, headerVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [selectedLesson, setSelectedLesson] = useState(null)
  
  const openLesson = (lesson) => {
    setSelectedLesson(lesson)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }
  
  const closeLesson = () => {
    setSelectedLesson(null)
    document.body.style.overflow = 'auto' // Restore scroll
  }
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedLesson) {
        closeLesson()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedLesson])
  
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
    <>
      <section className={`min-h-screen bg-slate-950 px-6 py-14 text-slate-100 transition-all duration-300 ${selectedLesson ? 'blur-sm' : ''}`}>
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
          {filteredContent.map((item, idx) => {
            return (
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
                <button 
                  onClick={() => openLesson(item)}
                  className="mt-2 flex cursor-pointer items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                >
                  Read full lesson
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </article>
            )
          })}
        </div>

        {filteredContent.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400">No lessons found in this category.</p>
          </div>
        )}
      </div>
    </section>

    {/* Full Page Modal */}
    {selectedLesson && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeLesson}
        ></div>

        {/* Modal Content */}
        <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-slate-900 shadow-2xl shadow-emerald-500/20 animate-slideUp">
          {/* Header */}
          <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/95 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-200">{selectedLesson.category}</p>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{selectedLesson.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{selectedLesson.summary}</p>
              </div>
              <button 
                onClick={closeLesson}
                className="ml-4 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-300 transition hover:border-white/20 hover:bg-slate-800 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyColor(selectedLesson.difficulty)}`}>
                {selectedLesson.difficulty}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {selectedLesson.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 px-6 py-8 md:px-8">
            {/* Description */}
            <div className="rounded-xl border border-white/5 bg-slate-800/40 p-6">
              <p className="leading-relaxed text-slate-200">{selectedLesson.description}</p>
            </div>

            {/* Key Points */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Points
              </h3>
              <ul className="space-y-3">
                {selectedLesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Example */}
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-cyan-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Example
              </h3>
              <p className="leading-relaxed text-cyan-100">{selectedLesson.example}</p>
            </div>

            {/* Takeaway */}
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-950/20 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-yellow-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Key Takeaway
              </h3>
              <p className="font-medium leading-relaxed text-yellow-100">{selectedLesson.takeaway}</p>
            </div>

            {/* Close Button */}
            <button 
              onClick={closeLesson}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800/60 py-4 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-slate-800"
            >
              <span>Close Lesson</span>
              <span className="text-lg">✕</span>
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Basics
