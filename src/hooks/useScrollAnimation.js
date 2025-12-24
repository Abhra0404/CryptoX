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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.unobserve(element) // Only trigger once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, isVisible])

  return [ref, isVisible]
}

export default useScrollAnimation
