import { BookOpen, CircleCheck, Layers, ListChecks, Trash } from 'lucide-react'
import { Link } from 'react-router'
import { StatusBadge } from '../components/lesson/StatusBadge'
import { buttonClass } from '../components/ui/button'
import { PageHeader } from '../components/ui/PageHeader'
import { glossary, getTermsForChapter } from '../data/glossary'
import { lessons } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import { usePageMeta } from '../lib/page-meta'
import { resetProgress, useProgress } from '../lib/progress'
import { cn, formatDate } from '../lib/utils'

function Meter({ value, max, className }: { value: number; max: number; className?: string }) {
  const percent = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="h-2 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
      <div className={cn('h-full rounded-full transition-all', className)} style={{ width: `${percent}%` }} />
    </div>
  )
}

export default function ProgressPage() {
  usePageMeta('Tiến độ học tập')
  const progress = useProgress()

  const completedCount = lessons.filter((lesson) => progress.completed.includes(lesson.slug)).length
  const quizzesTaken = lessons.filter((lesson) => progress.quiz[lesson.slug]).length
  const quizRecords = lessons.map((lesson) => progress.quiz[lesson.slug]).filter((record) => record !== undefined)
  const averageQuiz =
    quizRecords.length > 0 ? Math.round((quizRecords.reduce((sum, r) => sum + r.best / r.total, 0) / quizRecords.length) * 100) : 0
  const knownCards = glossary.filter((term) => progress.cards[term.id] === 'known').length

  const summary = [
    { Icon: BookOpen, label: 'Chương đã hoàn thành', value: `${completedCount}/${lessons.length}`, current: completedCount, max: lessons.length, color: 'bg-success' },
    { Icon: ListChecks, label: `Quiz đã làm · điểm TB ${averageQuiz}%`, value: `${quizzesTaken}/${lessons.length}`, current: quizzesTaken, max: lessons.length, color: 'bg-brand' },
    { Icon: Layers, label: 'Thẻ ghi nhớ đã thuộc', value: `${knownCards}/${glossary.length}`, current: knownCards, max: glossary.length, color: 'bg-ja' },
  ]

  function onReset() {
    if (window.confirm('Xóa toàn bộ tiến độ học (chương đã học, điểm quiz, thẻ đã nhớ)? Không thể hoàn tác.')) {
      resetProgress()
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Tiến độ · 学習記録"
        title="Tiến độ học tập của bạn"
        description="Dữ liệu được lưu ngay trên trình duyệt này (localStorage), không cần tài khoản. Xóa dữ liệu trình duyệt hoặc dùng thiết bị khác sẽ không còn tiến độ."
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {summary.map(({ Icon, label, value, current, max, color }) => (
            <div key={label} className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-muted" aria-hidden />
                <span className="text-2xl font-bold tabular-nums">{value}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{label}</p>
              <div className="mt-3">
                <Meter value={current} max={max} className={color} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead className="bg-surface-2/60 text-xs tracking-wide text-muted uppercase">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Chương</th>
                <th scope="col" className="px-4 py-3 font-semibold">Nội dung</th>
                <th scope="col" className="px-4 py-3 font-semibold">Đã học</th>
                <th scope="col" className="px-4 py-3 font-semibold">Quiz (cao nhất)</th>
                <th scope="col" className="px-4 py-3 font-semibold">Thẻ đã nhớ</th>
                <th scope="col" className="px-4 py-3"><span className="sr-only">Hành động</span></th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => {
                const done = progress.completed.includes(lesson.slug)
                const record = progress.quiz[lesson.slug]
                const terms = getTermsForChapter(lesson.slug)
                const known = terms.filter((term) => progress.cards[term.id] === 'known').length
                const quizCount = getQuiz(lesson.slug).length
                return (
                  <tr key={lesson.slug} className="border-t border-line">
                    <td className="px-4 py-3">
                      <Link to={`/bai-hoc/${lesson.slug}`} className="font-medium hover:text-brand">
                        {lesson.number}. {lesson.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={lesson.status} />
                    </td>
                    <td className="px-4 py-3">
                      {done ? (
                        <CircleCheck className="size-5 text-success" aria-label="Đã hoàn thành" />
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 tabular-nums">
                      {record ? (
                        <span title={`Lần gần nhất: ${record.last}/${record.total} · ${formatDate(record.at)}`}>
                          {record.best}/{record.total}
                          <span className="ml-1 text-xs text-muted">({record.attempts} lần)</span>
                        </span>
                      ) : (
                        <span className="text-muted">{quizCount > 0 ? 'Chưa làm' : '—'}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 tabular-nums">
                      {terms.length > 0 ? `${known}/${terms.length}` : <span className="text-muted">—</span>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {quizCount > 0 && (
                        <Link to={`/bai-hoc/${lesson.slug}/kiem-tra`} className="text-brand hover:underline">
                          Làm quiz
                        </Link>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <button type="button" onClick={onReset} className={buttonClass('danger', 'sm')}>
            <Trash className="size-4" aria-hidden /> Xóa toàn bộ tiến độ
          </button>
        </div>
      </div>
    </>
  )
}
