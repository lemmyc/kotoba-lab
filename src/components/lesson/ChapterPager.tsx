import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { getAdjacentLessons, lessons } from '../../data/lessons'
import type { Lesson } from '../../data/types'
import { preloadLessonContent } from '../../lib/lesson-content'
import { cn } from '../../lib/utils'

type Direction = 'prev' | 'next'

const LABEL: Record<Direction, string> = { prev: 'Chương trước', next: 'Chương tiếp theo' }
const SHORTCUT: Record<Direction, string> = { prev: 'Shift + ←', next: 'Shift + →' }

function describe(direction: Direction, lesson: Lesson) {
  return `${LABEL[direction]}: ${lesson.number}. ${lesson.title} (${SHORTCUT[direction]})`
}

function preload(lesson: Lesson | undefined) {
  return lesson ? () => preloadLessonContent(lesson.slug) : undefined
}

/** Compact ‹ › buttons for the lesson header. */
export function ChapterPager({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentLessons(slug)

  const item = (direction: Direction, lesson: Lesson | undefined) => {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
    const className =
      'inline-flex h-8 items-center gap-1 rounded-lg border border-line bg-surface px-2.5 text-sm font-medium transition'
    if (!lesson) {
      return (
        <span className={cn(className, 'cursor-not-allowed text-muted opacity-50')} aria-disabled="true" title={`Không có ${LABEL[direction].toLowerCase()}`}>
          {direction === 'prev' && <Icon className="size-4" aria-hidden />}
          <span className="sr-only">{LABEL[direction]}</span>
          <span aria-hidden>{direction === 'prev' ? 'Trước' : 'Sau'}</span>
          {direction === 'next' && <Icon className="size-4" aria-hidden />}
        </span>
      )
    }
    return (
      <Link
        to={`/bai-hoc/${lesson.slug}`}
        className={cn(className, 'text-ink hover:border-brand/40 hover:text-brand')}
        title={describe(direction, lesson)}
        aria-label={describe(direction, lesson)}
        onPointerEnter={preload(lesson)}
        onFocus={preload(lesson)}
      >
        {direction === 'prev' && <Icon className="size-4" aria-hidden />}
        Ch. {lesson.number}
        {direction === 'next' && <Icon className="size-4" aria-hidden />}
      </Link>
    )
  }

  return (
    <nav aria-label="Chuyển chương" className="flex items-center gap-1.5">
      {item('prev', prev)}
      {item('next', next)}
    </nav>
  )
}

/**
 * Floating pill at the bottom of the screen. Shown only while the lesson header
 * and the bottom chapter navigation are both off-screen, so it never duplicates them.
 */
export function FloatingChapterPager({ slug, headerId, footerId }: { slug: string; headerId: string; footerId: string }) {
  const { prev, next } = getAdjacentLessons(slug)
  const current = lessons.find((lesson) => lesson.slug === slug)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const header = document.getElementById(headerId)
    const footer = document.getElementById(footerId)
    if (!header || !footer || typeof IntersectionObserver === 'undefined') return
    let headerVisible = true
    let footerReached = false
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === header) headerVisible = entry.isIntersecting
        // "reached" = on screen or already scrolled past (we are down at the site footer)
        else footerReached = entry.isIntersecting || entry.boundingClientRect.top < 0
      }
      setVisible(!headerVisible && !footerReached)
    })
    observer.observe(header)
    observer.observe(footer)
    return () => observer.disconnect()
  }, [headerId, footerId])

  if (!current) return null

  const item = (direction: Direction, lesson: Lesson | undefined) => {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
    if (!lesson) {
      return (
        <span className="grid size-9 place-items-center rounded-full text-muted opacity-40" aria-hidden>
          <Icon className="size-5" />
        </span>
      )
    }
    return (
      <Link
        to={`/bai-hoc/${lesson.slug}`}
        className={cn(
          'flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-full px-2 text-sm font-medium text-ink transition hover:bg-brand-soft hover:text-brand',
          direction === 'next' && 'flex-row-reverse',
        )}
        title={describe(direction, lesson)}
        aria-label={describe(direction, lesson)}
        onPointerEnter={preload(lesson)}
        onFocus={preload(lesson)}
      >
        <Icon className="size-5 shrink-0" aria-hidden />
        <span className="hidden max-w-[11rem] truncate sm:inline">
          {lesson.number}. {lesson.title}
        </span>
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4 transition duration-200 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
      )}
      inert={!visible}
    >
      <nav
        aria-label="Chuyển chương nhanh"
        className={cn(
          'flex items-center gap-1 rounded-full border border-line bg-surface/90 p-1 shadow-lg shadow-black/10 backdrop-blur-md dark:border-muted/30 dark:bg-surface-2/95',
          visible && 'pointer-events-auto',
        )}
      >
        {item('prev', prev)}
        <span className="px-2 text-xs font-medium text-muted tabular-nums">
          <span aria-hidden>
            {current.number}/{lessons.length}
          </span>
          <span className="sr-only">
            Chương {current.number} trên {lessons.length}
          </span>
        </span>
        {item('next', next)}
      </nav>
    </div>
  )
}
