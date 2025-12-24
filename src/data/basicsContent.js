const basicsContent = [
  {
    category: 'Foundations',
    title: 'How wallets work',
    summary: 'Keys, addresses, and how signatures move value on-chain.',
    description: 'A crypto wallet is your gateway to the blockchain. Unlike traditional wallets that hold physical money, crypto wallets store your private keys—the cryptographic proof that you own specific digital assets. Think of your wallet address as your email address (public and shareable) and your private key as your password (secret and never shared).',
    points: ['Seed vs private key', 'EOA vs smart accounts', 'Signing and gas basics'],
    keyPoints: [
      'Your wallet address is derived from your public key and can be safely shared',
      'Private keys sign transactions to prove ownership—losing them means losing access forever',
      'Seed phrases (12-24 words) can regenerate all your private keys and should be stored offline',
      'Externally Owned Accounts (EOAs) are controlled by private keys, while smart contract wallets offer advanced features'
    ],
    example: 'When you send 0.1 ETH to a friend, your wallet uses your private key to create a digital signature. This signature proves you authorized the transaction without revealing your private key. The blockchain verifies this signature and transfers the ETH.',
    difficulty: 'Beginner',
    readTime: '5 min',
    takeaway: 'Never share your private key or seed phrase with anyone. Not even "support" staff. If someone has your private key, they control your funds—no exceptions.'
  },
  {
    category: 'Foundations',
    title: 'Understanding Blockchain',
    summary: 'Learn how distributed ledgers work and why they matter.',
    description: 'Blockchain is a revolutionary technology that acts as a digital ledger shared across thousands of computers worldwide. Every transaction is recorded in "blocks" that are cryptographically linked together in a "chain." This makes the data nearly impossible to alter without detection, creating trust without needing a central authority like a bank.',
    points: ['Distributed ledger technology', 'Consensus mechanisms explained', 'Block creation and mining'],
    keyPoints: [
      'Blocks contain transaction data, timestamps, and a link to the previous block',
      'Consensus mechanisms (Proof of Work, Proof of Stake) ensure all nodes agree on the correct version of the ledger',
      'Miners or validators process transactions and add new blocks to the chain in exchange for rewards',
      'Once confirmed, blockchain transactions are immutable and publicly verifiable'
    ],
    example: 'Imagine a shared Google Doc that thousands of people can read, but only special validators can edit. Every edit is timestamped, linked to previous edits, and can never be deleted. That\'s essentially how blockchain works—a transparent, tamper-proof record.',
    difficulty: 'Beginner',
    readTime: '7 min',
    takeaway: 'Blockchain removes the need for trusted intermediaries by using cryptography and distributed consensus. This enables peer-to-peer transactions that are transparent, secure, and censorship-resistant.'
  },
  {
    category: 'Foundations',
    title: 'Public vs Private Keys',
    summary: 'The cryptographic foundation of cryptocurrency security.',
    description: 'Cryptocurrency security relies on asymmetric cryptography—a system using pairs of mathematically related keys. Your public key is like your home address (anyone can see it and send you mail), while your private key is like your house key (only you should have it to access what\'s inside). Together, they enable secure, verifiable transactions without exposing your secrets.',
    points: ['Asymmetric cryptography basics', 'Key pair generation', 'Why you never share private keys'],
    keyPoints: [
      'Public keys are derived from private keys using one-way mathematical functions—you can\'t reverse engineer the private key from the public key',
      'Your wallet address is a shortened, human-readable version of your public key',
      'Private keys sign messages/transactions to prove you authorized them without revealing the key itself',
      'Anyone with your private key has complete control over your assets—there\'s no "forgot password" option'
    ],
    example: 'Think of it like a mailbox: your public address (mailbox location) lets people send you crypto. Your private key is the mailbox key—only you can open it to access or send the contents. If someone steals your mailbox key, they control everything inside.',
    difficulty: 'Beginner',
    readTime: '6 min',
    takeaway: 'Your private key is the master key to all your crypto. Store it securely offline, never screenshot it, and never enter it on websites. Consider using a hardware wallet for large amounts.'
  },
  {
    category: 'Networks',
    title: 'Chains and tokens',
    summary: 'Blockspace, consensus, and why tokens exist on multiple chains.',
    description: 'Not all blockchains are created equal. Layer 1 chains (like Ethereum and Solana) are independent blockchains with their own consensus mechanisms and security. Layer 2 solutions build on top of L1s to increase speed and reduce costs. Understanding these differences helps you choose the right network for your needs and avoid costly mistakes like sending tokens to the wrong chain.',
    points: ['L1 vs L2 vs sidechains', 'Bridging patterns', 'Native vs wrapped assets'],
    keyPoints: [
      'Layer 1 blockchains (Ethereum, Bitcoin, Solana) have independent security and consensus',
      'Layer 2 solutions (Arbitrum, Optimism) inherit security from Layer 1 while offering faster, cheaper transactions',
      'Sidechains (Polygon PoS) have their own consensus but connect to main chains via bridges',
      'Wrapped tokens (WETH, WBTC) represent assets from one chain on another—they\'re IOUs backed by locked original assets'
    ],
    example: 'Sending USDC on Ethereum might cost $10 in gas fees, while the same transaction on Arbitrum (Layer 2) costs $0.50. The Arbitrum transaction settles on Ethereum eventually, giving you L1 security at L2 prices.',
    difficulty: 'Intermediate',
    readTime: '8 min',
    takeaway: 'Always verify which network you\'re using before sending tokens. Sending ETH on Arbitrum to an Ethereum-only address could result in permanent loss. Use bridges carefully and stick to reputable ones.'
  },
  {
    category: 'Networks',
    title: 'Gas Fees Explained',
    summary: 'Understanding transaction costs across different blockchains.',
    description: 'Gas fees are the transaction costs you pay to miners or validators for processing your blockchain transactions. Think of gas as the fuel needed to power operations on the network. During busy times, fees spike as users compete for limited block space. Understanding gas mechanics helps you save money and time your transactions strategically.',
    points: ['Gas price vs gas limit', 'EIP-1559 and base fees', 'Optimizing transaction costs'],
    keyPoints: [
      'Gas limit is the maximum computational work you authorize (like a budget), gas price is what you pay per unit of work',
      'Total fee = Gas used × Gas price. Unused gas is refunded automatically',
      'EIP-1559 introduced base fees (burned) and priority tips (paid to miners) for more predictable pricing',
      'Complex operations like minting NFTs or swapping tokens require more gas than simple transfers'
    ],
    example: 'A simple ETH transfer uses ~21,000 gas units. At 30 gwei gas price: 21,000 × 30 = 630,000 gwei = 0.00063 ETH (~$2). Swapping tokens on Uniswap might use 150,000 gas, costing 10x more.',
    difficulty: 'Intermediate',
    readTime: '6 min',
    takeaway: 'Check gas prices before transacting using tools like Etherscan Gas Tracker. Transact during off-peak hours (weekends, late nights UTC) to save significantly. For frequent trading, consider Layer 2 solutions.'
  },
  {
    category: 'Networks',
    title: 'Layer 2 Solutions',
    summary: 'Scaling Ethereum with rollups and sidechains.',
    description: 'Layer 2 solutions solve Ethereum\'s scaling challenges by processing transactions off the main chain while inheriting its security. Rollups bundle hundreds of transactions into single batches, dramatically reducing costs. This technology makes DeFi accessible to everyday users by bringing transaction fees down from $50+ to under $1.',
    points: ['Optimistic vs ZK rollups', 'State channels and plasma', 'When to use L2s'],
    keyPoints: [
      'Optimistic Rollups (Arbitrum, Optimism) assume transactions are valid by default, with a ~7 day challenge period for withdrawals',
      'ZK-Rollups (zkSync, StarkNet) use cryptographic proofs to guarantee validity, enabling faster withdrawals',
      'Layer 2s offer 10-100x lower fees while maintaining Ethereum-level security',
      'State channels (Lightning Network) enable instant, unlimited transactions for specific use cases like payments'
    ],
    example: 'Bridging 1000 USDC from Ethereum to Arbitrum costs ~$5. Once on Arbitrum, you can make hundreds of swaps and transfers for $0.50-$2 total. When done, bridge back to Ethereum for ~$5. You saved potentially hundreds in gas fees.',
    difficulty: 'Advanced',
    readTime: '10 min',
    takeaway: 'For frequent DeFi activity, use Layer 2 solutions to save on gas. Keep only what you need for L1 transactions. Popular L2s: Arbitrum (general DeFi), Optimism (balanced), zkSync (fast withdrawals).'
  },
  {
    category: 'Trading',
    title: 'Order types 101',
    summary: 'Market, limit, and stop orders plus when to use each.',
    description: 'Understanding order types is crucial for executing trades efficiently and protecting your capital. Each order type serves different purposes: market orders prioritize speed, limit orders prioritize price, and stop orders help manage risk. Mastering these tools gives you precise control over your trading strategy.',
    points: ['Price impact and slippage', 'Liquidity venues', 'Fees and rebates'],
    keyPoints: [
      'Market orders execute immediately at current price—fast but you might get slippage on large orders',
      'Limit orders only execute at your specified price or better—you control the price but might not fill',
      'Stop-loss orders automatically sell if price drops to a trigger level, protecting against larger losses',
      'Price impact depends on order size relative to available liquidity—larger orders move prices more'
    ],
    example: 'You want to buy ETH at $3,000. Market order: you get filled immediately at $3,005 (slippage). Limit order: you only buy if price drops to $3,000 or below. Stop-loss at $2,800: if ETH crashes, you automatically sell, limiting your loss.',
    difficulty: 'Intermediate',
    readTime: '7 min',
    takeaway: 'Use market orders for small, urgent trades. Use limit orders when you have specific price targets and aren\'t in a hurry. Always set stop-losses to protect your portfolio from unexpected crashes.'
  },
  {
    category: 'Trading',
    title: 'DeFi Trading Basics',
    summary: 'Trading on decentralized exchanges and liquidity pools.',
    description: 'Decentralized exchanges (DEXs) let you trade directly from your wallet without giving up custody of your funds. Instead of order books, most DEXs use Automated Market Makers (AMMs)—smart contracts with liquidity pools where users trade against pooled assets. This means you can trade anytime, but you need to understand slippage, price impact, and impermanent loss.',
    points: ['AMMs and liquidity pools', 'Impermanent loss explained', 'DEX aggregators'],
    keyPoints: [
      'AMMs use mathematical formulas (like x*y=k) to determine prices based on pool ratios',
      'You\'re trading against liquidity pools, not other traders—this means no order books or limit orders (on basic AMMs)',
      'Slippage occurs when your trade shifts the pool ratio, changing the price as you buy/sell',
      'DEX aggregators (1inch, Matcha) split your trade across multiple DEXs to get the best price'
    ],
    example: 'Swapping $100 of ETH for USDC on Uniswap: the AMM removes ETH from the pool and adds USDC, slightly changing the ratio. A 0.3% fee goes to liquidity providers. Large swaps have higher slippage—a $100K swap might lose 2-3% to price impact.',
    difficulty: 'Intermediate',
    readTime: '9 min',
    takeaway: 'Check price impact and slippage tolerance before swapping. For large trades, use DEX aggregators or split into smaller orders. Set slippage to 0.5-1% for stablecoins, 1-3% for volatile assets.'
  },
  {
    category: 'Trading',
    title: 'Technical Analysis Fundamentals',
    summary: 'Reading charts and identifying trading opportunities.',
    description: 'Technical analysis uses historical price data, volume, and patterns to predict future price movements. While not perfect, it helps identify potential entry and exit points by recognizing repeating patterns in market psychology. Combined with fundamental analysis and risk management, TA becomes a powerful tool in your trading arsenal.',
    points: ['Support and resistance levels', 'Common chart patterns', 'Indicator basics (RSI, MACD)'],
    keyPoints: [
      'Support is a price level where buying pressure typically prevents further decline; resistance is where selling pressure caps gains',
      'Chart patterns (head and shoulders, double top/bottom, triangles) suggest potential breakouts or reversals',
      'RSI (Relative Strength Index) measures overbought (>70) or oversold (<30) conditions',
      'MACD (Moving Average Convergence Divergence) identifies trend changes and momentum shifts'
    ],
    example: 'BTC bounced off $30,000 three times in a month (support level). When it finally breaks above $32,000 resistance with high volume, that\'s a bullish signal. RSI at 75 suggests it might be overbought—wait for a pullback before buying.',
    difficulty: 'Advanced',
    readTime: '12 min',
    takeaway: 'No indicator is perfect—use multiple signals together. Don\'t trade based solely on TA; combine it with fundamental analysis and risk management. Practice on paper trading before risking real money.'
  },
  {
    category: 'Security',
    title: 'Staying safe',
    summary: 'Operational hygiene to protect your capital and credentials.',
    description: 'Security in crypto is personal responsibility—there\'s no customer support to recover stolen funds. Most losses come from phishing attacks, malicious approvals, or compromised devices rather than blockchain hacks. Developing strong security habits is your best defense against the $3+ billion stolen from crypto users annually.',
    points: ['Device separation', 'Approval hygiene', 'Phishing red flags'],
    keyPoints: [
      'Use a dedicated device or browser profile for crypto transactions—never mix with casual browsing',
      'Revoke unnecessary token approvals regularly using tools like Revoke.cash',
      'Verify URLs carefully—phishers buy similar domains (metamask.io vs metamask.com)',
      'Never enter your seed phrase anywhere except your physical wallet device during setup'
    ],
    example: 'You click a fake NFT mint link from Discord. The site looks identical to the real one. You connect your wallet and approve the transaction. Minutes later, your wallet is drained. The approval gave the attacker full access to your tokens.',
    difficulty: 'Essential',
    readTime: '8 min',
    takeaway: 'Security isn\'t paranoia—it\'s insurance. Use hardware wallets for large amounts, enable 2FA everywhere, bookmark legitimate sites, and always verify contract addresses before interacting. If something feels off, stop.'
  },
  {
    category: 'Security',
    title: 'Hardware Wallets',
    summary: 'Cold storage solutions for maximum security.',
    description: 'Hardware wallets are physical devices that store your private keys offline, making them nearly impossible to hack remotely. Think of them as a secure vault for your crypto—your keys never leave the device, even when signing transactions. For anyone holding significant crypto value, a hardware wallet isn\'t optional, it\'s essential.',
    points: ['Ledger vs Trezor comparison', 'Setting up your hardware wallet', 'Recovery phrase backup strategies'],
    keyPoints: [
      'Hardware wallets keep private keys isolated in a secure chip, protected from malware and keyloggers',
      'Transactions are signed inside the device and only the signed transaction leaves—your keys stay protected',
      'Always buy directly from manufacturer—never buy used or from third-party sellers (tampering risk)',
      'Your recovery phrase is the master key—store it on metal (not paper) in multiple secure locations'
    ],
    example: 'You want to send ETH from your Ledger. Your computer might be infected with malware, but it doesn\'t matter—the private key stays inside the Ledger\'s secure chip. You verify the transaction on the device screen and physically press a button to approve.',
    difficulty: 'Beginner',
    readTime: '10 min',
    takeaway: 'Invest in a hardware wallet ($60-$150) if you hold more than $1,000 in crypto. Popular choices: Ledger Nano S Plus (budget), Ledger Nano X (Bluetooth), Trezor Model T (open source). Never store your seed phrase digitally.'
  },
  {
    category: 'Security',
    title: 'Smart Contract Security',
    summary: 'Identifying risks before interacting with contracts.',
    description: 'Smart contracts are code running on the blockchain—powerful but also permanent. Once deployed, they can\'t be changed. Bugs, vulnerabilities, or malicious code in contracts have led to billions in losses. Learning to assess contract risk before interacting is a critical skill that separates savvy users from victims.',
    points: ['Contract verification on Etherscan', 'Common vulnerabilities', 'Audit reports and what to look for'],
    keyPoints: [
      'Verified contracts show their source code publicly on block explorers—unverified contracts are red flags',
      'Common vulnerabilities: reentrancy attacks, integer overflow, unchecked external calls, poor access controls',
      'Audit reports from firms like Trail of Bits or OpenZeppelin add credibility, but aren\'t guarantees',
      'Check contract age, total value locked (TVL), and community discussion before interacting'
    ],
    example: 'Before using a new DeFi protocol, you check the contract on Etherscan. It\'s unverified, the deployer address has no transaction history, and the Telegram has 50 members. These are red flags—probably a scam. Compare this to Uniswap: verified code, audited multiple times, $4B+ TVL.',
    difficulty: 'Advanced',
    readTime: '11 min',
    takeaway: 'Never interact with unverified contracts. Look for audits from reputable firms, check the protocol\'s track record and TVL. Start with small test transactions. If you can\'t verify a contract\'s safety, don\'t use it—plenty of safe alternatives exist.'
  },
  {
    category: 'DeFi',
    title: 'Yield Farming 101',
    summary: 'Earning passive income with your crypto assets.',
    description: 'Yield farming lets you earn returns on your crypto by providing liquidity to DeFi protocols, lending assets, or staking in various pools. Think of it as putting your crypto to work instead of letting it sit idle. However, higher yields often come with higher risks—understanding these trade-offs is essential for successful yield farming.',
    points: ['Liquidity provision basics', 'APY vs APR explained', 'Risk management strategies'],
    keyPoints: [
      'Liquidity providers deposit token pairs into AMM pools and earn fees from trades plus token rewards',
      'APY (Annual Percentage Yield) includes compounding, APR (Annual Percentage Rate) doesn\'t—200% APY ≠ 200% APR',
      'Impermanent loss occurs when token prices diverge after you provide liquidity—you might have been better off holding',
      'High yields often indicate high risk: new protocols, inflationary tokens, or unsustainable emissions'
    ],
    example: 'You provide $1,000 worth of ETH-USDC liquidity to Uniswap. You earn 0.05% of all trading fees in that pool. If $10M is traded daily, you earn about $5/day ($1,825/year or 182.5% APR). But if ETH doubles while you\'re in the pool, you miss some gains (impermanent loss).',
    difficulty: 'Intermediate',
    readTime: '9 min',
    takeaway: 'Start with established protocols (Aave, Compound, Curve) offering 3-15% yields—lower but safer. Avoid yields above 100% APY unless you understand the risks. Never invest more than you can afford to lose, and always account for impermanent loss.'
  },
  {
    category: 'DeFi',
    title: 'Staking Explained',
    summary: 'Proof of Stake and earning staking rewards.',
    description: 'Staking is how Proof of Stake blockchains secure their networks. Instead of miners using electricity (Proof of Work), validators lock up crypto as collateral. In return, they earn rewards for processing transactions and creating blocks. As a delegator, you can stake your coins to validators and earn a share of their rewards—like earning interest, but you\'re helping secure the network.',
    points: ['Validator vs delegator', 'Lock-up periods and unbonding', 'Slashing risks'],
    keyPoints: [
      'Validators run nodes and need significant stake (32 ETH for Ethereum), delegators stake smaller amounts with validators',
      'Lock-up periods vary by chain: instant withdrawal (Solana) to 21 days (Cosmos) to no withdrawals yet (Ethereum pre-Shanghai)',
      'Slashing punishes validators for malicious behavior or downtime by destroying part of their stake',
      'Staking rewards typically range from 3-15% annually depending on the network and total staked amount'
    ],
    example: 'You stake 1000 ATOM with a Cosmos validator offering 12% APR. After one year, you earn 120 ATOM in rewards ($1,200 if ATOM is $10). However, if you need your ATOM back, you must wait 21 days after unstaking—your funds are locked during this period.',
    difficulty: 'Intermediate',
    readTime: '8 min',
    takeaway: 'Choose reputable validators with good uptime and reasonable commission (5-10%). Understand lock-up periods before staking—you can\'t access funds immediately. Diversify across multiple validators to reduce slashing risk.'
  },
  {
    category: 'NFTs',
    title: 'NFT Fundamentals',
    summary: 'Understanding non-fungible tokens and digital ownership.',
    description: 'NFTs (Non-Fungible Tokens) are unique digital assets on the blockchain. Unlike cryptocurrencies where 1 BTC = 1 BTC, each NFT is one-of-a-kind with a unique identifier. They can represent art, music, in-game items, domain names, event tickets, or proof of membership. NFTs prove digital ownership and authenticity in a way that was impossible before blockchain.',
    points: ['ERC-721 and ERC-1155 standards', 'Minting and marketplace basics', 'Metadata and IPFS storage'],
    keyPoints: [
      'ERC-721 tokens are unique individuals (CryptoPunks), ERC-1155 allows multiple copies of semi-fungible tokens',
      'Minting is the creation process—artists/creators upload to IPFS, deploy contract, and list on marketplaces',
      'NFT metadata (image, attributes, description) is usually stored on IPFS, not directly on-chain (too expensive)',
      'Marketplaces like OpenSea, Blur, and LooksRare charge fees (2.5-5%) when you buy/sell'
    ],
    example: 'You buy a Bored Ape NFT for 50 ETH. The blockchain records you as the owner of token #1234 in the BAYC smart contract. The actual image is stored on IPFS. You can prove ownership, transfer it, or sell it—but you don\'t "own" the image copyright unless specifically granted.',
    difficulty: 'Beginner',
    readTime: '7 min',
    takeaway: 'NFTs represent ownership, not necessarily copyright or commercial rights—read the terms. The value comes from provenance (who owned it), rarity, utility, and community. Most NFTs will go to zero—only invest in projects you believe in.'
  },
  {
    category: 'NFTs',
    title: 'NFT Valuation',
    summary: 'Assessing value in the NFT market.',
    description: 'NFT valuation is part art, part science. Unlike stocks with earnings or real estate with rental income, NFTs derive value from scarcity, utility, community strength, and cultural relevance. Learning to evaluate these factors helps you make informed decisions and avoid overpaying for hype. Remember: liquidity is low, so what you pay and what you can sell for often differ dramatically.',
    points: ['Floor price and rarity', 'Community and utility factors', 'Avoiding NFT scams'],
    keyPoints: [
      'Floor price is the cheapest listed NFT in a collection—it\'s the minimum entry point but rare traits command premiums',
      'Rarity tools rank traits by scarcity—a 1/10,000 trait is worth more than a 2,000/10,000 trait',
      'Strong communities (engaged Discord, active Twitter) often correlate with sustained value',
      'Utility (token gating, IRL benefits, game integration) gives NFTs value beyond speculation'
    ],
    example: 'A Pudgy Penguin with floor traits costs 3 ETH. But one with a rare "pirate" trait (only 50 exist) might sell for 15 ETH. The project has an active community, toy line in Walmart, and IP licensing—adding utility beyond just being a JPEG.',
    difficulty: 'Intermediate',
    readTime: '8 min',
    takeaway: 'Don\'t buy at collection launch hype—wait for floor prices to stabilize. Check rarity tools (rarity.tools, trait sniper) before buying. Beware of pump groups and fake volume. Most NFTs lose value—treat them as art/collectibles, not investments.'
  }
]

export default basicsContent
