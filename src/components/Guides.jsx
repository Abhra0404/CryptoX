import { Link } from 'react-router-dom'
import { useState } from 'react'

function Guides() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const guides = [
    {
      title: 'Create Your First Wallet',
      length: '8 min',
      difficulty: 'Beginner',
      category: 'Getting Started',
      copy: 'Step-by-step guide to creating a secure crypto wallet and backing up your seed phrase.',
      steps: 5,
      icon: '👛'
    },
    {
      title: 'Buy Your First Crypto',
      length: '10 min',
      difficulty: 'Beginner',
      category: 'Getting Started',
      copy: 'Learn how to purchase cryptocurrency safely using exchanges and payment methods.',
      steps: 6,
      icon: '💳'
    },
    {
      title: 'Send and Receive Crypto',
      length: '7 min',
      difficulty: 'Beginner',
      category: 'Transactions',
      copy: 'Master the basics of transferring cryptocurrency between wallets securely.',
      steps: 4,
      icon: '↔️'
    },
    {
      title: 'Bridge Assets Between Chains',
      length: '12 min',
      difficulty: 'Intermediate',
      category: 'DeFi',
      copy: 'Route assets across chains while avoiding common traps and minimizing fees.',
      steps: 7,
      icon: '🌉'
    },
    {
      title: 'Stake Tokens for Rewards',
      length: '15 min',
      difficulty: 'Intermediate',
      category: 'DeFi',
      copy: 'Learn how to stake your tokens and earn passive income through various protocols.',
      steps: 8,
      icon: '🎯'
    },
    {
      title: 'Provide Liquidity on DEX',
      length: '18 min',
      difficulty: 'Advanced',
      category: 'DeFi',
      copy: 'Become a liquidity provider and understand impermanent loss and yield strategies.',
      steps: 9,
      icon: '💧'
    },
    {
      title: 'Set Up Hardware Wallet',
      length: '20 min',
      difficulty: 'Intermediate',
      category: 'Security',
      copy: 'Complete guide to setting up and using a hardware wallet for maximum security.',
      steps: 10,
      icon: '🔐'
    },
    {
      title: 'Revoke Token Approvals',
      length: '5 min',
      difficulty: 'Beginner',
      category: 'Security',
      copy: 'Protect your assets by revoking unnecessary token approvals from smart contracts.',
      steps: 3,
      icon: '🔓'
    },
    {
      title: 'Automate DCA Strategy',
      length: '14 min',
      difficulty: 'Advanced',
      category: 'Trading',
      copy: 'Set up automated dollar-cost averaging to invest consistently over time.',
      steps: 8,
      icon: '📊'
    },
    {
      title: 'Mint Your First NFT',
      length: '16 min',
      difficulty: 'Intermediate',
      category: 'NFTs',
      copy: 'Create and mint your own NFT on popular marketplaces and platforms.',
      steps: 7,
      icon: '🎨'
    },
    {
      title: 'Set Stop-Loss Orders',
      length: '11 min',
      difficulty: 'Intermediate',
      category: 'Trading',
      copy: 'Protect your investments with automated stop-loss and take-profit orders.',
      steps: 6,
      icon: '⚡'
    },
    {
      title: 'Recover Lost Wallet Access',
      length: '9 min',
      difficulty: 'Beginner',
      category: 'Security',
      copy: 'Learn the process to recover your wallet using seed phrases and backup methods.',
      steps: 5,
      icon: '🔄'
    }
  ]

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const filteredGuides = selectedDifficulty === 'All' 
    ? guides 
    : guides.filter(g => g.difficulty === selectedDifficulty)

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-blue-500/20 text-blue-200',
      'Intermediate': 'bg-yellow-500/20 text-yellow-200',
      'Advanced': 'bg-purple-500/20 text-purple-200'
    }
    return colors[difficulty] || 'bg-slate-500/20 text-slate-200'
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-sky-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-200">📖 Guided paths</p>
          <h2 className="mt-2 text-4xl font-bold">Step-by-Step Guides</h2>
          <p className="mt-2 text-lg text-slate-400">Follow detailed walkthroughs to master crypto operations safely.</p>
        </div>

        {/* Difficulty Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedDifficulty === diff
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'border border-white/20 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">{guides.length}</p>
            <p className="text-sm text-slate-400">Total Guides</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">4</p>
            <p className="text-sm text-slate-400">Categories</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-400">Free Access</p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide, idx) => (
            <article 
              key={idx}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-4xl">{guide.icon}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>
              <p className="mb-2 text-xs uppercase tracking-wider text-sky-200">{guide.category}</p>
              <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-sky-300">{guide.title}</h3>
              <p className="mb-4 text-sm text-slate-300">{guide.copy}</p>
              <div className="mb-4 flex items-center gap-4 text-xs text-slate-400">
                <span>⏱️ {guide.length}</span>
                <span>📝 {guide.steps} steps</span>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300">
                Start guide
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400">No guides found for this difficulty level.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-transparent p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">Need Help?</h3>
          <p className="mb-4 text-slate-300">Join our community or test your knowledge</p>
          <Link to="/quiz" className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]">
            Take the Quiz
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Guides
