import { useState } from 'react'
import { ArrowRight, CircleCheck, CircleX, RotateCcw, Trophy } from 'lucide-react'
import { Link } from 'react-router'
import { getAdjacentLessons } from '../../data/lessons'
import type { QuizQuestion } from '../../data/types'
import { recordQuizResult, useProgress } from '../../lib/progress'
import { cn } from '../../lib/utils'
import { buttonClass } from '../ui/button'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'

interface QuizProps {
  slug: string
  questions: QuizQuestion[]
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

function resultMessage(ratio: number) {
  if (ratio === 1) return { title: 'Xuất sắc! 満点{まんてん}!', text: 'Bạn trả lời đúng tất cả các câu hỏi.' }
  if (ratio >= 0.8) return { title: 'Rất tốt!', text: 'Bạn đã nắm vững phần lớn kiến thức của chương.' }
  if (ratio >= 0.5) return { title: 'Khá ổn!', text: 'Hãy xem lại phần giải thích của những câu chưa đúng.' }
  return { title: 'Cố gắng thêm nhé!', text: 'Đọc lại bài học rồi thử làm lại quiz — lần sau chắc chắn sẽ tốt hơn.' }
}

export function Quiz({ slug, questions }: QuizProps) {
  const [attempt, setAttempt] = useState(0)
  return <QuizRun key={attempt} slug={slug} questions={questions} onRestart={() => setAttempt((n) => n + 1)} />
}

function QuizRun({ slug, questions, onRestart }: QuizProps & { onRestart: () => void }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | undefined)[]>(() => questions.map(() => undefined))
  const [finished, setFinished] = useState(false)
  const record = useProgress().quiz[slug]

  const question = questions[index]
  const selected = answers[index]
  const answered = selected !== undefined
  const score = answers.filter((answer, i) => answer === questions[i].answer).length

  function choose(option: number) {
    if (answered) return
    setAnswers((prev) => prev.map((value, i) => (i === index ? option : value)))
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1)
      return
    }
    recordQuizResult(slug, score, questions.length)
    setFinished(true)
  }

  if (finished) {
    const ratio = score / questions.length
    const message = resultMessage(ratio)
    const { next: nextLesson } = getAdjacentLessons(slug)

    return (
      <div className="space-y-8">
        <div className="rounded-2xl border border-line bg-surface p-6 text-center sm:p-10">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent-soft text-accent">
            <Trophy className="size-8" aria-hidden />
          </div>
          <p className="mt-4 text-4xl font-bold tabular-nums" aria-live="polite">
            {score}/{questions.length}
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            <JaText text={message.title} />
          </h2>
          <p className="mt-1 text-muted">{message.text}</p>
          {record && (
            <p className="mt-2 text-sm text-muted">
              Điểm cao nhất: {record.best}/{record.total} · Số lần làm: {record.attempts}
            </p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button type="button" onClick={onRestart} className={buttonClass('primary')}>
              <RotateCcw className="size-4" aria-hidden /> Làm lại
            </button>
            <Link to={`/bai-hoc/${slug}`} className={buttonClass('secondary')}>
              Xem lại bài học
            </Link>
            {nextLesson && (
              <Link to={`/bai-hoc/${nextLesson.slug}`} className={buttonClass('secondary')}>
                Chương tiếp theo <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>

        <section>
          <h2 className="text-lg font-semibold">Xem lại đáp án</h2>
          <ol className="mt-4 space-y-3">
            {questions.map((q, i) => {
              const correct = answers[i] === q.answer
              return (
                <li key={q.id} className="rounded-xl border border-line bg-surface p-4">
                  <p className="flex gap-2 font-medium">
                    {correct ? (
                      <CircleCheck className="mt-0.5 size-5 shrink-0 text-success" aria-label="Đúng" />
                    ) : (
                      <CircleX className="mt-0.5 size-5 shrink-0 text-danger" aria-label="Sai" />
                    )}
                    <span className="leading-loose">
                      {i + 1}. <JaText text={q.question} />
                    </span>
                  </p>
                  {!correct && answers[i] !== undefined && (
                    <p className="mt-1 pl-7 text-sm text-danger">
                      Bạn chọn: <JaText text={q.options[answers[i]!]} />
                    </p>
                  )}
                  <p className="mt-1 pl-7 text-sm text-success">
                    Đáp án: <JaText text={q.options[q.answer]} />
                  </p>
                  <p className="mt-2 pl-7 text-sm leading-relaxed text-muted">
                    <JaText text={q.explanation} />
                  </p>
                </li>
              )
            })}
          </ol>
        </section>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-8">
      <div className="flex items-center justify-between gap-4 text-sm text-muted">
        <span>
          Câu <strong className="text-ink tabular-nums">{index + 1}</strong>/{questions.length}
        </span>
        <span className="tabular-nums">Đúng: {score}</span>
      </div>
      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={index + (answered ? 1 : 0)}
        aria-label="Tiến độ làm quiz"
      >
        <div
          className="h-full rounded-full bg-brand transition-all"
          style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-6">
        {question.lang && <LangTag lang={question.lang} full className="mb-3" />}
        <h2 className="text-lg leading-loose font-semibold text-pretty sm:text-xl">
          <JaText text={question.question} />
        </h2>
      </div>

      <div role="radiogroup" aria-label="Các phương án" className="mt-5 grid gap-2.5">
        {question.options.map((option, optionIndex) => {
          const isCorrect = optionIndex === question.answer
          const isSelected = optionIndex === selected
          return (
            <button
              key={optionIndex}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={answered && !isSelected && !isCorrect}
              onClick={() => choose(optionIndex)}
              className={cn(
                'flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition disabled:opacity-60',
                !answered && 'border-line hover:border-brand/50 hover:bg-brand-soft/40',
                answered && isCorrect && 'border-success bg-success-soft',
                answered && isSelected && !isCorrect && 'border-danger bg-danger-soft',
                answered && !isSelected && !isCorrect && 'border-line',
                answered && 'cursor-default',
              )}
            >
              <span
                className={cn(
                  'grid size-7 shrink-0 place-items-center rounded-lg text-sm font-semibold',
                  answered && isCorrect
                    ? 'bg-success text-bg'
                    : answered && isSelected
                      ? 'bg-danger text-bg'
                      : 'bg-surface-2 text-muted',
                )}
                aria-hidden
              >
                {LETTERS[optionIndex]}
              </span>
              <span className="flex-1 pt-0.5 leading-loose">
                <JaText text={option} />
              </span>
              {answered && isCorrect && <CircleCheck className="mt-1 size-5 text-success" aria-label="Đáp án đúng" />}
              {answered && isSelected && !isCorrect && <CircleX className="mt-1 size-5 text-danger" aria-label="Chưa đúng" />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div
          className={cn(
            'mt-5 rounded-xl border px-4 py-3',
            selected === question.answer ? 'border-success/30 bg-success-soft/60' : 'border-danger/30 bg-danger-soft/60',
          )}
          aria-live="polite"
        >
          <p className={cn('font-semibold', selected === question.answer ? 'text-success' : 'text-danger')}>
            {selected === question.answer ? 'Chính xác!' : 'Chưa đúng.'}
          </p>
          <p className="mt-1 text-[15px] leading-loose">
            <JaText text={question.explanation} />
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <button type="button" onClick={next} disabled={!answered} className={buttonClass('primary')}>
          {index < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}
