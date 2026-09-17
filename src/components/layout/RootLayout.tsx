import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useNavigation } from 'react-router'
import { toggleFurigana, usePreferencesEffect } from '../../lib/preferences'
import { isTypingTarget } from '../../lib/utils'
import { Footer } from './Footer'
import { Header } from './Header'

export default function RootLayout() {
  const navigation = useNavigation()
  usePreferencesEffect()

  // Global shortcut: F toggles furigana (ignored while typing or with modifiers).
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== 'f' || event.repeat) return
      if (event.ctrlKey || event.metaKey || event.altKey) return
      if (isTypingTarget(event.target)) return
      toggleFurigana()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-[80] rounded-lg bg-brand px-4 py-2 text-brand-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Bỏ qua điều hướng
      </a>
      {navigation.state === 'loading' && (
        <div className="fixed inset-x-0 top-0 z-[60] h-0.5 animate-pulse bg-accent-bright" role="progressbar" aria-label="Đang tải trang" />
      )}
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
