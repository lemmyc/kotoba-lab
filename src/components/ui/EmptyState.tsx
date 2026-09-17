import type { ReactNode } from 'react'
import { Construction } from 'lucide-react'
import { cn } from '../../lib/utils'

interface EmptyStateProps {
  title: string
  description?: ReactNode
  icon?: ReactNode
  children?: ReactNode
  className?: string
}

export function EmptyState({ title, description, icon, children, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface/60 px-6 py-10 text-center',
        className,
      )}
    >
      <div className="mb-3 grid size-11 place-items-center rounded-full bg-surface-2 text-muted">
        {icon ?? <Construction className="size-5" aria-hidden />}
      </div>
      <p className="font-semibold">{title}</p>
      {description && <div className="mt-1 max-w-md text-sm text-muted">{description}</div>}
      {children && <div className="mt-5 flex flex-wrap justify-center gap-2">{children}</div>}
    </div>
  )
}
