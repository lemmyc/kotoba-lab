import type { LangCode } from '../../data/types'
import { cn } from '../../lib/utils'

const styles: Record<LangCode, string> = {
  vi: 'bg-vi-soft text-vi',
  en: 'bg-en-soft text-en',
  ja: 'bg-ja-soft text-ja',
}

const labels: Record<LangCode, string> = { vi: 'VI', en: 'EN', ja: 'JA' }
const names: Record<LangCode, string> = { vi: 'Tiếng Việt', en: 'Tiếng Anh', ja: 'Tiếng Nhật' }

export function LangTag({ lang, full = false, className }: { lang: LangCode; full?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] leading-none font-semibold tracking-wide',
        styles[lang],
        className,
      )}
      title={names[lang]}
    >
      {full ? names[lang] : labels[lang]}
    </span>
  )
}
