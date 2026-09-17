import { SpeakButton } from '../ui/SpeakButton'
import type { LangCode } from '../../data/types'

export interface ToneContour {
  /** tone name, e.g. "sắc" */
  name: string
  /** example syllable, e.g. "má" */
  example?: string
  /** pitch notation shown under the name, e.g. "35", "3ˀ5" */
  chao: string
  /** pitch levels on the 1–5 scale, evenly spaced in time */
  points: number[]
  /** 0–1: where glottalisation (a break or a final stop) happens */
  glottalAt?: number
  /** 0–1: relative duration (short, checked tones < 1) */
  duration?: number
}

/**
 * Hanoi Vietnamese tones on Chao's 5-level scale. Sources differ slightly
 * (e.g. hỏi 313 ~ 31, ngã 3ˀ5 ~ 4ˀ5) — the default caption says so.
 */
const VIETNAMESE_TONES: ToneContour[] = [
  { name: 'ngang', example: 'ma', chao: '33', points: [3, 3] },
  { name: 'huyền', example: 'mà', chao: '21', points: [2, 1] },
  { name: 'sắc', example: 'má', chao: '35', points: [3, 5] },
  { name: 'hỏi', example: 'mả', chao: '313', points: [3, 1, 3] },
  { name: 'ngã', example: 'mã', chao: '3ˀ5', points: [3, 5], glottalAt: 0.45 },
  { name: 'nặng', example: 'mạ', chao: '3ˀ2ʔ', points: [3, 2], glottalAt: 1, duration: 0.6 },
]

const DEFAULT_CAPTION =
  'Đường nét cao độ gần đúng của 6 thanh tiếng Việt (phương ngữ Hà Nội) trên thang 5 bậc: 1 thấp nhất, 5 cao nhất; ˀ, ʔ là chỗ thanh hầu hóa. Các tài liệu ghi nhận có biến thể, ví dụ hỏi 313 hoặc 31, ngã 3ˀ5 hoặc 4ˀ5.'

const W = 132
const H = 92
const LEFT = 20
const RIGHT = 124
const TOP = 12
const STEP = 16 // px per pitch level

const yOf = (level: number) => TOP + (5 - level) * STEP

/** Pitch at time t (0–1) with cosine easing between knots, so contours look smooth. */
function pitchAt(points: number[], t: number) {
  if (points.length === 1) return points[0]
  const scaled = t * (points.length - 1)
  const index = Math.min(Math.floor(scaled), points.length - 2)
  const local = scaled - index
  const eased = (1 - Math.cos(local * Math.PI)) / 2
  return points[index] + (points[index + 1] - points[index]) * eased
}

function contourPaths(tone: ToneContour) {
  const samples = 32
  const duration = tone.duration ?? 1
  const gap = tone.glottalAt !== undefined && tone.glottalAt < 1 ? tone.glottalAt : undefined
  const segments: string[] = []
  let current: string[] = []
  for (let i = 0; i <= samples; i++) {
    const t = i / samples
    if (gap !== undefined && Math.abs(t - gap) < 0.06) {
      if (current.length > 1) segments.push(current.join(' '))
      current = []
      continue
    }
    const x = LEFT + t * duration * (RIGHT - LEFT)
    const y = yOf(pitchAt(tone.points, t))
    current.push(`${current.length === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`)
  }
  if (current.length > 1) segments.push(current.join(' '))
  return segments
}

function TonePanel({ tone, lang }: { tone: ToneContour; lang: LangCode }) {
  const duration = tone.duration ?? 1
  const glottal =
    tone.glottalAt === undefined
      ? undefined
      : {
          x: LEFT + Math.min(tone.glottalAt, 1) * duration * (RIGHT - LEFT),
          y: yOf(pitchAt(tone.points, Math.min(tone.glottalAt, 1))),
        }

  return (
    <div className="rounded-lg border border-line bg-bg/40 px-2 pt-2 pb-2.5">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={`Thanh ${tone.name}: đường nét ${tone.chao}`}>
        {[5, 4, 3, 2, 1].map((level) => (
          <g key={level}>
            <line x1={LEFT} x2={RIGHT} y1={yOf(level)} y2={yOf(level)} stroke="var(--line)" strokeWidth={1} strokeDasharray={level === 3 ? undefined : '3 3'} />
            <text x={LEFT - 7} y={yOf(level) + 3.5} textAnchor="middle" fontSize={9} fill="var(--muted)">
              {level}
            </text>
          </g>
        ))}
        {contourPaths(tone).map((d, index) => (
          <path key={index} d={d} fill="none" stroke="var(--brand)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {glottal && (
          <text x={glottal.x + (tone.glottalAt === 1 ? 7 : 0)} y={glottal.y - 7} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--accent)" style={{ fontFamily: 'var(--font-ipa)' }}>
            ʔ
          </text>
        )}
      </svg>
      <p className="mt-1 flex items-center justify-center gap-1 text-center text-sm">
        <span className="font-semibold">{tone.name}</span>
        {tone.example && <span className="text-muted">· {tone.example}</span>}
        {tone.example && <SpeakButton text={tone.example} lang={lang} className="size-6" />}
      </p>
      <p className="text-center font-ipa text-xs text-muted">{tone.chao}</p>
    </div>
  )
}

interface ToneChartProps {
  /** defaults to the six Hanoi Vietnamese tones */
  data?: ToneContour[]
  caption?: string
  lang?: LangCode
}

/** Small-multiples chart of tone contours on Chao's 5-level pitch scale. */
export function ToneChart({ data = VIETNAMESE_TONES, caption, lang = 'vi' }: ToneChartProps) {
  const text = caption ?? (data === VIETNAMESE_TONES ? DEFAULT_CAPTION : undefined)
  return (
    <figure className="not-prose my-6 rounded-xl border border-line bg-surface px-4 py-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {data.map((tone) => (
          <TonePanel key={tone.name} tone={tone} lang={lang} />
        ))}
      </div>
      {text && <figcaption className="mt-3 text-sm text-muted">{text}</figcaption>}
    </figure>
  )
}
