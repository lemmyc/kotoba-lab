/**
 * Furigana markup used across content and data files.
 *
 *   言語{げんご}を学{まな}ぶ   → kanji run immediately before {reading}
 *   [今日]{きょう}            → explicit base in [brackets] (any characters)
 *
 * Text outside the markup is left untouched, so Vietnamese/English strings
 * can safely go through the same parser.
 */
export interface FuriganaSegment {
  text: string
  reading?: string
}

const PATTERN =
  /\[([^\]]+)\]\{([^}]+)\}|([㐀-䶿一-鿿豈-﫿々〆ヵヶ]+)\{([^}]+)\}/g

export function parseFurigana(input: string): FuriganaSegment[] {
  const segments: FuriganaSegment[] = []
  let lastIndex = 0
  for (const match of input.matchAll(PATTERN)) {
    const index = match.index ?? 0
    if (index > lastIndex) segments.push({ text: input.slice(lastIndex, index) })
    segments.push({ text: match[1] ?? match[3], reading: match[2] ?? match[4] })
    lastIndex = index + match[0].length
  }
  if (lastIndex < input.length) segments.push({ text: input.slice(lastIndex) })
  return segments
}

/** 言語{げんご}とは → 言語とは */
export function stripFurigana(input: string) {
  return parseFurigana(input)
    .map((s) => s.text)
    .join('')
}

/** 言語{げんご}とは → げんごとは */
export function furiganaReading(input: string) {
  return parseFurigana(input)
    .map((s) => s.reading ?? s.text)
    .join('')
}

/** True when braces are left over after parsing — i.e. malformed markup. */
export function hasBrokenFurigana(input: string) {
  const rest = input.replace(PATTERN, '')
  return /[{}]/.test(rest)
}
