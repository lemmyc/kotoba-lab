import { useContext, useLayoutEffect } from 'react'
import { UNSAFE_DataRouterStateContext, useLocation } from 'react-router'

/**
 * Render inside the lesson's <Suspense>: it mounts only once the lazy MDX body is in the DOM.
 * <ScrollRestoration> runs while the page is still the short skeleton, so a `#heading` link
 * or a saved position (reload, back/forward) gets lost — redo it now that the content exists.
 */
export function ScrollWhenReady() {
  const location = useLocation()
  const routerState = useContext(UNSAFE_DataRouterStateContext)
  const restore = routerState?.restoreScrollPosition

  useLayoutEffect(() => {
    if (location.hash) {
      try {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()
      } catch {
        // malformed hash — nothing to scroll to
      }
      return
    }
    if (typeof restore === 'number' && restore > window.scrollY) window.scrollTo(0, restore)
    // only when the content first appears, not on later router updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
