import { useEffect, useState } from 'react'
import { ChevronDown, List } from 'lucide-react'
import { cn } from '../../lib/utils'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

function collectHeadings(container: HTMLElement): Heading[] {
  return [...container.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id]')]
    .filter((el) => !el.closest('[data-toc-ignore]'))
    .map((el) => ({ id: el.id, text: el.textContent?.trim() ?? '', level: el.tagName === 'H2' ? 2 : 3 }))
}

/** Watches the lesson container (MDX loads lazily) and keeps the heading list + active item in sync. */
function useHeadings(containerId: string) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>()

  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    let frame = requestAnimationFrame(() => setHeadings(collectHeadings(container)))
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setHeadings(collectHeadings(container)))
    })
    mutations.observe(container, { childList: true, subtree: true })
    return () => {
      cancelAnimationFrame(frame)
      mutations.disconnect()
    }
  }, [containerId])

  useEffect(() => {
    if (headings.length === 0 || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px' },
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  return { headings, activeId }
}

function scrollToHeading(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id)
  if (!el) return
  event.preventDefault()
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' })
  window.history.replaceState(window.history.state, '', `#${encodeURIComponent(id)}`)
}

function TocList({ headings, activeId, onNavigate }: { headings: Heading[]; activeId?: string; onNavigate?: () => void }) {
  return (
    <ul className="space-y-0.5 text-sm">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={(event) => {
              scrollToHeading(event, heading.id)
              onNavigate?.()
            }}
            className={cn(
              'block border-l-2 py-1 transition',
              heading.level === 3 ? 'pl-6 text-[13px]' : 'pl-3',
              heading.id === activeId
                ? 'border-accent-bright font-medium text-ink'
                : 'border-transparent text-muted hover:border-line hover:text-ink',
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Toc({ containerId }: { containerId: string }) {
  const { headings, activeId } = useHeadings(containerId)
  const [open, setOpen] = useState(false)
  if (headings.length === 0) return null

  return (
    <>
      {/* desktop: sticky sidebar */}
      <nav aria-label="Mục lục" className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto pb-6 lg:block">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider text-muted uppercase">
          <List className="size-4" aria-hidden /> Mục lục
        </p>
        <TocList headings={headings} activeId={activeId} />
      </nav>

      {/* mobile: collapsible */}
      <div className="mb-6 rounded-xl border border-line bg-surface lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2">
            <List className="size-4 text-muted" aria-hidden /> Mục lục
          </span>
          <ChevronDown className={cn('size-4 text-muted transition', open && 'rotate-180')} aria-hidden />
        </button>
        {open && (
          <div className="border-t border-line px-2 py-3">
            <TocList headings={headings} activeId={activeId} onNavigate={() => setOpen(false)} />
          </div>
        )}
      </div>
    </>
  )
}
