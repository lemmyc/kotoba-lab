import { Link } from 'react-router'
import { getLesson } from '../../data/lessons'
import type { GlossaryTerm } from '../../data/types'
import { stripFurigana } from '../../lib/furigana'
import { cn } from '../../lib/utils'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'
import { SpeakButton } from '../ui/SpeakButton'

interface TermCardProps {
  term: GlossaryTerm
  showChapter?: boolean
  highlighted?: boolean
}

export function TermCard({ term, showChapter = false, highlighted = false }: TermCardProps) {
  const lesson = getLesson(term.chapter)

  return (
    <article
      id={`term-${term.id}`}
      className={cn(
        'flex h-full scroll-mt-24 flex-col rounded-2xl border bg-surface p-5 transition',
        highlighted ? 'border-accent-bright ring-2 ring-accent-bright/30' : 'border-line',
      )}
    >
      <h3 className="text-lg font-semibold">{term.vi}</h3>

      <dl className="mt-3 space-y-2 text-[15px]">
        <div className="flex items-center gap-2">
          <dt>
            <LangTag lang="en" />
          </dt>
          <dd className="flex min-w-0 flex-wrap items-center gap-x-2">
            <span lang="en" className="font-medium">
              {term.en}
            </span>
            {term.ipaEn && <span className="font-ipa text-sm text-muted">/{term.ipaEn}/</span>}
            <SpeakButton text={term.en} lang="en" />
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <dt>
            <LangTag lang="ja" />
          </dt>
          <dd className="flex min-w-0 flex-wrap items-center gap-x-2">
            <JaText text={term.ja} lang="ja" className="text-lg leading-loose font-medium" />
            <span className="text-sm text-muted italic">{term.romaji}</span>
            <SpeakButton text={stripFurigana(term.ja)} lang="ja" />
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        <JaText text={term.definition} />
      </p>

      {showChapter && lesson && (
        <Link
          to={`/bai-hoc/${lesson.slug}`}
          className="mt-auto self-start pt-4 text-xs font-medium text-brand hover:underline"
        >
          Chương {lesson.number}: {lesson.title} →
        </Link>
      )}
    </article>
  )
}
