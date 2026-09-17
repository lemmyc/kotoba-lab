import { useEffect, useRef } from 'react'

/** Thin bar under the header showing how far the page has been scrolled. */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-40 h-0.5 bg-transparent" aria-hidden>
      <div ref={barRef} className="h-full origin-left bg-accent-bright" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
