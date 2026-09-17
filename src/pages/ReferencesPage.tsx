import { ExternalLink } from 'lucide-react'
import { LangTag } from '../components/ui/LangTag'
import { PageHeader } from '../components/ui/PageHeader'
import { lessons } from '../data/lessons'
import { references } from '../data/references'
import type { Reference } from '../data/types'
import { usePageMeta } from '../lib/page-meta'

const GROUPS: { title: string; description: string; filter: (ref: Reference) => boolean }[] = [
  {
    title: 'Giáo trình và công trình ngôn ngữ học đại cương',
    description: 'Nền tảng lý thuyết chung của khóa học.',
    filter: (ref) => ref.kind !== 'online' && ref.focus === 'general',
  },
  {
    title: 'Về tiếng Việt',
    description: 'Tài liệu để đào sâu phần cơ sở lý thuyết và ví dụ tiếng Việt.',
    filter: (ref) => ref.kind !== 'online' && ref.focus === 'vi',
  },
  {
    title: 'Về tiếng Nhật',
    description: 'Tài liệu cho phần mở rộng tiếng Nhật.',
    filter: (ref) => ref.kind !== 'online' && ref.focus === 'ja',
  },
  {
    title: 'Tài nguyên trực tuyến',
    description: 'Cơ sở dữ liệu và công cụ tra cứu miễn phí.',
    filter: (ref) => ref.kind === 'online',
  },
]

const lessonNumber = new Map(lessons.map((lesson) => [lesson.slug, lesson.number]))

export default function ReferencesPage() {
  usePageMeta('Tài liệu tham khảo')

  return (
    <>
      <PageHeader
        eyebrow="Tham khảo · 参考文献"
        title="Tài liệu tham khảo"
        description="Các giáo trình và nguồn tra cứu nên đọc song song với Kotoba Lab. Nội dung trên web chỉ là phần nhập môn — hãy dùng tài liệu gốc khi học tập và nghiên cứu."
      />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6">
        {GROUPS.map((group) => {
          const items = references.filter(group.filter)
          if (items.length === 0) return null
          return (
            <section key={group.title}>
              <h2 className="text-xl font-bold">{group.title}</h2>
              <p className="mt-1 text-sm text-muted">{group.description}</p>
              <ul className="mt-5 space-y-3">
                {items.map((ref) => (
                  <li key={ref.id} className="rounded-xl border border-line bg-surface p-4">
                    <p className="text-[15px]">
                      <span className="font-medium">{ref.authors}</span>
                      {ref.year && <span className="text-muted"> ({ref.year})</span>}.{' '}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand italic hover:underline">
                          {ref.title}
                          <ExternalLink className="size-3.5" aria-hidden />
                        </a>
                      ) : (
                        <em>{ref.title}</em>
                      )}
                      {ref.publisher && <span className="text-muted">. {ref.publisher}</span>}.
                    </p>
                    {ref.note && <p className="mt-1 text-sm text-muted">{ref.note}</p>}
                    {(ref.chapters?.length || ref.focus !== 'general') && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted">
                        {ref.focus !== 'general' && <LangTag lang={ref.focus} />}
                        {ref.chapters?.map((slug) => (
                          <span key={slug} className="rounded-md bg-surface-2 px-1.5 py-0.5">
                            Chương {lessonNumber.get(slug)}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </>
  )
}
