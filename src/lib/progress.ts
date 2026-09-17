import { createPersistentStore, isRecord } from './store'

export interface QuizRecord {
  best: number
  last: number
  total: number
  attempts: number
  at: string
}

export type CardStatus = 'known' | 'learning'

export interface Progress {
  completed: string[]
  quiz: Record<string, QuizRecord>
  cards: Record<string, CardStatus>
}

export const PROGRESS_KEY = 'kotoba-lab:v1'

const EMPTY_PROGRESS: Progress = { completed: [], quiz: {}, cards: {} }

function sanitize(raw: unknown): Progress {
  if (!isRecord(raw)) return EMPTY_PROGRESS
  const completed = Array.isArray(raw.completed) ? raw.completed.filter((s): s is string => typeof s === 'string') : []
  const quiz: Record<string, QuizRecord> = {}
  if (isRecord(raw.quiz)) {
    for (const [slug, value] of Object.entries(raw.quiz)) {
      if (isRecord(value) && typeof value.best === 'number' && typeof value.total === 'number') {
        quiz[slug] = {
          best: value.best,
          last: typeof value.last === 'number' ? value.last : value.best,
          total: value.total,
          attempts: typeof value.attempts === 'number' ? value.attempts : 1,
          at: typeof value.at === 'string' ? value.at : new Date(0).toISOString(),
        }
      }
    }
  }
  const cards: Record<string, CardStatus> = {}
  if (isRecord(raw.cards)) {
    for (const [id, value] of Object.entries(raw.cards)) {
      if (value === 'known' || value === 'learning') cards[id] = value
    }
  }
  return { completed, quiz, cards }
}

const store = createPersistentStore<Progress>(PROGRESS_KEY, EMPTY_PROGRESS, sanitize)

export const useProgress = store.useStore
export const progressStore = store

export function setLessonCompleted(slug: string, done: boolean) {
  store.set((prev) => {
    const others = prev.completed.filter((s) => s !== slug)
    return { ...prev, completed: done ? [...others, slug] : others }
  })
}

export function recordQuizResult(slug: string, score: number, total: number) {
  store.set((prev) => {
    const existing = prev.quiz[slug]
    const best = existing && existing.total === total ? Math.max(existing.best, score) : score
    return {
      ...prev,
      quiz: {
        ...prev.quiz,
        [slug]: { best, last: score, total, attempts: (existing?.attempts ?? 0) + 1, at: new Date().toISOString() },
      },
    }
  })
}

export function setCardStatus(termId: string, status: CardStatus) {
  store.set((prev) => ({ ...prev, cards: { ...prev.cards, [termId]: status } }))
}

export function resetProgress() {
  store.reset()
}
