import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface PageHeaderProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}

export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn('border-b border-line bg-surface/50', className)}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {eyebrow && <div className="mb-3 text-sm font-medium text-accent">{eyebrow}</div>}
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h1>
        {description && <div className="mt-3 max-w-2xl text-base text-pretty text-muted sm:text-lg">{description}</div>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  )
}
