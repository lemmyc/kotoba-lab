import { ChapterCard } from '../components/lesson/ChapterCard'
import { StatusBadge } from '../components/lesson/StatusBadge'
import { JaText } from '../components/ui/JaText'
import { PageHeader } from '../components/ui/PageHeader'
import { getLessonsByPart, lessons, parts } from '../data/lessons'
import type { LessonStatus } from '../data/types'
import { usePageMeta } from '../lib/page-meta'
import { useProgress } from '../lib/progress'

const ROMAN = ['I', 'II', 'III', 'IV']
const STATUS_ORDER: LessonStatus[] = ['outline', 'draft', 'complete']

export default function CoursePage() {
  usePageMeta('Lộ trình khóa học', 'Lộ trình 12 chương Nhập môn Ngôn ngữ học: bản chất ngôn ngữ, cấu trúc, tâm lý và xã hội.')
  const { completed } = useProgress()
  const done = lessons.filter((lesson) => completed.includes(lesson.slug)).length
  const percent = Math.round((done / lessons.length) * 100)
  // the legend only matters while some chapters are still being written
  const statuses = STATUS_ORDER.filter((status) => lessons.some((lesson) => lesson.status === status))

  return (
    <>
      <PageHeader
        eyebrow="Khóa học · Introduction to Language"
        title="Lộ trình 12 chương"
        description="Khóa học chia làm 4 phần, bám theo khung của giáo trình An Introduction to Language (Fromkin, Rodman & Hyams). Mỗi chương có phần lý thuyết tiếng Việt, mở rộng tiếng Anh – tiếng Nhật, thuật ngữ và quiz."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="min-w-56 flex-1 sm:max-w-sm">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Tiến độ của bạn</span>
              <span className="text-muted tabular-nums">
                {done}/{lessons.length} chương · {percent}%
              </span>
            </div>
            <div
              className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label="Tiến độ khóa học"
            >
              <div className="h-full rounded-full bg-success transition-all" style={{ width: `${percent}%` }} />
            </div>
          </div>
          {statuses.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              Trạng thái nội dung:
              {statuses.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
          )}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6">
        {parts.map((part) => (
          <section key={part.id} aria-labelledby={`part-${part.id}`}>
            <div className="grid gap-2 border-b border-line pb-4 md:grid-cols-[auto_1fr] md:gap-8">
              <span className="text-5xl leading-none font-bold text-brand/20" aria-hidden>
                {ROMAN[part.id - 1]}
              </span>
              <div>
                <h2 id={`part-${part.id}`} className="scroll-mt-24 text-2xl font-bold">
                  Phần {ROMAN[part.id - 1]}: {part.title}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {part.titleEn} · <JaText text={part.titleJa} lang="ja" />
                </p>
                <p className="mt-2 max-w-2xl text-muted">{part.description}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {getLessonsByPart(part.id).map((lesson) => (
                <ChapterCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
