import { isRouteErrorResponse, Link, useRouteError } from 'react-router'
import { buttonClass } from '../components/ui/button'

export default function RouteError() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'Đã có lỗi không mong muốn.'

  return (
    <div className="grid min-h-dvh place-items-center bg-bg px-4 text-ink">
      <div className="max-w-md text-center">
        <p lang="ja" className="text-5xl font-bold text-accent">
          おっと
        </p>
        <h1 className="mt-4 text-2xl font-bold">Rất tiếc, trang gặp sự cố</h1>
        <p className="mt-2 text-muted">{message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button type="button" onClick={() => window.location.reload()} className={buttonClass('secondary')}>
            Tải lại trang
          </button>
          <Link to="/" className={buttonClass('primary')} reloadDocument>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
