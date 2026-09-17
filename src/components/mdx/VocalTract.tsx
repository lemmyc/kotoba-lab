import { DiagramLegend, Marker, type LegendItem } from './DiagramLegend'

type Articulator =
  | 'moi'
  | 'rang'
  | 'loi'
  | 'ngac-cung'
  | 'ngac-mem'
  | 'luoi-con'
  | 'dau-luoi'
  | 'than-luoi'
  | 'yet-hau'
  | 'thanh-hau'
  | 'khoang-mui'
  | 'khoang-mieng'

const PARTS: (LegendItem & { id: Articulator; marker: [number, number] })[] = [
  { id: 'moi', number: 1, vi: 'Môi', en: 'lips', color: 'var(--accent)', marker: [26, 157] },
  { id: 'rang', number: 2, vi: 'Răng', en: 'teeth', color: 'var(--accent)', marker: [50, 131] },
  { id: 'loi', number: 3, vi: 'Lợi (chân răng)', en: 'alveolar ridge', color: 'var(--accent)', marker: [80, 118] },
  { id: 'ngac-cung', number: 4, vi: 'Ngạc cứng', en: 'hard palate', color: 'var(--accent)', marker: [132, 103] },
  { id: 'ngac-mem', number: 5, vi: 'Ngạc mềm', en: 'soft palate, velum', color: 'var(--accent)', marker: [196, 108] },
  { id: 'luoi-con', number: 6, vi: 'Lưỡi con', en: 'uvula', color: 'var(--accent)', marker: [244, 158] },
  { id: 'dau-luoi', number: 7, vi: 'Đầu lưỡi', en: 'tongue tip', color: 'var(--en)', marker: [64, 190] },
  { id: 'than-luoi', number: 8, vi: 'Thân lưỡi', en: 'tongue body', color: 'var(--en)', marker: [150, 176] },
  { id: 'yet-hau', number: 9, vi: 'Yết hầu', en: 'pharynx', color: 'var(--vi)', marker: [236, 212] },
  { id: 'thanh-hau', number: 10, vi: 'Thanh hầu, dây thanh', en: 'larynx, vocal folds', color: 'var(--vi)', marker: [268, 292] },
  { id: 'khoang-mui', number: 11, vi: 'Khoang mũi', en: 'nasal cavity', color: 'var(--brand)', marker: [140, 78] },
  { id: 'khoang-mieng', number: 12, vi: 'Khoang miệng', en: 'oral cavity', color: 'var(--brand)', marker: [118, 138] },
]

interface VocalTractProps {
  /** articulator ids to emphasise; others are dimmed. Omit to show all equally. */
  highlight?: Articulator[]
  caption?: string
}

/** Schematic mid-sagittal section of the vocal tract (speaker faces left). */
export function VocalTract({ highlight, caption }: VocalTractProps) {
  const isDim = (id: string) => Boolean(highlight?.length) && !highlight!.includes(id as Articulator)

  return (
    <figure className="not-prose my-6 rounded-xl border border-line bg-surface px-4 py-4">
      <svg
        viewBox="0 0 300 330"
        className="mx-auto block h-auto w-full max-w-[24rem]"
        role="img"
        aria-label="Sơ đồ mặt cắt dọc bộ máy phát âm, người nói quay mặt sang trái: môi, răng, lợi, ngạc cứng, ngạc mềm, lưỡi con, lưỡi, khoang miệng, khoang mũi, yết hầu và thanh hầu với dây thanh."
      >
        {/* airway fill: nasal cavity, oral cavity, pharynx, larynx */}
        <path d="M64,62 C120,50 190,52 232,78 C252,104 258,150 256,210 L256,326 L220,326 L218,272 C214,262 210,256 206,250 C190,238 110,222 64,196 Z" fill="var(--brand-soft)" fillOpacity={0.55} />

        {/* face profile */}
        <path
          d="M70,10 C66,36 58,56 28,94 L46,108 C44,118 38,126 34,136 C30,144 34,150 44,152 M44,162 C30,166 28,180 36,190 C42,200 38,214 34,230 C40,252 80,262 124,260 C156,258 180,270 196,300 L204,326"
          fill="none"
          stroke="var(--ink)"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* nasal roof and back wall of the pharynx */}
        <path d="M64,62 C120,50 190,52 232,78 C252,104 258,150 256,210 L256,326" fill="none" stroke="var(--ink)" strokeWidth={1.8} />

        {/* hard palate (bone between nose and mouth) */}
        <path d="M60,110 C110,104 170,104 200,110 L182,120 C140,116 104,118 88,126 C80,131 74,136 68,140 Z" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth={1.4} />
        {/* soft palate + uvula */}
        <path d="M200,110 C222,116 238,134 236,160 C226,152 212,136 182,120 Z" fill="var(--ja-soft)" stroke="var(--ink)" strokeWidth={1.4} />
        {/* teeth */}
        <path d="M52,136 L66,140 L62,155 L50,153 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth={1.3} />
        <path d="M52,162 L64,160 L67,176 L55,177 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth={1.3} />
        {/* tongue */}
        <path
          d="M58,184 C62,168 90,150 130,144 C170,138 204,150 214,176 C222,200 216,226 208,246 C190,240 116,224 70,202 C62,198 57,192 58,184 Z"
          fill="var(--accent-soft)"
          stroke="var(--ink)"
          strokeWidth={1.4}
        />
        {/* epiglottis */}
        <path d="M208,250 C216,238 228,236 234,244" fill="none" stroke="var(--ink)" strokeWidth={1.4} strokeLinecap="round" />
        {/* front wall of larynx / trachea */}
        <path d="M208,250 C214,262 218,276 220,326" fill="none" stroke="var(--ink)" strokeWidth={1.8} />
        {/* vocal folds */}
        <path d="M220,292 L236,296 M256,292 L240,296" stroke="var(--ink)" strokeWidth={3} strokeLinecap="round" />

        {PARTS.map((part) => (
          <Marker key={part.id} x={part.marker[0]} y={part.marker[1]} number={part.number} color={part.color} dim={isDim(part.id)} />
        ))}
      </svg>
      <DiagramLegend items={PARTS} isDim={isDim} />
      <figcaption className="mt-3 text-sm text-muted">{caption ?? 'Sơ đồ đơn giản hóa, không theo đúng tỉ lệ giải phẫu.'}</figcaption>
    </figure>
  )
}
