import { describe, expect, it } from 'vitest'
import { glossaryByChapter } from '../data/glossary'
import { lessons } from '../data/lessons'
import { quizzesByChapter } from '../data/quizzes'
import { references } from '../data/references'
import { checkContentData, countTodos } from '../lib/content-checks'
import { lessonContentSlugs } from '../lib/lesson-content'
import { checkMdxSource } from '../lib/mdx-checks'
import { mdxComponents } from '../mdx-components'

const rawLessons = import.meta.glob<string>('../content/lessons/*.mdx', { query: '?raw', import: 'default', eager: true })
const registered = Object.keys(mdxComponents).filter((name) => /^[A-Z]/.test(name))

describe('content data', () => {
  it('reads lesson sources as plain text', () => {
    expect(Object.values(rawLessons).every((source) => typeof source === 'string')).toBe(true)
  })

  it('passes all integrity checks', () => {
    expect(checkContentData({ lessons, glossaryByChapter, quizzesByChapter, references })).toEqual([])
  })

  it('has exactly one MDX file per lesson', () => {
    expect([...lessonContentSlugs].sort()).toEqual(lessons.map((lesson) => lesson.slug).sort())
  })

  it.each(Object.entries(rawLessons))('%s has no bare {expressions} or unknown components', (_, source) => {
    expect(checkMdxSource(source, registered)).toEqual([])
  })

  it('keeps "complete" lessons free of <Todo>', () => {
    for (const lesson of lessons.filter((l) => l.status === 'complete')) {
      const source = rawLessons[`../content/lessons/${lesson.slug}.mdx`]
      expect(countTodos(source), lesson.slug).toBe(0)
    }
  })
})

describe('mdx checks', () => {
  it('flags bare furigana braces and unknown components', () => {
    const issues = checkMdxSource('Từ 言語{げんご} và <Unknown />', registered)
    expect(issues.map((issue) => issue.message).join('\n')).toMatch(/げんご/)
    expect(issues.map((issue) => issue.message).join('\n')).toMatch(/Unknown/)
  })

  it('flags <Tree> bracket notation that does not parse', () => {
    const issues = checkMdxSource('<Tree t="[S [NP Tôi] [VP ăn]" />', registered)
    expect(issues.map((issue) => issue.message).join('\n')).toMatch(/Tree> sai cú pháp/)
    expect(checkMdxSource('<Tree t="[S [NP Tôi] [VP ăn]]" />', registered)).toEqual([])
  })

  it('flags unknown values of enum-like props', () => {
    const issues = checkMdxSource('<Callout type="info">x</Callout>\n\n<Summary lang="jp">y</Summary>', registered)
    const messages = issues.map((issue) => issue.message).join('\n')
    expect(messages).toMatch(/Callout type="info"/)
    expect(messages).toMatch(/Summary lang="jp"/)
    expect(checkMdxSource('<Callout type="hanviet">x</Callout>', registered)).toEqual([])
  })

  it('allows comments and furigana inside component props', () => {
    expect(checkMdxSource('{/* ghi chú */}\n\n<Ja t="言語{げんご}" />', registered)).toEqual([])
  })
})
