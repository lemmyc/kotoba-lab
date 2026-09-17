import { useEffect, useState } from 'react'
import { BookOpen, ChartNoAxesColumn, Info, Languages, Layers, Library, Menu, Search, X } from 'lucide-react'
import { NavLink } from 'react-router'
import { cn } from '../../lib/utils'
import { FuriganaToggle } from './FuriganaToggle'
import { Logo } from './Logo'
import { SearchDialog } from './SearchDialog'
import { ThemeToggle } from './ThemeToggle'

const NAV_ITEMS = [
  { to: '/khoa-hoc', label: 'Khóa học', Icon: BookOpen },
  { to: '/thuat-ngu', label: 'Thuật ngữ', Icon: Languages },
  { to: '/the-ghi-nho', label: 'Thẻ ghi nhớ', Icon: Layers },
  { to: '/tien-do', label: 'Tiến độ', Icon: ChartNoAxesColumn },
] as const

const SECONDARY_ITEMS = [
  { to: '/tai-lieu', label: 'Tài liệu tham khảo', Icon: Library },
  { to: '/gioi-thieu', label: 'Giới thiệu & hướng dẫn', Icon: Info },
] as const

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setMenuOpen(false)
        setSearchOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Logo onClick={closeMenu} />

        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  isActive ? 'bg-brand-soft text-brand' : 'text-muted hover:bg-surface-2 hover:text-ink',
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm text-muted transition hover:border-brand/40 hover:text-ink sm:inline-flex"
            aria-label="Tìm kiếm (Ctrl+K)"
          >
            <Search className="size-4" aria-hidden />
            <span className="pr-4">Tìm kiếm…</span>
            <kbd className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-sans text-[10px]">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="grid size-9 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-ink sm:hidden"
            aria-label="Tìm kiếm"
          >
            <Search className="size-[18px]" aria-hidden />
          </button>
          <FuriganaToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-9 place-items-center rounded-lg text-ink hover:bg-surface-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6" aria-label="Menu di động">
            {[...NAV_ITEMS, ...SECONDARY_ITEMS].map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium',
                    isActive ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-surface-2',
                  )
                }
              >
                <Icon className="size-[18px] text-muted" aria-hidden />
                {label}
              </NavLink>
            ))}
            <div className="mt-2 grid gap-2 border-t border-line pt-3 sm:grid-cols-2">
              <FuriganaToggle variant="labeled" className="justify-start" />
              <ThemeToggle withLabel className="border border-line bg-surface" />
            </div>
          </nav>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
