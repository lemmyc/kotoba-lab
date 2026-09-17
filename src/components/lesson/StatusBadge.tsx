import { STATUS_LABELS } from '../../data/lessons'
import type { LessonStatus } from '../../data/types'
import { cn } from '../../lib/utils'

const STYLES: Record<LessonStatus, string> = {
  outline: 'border-warning/40 bg-warning-soft text-warning',
  draft: 'border-en/30 bg-en-soft text-en',
  complete: 'border-success/30 bg-success-soft text-success',
}

const HINTS: Record<LessonStatus, string> = {
  outline: 'Đã có khung bài, nội dung chi tiết đang được biên soạn',
  draft: 'Đã có nội dung, đang được rà soát',
  complete: 'Nội dung đã hoàn chỉnh',
}

export function StatusBadge({ status, className }: { status: LessonStatus; className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium', STYLES[status], className)}
      title={HINTS[status]}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {STATUS_LABELS[status]}
    </span>
  )
}
