import type { ReactNode } from 'react'
import type { LangCode } from '../../data/types'
import { LangTag } from '../ui/LangTag'

const TITLES: Record<LangCode, string> = {
  vi: 'Tóm tắt bằng tiếng Việt',
  en: 'Summary in English',
  ja: '日本語でまとめ',
}

/** A short summary written directly in the target language. */
export function Summary({ lang, title, children }: { lang: LangCode; title?: string; children: ReactNode }) {
  return (
    <section lang={lang} className="not-prose my-6 rounded-xl border border-line bg-surface px-5 py-4">
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <LangTag lang={lang} />
        {title ?? TITLES[lang]}
      </p>
      <div className="prose lesson-prose max-w-none text-[15px] leading-loose [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </section>
  )
}
