import { ArrowRight, BookOpen, Keyboard, Languages, Layers, ListChecks } from 'lucide-react'
import { Link } from 'react-router'
import { ChapterCard } from '../components/lesson/ChapterCard'
import { buttonClass } from '../components/ui/button'
import { JaText } from '../components/ui/JaText'
import { LangTag } from '../components/ui/LangTag'
import { SpeakButton } from '../components/ui/SpeakButton'
import { glossary } from '../data/glossary'
import { getLessonsByPart, lessons, parts } from '../data/lessons'
import { totalQuestions } from '../data/quizzes'
import type { LangCode } from '../data/types'
import { usePageMeta } from '../lib/page-meta'
import { useProgress } from '../lib/progress'
import { cn } from '../lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV']

const STEPS = [
  {
    Icon: BookOpen,
    title: 'Đọc lý thuyết',
    text: 'Khái niệm cốt lõi được giảng bằng tiếng Việt, kèm định nghĩa và ví dụ gần gũi.',
  },
  {
    Icon: Languages,
    title: 'Mở rộng sang Anh – Nhật',
    text: 'Xem cùng một hiện tượng vận hành thế nào trong tiếng Anh và tiếng Nhật.',
  },
  {
    Icon: ListChecks,
    title: 'Làm quiz',
    text: 'Kiểm tra hiểu biết với câu hỏi có giải thích chi tiết sau mỗi lựa chọn.',
  },
  {
    Icon: Layers,
    title: 'Ôn bằng thẻ ghi nhớ',
    text: 'Ghi nhớ thuật ngữ ba thứ tiếng bằng flashcard, có phát âm và furigana.',
  },
]

type Role = 'S' | 'O' | 'V'
const ROLE_STYLE: Record<Role, string> = {
  S: 'border-brand/40 bg-brand-soft text-brand',
  O: 'border-accent/40 bg-accent-soft text-accent',
  V: 'border-success/40 bg-success-soft text-success',
}
const ROLE_NAME: Record<Role, string> = { S: 'Chủ ngữ', O: 'Tân ngữ', V: 'Động từ' }

const WORD_ORDER: { lang: LangCode; order: string; words: { text: string; role: Role }[]; note?: string }[] = [
  { lang: 'vi', order: 'SVO', words: [{ text: 'Tôi', role: 'S' }, { text: 'ăn', role: 'V' }, { text: 'cơm', role: 'O' }] },
  { lang: 'en', order: 'SVO', words: [{ text: 'I', role: 'S' }, { text: 'eat', role: 'V' }, { text: 'rice', role: 'O' }] },
  {
    lang: 'ja',
    order: 'SOV',
    words: [
      { text: '私{わたし}は', role: 'S' },
      { text: 'ご飯{はん}を', role: 'O' },
      { text: '食{た}べる', role: 'V' },
    ],
    note: 'Trợ từ は, を cho biết vai trò của từ — động từ luôn đứng cuối.',
  },
]

