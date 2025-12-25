import { useState } from 'react'
import { Link } from 'react-router-dom'

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const terms = [
    { term: 'Wallet', category: 'Fundamentals', def: 'A key manager that signs transactions and holds your accounts. Can be hot (online) or cold (offline).', example: 'MetaMask, Ledger, Trust Wallet' },
    { term: 'Gas', category: 'Fundamentals', def: 'Network fee paid to validators to process your transaction. Higher gas = faster execution.', example: 'Sending ETH costs ~21,000 gas units' },
    { term: 'Slippage', category: 'Trading', def: 'Difference between expected and executed price due to liquidity changes during transaction.', example: '1% slippage means accepting 1% price difference' },
    { term: 'Bridge', category: 'DeFi', def: 'A mechanism to move assets between chains using validators or cryptographic proofs.', example: 'Moving ETH from Ethereum to Polygon' },
    { term: 'DeFi', category: 'DeFi', def: 'Decentralized Finance - financial services built on blockchain without intermediaries.', example: 'Uniswap, Aave, Compound' },
    { term: 'NFT', category: 'NFTs', def: 'Non-Fungible Token - unique digital asset representing ownership of specific items.', example: 'Digital art, collectibles, domain names' },
    { term: 'Smart Contract', category: 'Fundamentals', def: 'Self-executing code on blockchain that automatically runs when conditions are met.', example: 'Automated token swap on Uniswap' },
    { term: 'Seed Phrase', category: 'Security', def: '12-24 word recovery phrase that can restore your entire wallet. Keep it offline and secure!', example: 'abandon ability able about above absent...' },
    { term: 'Private Key', category: 'Security', def: 'Secret cryptographic key that proves ownership and allows spending. Never share it!', example: '0x1234...abcd (64 hex characters)' },
    { term: 'Public Key', category: 'Fundamentals', def: 'Cryptographic key derived from private key, used to generate wallet addresses. Safe to share.', example: 'Used to create your Ethereum address' },
    { term: 'Layer 1 (L1)', category: 'Networks', def: 'Base blockchain network that has its own consensus mechanism and security.', example: 'Ethereum, Bitcoin, Solana' },
    { term: 'Layer 2 (L2)', category: 'Networks', def: 'Secondary network built on top of L1 for faster, cheaper transactions.', example: 'Arbitrum, Optimism, Polygon' },
    { term: 'Staking', category: 'DeFi', def: 'Locking up crypto to help secure a network and earn rewards in return.', example: 'Stake 32 ETH to become Ethereum validator' },
    { term: 'Yield Farming', category: 'DeFi', def: 'Providing liquidity to DeFi protocols in exchange for interest and token rewards.', example: 'Supply USDC to Aave for 5% APY' },
    { term: 'Liquidity Pool', category: 'DeFi', def: 'Collection of tokens locked in a smart contract to facilitate trading on DEXs.', example: 'ETH/USDC pool on Uniswap' },
    { term: 'AMM', category: 'Trading', def: 'Automated Market Maker - algorithm that prices assets in liquidity pools without order books.', example: 'Uniswap uses x*y=k formula' },
    { term: 'DEX', category: 'Trading', def: 'Decentralized Exchange - trade crypto without intermediaries using smart contracts.', example: 'Uniswap, SushiSwap, PancakeSwap' },
    { term: 'CEX', category: 'Trading', def: 'Centralized Exchange - traditional crypto exchange controlled by a company.', example: 'Coinbase, Binance, Kraken' },
    { term: 'Impermanent Loss', category: 'DeFi', def: 'Temporary loss when providing liquidity if token prices change compared to holding.', example: 'Price divergence in ETH/USDC pool' },
    { term: 'DAO', category: 'Governance', def: 'Decentralized Autonomous Organization - community-governed by token holders via voting.', example: 'MakerDAO, Uniswap DAO' },
    { term: 'Minting', category: 'NFTs', def: 'Process of creating a new NFT or token on the blockchain.', example: 'Minting new NFT artwork on OpenSea' },
    { term: 'Gas Limit', category: 'Fundamentals', def: 'Maximum amount of gas you are willing to spend on a transaction.', example: 'Set 50,000 gas limit for token swap' },
    { term: 'Gwei', category: 'Fundamentals', def: 'Denomination of ETH used to measure gas prices (1 Gwei = 0.000000001 ETH).', example: 'Gas price: 30 Gwei' },
    { term: 'Airdrop', category: 'Tokens', def: 'Free distribution of tokens to wallet addresses, often for marketing or community rewards.', example: 'Uniswap airdropped UNI to early users' },
    { term: 'Whitelist', category: 'NFTs', def: 'Approved list of addresses allowed to mint NFTs before public sale.', example: 'Get whitelisted for early NFT access' },
    { term: 'FOMO', category: 'Trading', def: 'Fear Of Missing Out - emotional impulse to buy when price is rapidly rising.', example: 'Buying at peak due to FOMO' },
    { term: 'FUD', category: 'Trading', def: 'Fear, Uncertainty, and Doubt - negative news or sentiment affecting market.', example: 'Regulatory FUD causing price drop' },
    { term: 'HODL', category: 'Trading', def: 'Hold On for Dear Life - strategy of holding crypto long-term despite volatility.', example: 'HODLing Bitcoin since 2015' },
    { term: 'DCA', category: 'Trading', def: 'Dollar-Cost Averaging - investing fixed amounts regularly regardless of price.', example: 'Buy $100 of BTC every week' },
    { term: 'ATH', category: 'Trading', def: 'All-Time High - highest price an asset has ever reached.', example: 'Bitcoin hit ATH of $69k in 2021' }
  ]

  const categories = ['All', 'Fundamentals', 'Trading', 'DeFi', 'NFTs', 'Security', 'Networks', 'Tokens', 'Governance']

  const filteredTerms = terms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.def.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-violet-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-violet-200">📚 Glossary</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">Crypto Terminology</h2>
          <p className="mt-2 text-sm sm:text-lg text-slate-400">Master the language of cryptocurrency with our comprehensive glossary.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-white/20 bg-slate-900/60 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-slate-400 focus:border-violet-400/40 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'border border-white/20 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">{terms.length}</p>
            <p className="text-xs sm:text-sm text-slate-400">Total Terms</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">{categories.length - 1}</p>
            <p className="text-xs sm:text-sm text-slate-400">Categories</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-transparent p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">{filteredTerms.length}</p>
            <p className="text-xs sm:text-sm text-slate-400">Results Found</p>
          </div>
        </div>

        {/* Terms Grid */}
        <dl className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredTerms.map((entry, idx) => (
            <div 
              key={idx} 
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 transition hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <dt className="text-lg sm:text-xl font-semibold text-white group-hover:text-violet-300">{entry.term}</dt>
                <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-200">
                  {entry.category}
                </span>
              </div>
              <dd className="mb-3 text-xs sm:text-sm text-slate-300">{entry.def}</dd>
              {entry.example && (
                <div className="rounded-lg border border-white/10 bg-slate-900/40 p-3">
                  <p className="mb-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-violet-200">Example:</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">{entry.example}</p>
                </div>
              )}
            </div>
          ))}
        </dl>

        {filteredTerms.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-12 text-center">
            <p className="text-xs sm:text-sm text-slate-400">No terms found matching your search.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}
              className="mt-4 text-xs sm:text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-6 sm:p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">Missing a Term?</h3>
          <p className="mb-4 text-xs sm:text-sm text-slate-300">Help us expand this glossary for the community</p>
          <button className="inline-flex rounded-full bg-violet-500 px-6 py-3 min-h-[44px] text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02]">
            Suggest a Term
          </button>
        </div>
      </div>
    </section>
  )
}

export default Glossary
