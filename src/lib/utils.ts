import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Katakana → hiragana so "ゲンゴ" and "げんご" match in search. */
export function toHiragana(input: string) {
  return input.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60))
}

/**
 * Normalises text for accent-insensitive search:
 * strips Vietnamese diacritics and romaji macrons, đ → d, katakana → hiragana,
 * drops apostrophes (on'inron → oninron) and collapses whitespace.
 */
export function normalizeText(input: string) {
  const stripped = input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/['’ʼ]/g, '')
    .normalize('NFC')
  return toHiragana(stripped).replace(/\s+/g, ' ').trim()
}

export function pluralize(count: number, unit: string) {
  return `${count.toLocaleString('vi-VN')} ${unit}`
}

export function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
  } catch {
    return iso
  }
}

/** Deterministic shuffle (mulberry32) so a given seed always yields the same order. */
export function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const result = [...items]
  let state = seed >>> 0
  const random = () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}
