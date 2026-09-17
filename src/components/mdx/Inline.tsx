import type { ReactNode } from 'react'
import type { LangCode } from '../../data/types'
import { stripFurigana } from '../../lib/furigana'
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

/** Japanese inline text with furigana markup: <Ja t="言語{げんご}" romaji="gengo" /> */
export function Ja({ t, romaji, speak = false }: { t: string; romaji?: string; speak?: boolean }) {
  return (
    <span className="whitespace-nowrap">
      <JaText text={t} lang="ja" className="text-[1.05em]" />
      {romaji && <span className="ml-1 text-[0.9em] text-muted italic">({romaji})</span>}
      {speak && <SpeakButton text={stripFurigana(t)} lang="ja" className="ml-0.5 align-middle" />}
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
      <span className={bad ? 'w-3 font-bold text-danger' : 'w-3 text-success'} aria-label={bad ? 'Không đúng ngữ pháp' : 'Đúng ngữ pháp'}>
        {bad ? '*' : '✓'}
      </span>
      <span className="flex-1 text-[15px]">
        {children}
        {note && <span className="ml-2 text-sm text-muted">— {note}</span>}
      </span>
    </div>
  )
}
