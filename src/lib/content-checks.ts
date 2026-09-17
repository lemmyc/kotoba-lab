import { hasBrokenFurigana } from './furigana'
import type { GlossaryTerm, Lesson, QuizQuestion, Reference } from '../data/types'

export interface ContentData {
  lessons: Lesson[]
  glossaryByChapter: Record<string, GlossaryTerm[]>
  quizzesByChapter: Record<string, QuizQuestion[]>
  references: Reference[]
}

/**
 * Pure integrity checks shared by `npm run check:content` and the test suite.
 * Returns a list of human-readable error messages (empty = OK).
 */
export function checkContentData({ lessons, glossaryByChapter, quizzesByChapter, references }: ContentData) {
  const errors: string[] = []
  const slugs = new Set<string>()

  lessons.forEach((lesson, index) => {
    const where = `lessons.ts › ${lesson.slug || `#${index}`}`
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(lesson.slug)) errors.push(`${where}: slug phải là kebab-case không dấu`)
    if (slugs.has(lesson.slug)) errors.push(`${where}: slug bị trùng`)
    slugs.add(lesson.slug)
    if (lesson.number !== index + 1) errors.push(`${where}: number phải là ${index + 1} (theo thứ tự trong mảng)`)
    for (const key of ['title', 'titleEn', 'titleJa', 'titleJaRomaji', 'description'] as const) {
      if (!lesson[key].trim()) errors.push(`${where}: thiếu ${key}`)
    }
    if (hasBrokenFurigana(lesson.titleJa)) errors.push(`${where}: furigana trong titleJa sai cú pháp`)
    if (lesson.objectives.length === 0) errors.push(`${where}: cần ít nhất một mục tiêu bài học`)
    if (lesson.minutes <= 0) errors.push(`${where}: minutes phải > 0`)
  })

  const termIds = new Set<string>()
  for (const [chapter, terms] of Object.entries(glossaryByChapter)) {
    if (!slugs.has(chapter)) errors.push(`glossary/${chapter}.ts: không có chương nào với slug này`)
    for (const term of terms) {
      const where = `glossary/${chapter}.ts › ${term.id}`
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(term.id)) errors.push(`${where}: id phải là kebab-case không dấu`)
      if (termIds.has(term.id)) errors.push(`${where}: id bị trùng với thuật ngữ khác`)
      termIds.add(term.id)
      if (term.chapter !== chapter) errors.push(`${where}: chapter là "${term.chapter}" nhưng nằm trong file ${chapter}.ts`)
      for (const key of ['vi', 'en', 'ja', 'romaji', 'definition'] as const) {
        if (!term[key].trim()) errors.push(`${where}: thiếu ${key}`)
      }
      if (hasBrokenFurigana(term.ja) || hasBrokenFurigana(term.definition)) {
        errors.push(`${where}: furigana sai cú pháp`)
      }
      if (term.ipaEn && /^[/[]|[/\]]$/.test(term.ipaEn)) errors.push(`${where}: ipaEn không cần dấu / hoặc []`)
    }
  }

  const questionIds = new Set<string>()
  for (const [chapter, questions] of Object.entries(quizzesByChapter)) {
    if (!slugs.has(chapter)) errors.push(`quizzes/${chapter}.ts: không có chương nào với slug này`)
    for (const q of questions) {
      const where = `quizzes/${chapter}.ts › ${q.id}`
      if (questionIds.has(q.id)) errors.push(`${where}: id bị trùng`)
      questionIds.add(q.id)
      if (!q.question.trim()) errors.push(`${where}: thiếu nội dung câu hỏi`)
      if (q.options.length < 2) errors.push(`${where}: cần ít nhất 2 phương án`)
      if (new Set(q.options).size !== q.options.length) errors.push(`${where}: có phương án bị trùng`)
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
        errors.push(`${where}: answer=${q.answer} nằm ngoài phạm vi options`)
      }
      if (!q.explanation.trim()) errors.push(`${where}: thiếu giải thích`)
      if ([q.question, q.explanation, ...q.options].some(hasBrokenFurigana)) errors.push(`${where}: furigana sai cú pháp`)
    }
  }

  const referenceIds = new Set<string>()
  for (const ref of references) {
    if (referenceIds.has(ref.id)) errors.push(`references.ts › ${ref.id}: id bị trùng`)
    referenceIds.add(ref.id)
    for (const chapter of ref.chapters ?? []) {
      if (!slugs.has(chapter)) errors.push(`references.ts › ${ref.id}: chương "${chapter}" không tồn tại`)
    }
  }

  return errors
}

/** Counts `<Todo>` placeholder blocks (at line start) left in an MDX source. */
export function countTodos(mdxSource: string) {
  return (mdxSource.match(/^\s*<Todo\b/gm) ?? []).length
}
