import { describe, expect, it } from 'vitest'
import { glossary } from '../data/glossary'
import { lessons } from '../data/lessons'
import { furiganaReading, hasBrokenFurigana, parseFurigana, stripFurigana } from '../lib/furigana'
import { searchContent } from '../lib/search'
import { normalizeText } from '../lib/utils'

describe('normalizeText', () => {
  it('strips Vietnamese diacritics and đ', () => {
    expect(normalizeText('Ngôn Ngữ Học')).toBe('ngon ngu hoc')
    expect(normalizeText('ĐƯỜNG  đi')).toBe('duong di')
  })

  it('folds romaji macrons, apostrophes and katakana', () => {
    expect(normalizeText('Tōgoron')).toBe('togoron')
    expect(normalizeText("On'inron")).toBe('oninron')
    expect(normalizeText('ゲンゴ')).toBe('げんご')
  })
})

describe('furigana markup', () => {
  it('parses kanji runs and explicit [base]{reading}', () => {
    expect(parseFurigana('言語{げんご}とは何{なに}か')).toEqual([
      { text: '言語', reading: 'げんご' },
      { text: 'とは' },
      { text: '何', reading: 'なに' },
      { text: 'か' },
    ])
    expect(parseFurigana('[今日]{きょう}')).toEqual([{ text: '今日', reading: 'きょう' }])
  })

  it('strips markup or converts it to its reading', () => {
    expect(stripFurigana('私{わたし}は本{ほん}を読{よ}む')).toBe('私は本を読む')
    expect(furiganaReading('私{わたし}は本{ほん}を読{よ}む')).toBe('わたしはほんをよむ')
    expect(stripFurigana('Tiếng Việt không đổi')).toBe('Tiếng Việt không đổi')
  })

  it('detects broken markup', () => {
    expect(hasBrokenFurigana('言語{げんご')).toBe(true)
    expect(hasBrokenFurigana('げんご}')).toBe(true)
    expect(hasBrokenFurigana('言語{げんご}')).toBe(false)
  })
})

describe('searchContent', () => {
  const search = (query: string) => searchContent(query, lessons, glossary)
  const lessonSlugs = (query: string) => search(query).flatMap((r) => (r.kind === 'lesson' ? [r.lesson.slug] : []))
  const termIds = (query: string) => search(query).flatMap((r) => (r.kind === 'term' ? [r.term.id] : []))

  it('finds lessons without diacritics', () => {
    expect(lessonSlugs('ngon ngu la gi')[0]).toBe('ban-chat-ngon-ngu')
    expect(lessonSlugs('cu phap')).toContain('cu-phap-hoc')
  })

  it('finds lessons by English title, kanji, kana and romaji', () => {
    expect(lessonSlugs('morphology')).toContain('hinh-thai-hoc')
    expect(lessonSlugs('統語論')).toContain('cu-phap-hoc')
    expect(lessonSlugs('とうごろん')).toContain('cu-phap-hoc')
    expect(lessonSlugs('togoron')).toContain('cu-phap-hoc')
  })

  it('finds glossary terms in all three languages', () => {
    expect(termIds('hinh vi')).toContain('hinh-vi')
    expect(termIds('morpheme')).toContain('hinh-vi')
    expect(termIds('けいたいそ')).toContain('hinh-vi')
    expect(termIds('ケイタイソ')).toContain('hinh-vi')
  })

  it('returns nothing for empty or unmatched queries', () => {
    expect(search('   ')).toEqual([])
    expect(search('zzqxw')).toEqual([])
  })
})
