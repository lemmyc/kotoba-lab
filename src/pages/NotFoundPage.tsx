import { Link } from 'react-router'
import { buttonClass } from '../components/ui/button'
import { JaText } from '../components/ui/JaText'
import { usePageMeta } from '../lib/page-meta'

export default function NotFoundPage() {
  usePageMeta('Không tìm thấy trang')

  return (
    <div className="mx-auto grid min-h-[60dvh] max-w-xl place-items-center px-4 py-16 text-center">
      <div>
        <p className="text-7xl font-bold tracking-tight text-brand tabular-nums">404</p>
        <h1 className="mt-4 text-2xl font-bold">Không tìm thấy trang</h1>
        <p className="mt-2 text-lg leading-loose">
          <JaText text="迷子{まいご}になりました…" lang="ja" />{' '}
          <span className="text-sm text-muted">(Trang này đã “đi lạc”.)</span>
        </p>
        <p className="mt-2 text-muted">Đường dẫn có thể đã sai hoặc chương này không tồn tại.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link to="/" className={buttonClass('primary')}>
            Về trang chủ
          </Link>
          <Link to="/khoa-hoc" className={buttonClass('secondary')}>
            Xem lộ trình khóa học
          </Link>
        </div>
      </div>
    </div>
  )
}
