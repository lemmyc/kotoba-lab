import { Monitor, Moon, Sun } from 'lucide-react'
import { cycleTheme, usePreferences, type ThemePreference } from '../../lib/preferences'
import { cn } from '../../lib/utils'

const META: Record<ThemePreference, { label: string; next: string; Icon: typeof Sun }> = {
  light: { label: 'Giao diện sáng', next: 'tối', Icon: Sun },
  dark: { label: 'Giao diện tối', next: 'theo hệ thống', Icon: Moon },
  system: { label: 'Theo hệ thống', next: 'sáng', Icon: Monitor },
}

export function ThemeToggle({ withLabel = false, className }: { withLabel?: boolean; className?: string }) {
  const { theme } = usePreferences()
  const { label, next, Icon } = META[theme]

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        'inline-flex h-9 items-center gap-2 rounded-lg px-2 text-muted transition hover:bg-surface-2 hover:text-ink',
        withLabel && 'w-full px-3',
        className,
      )}
      aria-label={`${label} — bấm để chuyển sang ${next}`}
      title={`${label} (bấm để chuyển sang ${next})`}
    >
      <Icon className="size-[18px]" aria-hidden />
      {withLabel && <span className="text-sm text-ink">{label}</span>}
    </button>
  )
}
