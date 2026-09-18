import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getAdjacentLessons } from '../data/lessons'
import { isTypingTarget } from './utils'

/**
 * Shift+← / Shift+→ move to the previous / next chapter.
 * Ignored while typing, with other modifiers, on key repeat, or when a dialog (search) is open.
 * (Alt+← / Alt+→ are the browser's Back / Forward; [ and ] turn into ư / ơ with Telex input.)
 */
export function useChapterShortcuts(slug: string) {
  const navigate = useNavigate()

  useEffect(() => {
    const { prev, next } = getAdjacentLessons(slug)
    function onKeyDown(event: KeyboardEvent) {
      if (!event.shiftKey || event.ctrlKey || event.metaKey || event.altKey || event.repeat || event.defaultPrevented) return
      const target = event.key === 'ArrowLeft' ? prev : event.key === 'ArrowRight' ? next : undefined
      if (!target || isTypingTarget(event.target) || document.querySelector('[aria-modal="true"]')) return
      event.preventDefault()
      navigate(`/bai-hoc/${target.slug}`)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [slug, navigate])
}
