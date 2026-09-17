import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react'
import type { GlossaryTerm } from '../../data/types'
import { stripFurigana } from '../../lib/furigana'
import { setCardStatus, useProgress } from '../../lib/progress'
import { cn, isTypingTarget } from '../../lib/utils'
import { buttonClass } from '../ui/button'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'
import { SpeakButton } from '../ui/SpeakButton'
import type { CardDirection } from './directions'

function Side({ term, lang, large = false }: { term: GlossaryTerm; lang: 'vi' | 'en' | 'ja'; large?: boolean }) {
  const size = large ? 'text-3xl sm:text-4xl' : 'text-xl'
  if (lang === 'vi') return <p className={cn('font-bold text-balance', size)}>{term.vi}</p>
  if (lang === 'en') {
    return (
      <div className="flex flex-col items-center gap-1">
        <p lang="en" className={cn('flex items-center gap-2 font-bold', size)}>
          {term.en}
          <SpeakButton text={term.en} lang="en" />
        </p>
        {term.ipaEn && <p className="font-ipa text-muted">/{term.ipaEn}/</p>}
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <p className={cn('flex items-center gap-2 leading-loose font-bold', size)}>
        <JaText text={term.ja} lang="ja" />
        <SpeakButton text={stripFurigana(term.ja)} lang="ja" />
      </p>
      <p className="text-muted italic">{term.romaji}</p>
    </div>
  )
}

interface FlashcardDeckProps {
  cards: GlossaryTerm[]
  direction: CardDirection
}

/** Deck is snapshotted on mount; remount (change `key`) to rebuild it. */
export function FlashcardDeck({ cards, direction }: FlashcardDeckProps) {
  const [deck] = useState(cards)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const { cards: statuses } = useProgress()

  const [front, back] = direction.split('-') as ['vi' | 'en' | 'ja', 'vi' | 'en' | 'ja']
  const card = deck[index]

  const knownInDeck = deck.filter((c) => statuses[c.id] === 'known').length

  function go(delta: number) {
    const target = index + delta
    if (target < 0) return
    if (target >= deck.length) {
      setDone(true)
      return
    }
    setIndex(target)
    setFlipped(false)
  }

  function mark(status: 'known' | 'learning') {
    setCardStatus(card.id, status)
    go(1)
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (done || isTypingTarget(event.target) || event.ctrlKey || event.metaKey || event.altKey) return
      if (event.key === ' ' || event.key === 'Enter') {
        if ((event.target as HTMLElement | null)?.closest('button, a')) return
        event.preventDefault()
        setFlipped((v) => !v)
      } else if (event.key === 'ArrowRight') {
        go(1)
      } else if (event.key === 'ArrowLeft') {
        go(-1)
      } else if (event.key === '1') {
        mark('learning')
      } else if (event.key === '2') {
        mark('known')
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  if (deck.length === 0) return null

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center">
        <p className="text-4xl" aria-hidden>
          🎉
        </p>
        <h2 className="mt-3 text-xl font-semibold">Bạn đã xem hết bộ thẻ!</h2>
        <p className="mt-1 text-muted">
          Đã nhớ {knownInDeck}/{deck.length} thẻ trong bộ này.
        </p>
        <button
          type="button"
          onClick={() => {
            setIndex(0)
            setFlipped(false)
            setDone(false)
          }}
          className={buttonClass('primary', 'md', 'mt-6')}
        >
          <RotateCcw className="size-4" aria-hidden /> Xem lại từ đầu
        </button>
      </div>
    )
  }

  const status = statuses[card.id]

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-muted">
        <span>
          Thẻ <strong className="text-ink tabular-nums">{index + 1}</strong>/{deck.length}
        </span>
        <span className="tabular-nums">
          Đã nhớ: {knownInDeck}/{deck.length}
        </span>
      </div>

      <div className={cn('flip-card', flipped && 'is-flipped')}>
        <div className="flip-inner min-h-72">
          <div
            onClick={() => setFlipped(true)}
            className="flip-face flex min-h-72 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-surface p-8 text-center shadow-sm"
            aria-hidden={flipped}
          >
            <LangTag lang={front} full />
            <Side term={card} lang={front} large />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setFlipped(true)
              }}
              tabIndex={flipped ? -1 : 0}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-brand/40 hover:text-ink"
            >
              Lật thẻ (Space)
            </button>
          </div>
          <div
            className="flip-face flip-back flex cursor-pointer flex-col items-center justify-center gap-3 overflow-y-auto rounded-2xl border border-brand/30 bg-brand-soft/40 p-6 text-center"
            aria-hidden={!flipped}
            onClick={() => setFlipped(false)}
          >
            <LangTag lang={back} full />
            <Side term={card} lang={back} large />
            <p className="max-w-lg text-sm text-muted">
              <JaText text={card.definition} />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => go(-1)} disabled={index === 0} className={buttonClass('ghost', 'md')}>
          <ArrowLeft className="size-4" aria-hidden /> Trước
        </button>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => mark('learning')}
            className={buttonClass('secondary', 'md', status === 'learning' ? 'border-warning text-warning' : '')}
          >
            <RotateCcw className="size-4" aria-hidden /> Ôn lại <kbd className="text-xs text-muted">1</kbd>
          </button>
          <button
            type="button"
            onClick={() => mark('known')}
            className={buttonClass('primary', 'md', status === 'known' ? 'ring-2 ring-success' : '')}
          >
            <Check className="size-4" aria-hidden /> Đã nhớ <kbd className="text-xs opacity-70">2</kbd>
          </button>
        </div>
        <button type="button" onClick={() => go(1)} className={buttonClass('ghost', 'md')}>
          Bỏ qua <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}
