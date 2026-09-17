import type { ReactNode } from 'react'
import type { LangCode } from '../../data/types'
import { cn } from '../../lib/utils'
import { LangTag } from '../ui/LangTag'

const BORDER: Record<LangCode, string> = {
  vi: 'border-vi/60',
  en: 'border-en/60',
  ja: 'border-ja/60',
}

const INTRO: Record<LangCode, string> = {
  vi: 'Đối chiếu với tiếng Việt',
  en: 'Mở rộng sang tiếng Anh',
  ja: 'Mở rộng sang tiếng Nhật',
}

/** Wraps an "extension" section so readers can see at a glance which language it covers. */
export function LangSection({ lang, children }: { lang: LangCode; children: ReactNode }) {
  return (
    <section className={cn('my-6 border-l-4 pl-4 sm:pl-6', BORDER[lang])} data-lang-section={lang}>
      <p className="not-prose mb-2 flex items-center gap-2 text-xs font-medium text-muted">
        <LangTag lang={lang} full />
        {INTRO[lang]}
      </p>
      {children}
    </section>
  )
}
