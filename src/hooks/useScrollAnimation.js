import { useEffect, useRef, useState } from 'react'

// Intersection observer hook that returns a ref and a visibility flag
function useScrollAnimation({ className = 'animate-in', threshold = 0.2 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
            setVisible(true)
          }
        })
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [className, threshold])

  return [ref, visible]
}

export default useScrollAnimation
