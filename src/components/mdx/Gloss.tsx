import type { LangCode } from '../../data/types'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'

interface GlossProps {
  /** source line; words separated by spaces. Japanese may use furigana markup. */
  text: string
  lang?: LangCode
  /** romanization aligned word-by-word with `text` (optional) */
  romaji?: string
  /** morpheme gloss aligned word-by-word, e.g. "tôi-CĐ sách-TN đọc" */
  gloss?: string
  translation?: string
  /** mark as ungrammatical (prefix *) */
  bad?: boolean
}

function words(line?: string) {
  return line ? line.trim().split(/\s+/) : []
}

/**
 * Interlinear glossed example (Leipzig style). Columns align when `text`,
 * `romaji` and `gloss` have the same number of space-separated words;
 * otherwise each line is printed as-is.
 */
export function Gloss({ text, lang, romaji, gloss, translation, bad }: GlossProps) {
  const textWords = words(text)
  const romajiWords = words(romaji)
  const glossWords = words(gloss)
  const aligned =
    (!romaji || romajiWords.length === textWords.length) && (!gloss || glossWords.length === textWords.length)

  return (
    <figure className="not-prose my-5 rounded-xl border border-line bg-surface px-5 py-4">
      <div className="flex items-start gap-3">
        {lang && <LangTag lang={lang} className="mt-1.5" />}
        <div className="relative min-w-0 flex-1 overflow-x-auto">
          {aligned ? (
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {bad && <span className="self-start pt-1 text-lg text-danger">*</span>}
              {textWords.map((word, index) => (
                <div key={index} className="flex flex-col">
                  <JaText text={word} lang={lang === 'ja' ? 'ja' : undefined} className="text-lg leading-loose font-medium" />
                  {romaji && <span className="text-sm text-muted italic">{romajiWords[index]}</span>}
                  {gloss && <span className="text-xs tracking-wide text-muted">{glossWords[index]}</span>}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-lg leading-loose font-medium">
                {bad && <span className="text-danger">*</span>}
                <JaText text={text} lang={lang === 'ja' ? 'ja' : undefined} />
              </p>
              {romaji && <p className="text-sm text-muted italic">{romaji}</p>}
              {gloss && <p className="text-xs tracking-wide text-muted">{gloss}</p>}
            </div>
          )}
          {translation && <figcaption className="mt-2 text-[15px]">‘{translation}’</figcaption>}
        </div>
      </div>
    </figure>
  )
}
