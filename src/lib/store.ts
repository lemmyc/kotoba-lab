import { useSyncExternalStore } from 'react'

/**
 * Tiny localStorage-backed store read through useSyncExternalStore.
 * Survives private mode / blocked storage by falling back to in-memory state.
 */
export function createPersistentStore<T>(key: string, fallback: T, sanitize: (raw: unknown) => T) {
  let state: T | undefined
  const listeners = new Set<() => void>()

  function read(): T {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? sanitize(JSON.parse(raw)) : fallback
    } catch {
      return fallback
    }
  }

  function get(): T {
    if (state === undefined) state = read()
    return state
  }

  function emit() {
    listeners.forEach((listener) => listener())
  }

  function set(updater: (prev: T) => T) {
    state = updater(get())
    try {
      window.localStorage.setItem(key, JSON.stringify(state))
    } catch {
      // storage unavailable — keep the in-memory value
    }
    emit()
  }

  function onStorage(event: StorageEvent) {
    if (event.key !== key && event.key !== null) return
    state = read()
    emit()
  }

  function subscribe(listener: () => void) {
    if (listeners.size === 0) window.addEventListener('storage', onStorage)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
      if (listeners.size === 0) window.removeEventListener('storage', onStorage)
    }
  }

  function reset() {
    set(() => fallback)
  }

  /** Re-read from storage (used by tests). */
  function reload() {
    state = read()
    emit()
  }

  function useStore() {
    return useSyncExternalStore(subscribe, get, () => fallback)
  }

  return { get, set, subscribe, reset, reload, useStore }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