export default function HomePage() {
  usePageMeta()
  const progress = useProgress()
  const completedCount = lessons.filter((lesson) => progress.completed.includes(lesson.slug)).length
  const nextLesson = lessons.find((lesson) => !progress.completed.includes(lesson.slug)) ?? lessons[0]
  const started = completedCount > 0

  const stats = [
    { value: lessons.length, label: 'chương học' },
    { value: glossary.length, label: 'thuật ngữ ba ngữ' },
    { value: totalQuestions, label: 'câu hỏi quiz' },
    { value: 3, label: 'ngôn ngữ đối chiếu' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-paper absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <p className="text-sm font-medium text-accent">
              Introduction to Language · <span lang="ja">言語学入門</span>
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hiểu ngôn ngữ qua <span className="text-brand">ba lăng kính</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-pretty text-muted">
              Kotoba Lab là khóa Nhập môn Ngôn ngữ học giảng bằng tiếng Việt. Mỗi khái niệm được soi chiếu qua tiếng Việt,
              tiếng Anh và tiếng Nhật — để bạn không chỉ thuộc thuật ngữ mà thật sự thấy ngôn ngữ vận hành.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <LangTag lang="vi" full className="px-2.5 py-1 text-xs" />
              <LangTag lang="en" full className="px-2.5 py-1 text-xs" />
              <LangTag lang="ja" full className="px-2.5 py-1 text-xs" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/bai-hoc/${nextLesson.slug}`} className={buttonClass('primary', 'lg')}>
                {started ? `Học tiếp: Chương ${nextLesson.number}` : 'Bắt đầu học'}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link to="/khoa-hoc" className={buttonClass('secondary', 'lg')}>
                Xem lộ trình 12 chương
              </Link>
            </div>
            {started && (
              <p className="mt-4 text-sm text-muted">
                Bạn đã hoàn thành {completedCount}/{lessons.length} chương.{' '}
                <Link to="/tien-do" className="text-brand hover:underline">
                  Xem tiến độ
                </Link>
              </p>
            )}
          </div>

          {/* One concept, three languages */}
          <div className="relative">
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-xl shadow-brand/5 sm:p-8">
              <p className="text-xs font-semibold tracking-wider text-muted uppercase">Một khái niệm · ba ngôn ngữ</p>
              <ul className="mt-5 divide-y divide-line">
                <li className="flex items-center gap-4 py-4">
                  <LangTag lang="vi" />
                  <span className="text-2xl font-bold">ngôn ngữ</span>
                  <span className="ml-auto text-sm text-muted">Hán Việt</span>
                </li>
                <li className="flex items-center gap-4 py-4">
                  <LangTag lang="en" />
                  <span lang="en" className="text-2xl font-bold">
                    language
                  </span>
                  <span className="font-ipa text-sm text-muted">/ˈlæŋɡwɪdʒ/</span>
                  <SpeakButton text="language" lang="en" className="ml-auto" />
                </li>
                <li className="flex items-center gap-4 py-4">
                  <LangTag lang="ja" />
                  <JaText text="言語{げんご}" lang="ja" className="text-2xl leading-loose font-bold" />
                  <span className="text-sm text-muted italic">gengo</span>
                  <SpeakButton text="言語" lang="ja" className="ml-auto" />
                </li>
              </ul>
              <p className="mt-4 rounded-xl bg-accent-soft/70 px-4 py-3 text-sm">
                <span lang="ja" className="font-semibold text-accent">
                  言語
                </span>{' '}
                — đọc Hán Việt là <em>ngôn ngữ</em>, đọc tiếng Nhật là <em>gengo</em>: cùng một gốc chữ Hán.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-b-2xl border border-t-0 border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-brand tabular-nums">{stat.value}</span>
                <span className="mt-1 block text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How to learn */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Học thế nào với Kotoba Lab?</h2>
        <p className="mt-2 max-w-2xl text-muted">Mỗi chương đi theo cùng một nhịp bốn bước.</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ Icon, title, text }, index) => (
            <li key={title} className="relative rounded-2xl border border-line bg-surface p-5">
              <span className="absolute top-4 right-5 text-3xl font-bold text-line tabular-nums" aria-hidden>
                {index + 1}
              </span>
              <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand" aria-hidden>
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Word order demo */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-accent">Xem trước Chương 4 · Cú pháp học</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Một câu, hai trật tự</h2>
            <p className="mt-3 text-muted">
              Tiếng Việt và tiếng Anh đặt động từ trước tân ngữ (SVO), còn tiếng Nhật đưa động từ xuống cuối câu (SOV). Vì sao
              lại như vậy, và điều đó kéo theo những khác biệt gì? Đó là câu hỏi mà ngôn ngữ học giúp bạn trả lời.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {(Object.keys(ROLE_STYLE) as Role[]).map((role) => (
                <span key={role} className={cn('rounded-md border px-2 py-1 font-medium', ROLE_STYLE[role])}>
                  {role} = {ROLE_NAME[role]}
                </span>
              ))}
            </div>
            <Link to="/bai-hoc/cu-phap-hoc" className={buttonClass('soft', 'md', 'mt-6')}>
              Đến chương Cú pháp học <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="space-y-3">
            {WORD_ORDER.map((row) => (
              <div key={row.lang} className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <LangTag lang={row.lang} full />
                  <span className="font-mono text-sm font-semibold text-muted">{row.order}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {row.words.map((word) => (
                    <span
                      key={word.text}
                      className={cn('rounded-xl border px-3 py-1.5 text-lg leading-loose font-medium', ROLE_STYLE[word.role])}
                      title={ROLE_NAME[word.role]}
                    >
                      <JaText text={word.text} lang={row.lang === 'ja' ? 'ja' : undefined} />
                      <sub className="ml-1 text-[10px] font-bold opacity-70">{word.role}</sub>
                    </span>
                  ))}
                </div>
                {row.note && <p className="mt-2 text-sm text-muted">{row.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Lộ trình khóa học</h2>
            <p className="mt-2 text-muted">4 phần · {lessons.length} chương, đi từ bản chất ngôn ngữ đến ngôn ngữ trong xã hội.</p>
          </div>
          <Link to="/khoa-hoc" className={buttonClass('secondary')}>
            Xem chi tiết <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 space-y-12">
          {parts.map((part) => (
            <div key={part.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm font-bold text-accent">Phần {ROMAN[part.id - 1]}</span>
                <h3 className="text-xl font-semibold">{part.title}</h3>
                <span className="text-sm text-muted">
                  {part.titleEn} · <JaText text={part.titleJa} lang="ja" />
                </span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getLessonsByPart(part.id).map((lesson) => (
                  <ChapterCard key={lesson.slug} lesson={lesson} compact />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-3xl bg-brand px-6 py-8 text-brand-ink sm:flex-row sm:items-center sm:px-10">
          <Keyboard className="size-8 shrink-0 opacity-80" aria-hidden />
          <div className="flex-1">
            <p className="text-lg font-semibold">Mẹo nhỏ khi học</p>
            <p className="mt-1 text-sm opacity-85">
              Nhấn <kbd className="rounded bg-white/15 px-1.5 py-0.5 font-sans">F</kbd> để bật/tắt furigana, nhấn{' '}
              <kbd className="rounded bg-white/15 px-1.5 py-0.5 font-sans">Ctrl K</kbd> để tìm chương hoặc thuật ngữ. Khi tắt
              furigana, rê chuột hoặc chạm vào chữ Hán để xem cách đọc.
            </p>
          </div>
          <Link to="/gioi-thieu" className="rounded-xl bg-white/15 px-4 py-2 text-sm font-medium hover:bg-white/25">
            Hướng dẫn sử dụng
          </Link>
        </div>
      </section>
    </>
  )
}
