import { Link } from 'react-router'
import { cn } from '../../lib/utils'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className={cn('group flex items-center gap-2.5', className)} aria-label="Kotoba Lab — Trang chủ">
      <span
        lang="ja"
        className="relative grid size-9 place-items-center rounded-xl bg-brand text-lg font-bold text-brand-ink shadow-sm transition group-hover:rotate-[-4deg]"
        aria-hidden
      >
        語
        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-accent-bright ring-2 ring-bg" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">Kotoba Lab</span>
        <span className="block text-[11px] text-muted">Nhập môn Ngôn ngữ học</span>
      </span>
    </Link>
  )
}
