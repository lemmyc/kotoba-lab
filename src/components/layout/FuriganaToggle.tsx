import { toggleFurigana, usePreferences } from '../../lib/preferences'
import { cn } from '../../lib/utils'

interface FuriganaToggleProps {
  /** compact = icon only (header); labeled = icon + text (lesson toolbar, mobile menu) */
  variant?: 'compact' | 'labeled'
  className?: string
}

/** Global furigana on/off switch. Shortcut: F (handled in RootLayout). */
export function FuriganaToggle({ variant = 'compact', className }: FuriganaToggleProps) {
  const { furigana } = usePreferences()
  const label = furigana ? 'Tắt furigana' : 'Bật furigana'

  return (
    <button
      type="button"
      onClick={toggleFurigana}
      aria-pressed={furigana}
      aria-label={label}
      title={`${label} (phím tắt: F)`}
      className={cn(
        'inline-flex h-9 items-center gap-2 rounded-lg transition',
        variant === 'compact' ? 'px-2 text-muted hover:bg-surface-2 hover:text-ink' : 'border border-line bg-surface px-3 hover:border-ja/50',
        className,
      )}
    >
      {/* mini ruby glyph drawn with spans so the global rt-hiding CSS never touches it */}
      <span lang="ja" aria-hidden className="flex w-6 flex-col items-center leading-none">
        <span
          className={cn(
            'text-[8px] font-medium tracking-tighter transition',
            furigana ? 'text-ja' : 'text-muted/50 line-through decoration-1',
          )}
        >
          かん
        </span>
        <span className={cn('text-[15px] font-bold', furigana ? 'text-ink' : 'text-muted')}>漢</span>
      </span>
      {variant === 'labeled' && (
        <span className="text-sm">
          Furigana: <strong className={furigana ? 'text-ja' : 'text-muted'}>{furigana ? 'Bật' : 'Tắt'}</strong>
        </span>
      )}
    </button>
  )
}
