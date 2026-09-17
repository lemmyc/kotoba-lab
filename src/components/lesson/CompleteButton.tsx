import { Circle, CircleCheck } from 'lucide-react'
import { setLessonCompleted, useProgress } from '../../lib/progress'
import { cn } from '../../lib/utils'
import { buttonClass } from '../ui/button'

export function CompleteButton({ slug, size = 'md' }: { slug: string; size?: 'sm' | 'md' | 'lg' }) {
  const { completed } = useProgress()
  const done = completed.includes(slug)

  return (
    <button
      type="button"
      onClick={() => setLessonCompleted(slug, !done)}
      aria-pressed={done}
      className={cn(
        buttonClass(done ? 'soft' : 'secondary', size),
        done && 'bg-success-soft text-success hover:brightness-100',
      )}
    >
      {done ? <CircleCheck className="size-4" aria-hidden /> : <Circle className="size-4" aria-hidden />}
      {done ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
    </button>
  )
}
