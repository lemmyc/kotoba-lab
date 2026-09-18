import type { ReactNode } from 'react'
import { stripFurigana } from '../../lib/furigana'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'
import { SpeakButton } from '../ui/SpeakButton'

interface DefinitionProps {
  /** Vietnamese term */
  term: string
  en?: string
  ipa?: string
  /** Japanese term with furigana markup */
  ja?: string
  romaji?: string
  children: ReactNode
}

/** A highlighted trilingual definition box. */
export function Definition({ term, en, ipa, ja, romaji, children }: DefinitionProps) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-surface-2/60 px-5 py-3">
        <span className="text-xs font-semibold tracking-wider text-accent uppercase">Định nghĩa</span>
        <span className="text-lg font-bold">{term}</span>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {en && (
            <span className="inline-flex min-w-0 flex-wrap items-center gap-1.5">
              <LangTag lang="en" />
              <span>{en}</span>
              {ipa && <span className="font-ipa text-muted">/{ipa}/</span>}
              <SpeakButton text={en} lang="en" />
            </span>
          )}
          {ja && (
            <span className="inline-flex min-w-0 flex-wrap items-center gap-1.5">
              <LangTag lang="ja" />
              <JaText text={ja} lang="ja" className="text-base" />
              {romaji && <span className="text-muted italic">{romaji}</span>}
              <SpeakButton text={stripFurigana(ja)} lang="ja" />
            </span>
          )}
        </span>
      </div>
      <div className="prose lesson-prose max-w-none px-5 py-4 text-[15px] [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
