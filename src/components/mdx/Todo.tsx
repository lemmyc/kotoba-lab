import type { ReactNode } from 'react'
import { Construction } from 'lucide-react'

/**
 * Placeholder for content still to be written.
 * - dev (`npm run dev`): shows the full list of points to write
 * - production build: shows a discreet "being written" note
 * `npm run check:content` counts these per chapter.
 */
export function Todo({ children }: { children?: ReactNode }) {
  if (!import.meta.env.DEV) {
    return (
      <p className="not-prose my-4 flex items-center gap-2 text-sm text-muted italic">
        <Construction className="size-4 shrink-0" aria-hidden />
        Nội dung phần này đang được biên soạn.
      </p>
    )
  }
  return (
    <div className="not-prose my-5 rounded-xl border-2 border-dashed border-warning/50 bg-warning-soft/60 px-5 py-4">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-warning uppercase">
        <Construction className="size-4" aria-hidden />
        Cần viết (chỉ hiện khi chạy dev)
      </p>
      <div className="prose lesson-prose max-w-none text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </div>
  )
}
