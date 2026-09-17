import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import { preferencesStore } from '../lib/preferences'
import { progressStore } from '../lib/progress'

afterEach(() => {
  cleanup()
  preferencesStore.reset()
  progressStore.reset()
  window.localStorage.clear()
})

// --- jsdom gaps -------------------------------------------------------
window.scrollTo = () => {}
Element.prototype.scrollIntoView = function scrollIntoView() {}

if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList
}

if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds = []
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
}
