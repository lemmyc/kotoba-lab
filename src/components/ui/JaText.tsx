import { Fragment } from 'react'
import { parseFurigana } from '../../lib/furigana'
import { Ruby } from './Ruby'

interface JaTextProps {
  /** text with optional furigana markup: 言語{げんご}を学{まな}ぶ */
  text: string
  className?: string
  /** set to "ja" when the whole string is Japanese (applies the Japanese font) */
  lang?: string
}

/** Renders a string, turning furigana markup into <ruby>. Safe for mixed-language text. */
export function JaText({ text, className, lang }: JaTextProps) {
  const segments = parseFurigana(text)
  const content = segments.map((segment, index) =>
    segment.reading ? (
      <Ruby key={index} base={segment.text} reading={segment.reading} />
    ) : (
      <Fragment key={index}>{segment.text}</Fragment>
    ),
  )
  if (!className && !lang) return <>{content}</>
  return (
    <span className={className} lang={lang}>
      {content}
    </span>
  )
}
