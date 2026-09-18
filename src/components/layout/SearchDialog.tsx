import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { BookOpen, CornerDownLeft, Languages, Search, X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router'
import { glossary } from '../../data/glossary'
import { lessons } from '../../data/lessons'
import { stripFurigana } from '../../lib/furigana'
import { searchContent, type SearchResult } from '../../lib/search'
import { cn } from '../../lib/utils'

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

const SUGGESTIONS = ['hình vị', 'syntax', 'げんご', 'keigo', 'thanh điệu']

function resultHref(result: SearchResult) {
  return result.kind === 'lesson'
    ? `/bai-hoc/${result.lesson.slug}`
    : `/thuat-ngu?q=${encodeURIComponent(result.term.vi)}#term-${result.term.id}`
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  if (!open) return null
  // Portal: the sticky header uses backdrop-filter, which would trap a fixed overlay inside it.
  return createPortal(<SearchPanel onClose={onClose} />, document.body)
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const results = useMemo(() => searchContent(query, lessons, glossary), [query])

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    inputRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      // give focus back to whatever opened the dialog (if it is still on the page)
      if (opener?.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    document.getElementById(`${listId}-${active}`)?.scrollIntoView({ block: 'nearest' })
  }, [active, listId])

  function pick(suggestion: string) {
    setQuery(suggestion)
    setActive(0)
    // the suggestion buttons disappear once there is a query — keep focus (and keyboard control) in the dialog
    inputRef.current?.focus()
  }

  /** Keep Tab inside the dialog. */
  function trapFocus(event: React.KeyboardEvent) {
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('input, button:not([disabled])')
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  function go(result: SearchResult) {
    onClose()
    navigate(resultHref(result))
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    } else if (event.key === 'Tab') {
      trapFocus(event)
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.max(0, Math.min(i + 1, results.length - 1)))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault()
      go(results[active])
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12dvh]" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Tìm kiếm bài học và thuật ngữ"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-5 text-muted" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            placeholder="Tìm chương, thuật ngữ… (Việt / English / 日本語)"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
            aria-autocomplete="list"
          />
          <button type="button" onClick={onClose} className="rounded-md p-1 text-muted hover:bg-surface-2" aria-label="Đóng">
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="max-h-[60dvh] overflow-y-auto p-2">
          {!query.trim() && (
            <div className="px-3 py-4 text-sm text-muted">
              <p>Tìm không cần dấu, bằng tiếng Anh, kana hoặc romaji. Gợi ý:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => pick(suggestion)}
                    className="rounded-full border border-line px-3 py-1 text-ink hover:border-brand/50 hover:bg-surface-2"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted">Không tìm thấy kết quả cho “{query}”.</p>
          )}

          <ul id={listId} role="listbox" aria-label="Kết quả tìm kiếm">
            {results.map((result, index) => (
              <li
                key={result.kind === 'lesson' ? result.lesson.slug : result.term.id}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === active}
                onMouseEnter={() => setActive(index)}
                onClick={() => go(result)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5',
                  index === active ? 'bg-brand-soft' : 'hover:bg-surface-2',
                )}
              >
                <span
                  className={cn(
                    'grid size-8 shrink-0 place-items-center rounded-lg',
                    result.kind === 'lesson' ? 'bg-brand/10 text-brand' : 'bg-ja-soft text-ja',
                  )}
                  aria-hidden
                >
                  {result.kind === 'lesson' ? <BookOpen className="size-4" /> : <Languages className="size-4" />}
                </span>
                <span className="min-w-0 flex-1">
                  {result.kind === 'lesson' ? (
                    <>
                      <span className="block truncate font-medium">
                        Chương {result.lesson.number}: {result.lesson.title}
                      </span>
                      <span className="block truncate text-xs text-muted">
                        {result.lesson.titleEn} · <span lang="ja">{stripFurigana(result.lesson.titleJa)}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block truncate font-medium">{result.term.vi}</span>
                      <span className="block truncate text-xs text-muted">
                        {result.term.en} · <span lang="ja">{stripFurigana(result.term.ja)}</span> ({result.term.romaji})
                      </span>
                    </>
                  )}
                </span>
                {index === active && <CornerDownLeft className="size-4 text-muted" aria-hidden />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
