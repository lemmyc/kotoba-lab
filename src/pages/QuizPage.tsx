import { ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { Quiz } from '../components/quiz/Quiz'
import { buttonClass } from '../components/ui/button'
import { EmptyState } from '../components/ui/EmptyState'
import { getLesson } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import { usePageMeta } from '../lib/page-meta'
import NotFoundPage from './NotFoundPage'

export default function QuizPage() {
  const { slug } = useParams()
  const lesson = getLesson(slug)
  usePageMeta(lesson ? `Quiz chương ${lesson.number}: ${lesson.title}` : undefined)

  if (!lesson) return <NotFoundPage />
  const questions = getQuiz(lesson.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-muted">
        <Link to="/khoa-hoc" className="hover:text-brand">
          Khóa học
        </Link>
        <ChevronRight className="size-3.5" aria-hidden />
        <Link to={`/bai-hoc/${lesson.slug}`} className="hover:text-brand">
          Chương {lesson.number}
        </Link>
        <ChevronRight className="size-3.5" aria-hidden />
        <span>Kiểm tra</span>
      </nav>

      <p className="mt-6 text-sm font-semibold text-accent">Kiểm tra · Chương {lesson.number}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-balance">{lesson.title}</h1>
      <p className="mt-2 text-muted">
        Chọn một đáp án cho mỗi câu. Giải thích sẽ hiện ngay sau khi bạn chọn; điểm cao nhất được lưu trên trình duyệt.
      </p>

      <div className="mt-8">
        {questions.length > 0 ? (
          <Quiz key={lesson.slug} slug={lesson.slug} questions={questions} />
        ) : (
          <EmptyState title="Quiz đang được biên soạn" description="Chương này chưa có câu hỏi. Hãy quay lại sau nhé!">
            <Link to={`/bai-hoc/${lesson.slug}`} className={buttonClass('secondary')}>
              Quay lại bài học
            </Link>
          </EmptyState>
        )}
      </div>
    </div>
  )
}
