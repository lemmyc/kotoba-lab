import { useState, type ReactNode } from 'react'
import { usePreferences } from '../../lib/preferences'
import { cn } from '../../lib/utils'

interface RubyProps {
  /** base text (kanji) — or pass as children */
  base?: string
  /** reading shown above the base */
  reading?: string
  children?: ReactNode
  /** alias of `reading`, handy in MDX: <Ruby rt="げんご">言語</Ruby> */
  rt?: string
}

/**
 * Furigana-aware ruby. When furigana is switched off the reading is hidden
 * (space preserved) and can be revealed per word by hover, focus or tap.
 */
export function Ruby({ base, reading, rt, children }: RubyProps) {
  const { furigana } = usePreferences()
  const [revealed, setRevealed] = useState(false)
  const text = reading ?? rt ?? ''

  return (
    <ruby
      className={cn('kl-ruby', !furigana && revealed && 'is-revealed')}
      tabIndex={furigana ? undefined : 0}
      onClick={furigana ? undefined : () => setRevealed((v) => !v)}
    >
      {base ?? children}
      <rp>(</rp>
      <rt>{text}</rt>
      <rp>)</rp>
    </ruby>
  )
}
