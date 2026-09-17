import { useEffect } from 'react'

const SITE_NAME = 'Kotoba Lab'
const DEFAULT_TITLE = 'Kotoba Lab — Nhập môn Ngôn ngữ học'
const DEFAULT_DESCRIPTION =
  'Kotoba Lab — học Nhập môn Ngôn ngữ học (Introduction to Language) bằng tiếng Việt, mở rộng sang tiếng Anh và tiếng Nhật.'

/** Sets document title + meta description for the current page. */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? DEFAULT_DESCRIPTION
  }, [title, description])
}
