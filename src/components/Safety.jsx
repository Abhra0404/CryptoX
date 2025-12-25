import { useState } from 'react'
import { Link } from 'react-router-dom'

function Safety() {
  const [checkedItems, setCheckedItems] = useState({})

  const threats = [
    {
      icon: '🎣',
      title: 'Phishing Attacks',
      description: 'Fake websites and emails designed to steal your credentials.',
      severity: 'Critical',
      tips: ['Always verify URLs before connecting wallet', 'Bookmark trusted sites', 'Never click suspicious links', 'Double-check contract addresses']
    },
    {
      icon: '💰',
      title: 'Rug Pulls',
      description: 'Projects that disappear after collecting investor funds.',
      severity: 'High',
      tips: ['Research team and project history', 'Check liquidity lock status', 'Verify smart contract audit', 'Start with small amounts']
    },
    {
      icon: '🔓',
      title: 'Malicious Approvals',
      description: 'Granting unlimited token access to malicious contracts.',
      severity: 'Critical',
      tips: ['Use approval checker tools', 'Revoke old approvals regularly', 'Set spending limits', 'Review transaction details']
    },
    {
      icon: '📱',
      title: 'SIM Swapping',
      description: 'Attackers hijack your phone number to access accounts.',
      severity: 'High',
      tips: ['Use authenticator apps over SMS', 'Contact carrier for extra security', 'Enable PIN/password protection', 'Use separate phone for crypto']
    },
    {
      icon: '🔑',
      title: 'Private Key Theft',
      description: 'Malware or social engineering to steal your private keys.',
      severity: 'Critical',
      tips: ['Never share private keys', 'Use hardware wallet for large amounts', 'Keep seed phrases offline', 'Avoid screenshots of keys']
    },
    {
      icon: '🎭',
      title: 'Social Engineering',
      description: 'Manipulating users into revealing sensitive information.',
      severity: 'High',
      tips: ['Verify identities before sharing info', 'No legitimate support asks for keys', 'Be wary of urgency tactics', 'Join official channels only']
    }
  ]

  const securityChecklist = [
    { id: 1, text: 'Use hardware wallet for significant holdings', category: 'Hardware' },
    { id: 2, text: 'Enable 2FA on all exchange accounts', category: 'Authentication' },
    { id: 3, text: 'Store seed phrases offline in multiple secure locations', category: 'Backup' },
    { id: 4, text: 'Never share private keys or seed phrases with anyone', category: 'Keys' },
    { id: 5, text: 'Verify contract addresses on multiple sources', category: 'Verification' },
    { id: 6, text: 'Use separate device/browser for crypto activities', category: 'Isolation' },
    { id: 7, text: 'Regularly revoke token approvals', category: 'Permissions' },
    { id: 8, text: 'Install reputable antivirus and keep it updated', category: 'Software' },
    { id: 9, text: 'Bookmark trusted crypto websites', category: 'Browsing' },
    { id: 10, text: 'Test with small amounts first', category: 'Practice' },
    { id: 11, text: 'Keep wallet software updated', category: 'Updates' },
    { id: 12, text: 'Use VPN on public networks', category: 'Network' }
  ]

  const bestPractices = [
    {
      title: 'Cold Storage',
      description: 'Keep majority of funds in offline hardware wallets',
      icon: '🧊'
    },
    {
      title: 'Hot Wallet Hygiene',
      description: 'Only keep trading amounts in hot wallets',
      icon: '🔥'
    },
    {
      title: 'Multi-Sig Wallets',
      description: 'Require multiple approvals for large transactions',
      icon: '🔐'
    },
    {
      title: 'Regular Audits',
      description: 'Review wallet activity and approvals monthly',
      icon: '📊'
    }
  ]

  const getSeverityColor = (severity) => {
    const colors = {
      'Critical': 'bg-red-500/20 text-red-200 border-red-500/30',
      'High': 'bg-orange-500/20 text-orange-200 border-orange-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30'
    }
    return colors[severity] || 'bg-slate-500/20 text-slate-200'
  }

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-amber-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-amber-200">🛡️ Safety first</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">Keep Your Crypto Secure</h2>
          <p className="mt-2 text-sm sm:text-lg text-slate-400">Protect your assets with battle-tested security practices.</p>
        </div>

        {/* Security Score */}
        <div className="mb-6 sm:mb-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Your Security Score</h3>
            <span className="text-3xl font-bold text-amber-300">{Math.round((checkedCount / securityChecklist.length) * 100)}%</span>
          </div>
          <div className="h-3 rounded-full bg-slate-800">
            <div 
              className="h-3 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${(checkedCount / securityChecklist.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-slate-400">{checkedCount} of {securityChecklist.length} security measures completed</p>
        </div>

        {/* Common Threats */}
        <div className="mb-10 sm:mb-12">
          <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">Common Threats</h3>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {threats.map((threat, idx) => (
              <article 
                key={idx}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 transition hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="mb-4 flex items-start justify-between gap-2">
                  <span className="text-3xl sm:text-4xl">{threat.icon}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>
                <h4 className="mb-2 text-base sm:text-lg font-semibold text-white group-hover:text-amber-300">{threat.title}</h4>
                <p className="mb-4 text-xs sm:text-sm text-slate-300">{threat.description}</p>
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">Protection Tips:</p>
                  {threat.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="mt-0.5 text-emerald-400">✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Security Checklist */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-white">Security Checklist</h3>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {securityChecklist.map((item) => (
                <label 
                  key={item.id}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-3 sm:p-4 min-h-[44px] transition hover:border-emerald-400/40 hover:bg-slate-900/60"
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[item.id] || false}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-0.5 h-6 w-6 cursor-pointer rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  />
                  <div className="flex-1">
                    <p className={`text-xs sm:text-sm font-medium ${checkedItems[item.id] ? 'text-slate-400 line-through' : 'text-white'}`}>
                      {item.text}
                    </p>
                    <span className="text-[11px] sm:text-xs text-slate-500">{item.category}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">Best Practices</h3>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bestPractices.map((practice, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 sm:p-6 text-center transition hover:border-emerald-400/40"
              >
                <div className="mb-3 text-3xl sm:text-4xl">{practice.icon}</div>
                <h4 className="mb-2 text-sm sm:text-base font-semibold text-white">{practice.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-4 sm:p-6">
          <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
            🚨 Been Compromised?
          </h3>
          <p className="mb-4 text-xs sm:text-sm text-slate-300">Act immediately to minimize losses:</p>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-400">
            <li className="flex gap-2"><span className="font-bold text-red-400">1.</span> Transfer remaining funds to a new secure wallet</li>
            <li className="flex gap-2"><span className="font-bold text-red-400">2.</span> Revoke all token approvals on compromised wallet</li>
            <li className="flex gap-2"><span className="font-bold text-red-400">3.</span> Change passwords on all related accounts</li>
            <li className="flex gap-2"><span className="font-bold text-red-400">4.</span> Report to exchange/platform support immediately</li>
            <li className="flex gap-2"><span className="font-bold text-red-400">5.</span> Document everything for potential recovery/legal action</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Safety
