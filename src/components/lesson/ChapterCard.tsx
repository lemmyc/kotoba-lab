import { CircleCheck, Clock, Trophy } from 'lucide-react'
import { Link } from 'react-router'
import { getQuiz } from '../../data/quizzes'
import type { Lesson } from '../../data/types'
import { useProgress } from '../../lib/progress'
import { cn } from '../../lib/utils'
import { JaText } from '../ui/JaText'
import { StatusBadge } from './StatusBadge'

export function ChapterCard({ lesson, compact = false }: { lesson: Lesson; compact?: boolean }) {
  const progress = useProgress()
  const done = progress.completed.includes(lesson.slug)
  const record = progress.quiz[lesson.slug]
  // hide scores from an older version of the quiz (different number of questions)
  const quiz = record && record.total === getQuiz(lesson.slug).length ? record : undefined

  return (
    <Link
      to={`/bai-hoc/${lesson.slug}`}
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5',
        done ? 'border-success/40' : 'border-line hover:border-brand/40',
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            'grid size-11 shrink-0 place-items-center rounded-xl text-lg font-bold tabular-nums',
            done ? 'bg-success-soft text-success' : 'bg-brand-soft text-brand',
          )}
          aria-hidden
        >
          {done ? <CircleCheck className="size-5" /> : String(lesson.number).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-muted">Chương {lesson.number}</p>
          <h3 className="mt-0.5 font-semibold text-balance group-hover:text-brand">{lesson.title}</h3>
          <p className="mt-1 text-sm text-muted">{lesson.titleEn}</p>
          <p className="mt-0.5 text-sm leading-loose">
            <JaText text={lesson.titleJa} lang="ja" /> <span className="text-xs text-muted italic">{lesson.titleJaRomaji}</span>
          </p>
        </div>
      </div>

      {!compact && <p className="mt-3 line-clamp-3 text-sm text-muted">{lesson.description}</p>}

      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 text-xs text-muted">
        <StatusBadge status={lesson.status} />
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden />
          {lesson.minutes} phút
        </span>
        {quiz && (
          <span className="inline-flex items-center gap-1" title="Điểm quiz cao nhất">
            <Trophy className="size-3.5" aria-hidden />
            {quiz.best}/{quiz.total}
          </span>
        )}
        {done && <span className="sr-only">Đã hoàn thành</span>}
      </div>
    </Link>
  )
}
