import { useState, useEffect } from 'react'

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      
      // Only show prompt if user hasn't dismissed it before
      const dismissed = localStorage.getItem('pwa-prompt-dismissed')
      if (!dismissed) {
        setShowPrompt(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('PWA installed')
    }
    
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompt-dismissed', 'true')
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 animate-slideUp">
      <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/95 backdrop-blur-xl p-5 shadow-2xl shadow-emerald-500/20">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500">
            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.9"/>
              <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor" opacity="0.7"/>
              <path d="M2 12L12 17L22 12V7L12 12L2 7V12Z" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-1">
              Install CryptoX App
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Access lessons offline, get faster load times, and enjoy a native app experience.
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleInstall}
                className="flex-1 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 hover:scale-105"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/10"
              >
                Not now
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-slate-400 transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstallPrompt
