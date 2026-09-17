import { Suspense } from 'react'
import { ChevronRight, Clock, Construction, ListChecks, Target } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { CompleteButton } from '../components/lesson/CompleteButton'
import { KeyTerms } from '../components/lesson/KeyTerms'
import { LessonNav } from '../components/lesson/LessonNav'
import { ReadingProgress } from '../components/lesson/ReadingProgress'
import { StatusBadge } from '../components/lesson/StatusBadge'
import { Toc } from '../components/lesson/Toc'
import { FuriganaToggle } from '../components/layout/FuriganaToggle'
import { buttonClass } from '../components/ui/button'
import { JaText } from '../components/ui/JaText'
import { getLesson, getPart } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import { getReferencesForChapter } from '../data/references'
import { mdxComponents } from '../mdx-components'
import { hasLessonContent, renderLessonContent } from '../lib/lesson-content'
import { usePageMeta } from '../lib/page-meta'
import NotFoundPage from './NotFoundPage'

const ROMAN = ['I', 'II', 'III', 'IV']

function ContentSkeleton() {
  return (
    <div className="space-y-4" role="status" aria-label="Đang tải nội dung bài học">
      <div className="h-8 w-2/3 animate-pulse rounded-lg bg-surface-2" />
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="h-4 animate-pulse rounded bg-surface-2" style={{ width: `${95 - i * 7}%` }} />
      ))}
    </div>
  )
}

export default function LessonPage() {
  const { slug } = useParams()
  const lesson = getLesson(slug)
  usePageMeta(lesson ? `Chương ${lesson.number}: ${lesson.title}` : undefined, lesson?.description)

  if (!lesson) return <NotFoundPage />

  const part = getPart(lesson.part)
  const quizCount = getQuiz(lesson.slug).length
  const readings = getReferencesForChapter(lesson.slug)

  return (
    <>
      <ReadingProgress />

      {/* Lesson header */}
      <header className="border-b border-line bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-muted">
            <Link to="/khoa-hoc" className="hover:text-brand">
              Khóa học
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span>
              Phần {ROMAN[part.id - 1]}: {part.title}
            </span>
          </nav>

          <p className="mt-5 text-sm font-semibold text-accent">Chương {lesson.number}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{lesson.title}</h1>
          <p className="mt-2 text-lg text-muted" lang="en">
            {lesson.titleEn}
          </p>
          <p className="text-lg leading-loose">
            <JaText text={lesson.titleJa} lang="ja" /> <span className="text-sm text-muted italic">{lesson.titleJaRomaji}</span>
          </p>
          <p className="mt-3 max-w-3xl text-pretty text-muted">{lesson.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={lesson.status} />
            <span className="inline-flex items-center gap-1 px-2 text-sm text-muted">
              <Clock className="size-4" aria-hidden /> {lesson.minutes} phút đọc
            </span>
            <span className="grow" />
            <FuriganaToggle variant="labeled" />
            <CompleteButton slug={lesson.slug} />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <aside className="lg:order-last">
          <Toc containerId="lesson-body" />
        </aside>

        <div id="lesson-body" className="min-w-0">
          {lesson.status === 'outline' && (
            <div className="mb-8 flex gap-3 rounded-xl border border-warning/40 bg-warning-soft px-5 py-4 text-sm">
              <Construction className="mt-0.5 size-5 shrink-0 text-warning" aria-hidden />
              <p>
                <strong>Chương này đang ở dạng khung bài.</strong> Các mục bên dưới là đề cương nội dung sẽ học; phần giảng chi
                tiết đang được biên soạn. Bạn vẫn có thể xem thuật ngữ và làm quiz mẫu.
              </p>
            </div>
          )}

          <section className="mb-10 rounded-2xl border border-line bg-surface p-5 sm:p-6" data-toc-ignore>
            <h2 className="flex items-center gap-2 font-semibold">
              <Target className="size-5 text-accent" aria-hidden /> Mục tiêu bài học
            </h2>
            <ul className="mt-3 space-y-2 text-[15px]">
              {lesson.objectives.map((objective) => (
                <li key={objective} className="flex gap-2">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-bright" aria-hidden />
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          <article className="prose lesson-prose max-w-none prose-headings:tracking-tight">
            {hasLessonContent(lesson.slug) ? (
              <Suspense fallback={<ContentSkeleton />}>{renderLessonContent(lesson.slug, mdxComponents)}</Suspense>
            ) : (
              <p className="text-muted">Chưa có file nội dung cho chương này.</p>
            )}
          </article>

          <div className="mt-16 space-y-12">
            <KeyTerms slug={lesson.slug} />

            {readings.length > 0 && (
              <section aria-labelledby="doc-them">
                <h2 id="doc-them" className="scroll-mt-24 border-b border-line pb-3 text-2xl font-bold">
                  Đọc thêm
                </h2>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {readings.map((ref) => (
                    <li key={ref.id} className="text-muted">
                      <span className="text-ink">{ref.authors}</span>
                      {ref.year && ` (${ref.year})`}. <em>{ref.title}</em>
                      {ref.publisher && `. ${ref.publisher}`}.
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="flex flex-col items-start gap-4 rounded-2xl border border-brand/30 bg-brand-soft/50 p-6 sm:flex-row sm:items-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand text-brand-ink" aria-hidden>
                <ListChecks className="size-6" />
              </span>
              <div className="flex-1">
                <p className="text-lg font-semibold">Kiểm tra hiểu biết</p>
                <p className="text-sm text-muted">
                  {quizCount > 0 ? `${quizCount} câu hỏi trắc nghiệm có giải thích.` : 'Quiz cho chương này đang được biên soạn.'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <CompleteButton slug={lesson.slug} />
                {quizCount > 0 && (
                  <Link to={`/bai-hoc/${lesson.slug}/kiem-tra`} className={buttonClass('primary')}>
                    Làm quiz
                  </Link>
                )}
              </div>
            </section>

            <LessonNav slug={lesson.slug} />
          </div>
        </div>
      </div>
    </>
  )
}
