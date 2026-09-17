import { useState } from 'react'
import { Shuffle } from 'lucide-react'
import { useSearchParams } from 'react-router'
import { FlashcardDeck } from '../components/cards/FlashcardDeck'
import { DIRECTIONS, isCardDirection } from '../components/cards/directions'
import { buttonClass } from '../components/ui/button'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { glossary } from '../data/glossary'
import { lessons } from '../data/lessons'
import { usePageMeta } from '../lib/page-meta'
import { useProgress } from '../lib/progress'
import { seededShuffle } from '../lib/utils'

export default function FlashcardsPage() {
  usePageMeta('Thẻ ghi nhớ', 'Ôn thuật ngữ ngôn ngữ học Việt – Anh – Nhật bằng flashcard.')
  const [params, setParams] = useSearchParams()
  const [seed, setSeed] = useState(0)
  const { cards: statuses } = useProgress()

  const chapter = params.get('chuong') ?? 'all'
  const directionParam = params.get('huong')
  const direction = isCardDirection(directionParam) ? directionParam : 'vi-en'
  const onlyLearning = params.get('chua-nho') === '1'

  function update(key: string, value: string | null) {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true, preventScrollReset: true },
    )
  }

  const pool = chapter === 'all' ? glossary : glossary.filter((term) => term.chapter === chapter)
  const filtered = onlyLearning ? pool.filter((term) => statuses[term.id] !== 'known') : pool
  const cards = seed === 0 ? filtered : seededShuffle(filtered, seed)
  const knownInPool = pool.filter((term) => statuses[term.id] === 'known').length

  // Remount the deck whenever the selection changes — but not when a card is marked.
  const deckKey = `${chapter}|${direction}|${onlyLearning}|${seed}`

  return (
    <>
      <PageHeader
        eyebrow="Ôn tập · フラッシュカード"
        title="Thẻ ghi nhớ"
        description="Lật thẻ, tự kiểm tra, rồi đánh dấu Đã nhớ hoặc Ôn lại. Phím tắt: Space lật thẻ · ← → chuyển thẻ · 1 ôn lại · 2 đã nhớ."
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="grid gap-3 rounded-2xl border border-line bg-surface p-4 sm:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block font-medium">Chương</span>
            <select
              value={chapter}
              onChange={(event) => update('chuong', event.target.value === 'all' ? null : event.target.value)}
              className="h-10 w-full rounded-lg border border-line bg-bg px-3 outline-none focus:border-brand"
            >
              <option value="all">Tất cả chương ({glossary.length} thẻ)</option>
              {lessons.map((lesson) => (
                <option key={lesson.slug} value={lesson.slug}>
                  {lesson.number}. {lesson.title}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Chiều hỏi</span>
            <select
              value={direction}
              onChange={(event) => update('huong', event.target.value === 'vi-en' ? null : event.target.value)}
              className="h-10 w-full rounded-lg border border-line bg-bg px-3 outline-none focus:border-brand"
            >
              {DIRECTIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={onlyLearning}
                onChange={(event) => update('chua-nho', event.target.checked ? '1' : null)}
                className="size-4 accent-[var(--brand)]"
              />
              Chỉ ôn thẻ chưa nhớ
            </label>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="tabular-nums">
                Đã nhớ {knownInPool}/{pool.length}
              </span>
              <button
                type="button"
                onClick={() => setSeed(Math.floor(Math.random() * 1_000_000) + 1)}
                className={buttonClass('secondary', 'sm')}
              >
                <Shuffle className="size-4" aria-hidden /> Xáo trộn
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {cards.length > 0 ? (
            <FlashcardDeck key={deckKey} cards={cards} direction={direction} />
          ) : (
            <EmptyState
              title={pool.length === 0 ? 'Chương này chưa có thuật ngữ' : 'Bạn đã nhớ hết các thẻ!'}
              description={pool.length === 0 ? 'Thuật ngữ sẽ được bổ sung khi chương được biên soạn.' : 'Bỏ chọn “Chỉ ôn thẻ chưa nhớ” để xem lại toàn bộ.'}
            >
              {pool.length > 0 && (
                <button type="button" onClick={() => update('chua-nho', null)} className={buttonClass('secondary')}>
                  Xem tất cả thẻ
                </button>
              )}
            </EmptyState>
          )}
        </div>
      </div>
    </>
  )
}
