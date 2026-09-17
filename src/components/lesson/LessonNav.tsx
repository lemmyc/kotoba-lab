import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { getAdjacentLessons } from '../../data/lessons'

export function LessonNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentLessons(slug)

  return (
    <nav aria-label="Chuyển chương" className="grid gap-3 sm:grid-cols-2">
      {prev ? (
        <Link
          to={`/bai-hoc/${prev.slug}`}
          className="group rounded-xl border border-line bg-surface p-4 transition hover:border-brand/40"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" aria-hidden /> Chương trước
          </span>
          <span className="mt-1 block font-medium group-hover:text-brand">
            {prev.number}. {prev.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link
          to={`/bai-hoc/${next.slug}`}
          className="group rounded-xl border border-line bg-surface p-4 text-right transition hover:border-brand/40"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
            Chương tiếp theo <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
          <span className="mt-1 block font-medium group-hover:text-brand">
            {next.number}. {next.title}
          </span>
        </Link>
      )}
    </nav>
  )
}
