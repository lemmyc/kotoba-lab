import { useEffect } from 'react'
import { createPersistentStore, isRecord } from './store'

export type ThemePreference = 'light' | 'dark' | 'system'

export interface Preferences {
  theme: ThemePreference
  furigana: boolean
}

/** Keep in sync with the inline script in index.html. */
export const PREFERENCES_KEY = 'kotoba-lab:prefs'

const DEFAULT_PREFERENCES: Preferences = { theme: 'system', furigana: true }

const store = createPersistentStore<Preferences>(PREFERENCES_KEY, DEFAULT_PREFERENCES, (raw) => {
  if (!isRecord(raw)) return DEFAULT_PREFERENCES
  const theme = raw.theme === 'light' || raw.theme === 'dark' || raw.theme === 'system' ? raw.theme : 'system'
  return { theme, furigana: raw.furigana !== false }
})

export const usePreferences = store.useStore
export const preferencesStore = store

export function setTheme(theme: ThemePreference) {
  store.set((prev) => ({ ...prev, theme }))
}

export function cycleTheme() {
  const order: ThemePreference[] = ['light', 'dark', 'system']
  store.set((prev) => ({ ...prev, theme: order[(order.indexOf(prev.theme) + 1) % order.length] }))
}

export function setFurigana(furigana: boolean) {
  store.set((prev) => ({ ...prev, furigana }))
}

export function toggleFurigana() {
  store.set((prev) => ({ ...prev, furigana: !prev.furigana }))
}

function prefersDark() {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyPreferences(prefs: Preferences) {
  const root = document.documentElement
  const dark = prefs.theme === 'dark' || (prefs.theme === 'system' && prefersDark())
  root.classList.toggle('dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
  root.dataset.furigana = prefs.furigana ? 'on' : 'off'
}

/** Mirrors preferences onto <html> and follows OS theme changes in "system" mode. */
export function usePreferencesEffect() {
  const prefs = usePreferences()

  useEffect(() => {
    applyPreferences(prefs)
    if (prefs.theme !== 'system' || typeof window.matchMedia !== 'function') return
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyPreferences(prefs)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [prefs])
}
