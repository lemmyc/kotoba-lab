import type { ReactNode } from 'react'
import type { LangCode } from '../../data/types'
import { stripFurigana } from '../../lib/furigana'
import { cn } from '../../lib/utils'
import { JaText } from '../ui/JaText'
import { SpeakButton } from '../ui/SpeakButton'

/** IPA transcription: <Ipa>ˈlæŋɡwɪdʒ</Ipa> → /ˈlæŋɡwɪdʒ/ ; <Ipa phonetic>pʰɪn</Ipa> → [pʰɪn] */
export function Ipa({ children, phonetic = false }: { children: ReactNode; phonetic?: boolean }) {
  return (
    <span className="font-ipa whitespace-nowrap text-muted">
      {phonetic ? '[' : '/'}
      {children}
      {phonetic ? ']' : '/'}
    </span>
  )
}

/** Words up to this length stay on one line; longer text (sentences, summaries) wraps like normal Japanese. */
const JA_NOWRAP_MAX = 12
const ROMAJI_NOWRAP_MAX = 24

/**
 * Japanese inline text with furigana markup: <Ja t="言語{げんご}" romaji="gengo" />
 * Only short pieces are kept unbroken; the romaji may move to the next line on narrow screens.
 */
export function Ja({ t, romaji, speak = false }: { t: string; romaji?: string; speak?: boolean }) {
  const plain = stripFurigana(t)
  const short = plain.length <= JA_NOWRAP_MAX && !/[\s。、！？]/.test(plain)
  const speakButton = speak && <SpeakButton text={plain} lang="ja" className="ml-0.5 align-middle" />
  return (
    <span>
      <span className={short ? 'whitespace-nowrap' : undefined}>
        <JaText text={t} lang="ja" className="text-[1.05em]" />
        {!romaji && speakButton}
      </span>
      {romaji && (
        <span className={cn('ml-1 text-[0.9em] text-muted italic', romaji.length <= ROMAJI_NOWRAP_MAX && 'whitespace-nowrap')}>
          ({romaji}){speakButton}
        </span>
      )}
    </span>
  )
}

/** Word with a pronunciation button: <Speak lang="en">language</Speak> */
export function Speak({ children, lang, text }: { children?: ReactNode; lang: LangCode; text?: string }) {
  const spoken = text ?? (typeof children === 'string' ? children : '')
  return (
    <span className="whitespace-nowrap">
      <span lang={lang}>{children ?? text}</span>
      <SpeakButton text={stripFurigana(spoken)} lang={lang} className="ml-0.5 align-middle" />
    </span>
  )
}

/** Numbered-style linguistic example; `bad` marks it ungrammatical with *. */
export function Ex({ children, bad = false, note }: { children: ReactNode; bad?: boolean; note?: ReactNode }) {
  return (
    <div className="not-prose my-2 flex items-baseline gap-3 rounded-lg px-4 py-2 odd:bg-surface-2/50">
      <span
        role="img"
        className={bad ? 'w-3 shrink-0 font-bold text-danger' : 'w-3 shrink-0 text-success'}
        aria-label={bad ? 'Không đúng ngữ pháp' : 'Đúng ngữ pháp'}
      >
        {bad ? '*' : '✓'}
      </span>
      <span className="min-w-0 flex-1 text-[15px]">
        {children}
        {note && <span className="ml-2 text-sm text-muted">— {note}</span>}
      </span>
    </div>
  )
}
