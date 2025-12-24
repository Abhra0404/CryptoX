const basicsContent = [
  {
    category: 'Foundations',
    title: 'How wallets work',
    summary: 'Keys, addresses, and how signatures move value on-chain.',
    points: ['Seed vs private key', 'EOA vs smart accounts', 'Signing and gas basics'],
    difficulty: 'Beginner',
    readTime: '5 min'
  },
  {
    category: 'Foundations',
    title: 'Understanding Blockchain',
    summary: 'Learn how distributed ledgers work and why they matter.',
    points: ['Distributed ledger technology', 'Consensus mechanisms explained', 'Block creation and mining'],
    difficulty: 'Beginner',
    readTime: '7 min'
  },
  {
    category: 'Foundations',
    title: 'Public vs Private Keys',
    summary: 'The cryptographic foundation of cryptocurrency security.',
    points: ['Asymmetric cryptography basics', 'Key pair generation', 'Why you never share private keys'],
    difficulty: 'Beginner',
    readTime: '6 min'
  },
  {
    category: 'Networks',
    title: 'Chains and tokens',
    summary: 'Blockspace, consensus, and why tokens exist on multiple chains.',
    points: ['L1 vs L2 vs sidechains', 'Bridging patterns', 'Native vs wrapped assets'],
    difficulty: 'Intermediate',
    readTime: '8 min'
  },
  {
    category: 'Networks',
    title: 'Gas Fees Explained',
    summary: 'Understanding transaction costs across different blockchains.',
    points: ['Gas price vs gas limit', 'EIP-1559 and base fees', 'Optimizing transaction costs'],
    difficulty: 'Intermediate',
    readTime: '6 min'
  },
  {
    category: 'Networks',
    title: 'Layer 2 Solutions',
    summary: 'Scaling Ethereum with rollups and sidechains.',
    points: ['Optimistic vs ZK rollups', 'State channels and plasma', 'When to use L2s'],
    difficulty: 'Advanced',
    readTime: '10 min'
  },
  {
    category: 'Trading',
    title: 'Order types 101',
    summary: 'Market, limit, and stop orders plus when to use each.',
    points: ['Price impact and slippage', 'Liquidity venues', 'Fees and rebates'],
    difficulty: 'Intermediate',
    readTime: '7 min'
  },
  {
    category: 'Trading',
    title: 'DeFi Trading Basics',
    summary: 'Trading on decentralized exchanges and liquidity pools.',
    points: ['AMMs and liquidity pools', 'Impermanent loss explained', 'DEX aggregators'],
    difficulty: 'Intermediate',
    readTime: '9 min'
  },
  {
    category: 'Trading',
    title: 'Technical Analysis Fundamentals',
    summary: 'Reading charts and identifying trading opportunities.',
    points: ['Support and resistance levels', 'Common chart patterns', 'Indicator basics (RSI, MACD)'],
    difficulty: 'Advanced',
    readTime: '12 min'
  },
  {
    category: 'Security',
    title: 'Staying safe',
    summary: 'Operational hygiene to protect your capital and credentials.',
    points: ['Device separation', 'Approval hygiene', 'Phishing red flags'],
    difficulty: 'Essential',
    readTime: '8 min'
  },
  {
    category: 'Security',
    title: 'Hardware Wallets',
    summary: 'Cold storage solutions for maximum security.',
    points: ['Ledger vs Trezor comparison', 'Setting up your hardware wallet', 'Recovery phrase backup strategies'],
    difficulty: 'Beginner',
    readTime: '10 min'
  },
  {
    category: 'Security',
    title: 'Smart Contract Security',
    summary: 'Identifying risks before interacting with contracts.',
    points: ['Contract verification on Etherscan', 'Common vulnerabilities', 'Audit reports and what to look for'],
    difficulty: 'Advanced',
    readTime: '11 min'
  },
  {
    category: 'DeFi',
    title: 'Yield Farming 101',
    summary: 'Earning passive income with your crypto assets.',
    points: ['Liquidity provision basics', 'APY vs APR explained', 'Risk management strategies'],
    difficulty: 'Intermediate',
    readTime: '9 min'
  },
  {
    category: 'DeFi',
    title: 'Staking Explained',
    summary: 'Proof of Stake and earning staking rewards.',
    points: ['Validator vs delegator', 'Lock-up periods and unbonding', 'Slashing risks'],
    difficulty: 'Intermediate',
    readTime: '8 min'
  },
  {
    category: 'NFTs',
    title: 'NFT Fundamentals',
    summary: 'Understanding non-fungible tokens and digital ownership.',
    points: ['ERC-721 and ERC-1155 standards', 'Minting and marketplace basics', 'Metadata and IPFS storage'],
    difficulty: 'Beginner',
    readTime: '7 min'
  },
  {
    category: 'NFTs',
    title: 'NFT Valuation',
    summary: 'Assessing value in the NFT market.',
    points: ['Floor price and rarity', 'Community and utility factors', 'Avoiding NFT scams'],
    difficulty: 'Intermediate',
    readTime: '8 min'
  }
]

export default basicsContent
