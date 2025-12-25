import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Guides() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedGuide, setSelectedGuide] = useState(null)
  
  const openGuide = (guide) => {
    setSelectedGuide(guide)
    document.body.style.overflow = 'hidden'
  }
  
  const closeGuide = () => {
    setSelectedGuide(null)
    document.body.style.overflow = 'auto'
  }
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedGuide) {
        closeGuide()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedGuide])

  const guides = [
    {
      title: 'Create Your First Wallet',
      length: '8 min',
      difficulty: 'Beginner',
      category: 'Getting Started',
      copy: 'Step-by-step guide to creating a secure crypto wallet and backing up your seed phrase.',
      description: 'Your crypto wallet is the foundation of your blockchain journey. This comprehensive guide walks you through selecting the right wallet type, setting it up securely, and most importantly—backing up your seed phrase properly. Without a wallet, you can\'t interact with blockchain applications, hold assets, or participate in DeFi. We\'ll cover both software wallets (MetaMask, Trust Wallet) and introduce hardware options for when you\'re ready.',
      steps: [
        {
          number: 1,
          title: 'Choose your wallet type',
          detail: 'Decide between browser extension (MetaMask), mobile app (Trust Wallet), or desktop wallet based on your needs. Browser wallets are best for DeFi, mobile wallets for convenience.'
        },
        {
          number: 2,
          title: 'Download from official source',
          detail: 'Only download from official websites or app stores. Verify URLs carefully—phishing sites are common. For MetaMask: metamask.io (not .com or .net).'
        },
        {
          number: 3,
          title: 'Create a new wallet',
          detail: 'Click "Create a new wallet" and set a strong password. This password encrypts your wallet locally—it\'s different from your seed phrase.'
        },
        {
          number: 4,
          title: 'Backup your seed phrase',
          detail: 'Write down all 12 or 24 words in order on paper. NEVER screenshot, type into notes apps, or store digitally. This phrase can recover your wallet on any device.'
        },
        {
          number: 5,
          title: 'Verify and test',
          detail: 'Confirm your seed phrase by selecting words in correct order. Send a small test transaction to verify everything works before transferring significant funds.'
        }
      ],
      tips: [
        'Store multiple copies of your seed phrase in secure, separate locations',
        'Never share your seed phrase with anyone—no support staff will ever ask for it',
        'Consider a hardware wallet once you hold more than $1,000 in crypto',
        'Write seed phrases on metal plates for fire/water resistance'
      ],
      warning: 'Your seed phrase is the ONLY way to recover your wallet. If you lose it and your device, your crypto is gone forever. No customer support can help.',
      icon: '👛'
    },
    {
      title: 'Buy Your First Crypto',
      length: '10 min',
      difficulty: 'Beginner',
      category: 'Getting Started',
      copy: 'Learn how to purchase cryptocurrency safely using exchanges and payment methods.',
      description: 'Ready to enter the crypto market? This guide covers everything from selecting a reputable exchange to executing your first purchase. We\'ll explain the differences between centralized exchanges (like Coinbase) and decentralized options, discuss payment methods and their fees, and show you how to transfer your purchased crypto to your personal wallet for maximum security. Understanding these fundamentals helps you avoid common pitfalls and excessive fees.',
      steps: [
        {
          number: 1,
          title: 'Choose a reputable exchange',
          detail: 'Select from major exchanges like Coinbase (best for beginners), Kraken (lower fees), or Binance (most coins). Check if they operate in your country and support your payment methods.'
        },
        {
          number: 2,
          title: 'Complete KYC verification',
          detail: 'Submit government ID and complete identity verification. This is required by law in most countries. Process takes 10 minutes to 24 hours depending on exchange.'
        },
        {
          number: 3,
          title: 'Add payment method',
          detail: 'Link your bank account (lowest fees, 3-5 day wait) or debit card (instant, higher fees). Credit cards often charge 3-4% extra fees—avoid if possible.'
        },
        {
          number: 4,
          title: 'Place your order',
          detail: 'Start with Bitcoin or Ethereum. Use "Market Buy" for instant purchase at current price, or "Limit Order" to buy at your target price. Begin with small amounts.'
        },
        {
          number: 5,
          title: 'Secure your purchase',
          detail: 'Enable 2FA on your exchange account immediately. Use an authenticator app (not SMS) for better security.'
        },
        {
          number: 6,
          title: 'Withdraw to your wallet',
          detail: 'Transfer crypto from exchange to your personal wallet for full control. Leave only what you\'re actively trading on exchanges—"not your keys, not your coins."'
        }
      ],
      tips: [
        'Start with $50-100 to learn the process before investing more',
        'Compare fees between exchanges—they vary from 0.1% to 5%',
        'Dollar-cost average by buying small amounts regularly instead of lump sum',
        'Avoid buying during market frenzy when prices are inflated'
      ],
      warning: 'Only use regulated exchanges with strong security track records. Avoid obscure platforms offering "too good to be true" deals—many are scams.',
      icon: '💳'
    },
    {
      title: 'Send and Receive Crypto',
      length: '7 min',
      difficulty: 'Beginner',
      category: 'Transactions',
      copy: 'Master the basics of transferring cryptocurrency between wallets securely.',
      description: 'Sending crypto is irreversible, making accuracy critical. One wrong character in an address and your funds could be lost forever. This guide teaches you the safest practices for transferring crypto: how to verify addresses, understand network selection, estimate appropriate gas fees, and confirm transactions on block explorers. We\'ll also cover common mistakes and how to avoid them.',
      steps: [
        {
          number: 1,
          title: 'Copy recipient address carefully',
          detail: 'Get the full wallet address from recipient. Always copy-paste, never type manually. Verify first and last 6 characters—malware can swap addresses in your clipboard.'
        },
        {
          number: 2,
          title: 'Select correct network',
          detail: 'Ensure sender and receiver use same network (Ethereum, BSC, Polygon, etc.). Sending ETH on Ethereum to a BSC address = funds lost. When in doubt, ask recipient.'
        },
        {
          number: 3,
          title: 'Enter amount and check gas fee',
          detail: 'Input amount to send. Review gas fee—if it\'s $20+ for a small transfer, consider waiting for lower network congestion or using Layer 2.'
        },
        {
          number: 4,
          title: 'Send test transaction first',
          detail: 'For large amounts (>$500), send $10 test transaction first to verify everything works. Wait for confirmation, then send the rest.'
        }
      ],
      tips: [
        'Use address book features in wallets to save frequently used addresses',
        'Some wallets support ENS names (like vitalik.eth) instead of long addresses',
        'Check gas prices on sites like Etherscan before sending during busy periods',
        'Screenshot transaction hash for your records and tracking'
      ],
      warning: 'Blockchain transactions are IRREVERSIBLE. There is no "undo" button. Always double-check addresses and networks before confirming. When receiving, provide clear instructions on which network to use.',
      icon: '↔️'
    },
    {
      title: 'Bridge Assets Between Chains',
      length: '12 min',
      difficulty: 'Intermediate',
      category: 'DeFi',
      copy: 'Route assets across chains while avoiding common traps and minimizing fees.',
      description: 'Blockchain bridges enable you to move assets between different networks, unlocking opportunities across multiple ecosystems. However, bridges are also high-risk targets for hackers. This guide explains how bridges work, compares trusted vs trustless bridges, and provides a safety checklist. You\'ll learn to evaluate bridge security, understand lock-and-mint vs liquidity pool models, and minimize risks while accessing cross-chain DeFi opportunities.',
      steps: [
        {
          number: 1,
          title: 'Research bridge reputation',
          detail: 'Use established bridges: Hop Protocol, Across, official chain bridges (Arbitrum Bridge, Optimism Gateway). Check bridge TVL (Total Value Locked)—higher is safer. Avoid new/unknown bridges.'
        },
        {
          number: 2,
          title: 'Understand the costs',
          detail: 'Bridging has multiple fees: source chain gas, bridge fee (0.1-0.5%), destination chain gas. L1→L2 is cheaper than L2→L1. Calculate total cost before bridging.'
        },
        {
          number: 3,
          title: 'Connect wallet to bridge interface',
          detail: 'Visit official bridge website (bookmark it). Connect wallet with source chain selected. Verify URL in address bar carefully—many bridge phishing sites exist.'
        },
        {
          number: 4,
          title: 'Select source and destination',
          detail: 'Choose "From" chain (where tokens are now) and "To" chain (where you want them). Select the token—ensure it\'s available on destination.'
        },
        {
          number: 5,
          title: 'Enter amount and review',
          detail: 'Input amount to bridge. Review all fees and estimated arrival time (instant to 7 days depending on bridge type). Check if you\'ll receive native or wrapped tokens.'
        },
        {
          number: 6,
          title: 'Approve and execute',
          detail: 'First transaction: approve token spending (one-time). Second transaction: actual bridge transfer. Both cost gas. Sign both transactions in your wallet.'
        },
        {
          number: 7,
          title: 'Monitor and verify',
          detail: 'Save transaction hash. Check bridge status page for progress. Optimistic bridges may take 7 days. Switch wallet network to destination chain to see arrived tokens.'
        }
      ],
      tips: [
        'Bridge during off-peak hours (weekends, late nights) for lower gas fees',
        'For large amounts, consider CEX as intermediary (withdraw to exchange, then to new chain)',
        'Keep some native tokens on destination chain for gas before bridging',
        'Third-party bridge aggregators (Socket, Li.Fi) can find cheapest routes'
      ],
      warning: 'Bridges are prime hacking targets—over $2B was stolen from bridges in 2022. Never bridge more than you can afford to lose. Wait for dust to settle after new bridge launches before using them.',
      icon: '🌉'
    },
    {
      title: 'Stake Tokens for Rewards',
      length: '15 min',
      difficulty: 'Intermediate',
      category: 'DeFi',
      copy: 'Learn how to stake your tokens and earn passive income through various protocols.',
      description: 'Staking lets you earn rewards by locking up your crypto to support network operations. Whether you\'re staking ETH 2.0, delegating to validators on Cosmos, or participating in DeFi staking pools, understanding lock-up periods, reward rates, and risks is essential. This guide covers liquid staking options that give you liquidity while earning, validator selection criteria, and tax implications of staking rewards.',
      steps: [
        {
          number: 1,
          title: 'Choose staking method',
          detail: 'Native staking (direct on chain), exchange staking (Coinbase, Kraken—easiest but you don\'t hold keys), or liquid staking (Lido, Rocket Pool—get derivative tokens).'
        },
        {
          number: 2,
          title: 'Research rates and risks',
          detail: 'APR varies: ETH staking ~4%, Solana ~7%, smaller chains 10-20%. Higher rates often mean higher risk. Check if rewards are auto-compounding or manual claim.'
        },
        {
          number: 3,
          title: 'Understand lock-up periods',
          detail: 'Ethereum: no withdrawals until Shanghai upgrade (now live). Cosmos: 21 days unstaking. Solana: instant. Plan accordingly—you can\'t access funds during lock-up.'
        },
        {
          number: 4,
          title: 'Select validator (if applicable)',
          detail: 'For delegated PoS, choose validators with: 95%+ uptime, reasonable commission (5-10%), not part of centralization risk (avoid top validators). Spread across multiple.'
        },
        {
          number: 5,
          title: 'Connect wallet and stake',
          detail: 'Visit staking platform or use wallet built-in staking. Approve spending, confirm staking amount. Keep some tokens unstaked for gas fees.'
        },
        {
          number: 6,
          title: 'Monitor performance',
          detail: 'Check rewards accumulation weekly. Watch for validator slashing events or downtime. Re-delegate if performance drops. Track for tax purposes.'
        },
        {
          number: 7,
          title: 'Claim rewards periodically',
          detail: 'Some protocols auto-compound, others require manual claims. Claiming costs gas—calculate if reward value exceeds gas cost. Consider claiming + restaking quarterly.'
        },
        {
          number: 8,
          title: 'Understand unstaking process',
          detail: 'Initiate unstaking well before you need funds. Some chains have queues. You stop earning immediately but wait days/weeks for tokens to unlock.'
        }
      ],
      tips: [
        'Liquid staking tokens (stETH, rETH) let you use staked assets in DeFi',
        'Staking rewards are taxable income in most jurisdictions',
        'Diversify across validators to reduce slashing risk',
        'Don\'t stake 100%—keep reserve for gas and opportunities'
      ],
      warning: 'Slashing can destroy up to 100% of staked tokens if your validator misbehaves. Choose reputable validators. Understand that staked tokens are locked—you can\'t panic sell during market crashes.',
      icon: '🎯'
    },
    {
      title: 'Provide Liquidity on DEX',
      length: '18 min',
      difficulty: 'Advanced',
      category: 'DeFi',
      copy: 'Become a liquidity provider and understand impermanent loss and yield strategies.',
      description: 'Liquidity provision is the backbone of DeFi. By depositing token pairs into AMM pools, you earn trading fees and often additional token rewards. However, impermanent loss can erode profits if you don\'t understand it. This advanced guide covers LP position management, choosing optimal pairs, calculating real yields vs APY, concentrated liquidity (Uniswap v3), and when to enter/exit positions. We\'ll also explore advanced strategies like liquidity mining and auto-compounding vaults.',
      steps: [
        {
          number: 1,
          title: 'Understand impermanent loss',
          detail: 'IL occurs when token prices diverge after you provide liquidity. If ETH doubles while USDC stays stable, you\'d have been better off holding. IL is realized when you withdraw. Stable pairs (USDC/USDT) have minimal IL.'
        },
        {
          number: 2,
          title: 'Choose your DEX and pool',
          detail: 'Uniswap v3 (concentrated liquidity, complex), v2 (simple, full range), Curve (stables, low IL), Balancer (multi-asset pools). Higher volume pools = more fees but also more competition.'
        },
        {
          number: 3,
          title: 'Calculate expected returns',
          detail: 'Real yield = trading fees + rewards - gas costs - IL. A 200% APY means nothing if IL is -50%. Use IL calculators before entering. Stablecoin pairs safer but lower yields (5-20%).'
        },
        {
          number: 4,
          title: 'Acquire both tokens in equal value',
          detail: 'You need 50/50 value of each token (e.g., $1000 ETH + $1000 USDC). Buy both separately or use "zap" functions to split one token automatically.'
        },
        {
          number: 5,
          title: 'Approve token spending',
          detail: 'Two approval transactions required (one per token). These are one-time per protocol. Each costs gas. Use "unlimited approval" cautiously—convenience vs security trade-off.'
        },
        {
          number: 6,
          title: 'Add liquidity',
          detail: 'Enter amounts (interface auto-calculates second token). Review price impact. Confirm transaction. You\'ll receive LP tokens representing your pool share.'
        },
        {
          number: 7,
          title: 'Stake LP tokens (optional)',
          detail: 'Many protocols offer extra rewards for staking LP tokens in farms. This adds another layer of risk but increases yields. Common on Sushiswap, Curve, PancakeSwap.'
        },
        {
          number: 8,
          title: 'Monitor and rebalance',
          detail: 'Check position daily. If IL exceeds fees earned, consider withdrawing. During high volatility, IL risk increases. Track performance vs simple holding (HODLing).'
        },
        {
          number: 9,
          title: 'Harvest rewards and compound',
          detail: 'Claim accumulated rewards regularly. Reinvest into LP for compounding. Use auto-compounding vaults (Yearn, Beefy) to automate this but understand their fees.'
        }
      ],
      tips: [
        'Start with stablecoin pairs to learn without IL risk',
        'Concentrated liquidity (v3) requires active management—passive LPs often lose money',
        'High APYs are often from inflationary reward tokens that dump',
        'Set price alerts to react before IL becomes too severe'
      ],
      warning: 'LP is NOT passive income. IL can wipe out months of fees overnight during volatile moves. Never LP with tokens you\'re long-term bullish on—you\'re implicitly shorting volatility. Rugpull risk exists on low-liquidity pairs.',
      icon: '💧'
    },
    {
      title: 'Set Up Hardware Wallet',
      length: '20 min',
      difficulty: 'Intermediate',
      category: 'Security',
      copy: 'Complete guide to setting up and using a hardware wallet for maximum security.',
      description: 'Hardware wallets are the gold standard for crypto security, keeping your private keys in an isolated chip that never touches the internet. Even if your computer is compromised, attackers can\'t steal your keys. This comprehensive guide walks through the entire setup process, from unboxing to first transaction. You\'ll learn firmware verification, secure seed backup strategies, and how to use your hardware wallet with MetaMask and DeFi applications.',
      steps: [
        {
          number: 1,
          title: 'Purchase from official source',
          detail: 'Buy ONLY from manufacturer websites: Ledger.com, Trezor.io, or authorized retailers. Never buy used or from third parties—device could be tampered with. Check packaging seals.'
        },
        {
          number: 2,
          title: 'Verify device integrity',
          detail: 'Check for physical tampering, ensure authentic holographic seals, verify serial number on manufacturer site. If anything seems off, don\'t use it and contact manufacturer.'
        },
        {
          number: 3,
          title: 'Install official software',
          detail: 'Download Ledger Live or Trezor Suite from official sites. Verify download checksums if technically capable. Install and launch application.'
        },
        {
          number: 4,
          title: 'Initialize device',
          detail: 'Connect hardware wallet via USB. Choose "Set up as new device" (not restore). Follow on-screen prompts. Set device PIN (8 digits recommended).'
        },
        {
          number: 5,
          title: 'Write down seed phrase',
          detail: 'Device displays 24 words one by one. Write each word in order on provided recovery cards. NEVER store digitally, photograph, or tell anyone. This is your master backup.'
        },
        {
          number: 6,
          title: 'Verify seed phrase',
          detail: 'Device will ask you to confirm words in specific positions to ensure you wrote correctly. Get this wrong? Start over. No shortcuts.'
        },
        {
          number: 7,
          title: 'Secure your recovery phrase',
          detail: 'Store copies in multiple secure locations. Consider: fireproof safe, bank safety deposit box, or metal seed phrase plates (Cryptosteel). Never in one location with device.'
        },
        {
          number: 8,
          title: 'Install blockchain apps',
          detail: 'In Ledger Live/Trezor Suite, install apps for chains you\'ll use: Ethereum, Bitcoin, Solana, etc. Each chain needs its app installed on device.'
        },
        {
          number: 9,
          title: 'Connect to MetaMask',
          detail: 'In MetaMask: Account menu → Connect Hardware Wallet → Select Ledger/Trezor → Choose account. Your hardware wallet now protects MetaMask—sign on device for transactions.'
        },
        {
          number: 10,
          title: 'Send test transaction',
          detail: 'Transfer small amount to hardware wallet. Then send small amount back to another address to verify full workflow. Review each transaction on device screen before approving.'
        }
      ],
      tips: [
        'Enable passphrase (25th word) for advanced security—creates hidden wallets',
        'Update firmware regularly through official software only',
        'Use different PINs for different security levels',
        'Consider two devices with same seed for redundancy'
      ],
      warning: 'Your seed phrase is equally valuable as your hardware wallet. If someone finds your seed phrase, they can steal everything without your device. Never store seed phrase and device PIN in the same location.',
      icon: '🔐'
    },
    {
      title: 'Revoke Token Approvals',
      length: '5 min',
      difficulty: 'Beginner',
      category: 'Security',
      copy: 'Protect your assets by revoking unnecessary token approvals from smart contracts.',
      description: 'Every time you interact with a DeFi protocol, you grant smart contracts permission to spend your tokens. These approvals often don\'t expire, leaving open doors for hackers if the contract is compromised. Regularly auditing and revoking unnecessary approvals is essential security hygiene. This quick guide shows you how to check what approvals you\'ve given and revoke the ones you no longer need.',
      steps: [
        {
          number: 1,
          title: 'Visit approval checker tool',
          detail: 'Go to Revoke.cash, Etherscan Token Approval Checker, or use Rabby Wallet\'s built-in feature. Connect your wallet to scan all approvals.'
        },
        {
          number: 2,
          title: 'Review your approvals',
          detail: 'See list of contracts with permission to spend your tokens. Check "unlimited" approvals (most risky), dormant protocols you no longer use, and unknown contracts.'
        },
        {
          number: 3,
          title: 'Revoke unnecessary permissions',
          detail: 'Click "Revoke" next to approvals you don\'t need. Each revocation costs gas (~$2-10 on Ethereum). Prioritize high-value tokens and unlimited approvals on sketchy sites you once visited.'
        }
      ],
      tips: [
        'Set reminders to check approvals monthly',
        'Use limited approvals instead of unlimited when possible',
        'Revoke immediately after using sketchy/new protocols',
        'On Ethereum L2s, revoking is cheap—do it more frequently'
      ],
      warning: 'Malicious contracts with approval can drain your wallet anytime. The 2023 Multichain hack exploited old approvals. Revoke proactively, especially before large fund movements.',
      icon: '🔓'
    },
    {
      title: 'Automate DCA Strategy',
      length: '14 min',
      difficulty: 'Advanced',
      category: 'Trading',
      copy: 'Set up automated dollar-cost averaging to invest consistently over time.',
      description: 'Dollar-Cost Averaging (DCA) removes emotion from investing by automatically buying fixed amounts at regular intervals. Instead of trying to time the market, you accumulate over time, smoothing out volatility. This guide covers automated DCA using exchange features, DeFi protocols (Mean Finance, DCA Protocol), and scripting options. You\'ll learn to optimize frequency, amount, and asset selection based on your risk tolerance and goals.',
      steps: [
        {
          number: 1,
          title: 'Define your DCA parameters',
          detail: 'Decide: total budget ($500/month?), asset (BTC, ETH, or basket), frequency (daily, weekly, biweekly), and duration (ongoing vs fixed term). More frequent = smoother averaging.'
        },
        {
          number: 2,
          title: 'Choose DCA platform',
          detail: 'Exchange options: Coinbase Advanced, Kraken (low fees, easy). DeFi: Mean Finance on Optimism (truly decentralized). Each has trade-offs in fees, control, and custody.'
        },
        {
          number: 3,
          title: 'Set up funding source',
          detail: 'For exchanges: link bank account for automatic withdrawals. For DeFi: maintain buffer in smart contract wallet. Ensure funds are available when orders execute.'
        },
        {
          number: 4,
          title: 'Configure recurring buy',
          detail: 'In Coinbase: "Buy" → "Recurring Purchase" → Set amount, frequency, date. In Mean Finance: Create position with total amount and intervals. Review all settings carefully.'
        },
        {
          number: 5,
          title: 'Set up price alerts',
          detail: 'While DCA is automatic, alerts help you recognize major opportunities or risks. Set alerts at -30% (consider adding extra), +50% (consider taking profit), extreme volatility.'
        },
        {
          number: 6,
          title: 'Track performance',
          detail: 'Create spreadsheet or use portfolio tracker (CoinTracker, Koinly). Log each purchase: date, amount, price. Calculate average entry price monthly. Compare vs lump sum strategy.'
        },
        {
          number: 7,
          title: 'Review and adjust quarterly',
          detail: 'Every 3 months: evaluate asset performance, rebalance portfolio allocation, adjust amounts based on conviction/market conditions. DCA isn\'t set-and-forget forever.'
        },
        {
          number: 8,
          title: 'Plan exit strategy',
          detail: 'DCA into, DCA out. When taking profit, reverse the strategy: sell fixed amounts periodically instead of trying to time the top. Set target price ranges for scaling out.'
        }
      ],
      tips: [
        'Weekly DCA beats monthly statistically—more smoothing, same effort if automated',
        'Pair with "buy the dip" manual adds during -20%+ crashes',
        'Start small—can always increase, hard to decrease psychologically',
        'Track cost basis meticulously for tax reporting'
      ],
      warning: 'DCA doesn\'t guarantee profit—it just reduces timing risk. In prolonged bear markets, DCA accumulates at better prices but still loses value. Have emergency fund outside crypto before DCA-ing.',
      icon: '📊'
    },
    {
      title: 'Mint Your First NFT',
      length: '16 min',
      difficulty: 'Intermediate',
      category: 'NFTs',
      copy: 'Create and mint your own NFT on popular marketplaces and platforms.',
      description: 'Whether you\'re an artist, creator, or just want to understand NFT mechanics, minting your first NFT is an exciting milestone. This guide covers the entire process: preparing digital artwork, understanding metadata standards, choosing between lazy minting and on-chain minting, selecting the right marketplace, and setting royalties. You\'ll learn about IPFS storage, gas costs, and how to market your NFT to potential collectors.',
      steps: [
        {
          number: 1,
          title: 'Prepare your digital asset',
          detail: 'Create artwork: JPG, PNG, GIF (images), MP4 (video), or GLB (3D). Recommended: 3000x3000px for images, under 100MB. Higher quality = better presentation but larger file.'
        },
        {
          number: 2,
          title: 'Choose minting platform',
          detail: 'OpenSea (easiest, lazy mint free), Rarible (community focused), Foundation (curated/exclusive), Manifold (custom contracts for pros). Each has different fees and audiences.'
        },
        {
          number: 3,
          title: 'Connect wallet with funds',
          detail: 'Connect MetaMask with ETH for gas (~$20-50 for minting on Ethereum L1). Consider Polygon for free/cheap minting. Have extra ETH buffer for failed transactions.'
        },
        {
          number: 4,
          title: 'Create collection (optional)',
          detail: 'Collections group related NFTs. Set name, description, banner image, royalty %. Royalties: 5-10% standard (you earn on secondary sales). Higher = harder to resell.'
        },
        {
          number: 5,
          title: 'Upload and configure NFT',
          detail: 'Click "Create" → Upload file → Add name, description, properties/traits. Properties make NFTs filterable and comparable. Add external links (website, Twitter) for credibility.'
        },
        {
          number: 6,
          title: 'Set supply and blockchain',
          detail: 'Choose 1/1 (unique) or multiple editions. Select Ethereum (expensive, established), Polygon (cheap, less prestige), or other. Can\'t change blockchain after minting.'
        },
        {
          number: 7,
          title: 'Mint or lazy mint',
          detail: 'Lazy mint (OpenSea): free, mints on first purchase—buyer pays gas. Real mint: you pay now (~$50), immediate on-chain presence. Lazy mint better for beginners.'
        }
      ],
      tips: [
        'Mint on Polygon first to learn without wasting ETH on experiments',
        'Tell a story—NFTs with narratives sell better than random art',
        'Build audience BEFORE minting—cold minting rarely succeeds',
        'Consider carbon-neutral chains if environmental impact matters'
      ],
      warning: 'Most NFTs have zero resale value. Mint for creative expression or community, not expecting profit. Gas fees are non-refundable even if NFT never sells. Beware copyright—only mint original work or properly licensed content.',
      icon: '🎨'
    },
    {
      title: 'Set Stop-Loss Orders',
      length: '11 min',
      difficulty: 'Intermediate',
      category: 'Trading',
      copy: 'Protect your investments with automated stop-loss and take-profit orders.',
      description: 'Stop-loss orders are your insurance policy against catastrophic losses. They automatically sell your position when price drops to a specified level, protecting you from emotional decision-making and unlimited downside. This guide covers different types of stop orders (stop-loss, stop-limit, trailing stop), how to calculate optimal placement using technical analysis, and platform-specific implementations on centralized and decentralized exchanges.',
      steps: [
        {
          number: 1,
          title: 'Understand stop-loss types',
          detail: 'Stop-Market: sells at market price when triggered (guaranteed execution, price slippage). Stop-Limit: sells only at your limit price (no slippage, may not fill). Trailing: moves with price, locks in gains.'
        },
        {
          number: 2,
          title: 'Calculate stop placement',
          detail: 'Common methods: -10% from entry (simple), below support levels (technical), ATR-based (volatility-adjusted). Tighter stops = more stopped out. Wider = larger losses but fewer false stops.'
        },
        {
          number: 3,
          title: 'Choose platform',
          detail: 'CEX (Binance, Kraken): built-in stop-loss in spot trading. DEX: use deBridge or create conditional orders on GMX/dYdX. CEX easier for beginners.'
        },
        {
          number: 4,
          title: 'Place stop-loss order',
          detail: 'In Binance: Trade → Stop-Limit → Enter stop price (trigger), limit price (execution), amount. Set limit slightly below stop to ensure filling. Review all fields before confirming.'
        },
        {
          number: 5,
          title: 'Set take-profit target',
          detail: 'Balance stop-loss with take-profit. Risk/reward ratio: aim for 1:2 minimum (risk $100 to make $200). Place take-profit at resistance levels or key fib extensions.'
        },
        {
          number: 6,
          title: 'Monitor and adjust',
          detail: 'Move stop-loss to breakeven after 5-10% profit (free trade). Trail stop upward as position profits—never trail downward. Don\'t move stop wider to avoid being stopped out (emotion).'
        }
      ],
      tips: [
        'Use stop-loss on EVERY position—no exceptions, even conviction trades',
        'Don\'t place stops at obvious levels (round numbers, visible support)—they get hunted',
        'Account for wick volatility—place stops beyond expected noise',
        'Test stop strategy on paper trading before using real money'
      ],
      warning: 'Stops can be triggered by flash crashes or manipulation (especially on low-liquidity assets). Exchange downtime during crashes may prevent stops from executing. DEX stops require on-chain keepers—not guaranteed execution.',
      icon: '⚡'
    },
    {
      title: 'Recover Lost Wallet Access',
      length: '9 min',
      difficulty: 'Beginner',
      category: 'Security',
      copy: 'Learn the process to recover your wallet using seed phrases and backup methods.',
      description: 'Losing wallet access is terrifying, but not always permanent. If you have your seed phrase, recovery is straightforward. This guide covers restoration procedures for different wallet types, dealing with partial seed phrases, using wallet derivation paths correctly, and what to do if you\'ve lost everything. Understanding recovery options BEFORE you need them gives peace of mind and prepares you for emergencies.',
      steps: [
        {
          number: 1,
          title: 'Locate your seed phrase',
          detail: 'Check everywhere you might have written it: safe, notebook, password manager notes, bank deposit box. 12 or 24 words, sometimes with passphrase. Can\'t find it? Recovery may be impossible.'
        },
        {
          number: 2,
          title: 'Download wallet software',
          detail: 'Get the same wallet type you used (MetaMask, Trust Wallet, etc.) or universal wallet like Exodus. Download from official sources only—fake recovery wallets steal seeds.'
        },
        {
          number: 3,
          title: 'Restore from seed phrase',
          detail: 'Click "Import existing wallet" → Enter seed words in exact order → Set new password. If wallet doesn\'t show funds, try different derivation paths (BIP44, BIP49, BIP84).'
        },
        {
          number: 4,
          title: 'Check custom derivation paths',
          detail: 'If funds missing, wallet may use non-standard path. In MetaMask: Settings → Advanced → Use custom path. Common paths: m/44\'/60\'/0\'/0 (Ethereum standard), m/44\'/60\'/0\'/0/0 (legacy).'
        },
        {
          number: 5,
          title: 'Sweep funds to new wallet',
          detail: 'Once recovered, immediately create NEW wallet with NEW seed phrase. Transfer all assets from recovered wallet to new one. Old seed may be compromised if device was lost/stolen.'
        }
      ],
      tips: [
        'Test seed phrase recovery BEFORE losing access (with small amount)',
        'Some wallets add optional passphrase (25th word)—remember you used this',
        'Multi-sig wallets may need co-signers to recover',
        'Partial seed phrases might be recoverable with specialized services (expensive, risky)'
      ],
      warning: 'If you\'ve lost your seed phrase and have no backups, your funds are GONE. No company, developer, or support can recover them—that\'s how blockchain works. Prevention is the only cure. NEVER throw away old devices without wiping and verifying wallet recovery first.',
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
    <>
      <section className={`min-h-screen bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 text-slate-100 transition-all duration-300 ${selectedGuide ? 'blur-sm' : ''}`}>
        <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-sky-300">
          <span className="text-xl">←</span>
          <span className="text-xs sm:text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-sky-200">📖 Guided paths</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">Step-by-Step Guides</h2>
          <p className="mt-2 text-sm sm:text-lg text-slate-400">Follow detailed walkthroughs to master crypto operations safely.</p>
        </div>

        {/* Difficulty Filter */}
        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition ${
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
        <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-sky-500/10 to-transparent p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">{guides.length}</p>
            <p className="text-xs sm:text-sm text-slate-400">Total Guides</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/10 to-transparent p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">4</p>
            <p className="text-xs sm:text-sm text-slate-400">Categories</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-purple-500/10 to-transparent p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
            <p className="text-xs sm:text-sm text-slate-400">Free Access</p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide, idx) => (
            <article 
              key={idx}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 transition hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="text-3xl sm:text-4xl">{guide.icon}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>
              <p className="mb-2 text-xs uppercase tracking-wider text-sky-200">{guide.category}</p>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white group-hover:text-sky-300">{guide.title}</h3>
              <p className="mb-4 text-xs sm:text-sm text-slate-300">{guide.copy}</p>
              <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-400">
                <span>⏱️ {guide.length}</span>
                <span>📝 {guide.steps.length} steps</span>
              </div>
              <button 
                onClick={() => openGuide(guide)}
                className="flex cursor-pointer items-center gap-2 text-xs sm:text-sm font-medium text-sky-400 transition hover:text-sky-300"
              >
                Start guide
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-12 text-center">
            <p className="text-xs sm:text-sm text-slate-400">No guides found for this difficulty level.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-sky-500/30 bg-linear-to-br from-sky-500/10 to-transparent p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">Need Help?</h3>
          <p className="mb-4 text-slate-300">Join our community or test your knowledge</p>
          <Link to="/quiz" className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]">
            Take the Quiz
          </Link>
        </div>
      </div>
    </section>

    {/* Full Page Modal */}
    {selectedGuide && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeGuide}
        ></div>

        {/* Modal Content */}
        <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/20 bg-slate-900 shadow-2xl shadow-sky-500/20 animate-slideUp">
          {/* Header */}
          <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/95 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
            <div className="mb-3 flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
              <div className="flex flex-1 items-start gap-3 sm:gap-4">
                <span className="text-4xl sm:text-5xl shrink-0">{selectedGuide.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.12em] text-sky-200">{selectedGuide.category}</p>
                  <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedGuide.title}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">{selectedGuide.copy}</p>
                </div>
              </div>
              <button 
                onClick={closeGuide}
                className="ml-auto flex h-9 sm:h-10 w-9 sm:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-300 transition hover:border-white/20 hover:bg-slate-800 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyColor(selectedGuide.difficulty)}`}>
                {selectedGuide.difficulty}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                ⏱️ {selectedGuide.length}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                📝 {selectedGuide.steps.length} steps
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            {/* Description */}
            <div className="rounded-xl border border-white/5 bg-slate-800/40 p-4 sm:p-6">
              <p className="text-sm sm:text-base leading-relaxed text-slate-200">{selectedGuide.description}</p>
            </div>

            {/* Steps */}
            <div>
              <h3 className="mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-sky-300">
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Step-by-Step Instructions
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {selectedGuide.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 rounded-xl border border-white/5 bg-slate-800/30 p-4 sm:p-5 transition hover:border-sky-500/30 hover:bg-slate-800/50">
                    <div className="flex h-7 sm:h-8 w-7 sm:w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs sm:text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-white">{step.title}</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 sm:p-6">
              <h3 className="mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-300">
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Pro Tips
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {selectedGuide.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-emerald-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning */}
            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4 sm:p-6">
              <h3 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg font-semibold text-red-300">
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Important Warning
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-red-100">{selectedGuide.warning}</p>
            </div>

            {/* Close Button */}
            <button 
              onClick={closeGuide}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800/60 py-4 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-slate-800"
            >
              <span>Close Guide</span>
              <span className="text-lg">✕</span>
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Guides
