import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 text-slate-100" id="hero">
        <div className="pointer-events-none absolute inset-x-0 top-[-20%] h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%)] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.1),_transparent_50%)] blur-2xl" aria-hidden />
        
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-100 ring-1 ring-emerald-500/30">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              🚀 Join 50,000+ crypto learners
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Master Crypto
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                From Zero to Hero
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-300">
              Learn blockchain fundamentals, stay safe from scams, trade with confidence, and build your crypto portfolio with expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="group rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/50 transition hover:scale-[1.02] hover:shadow-emerald-500/70" to="/basics">
                Start Learning Free
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10" to="/quiz">
                Test Your Knowledge
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">50K+</p>
                <p className="text-sm text-slate-400">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-slate-400">Lessons</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-slate-400">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
                  Learning Paths
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">Live</span>
              </div>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-emerald-500/40 hover:bg-slate-900/80">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-white">🎯 Foundations</p>
                    <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-200">Beginner</span>
                  </div>
                  <p className="text-slate-300">Wallets, keys, networks, and blockchain basics</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[75%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-emerald-500/40 hover:bg-slate-900/80">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-white">🛡️ Security</p>
                    <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-200">Essential</span>
                  </div>
                  <p className="text-slate-300">Protect yourself from scams and threats</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[45%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-emerald-500/40 hover:bg-slate-900/80">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-white">📈 Trading</p>
                    <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-200">Advanced</span>
                  </div>
                  <p className="text-slate-300">DeFi, NFTs, and advanced strategies</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[20%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-emerald-200">Why Choose CryptoX</p>
            <h2 className="mt-2 text-4xl font-bold text-white">Everything You Need to Succeed</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/5 to-transparent p-6 transition hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl ring-1 ring-emerald-500/30">
                📚
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Comprehensive Lessons</h3>
              <p className="text-slate-300">From blockchain basics to advanced DeFi strategies, we cover it all.</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-6 transition hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl ring-1 ring-cyan-500/30">
                🎯
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Interactive Quizzes</h3>
              <p className="text-slate-300">Test your knowledge with engaging quizzes and track your progress.</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-transparent p-6 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl ring-1 ring-blue-500/30">
                🔒
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Security First</h3>
              <p className="text-slate-300">Learn to protect your assets with battle-tested security practices.</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-transparent p-6 transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl ring-1 ring-purple-500/30">
                📊
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Live Market Data</h3>
              <p className="text-slate-300">Real-time crypto prices and market analysis at your fingertips.</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/5 to-transparent p-6 transition hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-2xl ring-1 ring-pink-500/30">
                🎓
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Expert Guidance</h3>
              <p className="text-slate-300">Learn from industry professionals with years of experience.</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/5 to-transparent p-6 transition hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-2xl ring-1 ring-orange-500/30">
                🌐
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Community Support</h3>
              <p className="text-slate-300">Join a thriving community of learners and crypto enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-900/50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-emerald-200">Success Stories</p>
            <h2 className="mt-2 text-4xl font-bold text-white">Loved by Thousands</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="mb-4 text-slate-300">"CryptoX transformed my understanding of blockchain. The security lessons alone saved me from potential scams!"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 font-semibold text-emerald-300">
                  S
                </div>
                <div>
                  <p className="font-semibold text-white">Sarah Chen</p>
                  <p className="text-sm text-slate-400">Crypto Investor</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="mb-4 text-slate-300">"Best crypto education platform! Clear explanations, practical examples, and the quiz feature helps reinforce learning."</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 font-semibold text-cyan-300">
                  M
                </div>
                <div>
                  <p className="font-semibold text-white">Marcus Rodriguez</p>
                  <p className="text-sm text-slate-400">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="mb-4 text-slate-300">"Went from complete beginner to confidently trading crypto in 3 months. The guides are incredibly detailed and easy to follow."</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-300">
                  E
                </div>
                <div>
                  <p className="font-semibold text-white">Emily Parker</p>
                  <p className="text-sm text-slate-400">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-blue-500/10 p-12 text-center shadow-2xl shadow-emerald-500/20">
          <h2 className="mb-4 text-4xl font-bold text-white">Ready to Start Your Crypto Journey?</h2>
          <p className="mb-8 text-xl text-slate-300">Join thousands of learners mastering crypto today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-white/30 transition hover:scale-[1.02]" to="/basics">
              Get Started Free
            </Link>
            <Link className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-white/50" to="/guides">
              View All Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
