import { cn } from '../../lib/utils'

export interface LegendItem {
  id: string
  number: number
  vi: string
  en: string
  color: string
}

/** Small numbered marker drawn inside a diagram SVG. */
export function Marker({ x, y, number, color, dim }: { x: number; y: number; number: number; color: string; dim: boolean }) {
  return (
    <g opacity={dim ? 0.35 : 1}>
      <circle cx={x} cy={y} r={8.5} fill="var(--surface)" stroke={color} strokeWidth={2} />
      <text x={x} y={y + 3.6} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink)">
        {number}
      </text>
    </g>
  )
}

/** Numbered legend under a diagram; dims items that are not highlighted. */
export function DiagramLegend({ items, isDim }: { items: LegendItem[]; isDim: (id: string) => boolean }) {
  return (
    <ol className="mt-3 grid gap-x-5 gap-y-1.5 text-sm sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} className={cn('flex items-baseline gap-2', isDim(item.id) && 'opacity-45')}>
          <span
            className="grid size-5 shrink-0 translate-y-1 place-items-center rounded-full border-2 bg-surface text-[11px] font-bold"
            style={{ borderColor: item.color }}
            aria-hidden
          >
            {item.number}
          </span>
          <span>
            <span className="font-medium">{item.vi}</span> <span className="text-muted italic">({item.en})</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
