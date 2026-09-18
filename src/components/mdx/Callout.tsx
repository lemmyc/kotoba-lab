import type { ReactNode } from 'react'
import { Globe, Info, Lightbulb, PenLine, TriangleAlert } from 'lucide-react'
import { cn } from '../../lib/utils'

type CalloutType = 'note' | 'tip' | 'warning' | 'example' | 'culture' | 'hanviet'

const CONFIG: Record<CalloutType, { title: string; className: string; icon: ReactNode }> = {
  note: { title: 'Ghi chú', className: 'border-brand/30 bg-brand-soft/60', icon: <Info className="size-4 text-brand" /> },
  tip: { title: 'Mẹo ghi nhớ', className: 'border-success/30 bg-success-soft', icon: <Lightbulb className="size-4 text-success" /> },
  warning: { title: 'Lưu ý', className: 'border-warning/40 bg-warning-soft', icon: <TriangleAlert className="size-4 text-warning" /> },
  example: { title: 'Ví dụ', className: 'border-line bg-surface', icon: <PenLine className="size-4 text-muted" /> },
  culture: { title: 'Góc văn hóa', className: 'border-ja/30 bg-ja-soft/70', icon: <Globe className="size-4 text-ja" /> },
  hanviet: {
    title: 'Góc Hán Việt',
    className: 'border-accent/30 bg-accent-soft/70',
    icon: (
      <span lang="ja" className="text-sm leading-none font-bold text-accent">
        漢
      </span>
    ),
  },
}

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const config = CONFIG[type] ?? CONFIG.note
  return (
    <aside className={cn('not-prose my-6 rounded-xl border px-5 py-4', config.className)}>
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden className="grid size-5 place-items-center">
          {config.icon}
        </span>
        {title ?? config.title}
      </p>
      <div className="prose lesson-prose max-w-none text-[15px] [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </aside>
  )
}
