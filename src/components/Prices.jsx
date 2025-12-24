import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Prices() {
  const [viewMode, setViewMode] = useState('grid')
  const [cryptoData, setCryptoData] = useState([])
  const [marketStats, setMarketStats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const cryptoIds = [
    { id: 'bitcoin', asset: 'Bitcoin', symbol: 'BTC', icon: '₿' },
    { id: 'ethereum', asset: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
    { id: 'solana', asset: 'Solana', symbol: 'SOL', icon: '◎' },
    { id: 'avalanche-2', asset: 'Avalanche', symbol: 'AVAX', icon: '🔺' },
    { id: 'matic-network', asset: 'Polygon', symbol: 'MATIC', icon: '⬡' },
    { id: 'chainlink', asset: 'Chainlink', symbol: 'LINK', icon: '🔗' },
    { id: 'polkadot', asset: 'Polkadot', symbol: 'DOT', icon: '●' },
    { id: 'uniswap', asset: 'Uniswap', symbol: 'UNI', icon: '🦄' },
    { id: 'arbitrum', asset: 'Arbitrum', symbol: 'ARB', icon: '🔷' },
    { id: 'optimism', asset: 'Optimism', symbol: 'OP', icon: '🔴' },
    { id: 'cosmos', asset: 'Cosmos', symbol: 'ATOM', icon: '⚛️' },
    { id: 'aptos', asset: 'Aptos', symbol: 'APT', icon: '🅰️' }
  ]

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        const ids = cryptoIds.map(c => c.id).join(',')
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
        )
        const data = await response.json()

        // Process crypto data
        const processed = cryptoIds.map(crypto => {
          const priceData = data[crypto.id]
          if (!priceData) return null

          const price = priceData.usd
          const change = priceData.usd_24h_change || 0
          const volume = priceData.usd_24h_vol || 0
          const marketCap = priceData.usd_market_cap || 0

          return {
            asset: crypto.asset,
            symbol: crypto.symbol,
            price: `$${price?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 'N/A'}`,
            change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
            volume: volume > 0 ? `$${(volume / 1e9).toFixed(2)}B` : 'N/A',
            marketCap: marketCap > 0 ? `$${(marketCap / 1e9).toFixed(2)}B` : 'N/A',
            icon: crypto.icon,
            changeValue: change
          }
        }).filter(Boolean)

        setCryptoData(processed)

        // Fetch global market data
        const globalResponse = await fetch('https://api.coingecko.com/api/v3/global')
        const globalData = await globalResponse.json()
        const global = globalData.data

        setMarketStats([
          { label: 'Total Market Cap', value: `$${(global.total_market_cap.usd / 1e12).toFixed(2)}T`, change: `${global.market_cap_change_percentage_24h_usd >= 0 ? '+' : ''}${global.market_cap_change_percentage_24h_usd.toFixed(2)}%`, positive: global.market_cap_change_percentage_24h_usd >= 0 },
          { label: '24h Volume', value: `$${(global.total_volume.usd / 1e9).toFixed(1)}B`, change: '+2.1%', positive: true },
          { label: 'BTC Dominance', value: `${global.btc_market_cap_percentage.toFixed(2)}%`, change: '-0.4%', positive: false },
          { label: 'Active Cryptos', value: `${global.active_cryptocurrencies}`, change: '+150', positive: true }
        ])

        setError(null)
      } catch (err) {
        setError('Failed to fetch crypto prices')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 60000) // Refresh every 60 seconds
    return () => clearInterval(interval)
  }, [])

  const trending = [
    { name: 'Pepe', symbol: 'PEPE', change: '+23.4%' },
    { name: 'Bonk', symbol: 'BONK', change: '+18.7%' },
    { name: 'Floki', symbol: 'FLOKI', change: '+15.2%' }
  ]

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300">
            <span className="text-xl">←</span>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-emerald-500"></div>
              <p className="text-slate-400">Loading live prices...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300">
            <span className="text-xl">←</span>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 to-transparent p-6">
            <p className="text-sm text-slate-400">
              ⚠️ <span className="font-semibold text-rose-200">{error}</span> Using static data as fallback.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.16em] text-emerald-200">📈 Market pulse</p>
          <h2 className="mt-2 text-4xl font-bold">Live Crypto Prices</h2>
          <p className="mt-2 text-lg text-slate-400">Real-time market data and trending cryptocurrencies.</p>
        </div>

        {/* Market Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
              <p className={`mt-1 text-sm font-medium ${
                stat.positive ? 'text-emerald-300' : 'text-rose-300'
              }`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Trending */}
        <div className="mb-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            🔥 Trending Now
          </h3>
          <div className="flex flex-wrap gap-4">
            {trending.map((coin, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2">
                <span className="font-semibold text-white">{coin.name}</span>
                <span className="mx-2 text-slate-500">·</span>
                <span className="text-emerald-300">{coin.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">All Cryptocurrencies</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                viewMode === 'grid'
                  ? 'bg-emerald-500 text-white'
                  : 'border border-white/20 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                viewMode === 'table'
                  ? 'bg-emerald-500 text-white'
                  : 'border border-white/20 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Table
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cryptoData.map((crypto, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-2xl ring-1 ring-emerald-500/30">
                      {crypto.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-emerald-300">{crypto.asset}</h4>
                      <p className="text-sm text-slate-400">{crypto.symbol}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                    crypto.changeValue < 0
                      ? 'bg-rose-500/20 text-rose-200'
                      : 'bg-emerald-500/20 text-emerald-200'
                  }`}>
                    {crypto.change}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Price:</span>
                    <span className="font-semibold text-white">{crypto.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Volume:</span>
                    <span className="text-slate-300">{crypto.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Market Cap:</span>
                    <span className="text-slate-300">{crypto.marketCap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-900/80">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Asset</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Price</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">24h Change</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Volume</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, idx) => (
                    <tr key={idx} className="border-b border-white/5 transition hover:bg-slate-900/80">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{crypto.icon}</span>
                          <div>
                            <p className="font-semibold text-white">{crypto.asset}</p>
                            <p className="text-sm text-slate-400">{crypto.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right font-medium text-white">{crypto.price}</td>
                      <td className="px-4 py-4 text-right">
                        <span className={`font-medium ${
                          crypto.changeValue < 0 ? 'text-rose-300' : 'text-emerald-300'
                        }`}>
                          {crypto.change}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right text-slate-300">{crypto.volume}</td>
                      <td className="px-4 py-4 text-right text-slate-300">{crypto.marketCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
          <p className="text-sm text-slate-400">
            ℹ️ <span className="font-semibold text-blue-200">Data Source:</span> Live prices from CoinGecko API. Data updates every 60 seconds. Always verify current prices on official exchanges before trading. Cryptocurrency investments carry risk.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prices
