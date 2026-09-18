import { Link } from 'react-router'
import { StatusBadge } from '../components/lesson/StatusBadge'
import { buttonClass } from '../components/ui/button'
import { JaText } from '../components/ui/JaText'
import { LangTag } from '../components/ui/LangTag'
import { PageHeader } from '../components/ui/PageHeader'
import { lessons } from '../data/lessons'
import { usePageMeta } from '../lib/page-meta'

const SHORTCUTS = [
  { keys: ['Ctrl', 'K'], label: 'Mở ô tìm kiếm (⌘ K trên macOS)' },
  { keys: ['F'], label: 'Bật / tắt furigana cho tiếng Nhật' },
  { keys: ['Shift', '←', '→'], label: 'Sang chương trước / chương sau (khi đang đọc bài)' },
  { keys: ['Space'], label: 'Lật thẻ ghi nhớ' },
  { keys: ['←', '→'], label: 'Chuyển thẻ ghi nhớ' },
  { keys: ['1', '2'], label: 'Đánh dấu thẻ: Ôn lại / Đã nhớ' },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-pretty">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  usePageMeta('Giới thiệu & hướng dẫn')
  const allComplete = lessons.every((lesson) => lesson.status === 'complete')

  return (
    <>
      <PageHeader
        eyebrow="Giới thiệu · Kotoba Lab について"
        title="Về Kotoba Lab"
        description={
          <>
            <JaText text="言葉{ことば}" lang="ja" /> (kotoba) trong tiếng Nhật nghĩa là “lời nói, ngôn ngữ”. Kotoba Lab là
            “phòng thí nghiệm” nhỏ để khám phá ngôn ngữ học.
          </>
        }
      />

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-10 sm:px-6">
        <Section title="Mục đích">
          <p>
            Kotoba Lab là khóa học trực tuyến về <strong>Nhập môn Ngôn ngữ học (Introduction to Language)</strong> dành cho sinh
            viên và người yêu ngôn ngữ nói tiếng Việt. Lý thuyết được giảng bằng tiếng Việt, rồi được “thử nghiệm” trên hai
            ngôn ngữ rất khác nhau: tiếng Anh (Ấn – Âu, biến tố) và tiếng Nhật (chắp dính, SOV, ba bộ chữ).
          </p>
          <p>
            So sánh ba ngôn ngữ giúp khái niệm trừu tượng trở nên cụ thể, đồng thời hỗ trợ trực tiếp cho việc học tiếng Anh
            và tiếng Nhật.
          </p>
        </Section>

        <Section title="Cấu trúc mỗi chương">
          <ol className="list-decimal space-y-1.5 pl-5">
            <li>
              <strong>Cơ sở lý thuyết</strong> <LangTag lang="vi" /> — khái niệm, định nghĩa, ví dụ tiếng Việt.
            </li>
            <li>
              <strong>Mở rộng: Tiếng Anh</strong> <LangTag lang="en" /> — hiện tượng tương ứng, thuật ngữ, IPA.
            </li>
            <li>
              <strong>Mở rộng: Tiếng Nhật</strong> <LangTag lang="ja" /> — ví dụ có furigana, romaji và chú giải từng hình vị.
            </li>
            <li>
              <strong>So sánh Việt – Anh – Nhật</strong> — bảng đối chiếu.
            </li>
            <li>
              <strong>Tóm tắt</strong> — kèm bản tóm tắt bằng tiếng Anh và tiếng Nhật; <strong>câu hỏi thảo luận</strong>.
            </li>
            <li>
              <strong>Thuật ngữ chính</strong>, <strong>quiz</strong> và <strong>thẻ ghi nhớ</strong>.
            </li>
          </ol>
        </Section>

        <Section title="Trạng thái nội dung">
          <p>
            {allComplete
              ? `Cả ${lessons.length} chương đều đã có đầy đủ bài giảng, thuật ngữ và quiz. Mỗi chương mang một nhãn trạng thái:`
              : 'Khóa học đang được biên soạn dần. Mỗi chương có nhãn trạng thái:'}
          </p>
          <ul className="space-y-2">
            <li className="flex flex-wrap items-center gap-2">
              <StatusBadge status="outline" /> đã có đề cương và dữ liệu mẫu, phần giảng chi tiết đang viết.
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <StatusBadge status="draft" /> đã có nội dung đầy đủ, đang được rà soát.
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <StatusBadge status="complete" /> đã hoàn chỉnh.
            </li>
          </ul>
        </Section>

        <Section title="Phím tắt">
          <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
            {SHORTCUTS.map((shortcut) => (
              <li key={shortcut.label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                <span>{shortcut.label}</span>
                <span className="flex gap-1">
                  {shortcut.keys.map((key) => (
                    <kbd key={key} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-sans text-xs">
                      {key}
                    </kbd>
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            Khi tắt furigana, cách đọc bị ẩn nhưng vẫn giữ chỗ để dòng chữ không bị xô lệch. Rê chuột, dùng phím Tab hoặc chạm
            vào chữ Hán có gạch chấm để xem cách đọc của riêng từ đó.
          </p>
        </Section>

        <Section title="Lưu ý về nội dung">
          <p>
            Nội dung được biên soạn với sự hỗ trợ của AI. Hãy đối chiếu với giáo trình (xem{' '}
            <Link to="/tai-lieu" className="text-brand hover:underline">
              Tài liệu tham khảo
            </Link>
            ) khi dùng cho học tập hoặc nghiên cứu chính thức. Nếu phát hiện sai sót, bạn có thể góp ý qua GitHub.
          </p>
        </Section>

        <Section title="Quyền riêng tư">
          <p>
            Kotoba Lab không có tài khoản, không thu thập dữ liệu. Tiến độ học, điểm quiz, thẻ đã nhớ và tùy chọn giao diện
            (sáng/tối, furigana) chỉ được lưu trong <code className="rounded bg-surface-2 px-1">localStorage</code> của trình
            duyệt. Tính năng phát âm dùng giọng đọc có sẵn trên thiết bị của bạn.
          </p>
        </Section>

        <div className="flex flex-wrap gap-2">
          <Link to="/khoa-hoc" className={buttonClass('primary')}>
            Bắt đầu học
          </Link>
          <a href="https://github.com/lemmyc/kotoba-lab" target="_blank" rel="noreferrer" className={buttonClass('secondary')}>
            Mã nguồn trên GitHub ↗
          </a>
        </div>
      </div>
    </>
  )
}
