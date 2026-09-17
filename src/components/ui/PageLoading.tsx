export function PageLoading() {
  return (
    <div className="grid min-h-[60dvh] place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3 text-muted">
        <span lang="ja" className="animate-pulse text-4xl font-bold text-brand">
          語
        </span>
        <span className="text-sm">Đang tải…</span>
      </div>
    </div>
  )
}

export default PageLoading
