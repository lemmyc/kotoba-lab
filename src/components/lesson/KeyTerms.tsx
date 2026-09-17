import { Layers } from 'lucide-react'
import { Link } from 'react-router'
import { getTermsForChapter } from '../../data/glossary'
import { TermCard } from '../glossary/TermCard'
import { buttonClass } from '../ui/button'
import { EmptyState } from '../ui/EmptyState'

export function KeyTerms({ slug }: { slug: string }) {
  const terms = getTermsForChapter(slug)

  return (
    <section aria-labelledby="thuat-ngu-chinh">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
        <h2 id="thuat-ngu-chinh" className="scroll-mt-24 text-2xl font-bold">
          Thuật ngữ chính
        </h2>
        {terms.length > 0 && (
          <Link to={`/the-ghi-nho?chuong=${slug}`} className={buttonClass('soft', 'sm')}>
            <Layers className="size-4" aria-hidden /> Ôn bằng thẻ ghi nhớ
          </Link>
        )}
      </div>
      {terms.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {terms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <EmptyState className="mt-6" title="Chưa có thuật ngữ cho chương này" description="Thuật ngữ sẽ được bổ sung khi chương được biên soạn." />
      )}
    </section>
  )
}
