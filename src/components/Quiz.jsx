import { useState } from 'react'
import { Link } from 'react-router-dom'

const quizData = {
  Fundamentals: [
    {
      question: 'What does a private key control?',
      options: ['Reading blockchain data', 'Sending transactions from an address', 'Viewing cryptocurrency prices', 'Signing into a fiat bank account'],
      answer: 1,
      explanation: 'Private keys give you the ability to sign and send transactions from your wallet address.'
    },
    {
      question: 'What is the purpose of a seed phrase?',
      options: ['To login to exchanges', 'To recover your entire wallet', 'To speed up transactions', 'To reduce gas fees'],
      answer: 1,
      explanation: 'A seed phrase (12-24 words) can restore access to all your accounts in a wallet.'
    },
    {
      question: 'What does gas refer to in blockchain?',
      options: ['Cryptocurrency price', 'Transaction fees', 'Mining equipment', 'Internet speed'],
      answer: 1,
      explanation: 'Gas is the fee paid to validators/miners to process your transaction on the network.'
    }
  ],
  Security: [
    {
      question: 'Which is the MOST secure way to store large amounts of crypto?',
      options: ['Exchange account', 'Mobile wallet', 'Hardware wallet', 'Desktop wallet'],
      answer: 2,
      explanation: 'Hardware wallets keep your private keys offline, protecting them from online threats.'
    },
    {
      question: 'What should you NEVER do with your private key?',
      options: ['Store it offline', 'Share it with anyone', 'Back it up', 'Write it down'],
      answer: 1,
      explanation: 'Never share your private key. Anyone with it has full control of your funds.'
    },
    {
      question: 'What is a common sign of a phishing website?',
      options: ['HTTPS connection', 'Slightly misspelled URL', 'Official logo', 'Contact information'],
      answer: 1,
      explanation: 'Scammers often create fake sites with URLs that look similar but have small spelling differences.'
    }
  ],
  DeFi: [
    {
      question: 'What does DeFi stand for?',
      options: ['Digital Finance', 'Decentralized Finance', 'Default Finance', 'Defined Finance'],
      answer: 1,
      explanation: 'DeFi means Decentralized Finance - financial services without traditional intermediaries.'
    },
    {
      question: 'What is impermanent loss?',
      options: ['Losing your password', 'Temporary loss from providing liquidity', 'Permanent loss from scams', 'Loss from high gas fees'],
      answer: 1,
      explanation: 'Impermanent loss occurs when token prices change after you provide liquidity to a pool.'
    },
    {
      question: 'What is a liquidity pool?',
      options: ['A type of wallet', 'Collection of tokens for trading', 'Mining equipment', 'Exchange feature'],
      answer: 1,
      explanation: 'Liquidity pools are collections of tokens locked in smart contracts to enable decentralized trading.'
    }
  ],
  Trading: [
    {
      question: 'What is slippage in crypto trading?',
      options: ['Transaction fee', 'Price difference between order and execution', 'Network delay', 'Wallet error'],
      answer: 1,
      explanation: 'Slippage is the difference between the expected price and the actual execution price of a trade.'
    },
    {
      question: 'What does HODL mean?',
      options: ['Hold Only During Loss', 'Hold On for Dear Life', 'High Order Deal Limit', 'Hedge Options Derivative Limit'],
      answer: 1,
      explanation: 'HODL means holding your crypto long-term despite market volatility. It originated from a typo of "hold".'
    },
    {
      question: 'What is Dollar-Cost Averaging (DCA)?',
      options: ['Buying all at once', 'Investing fixed amounts regularly', 'Selling at ATH', 'Day trading strategy'],
      answer: 1,
      explanation: 'DCA involves investing a fixed amount at regular intervals, regardless of price, to reduce timing risk.'
    }
  ]
}

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState('Fundamentals')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [categoryScores, setCategoryScores] = useState({})

  const categories = Object.keys(quizData)
  const currentQuestions = quizData[selectedCategory]
  const currentQuestion = currentQuestions[currentIdx]

  const handleOptionSelect = (idx) => {
    if (selected !== null) return
    
    setSelected(idx)
    setShowExplanation(true)
    
    if (idx === currentQuestion.answer) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx + 1 < currentQuestions.length) {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setShowExplanation(false)
    } else {
      setCategoryScores(prev => ({
        ...prev,
        [selectedCategory]: score + (selected === currentQuestion.answer ? 1 : 0)
      }))
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setScore(0)
    setShowResult(false)
    setSelected(null)
    setShowExplanation(false)
  }

  const changeCategory = (cat) => {
    setSelectedCategory(cat)
    resetQuiz()
  }

  const totalAttempted = Object.keys(categoryScores).length
  const totalCorrect = Object.values(categoryScores).reduce((a, b) => a + b, 0)
  const totalPossible = totalAttempted * 3

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300">
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="mb-6 sm:mb-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-emerald-200">🎯 Test yourself</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">Knowledge Quiz</h2>
          <p className="mt-2 text-sm sm:text-lg text-slate-400">Test your crypto knowledge across different topics</p>
        </div>

        {/* Overall Progress */}
        {totalAttempted > 0 && (
          <div className="mb-6 sm:mb-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-4 sm:p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Your Overall Progress</h3>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-400">Total Score</span>
              <span className="font-semibold text-white">{totalCorrect} / {totalPossible}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-800">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${(totalCorrect / totalPossible) * 100}%` }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(cat => (
                categoryScores[cat] !== undefined && (
                  <div key={cat} className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1 text-sm">
                    <span className="text-slate-300">{cat}:</span> 
                    <span className="ml-2 font-semibold text-white">{categoryScores[cat]}/3</span>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Category Selection */}
        <div className="mb-6 sm:mb-8">
          <h3 className="mb-4 text-lg font-semibold text-white">Choose a Category</h3>
          <div className="grid gap-2 sm:gap-3 md:grid-cols-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => changeCategory(cat)}
                disabled={showResult && cat === selectedCategory}
                className={`rounded-xl border p-3 sm:p-4 text-left transition ${
                  selectedCategory === cat
                    ? 'border-emerald-400/40 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                    : 'border-white/10 bg-slate-900/60 hover:border-white/30 hover:bg-slate-900/80'
                } disabled:opacity-50`}
              >
                <p className="mb-1 text-sm font-semibold text-white">{cat}</p>
                <p className="text-xs text-slate-400">3 questions</p>
                {categoryScores[cat] !== undefined && (
                  <p className="mt-2 text-xs font-medium text-emerald-300">
                    ✓ Completed: {categoryScores[cat]}/3
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Content */}
        {showResult ? (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 text-center">
            <div className="mb-6">
              <p className="text-5xl sm:text-6xl mb-4">
                {score === currentQuestions.length ? '🎉' : score >= 2 ? '👏' : '📚'}
              </p>
              <h3 className="mb-2 text-2xl sm:text-3xl font-bold text-white">
                {score === currentQuestions.length ? 'Perfect Score!' : score >= 2 ? 'Well Done!' : 'Keep Learning!'}
              </h3>
              <p className="text-lg sm:text-xl text-slate-300">
                You scored <span className="font-bold text-emerald-300">{score}</span> out of{' '}
                <span className="font-bold text-white">{currentQuestions.length}</span>
              </p>
            </div>
            <div className="mb-6 h-4 rounded-full bg-slate-800">
              <div 
                className="h-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000"
                style={{ width: `${(score / currentQuestions.length) * 100}%` }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="rounded-full bg-emerald-500 px-6 py-3 min-h-[44px] text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  const currentCatIndex = categories.indexOf(selectedCategory)
                  const nextCat = categories[(currentCatIndex + 1) % categories.length]
                  changeCategory(nextCat)
                }}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 min-h-[44px] text-sm sm:text-base font-semibold text-white transition hover:bg-white/10"
              >
                Next Category
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-300">
                  Question {currentIdx + 1} of {currentQuestions.length}
                </span>
                <span className="font-medium text-emerald-300">
                  Score: {score}/{currentQuestions.length}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / currentQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-white">{currentQuestion.question}</h3>

            {/* Options */}
            <ul className="mb-6 space-y-2 sm:space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isCorrect = idx === currentQuestion.answer
                const isSelected = idx === selected
                const showFeedback = selected !== null

                return (
                  <li
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`cursor-pointer rounded-xl border p-3 sm:p-4 min-h-[44px] transition ${
                      showFeedback && isSelected
                        ? isCorrect
                          ? 'border-emerald-400 bg-emerald-500/20 text-white'
                          : 'border-rose-400 bg-rose-500/20 text-white'
                        : showFeedback && isCorrect
                        ? 'border-emerald-400/40 bg-emerald-500/10'
                        : 'border-white/10 bg-slate-900/40 hover:border-white/30 hover:bg-slate-900/60'
                    } ${selected !== null ? 'pointer-events-none' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm">{opt}</span>
                      {showFeedback && isSelected && (
                        <span className="text-xl sm:text-2xl">
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                      {showFeedback && !isSelected && isCorrect && (
                        <span className="text-xl sm:text-2xl">✓</span>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-cyan-200">
                  Explanation:
                </p>
                <p className="text-xs sm:text-sm text-slate-300">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {selected !== null && (
              <button
                onClick={handleNext}
                className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 min-h-[44px] text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
              >
                {currentIdx + 1 < currentQuestions.length ? 'Next Question →' : 'See Results'}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Quiz
