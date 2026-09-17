export type CardDirection = 'vi-en' | 'vi-ja' | 'en-ja' | 'ja-vi'

export const DIRECTIONS: { value: CardDirection; label: string }[] = [
  { value: 'vi-en', label: 'Việt → Anh' },
  { value: 'vi-ja', label: 'Việt → Nhật' },
  { value: 'en-ja', label: 'Anh → Nhật' },
  { value: 'ja-vi', label: 'Nhật → Việt' },
]

export function isCardDirection(value: string | null): value is CardDirection {
  return DIRECTIONS.some((d) => d.value === value)
}
