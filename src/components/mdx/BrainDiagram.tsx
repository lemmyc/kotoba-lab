import { DiagramLegend, Marker, type LegendItem } from './DiagramLegend'

type BrainRegion = 'broca' | 'wernicke' | 'bo-cung' | 'vo-van-dong' | 'vo-thinh-giac'

const REGIONS: (LegendItem & { id: BrainRegion; marker: [number, number] })[] = [
  { id: 'broca', number: 1, vi: 'Vùng Broca', en: "Broca's area", color: 'var(--accent)', marker: [140, 171] },
  { id: 'wernicke', number: 2, vi: 'Vùng Wernicke', en: "Wernicke's area", color: 'var(--en)', marker: [274, 183] },
  { id: 'bo-cung', number: 3, vi: 'Bó cung', en: 'arcuate fasciculus', color: 'var(--vi)', marker: [218, 118] },
  { id: 'vo-van-dong', number: 4, vi: 'Vỏ não vận động', en: 'motor cortex', color: 'var(--warning)', marker: [206, 68] },
  { id: 'vo-thinh-giac', number: 5, vi: 'Vỏ não thính giác', en: 'auditory cortex', color: 'var(--ja)', marker: [224, 186] },
]

interface BrainDiagramProps {
  /** region ids to emphasise; others are dimmed. Omit to show all equally. */
  highlight?: BrainRegion[]
  caption?: string
}

/** Simplified lateral view of the left hemisphere with the classic language areas. */
export function BrainDiagram({ highlight, caption }: BrainDiagramProps) {
  const isDim = (id: string) => Boolean(highlight?.length) && !highlight!.includes(id as BrainRegion)
  const regionOpacity = (id: BrainRegion) => (isDim(id) ? 0.12 : 0.42)
  const color = (id: BrainRegion) => REGIONS.find((region) => region.id === id)!.color

  return (
    <figure className="not-prose my-6 rounded-xl border border-line bg-surface px-4 py-4">
      <svg
        viewBox="0 0 400 292"
        className="mx-auto block h-auto w-full max-w-[34rem]"
        role="img"
        aria-label="Sơ đồ bán cầu não trái nhìn từ bên trái, phía trước ở bên trái hình: vùng Broca ở thùy trán, vùng Wernicke ở thùy thái dương, bó cung nối hai vùng, vỏ não vận động và vỏ não thính giác."
      >
        {/* cerebellum + brain stem */}
        <path d="M262,232 C280,262 330,262 350,238 C355,225 342,214 330,212 C312,220 292,222 275,228 Z" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth={1.2} />
        <path d="M240,240 C245,258 248,272 250,290 L272,290 C268,270 266,252 262,234 Z" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth={1.2} />
        {/* cerebrum */}
        <path
          d="M62,160 C48,110 90,50 175,40 C250,30 330,55 355,115 C372,155 360,200 330,212 C312,220 292,222 275,228 C255,240 225,248 195,244 C160,240 135,228 128,210 C120,200 100,205 85,198 C70,190 64,178 62,160 Z"
          fill="var(--bg)"
          stroke="var(--ink)"
          strokeWidth={1.6}
        />
        {/* lateral (Sylvian) fissure and central sulcus */}
        <path d="M132,196 C170,178 220,165 280,160 C292,158 300,150 305,140" fill="none" stroke="var(--muted)" strokeWidth={1.6} />
        <path d="M222,36 C215,80 212,120 192,176" fill="none" stroke="var(--muted)" strokeWidth={1.6} />

        {/* regions */}
        <path d="M207,40 C200,82 196,120 174,176" fill="none" stroke={color('vo-van-dong')} strokeOpacity={regionOpacity('vo-van-dong')} strokeWidth={13} strokeLinecap="round" />
        <ellipse cx={140} cy={171} rx={25} ry={15} transform="rotate(-18 140 171)" fill={color('broca')} fillOpacity={regionOpacity('broca')} />
        <ellipse cx={268} cy={181} rx={31} ry={14} fill={color('wernicke')} fillOpacity={regionOpacity('wernicke')} />
        <ellipse cx={222} cy={177} rx={18} ry={8} fill={color('vo-thinh-giac')} fillOpacity={regionOpacity('vo-thinh-giac')} />
        <path
          d="M152,166 C176,118 252,108 290,146 C298,157 292,170 282,176"
          fill="none"
          stroke={color('bo-cung')}
          strokeOpacity={isDim('bo-cung') ? 0.25 : 1}
          strokeWidth={3}
          strokeDasharray="6 4"
          strokeLinecap="round"
        />

        {/* lobe labels */}
        <g fontSize={11} fill="var(--muted)" textAnchor="middle" fontStyle="italic">
          <text x={112} y={118}>thùy trán</text>
          <text x={290} y={84}>thùy đỉnh</text>
          <text x={324} y={205}>thùy chẩm</text>
          <text x={200} y={226}>thùy thái dương</text>
          <text x={312} y={276}>tiểu não</text>
        </g>
        <g fontSize={11} fill="var(--muted)">
          <text x={10} y={286}>← trước</text>
          <text x={150} y={286}>(bán cầu trái)</text>
        </g>

        {REGIONS.map((region) => (
          <Marker key={region.id} x={region.marker[0]} y={region.marker[1]} number={region.number} color={region.color} dim={isDim(region.id)} />
        ))}
      </svg>
      <DiagramLegend items={REGIONS} isDim={isDim} />
      <figcaption className="mt-3 text-sm text-muted">
        {caption ?? 'Sơ đồ đơn giản hóa, không theo đúng tỉ lệ giải phẫu. Vị trí và ranh giới thực tế của các vùng thay đổi giữa các cá nhân.'}
      </figcaption>
    </figure>
  )
}
