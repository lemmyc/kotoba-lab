/**
 * Content model for Kotoba Lab.
 *
 * Japanese strings (titleJa, ja, and any quiz text) may contain furigana markup:
 *   言語{げんご}   or   [今日]{きょう}
 * See src/lib/furigana.ts and docs/CONTENT_GUIDE.md.
 */

/** outline = khung bài, draft = đã viết nhưng cần rà soát, complete = hoàn chỉnh */
export type LessonStatus = 'outline' | 'draft' | 'complete'

export type PartId = 1 | 2 | 3 | 4

export type LangCode = 'vi' | 'en' | 'ja'

export interface Part {
  id: PartId
  title: string
  titleEn: string
  /** furigana markup allowed */
  titleJa: string
  description: string
}

export interface Lesson {
  /** URL slug and MDX filename: src/content/lessons/<slug>.mdx */
  slug: string
  number: number
  part: PartId
  title: string
  titleEn: string
  /** furigana markup allowed */
  titleJa: string
  titleJaRomaji: string
  description: string
  objectives: string[]
  /** keywords for search (any language) */
  topics: string[]
  /** estimated reading time in minutes */
  minutes: number
  status: LessonStatus
}

export interface GlossaryTerm {
  /** unique kebab-case id, e.g. "hinh-vi" */
  id: string
  /** lesson slug this term belongs to */
  chapter: string
  vi: string
  en: string
  /** IPA for the English term (General American), without slashes */
  ipaEn?: string
  /** Japanese term — furigana markup required for kanji */
  ja: string
  /** Hepburn romaji with macrons, e.g. "keitaiso", "tōgoron" */
  romaji: string
  /** Vietnamese definition (1–2 sentences) */
  definition: string
}

export interface QuizQuestion {
  /** unique id, e.g. "cu-phap-hoc-01" */
  id: string
  /** furigana markup allowed */
  question: string
  options: string[]
  /** index into options */
  answer: number
  explanation: string
  /** language the question focuses on (shown as a tag) */
  lang?: LangCode
}

export interface Reference {
  id: string
  authors: string
  year?: number
  title: string
  publisher?: string
  /** which language the work focuses on; 'general' = general linguistics */
  focus: LangCode | 'general'
  kind: 'textbook' | 'article' | 'online'
  url?: string
  note?: string
  /** lesson slugs this reference is most useful for */
  chapters?: string[]
}
