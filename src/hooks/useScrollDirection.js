import { useEffect } from "react"
import { useState } from "react"

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [currentScrollTop, setCurrentScrollTop] = useState(0)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const isTop = (!currentScrollTop && !lastScrollTop) || !currentScrollTop

  useEffect(() => {
    let updateScrollDirection

    let lastScrollY = window.pageYOffset
    setLastScrollTop(lastScrollY)

    updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"

      if (scrollY) {
        setCurrentScrollTop(scrollY)
      } else {
        setCurrentScrollTop(scrollY)
      }

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener("scroll", updateScrollDirection)

    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return { scrollDirection, isTop }
}
