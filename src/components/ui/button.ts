import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'soft' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'icon'

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-brand-ink shadow-sm hover:brightness-110 active:brightness-95',
  secondary: 'border border-line bg-surface text-ink hover:border-brand/50 hover:bg-surface-2',
  ghost: 'text-ink hover:bg-surface-2',
  soft: 'bg-brand-soft text-brand hover:brightness-95 dark:hover:brightness-125',
  danger: 'border border-danger/40 bg-danger-soft text-danger hover:border-danger',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 gap-1.5 rounded-lg px-3 text-sm',
  md: 'h-10 gap-2 rounded-xl px-4 text-sm',
  lg: 'h-12 gap-2 rounded-xl px-5 text-base',
  icon: 'size-9 rounded-lg',
}

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(
    'inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
}
