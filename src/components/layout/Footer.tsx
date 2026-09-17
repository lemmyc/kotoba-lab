import { Link } from 'react-router'
import { Logo } from './Logo'

const REPO_URL = 'https://github.com/lemmyc/kotoba-lab'

const COLUMNS = [
  {
    title: 'Học tập',
    links: [
      { to: '/khoa-hoc', label: 'Lộ trình 12 chương' },
      { to: '/thuat-ngu', label: 'Từ điển thuật ngữ' },
      { to: '/the-ghi-nho', label: 'Thẻ ghi nhớ' },
      { to: '/tien-do', label: 'Tiến độ của tôi' },
    ],
  },
  {
    title: 'Tham khảo',
    links: [
      { to: '/tai-lieu', label: 'Tài liệu tham khảo' },
      { to: '/gioi-thieu', label: 'Giới thiệu & hướng dẫn' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Học ngôn ngữ học bằng tiếng Việt, đối chiếu với tiếng Anh và tiếng Nhật.{' '}
            <span lang="ja">言葉を知る、世界を知る。</span>
          </p>
          <p className="mt-4 text-xs text-muted">
            Nội dung được biên soạn với sự hỗ trợ của AI — hãy đối chiếu với giáo trình khi học tập, nghiên cứu.
          </p>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold">{column.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted transition hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
              {column.title === 'Tham khảo' && (
                <li>
                  <a href={REPO_URL} target="_blank" rel="noreferrer" className="text-muted transition hover:text-brand">
                    Mã nguồn trên GitHub ↗
                  </a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} Kotoba Lab · Tiến độ học được lưu trên trình duyệt của bạn.
        </p>
      </div>
    </footer>
  )
}
