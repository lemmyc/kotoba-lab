/**
 * npm run check:content
 *
 * Validates lesson data + MDX and prints an authoring progress report.
 * Exits with code 1 when any error is found.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { glossaryByChapter } from '../src/data/glossary/index.ts'
import { lessons } from '../src/data/lessons.ts'
import { quizzesByChapter } from '../src/data/quizzes/index.ts'
import { references } from '../src/data/references.ts'
import { checkContentData, countTodos } from '../src/lib/content-checks.ts'
import { checkMdxSource } from '../src/lib/mdx-checks.ts'

const LESSON_DIR = join(import.meta.dirname, '..', 'src', 'content', 'lessons')
const MDX_COMPONENTS_FILE = join(import.meta.dirname, '..', 'src', 'mdx-components.tsx')

/** Component names registered in the MDX map (PascalCase keys of `mdxComponents`). */
function registeredComponents() {
  const source = readFileSync(MDX_COMPONENTS_FILE, 'utf8')
  const block = source.slice(source.indexOf('export const mdxComponents'))
  return [...block.matchAll(/^\s+([A-Z]\w*),?$/gm)].map((match) => match[1])
}

const errors = checkContentData({ lessons, glossaryByChapter, quizzesByChapter, references })
const warnings: string[] = []

const mdxFiles = readdirSync(LESSON_DIR).filter((file) => file.endsWith('.mdx'))
const mdxSlugs = new Set(mdxFiles.map((file) => file.replace(/\.mdx$/, '')))
const components = registeredComponents()

for (const lesson of lessons) {
  if (!mdxSlugs.has(lesson.slug)) errors.push(`content/lessons/${lesson.slug}.mdx: thiếu file nội dung`)
}
for (const slug of mdxSlugs) {
  if (!lessons.some((lesson) => lesson.slug === slug)) errors.push(`content/lessons/${slug}.mdx: không có trong lessons.ts`)
}

const rows = lessons.map((lesson) => {
  const file = join(LESSON_DIR, `${lesson.slug}.mdx`)
  let todos = 0
  if (mdxSlugs.has(lesson.slug)) {
    const source = readFileSync(file, 'utf8')
    todos = countTodos(source)
    for (const issue of checkMdxSource(source, components)) {
      errors.push(`content/lessons/${lesson.slug}.mdx:${issue.line}: ${issue.message}`)
    }
  }
  const terms = glossaryByChapter[lesson.slug]?.length ?? 0
  const questions = quizzesByChapter[lesson.slug]?.length ?? 0

  if (lesson.status === 'complete' && todos > 0) {
    errors.push(`${lesson.slug}: status "complete" nhưng còn ${todos} <Todo>`)
  }
  if (lesson.status !== 'outline' && questions < 10) {
    warnings.push(`${lesson.slug}: status "${lesson.status}" nhưng mới có ${questions}/10 câu quiz`)
  }

  return {
    '#': lesson.number,
    slug: lesson.slug,
    status: lesson.status,
    todo: todos,
    'thuật ngữ': terms,
    quiz: questions,
  }
})

console.log('\nKotoba Lab — báo cáo nội dung\n')
console.table(rows)
const totalTodos = rows.reduce((sum, row) => sum + row.todo, 0)
console.log(`Tổng: ${lessons.length} chương · ${totalTodos} <Todo> còn lại · ${Object.values(glossaryByChapter).flat().length} thuật ngữ · ${Object.values(quizzesByChapter).flat().length} câu quiz\n`)

if (warnings.length > 0) {
  console.log(`⚠ ${warnings.length} cảnh báo:`)
  warnings.forEach((warning) => console.log(`  - ${warning}`))
  console.log()
}

if (errors.length > 0) {
  console.error(`✖ ${errors.length} lỗi:`)
  errors.forEach((error) => console.error(`  - ${error}`))
  process.exit(1)
}

console.log('✔ Dữ liệu nội dung hợp lệ.')
