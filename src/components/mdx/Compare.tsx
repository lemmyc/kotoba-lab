import { Fragment } from 'react'
import { JaText } from '../ui/JaText'
import { LangTag } from '../ui/LangTag'

export interface CompareRow {
  aspect: string
  vi?: string
  en?: string
  ja?: string
}

interface CompareProps {
  rows: CompareRow[]
  caption?: string
}

/** kana / kanji — only those runs get lang="ja", so Vietnamese notes in a Japanese cell keep the Vietnamese font */
const JAPANESE = /[぀-ヿ㐀-䶿一-鿿豈-﫿々〆ヵヶ]/

function Segment({ text }: { text: string }) {
  return JAPANESE.test(text) ? <JaText text={text} lang="ja" /> : <JaText text={text} />
}

function Cell({ value, lang }: { value?: string; lang?: 'en' | 'ja' }) {
  if (!value?.trim()) {
    return (
      <span className="text-muted/70 italic" title="Đang biên soạn">
        …
      </span>
    )
  }
  // **bold** segments alternate with plain ones after the split
  const parts = value.split(/\*\*(.+?)\*\*/)
  const render = (part: string) => (lang === 'ja' ? <Segment text={part} /> : <JaText text={part} />)
  return (
    <span lang={lang === 'en' ? 'en' : undefined}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-brand">
            {render(part)}
          </strong>
        ) : (
          <Fragment key={index}>{render(part)}</Fragment>
        ),
      )}
    </span>
  )
}

/** Vietnamese – English – Japanese comparison table. Cells accept furigana markup and **bold**. */
export function Compare({ rows, caption }: CompareProps) {
  return (
    <div className="not-prose relative my-6 overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[40rem] border-collapse text-left text-[15px]">
        {caption && <caption className="border-b border-line px-4 py-3 text-left text-sm text-muted">{caption}</caption>}
        <thead>
          <tr className="bg-surface-2/70">
            <th scope="col" className="w-[22%] px-4 py-3 text-sm font-semibold">
              Khía cạnh
            </th>
            <th scope="col" className="px-4 py-3">
              <LangTag lang="vi" full />
            </th>
            <th scope="col" className="px-4 py-3">
              <LangTag lang="en" full />
            </th>
            <th scope="col" className="px-4 py-3">
              <LangTag lang="ja" full />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspect} className="border-t border-line align-top">
              <th scope="row" className="px-4 py-3 font-medium">
                {row.aspect}
              </th>
              <td className="px-4 py-3">
                <Cell value={row.vi} />
              </td>
              <td className="px-4 py-3">
                <Cell value={row.en} lang="en" />
              </td>
              <td className="px-4 py-3 leading-loose">
                <Cell value={row.ja} lang="ja" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
