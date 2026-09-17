import { furiganaReading, stripFurigana } from './furigana'
import { normalizeText } from './utils'
import type { GlossaryTerm, Lesson } from '../data/types'

export type SearchResult =
  | { kind: 'lesson'; lesson: Lesson; score: number }
  | { kind: 'term'; term: GlossaryTerm; score: number }

/** [text, weight] — titles/terms weigh more than descriptions. */
type WeightedField = readonly [string, number]

function fieldScore(field: string, query: string) {
  if (!field) return 0
  if (field === query) return 100
  if (field.startsWith(query)) return 60
  if (field.includes(` ${query}`)) return 45
  if (field.includes(query)) return 30
  return 0
}

/** Every token must match some field; multi-word queries get a bonus for a phrase hit. */
function scoreFields(fields: WeightedField[], query: string) {
  const normalized = fields.map(([text, weight]) => [normalizeText(text), weight] as const)
  const best = (needle: string) => Math.max(0, ...normalized.map(([text, weight]) => fieldScore(text, needle) * weight))

  const tokens = query.split(' ')
  let tokenScore = 0
  for (const token of tokens) {
    const score = best(token)
    if (score === 0) return 0
    tokenScore += score
  }
  const phraseScore = tokens.length > 1 ? best(query) : 0
  return tokenScore / tokens.length + phraseScore
}

function lessonFields(lesson: Lesson): WeightedField[] {
  return [
    [lesson.title, 1],
    [lesson.titleEn, 1],
    [stripFurigana(lesson.titleJa), 1],
    [furiganaReading(lesson.titleJa), 0.9],
    [lesson.titleJaRomaji, 0.9],
    [`chuong ${lesson.number}`, 0.8],
    ...lesson.topics.map((topic) => [topic, 0.7] as const),
    [lesson.description, 0.4],
  ]
}

function termFields(term: GlossaryTerm): WeightedField[] {
  return [
    [term.vi, 1],
    [term.en, 1],
    [stripFurigana(term.ja), 1],
    [furiganaReading(term.ja), 0.9],
    [term.romaji, 0.9],
    [term.definition, 0.3],
  ]
}

export function searchContent(rawQuery: string, lessons: Lesson[], terms: GlossaryTerm[], limit = 12): SearchResult[] {
  const query = normalizeText(rawQuery)
  if (!query) return []

  const results: SearchResult[] = []
  for (const lesson of lessons) {
    const score = scoreFields(lessonFields(lesson), query)
    if (score > 0) results.push({ kind: 'lesson', lesson, score: score * 1.1 })
  }
  for (const term of terms) {
    const score = scoreFields(termFields(term), query)
    if (score > 0) results.push({ kind: 'term', term, score })
  }
  return results.sort((a, b) => b.score - a.score).slice(0, limit)
}

export function matchesTerm(term: GlossaryTerm, rawQuery: string) {
  const query = normalizeText(rawQuery)
  return !query || scoreFields(termFields(term), query) > 0
}
