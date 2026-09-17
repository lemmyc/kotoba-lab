import { useEffect, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { useLocation, useSearchParams } from 'react-router'
import { TermCard } from '../components/glossary/TermCard'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { glossary } from '../data/glossary'
import { lessons } from '../data/lessons'
import { usePageMeta } from '../lib/page-meta'
import { matchesTerm } from '../lib/search'

const collator = new Intl.Collator('vi')

export default function GlossaryPage() {
  usePageMeta('Từ điển thuật ngữ', 'Thuật ngữ ngôn ngữ học Việt – Anh – Nhật, có phiên âm IPA, furigana, romaji và phát âm.')
  const [params, setParams] = useSearchParams()
  const { hash } = useLocation()
  const query = params.get('q') ?? ''
  const chapter = params.get('chuong') ?? 'all'
  const highlightId = hash.startsWith('#term-') ? decodeURIComponent(hash.slice(6)) : undefined

  function update(key: string, value: string) {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value && value !== 'all') next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true, preventScrollReset: true },
    )
  }

  const results = useMemo(() => {
    const pool = chapter === 'all' ? glossary : glossary.filter((term) => term.chapter === chapter)
    return pool.filter((term) => matchesTerm(term, query)).sort((a, b) => collator.compare(a.vi, b.vi))
  }, [chapter, query])

  useEffect(() => {
    if (!highlightId) return
    const frame = requestAnimationFrame(() => document.getElementById(`term-${highlightId}`)?.scrollIntoView({ block: 'center' }))
    return () => cancelAnimationFrame(frame)
  }, [highlightId])

  return (
    <>
      <PageHeader
        eyebrow="Từ điển · 用語集"
        title="Thuật ngữ Việt – Anh – Nhật"
        description={`${glossary.length} thuật ngữ ngôn ngữ học, mỗi mục có tiếng Anh (kèm IPA), tiếng Nhật (kèm furigana, romaji) và định nghĩa tiếng Việt.`}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="sticky top-16 z-30 -mx-4 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <span className="sr-only">Tìm thuật ngữ</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(event) => update('q', event.target.value)}
                placeholder="Tìm bằng tiếng Việt (có/không dấu), English, かな, romaji…"
                className="h-11 w-full rounded-xl border border-line bg-surface pr-10 pl-9 outline-none focus:border-brand"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => update('q', '')}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-1 text-muted hover:bg-surface-2"
                  aria-label="Xóa từ khóa"
                >
                  <X className="size-4" aria-hidden />
                </button>
              )}
            </label>
            <label className="sm:w-72">
              <span className="sr-only">Lọc theo chương</span>
              <select
                value={chapter}
                onChange={(event) => update('chuong', event.target.value)}
                className="h-11 w-full rounded-xl border border-line bg-surface px-3 outline-none focus:border-brand"
              >
                <option value="all">Tất cả chương</option>
                {lessons.map((lesson) => (
                  <option key={lesson.slug} value={lesson.slug}>
                    Chương {lesson.number}: {lesson.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="mt-2 text-xs text-muted" aria-live="polite">
            {results.length} thuật ngữ
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((term) => (
              <TermCard key={term.id} term={term} showChapter highlighted={term.id === highlightId} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-8"
            icon={<Search className="size-5" aria-hidden />}
            title="Không tìm thấy thuật ngữ phù hợp"
            description="Thử từ khóa khác, bỏ dấu, hoặc chọn “Tất cả chương”."
          />
        )}
      </div>
    </>
  )
}
