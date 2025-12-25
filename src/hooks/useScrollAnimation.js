import { useEffect, useRef, useState } from 'react'

// Intersection observer hook that returns a ref and a visibility flag
function useScrollAnimation({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true) // Fallback for no IntersectionObserver support
      return
    }

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia?.('(max-width: 430px)').matches

    // If user prefers reduced motion, reveal immediately without animating
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.unobserve(element) // Only trigger once
        }
      },
      {
        // On mobile, reveal earlier for snappier appearance
        threshold: isMobile ? Math.min(threshold, 0.06) : threshold,
        rootMargin: isMobile ? '0px 0px -20%' : rootMargin
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, isVisible])

  return [ref, isVisible]
}

export default useScrollAnimation
