import type { GlossaryTerm } from '../types'

const chapter = 'ngu-nghia-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'ngu-nghia-hoc',
    chapter,
    vi: 'Ngữ nghĩa học',
    en: 'semantics',
    ipaEn: 'sɪˈmæntɪks',
    ja: '意味論{いみろん}',
    romaji: 'imiron',
    definition: 'Phân ngành nghiên cứu ý nghĩa của từ, cụm từ và câu.',
  },
  {
    id: 'tu-dong-nghia',
    chapter,
    vi: 'Từ đồng nghĩa',
    en: 'synonym',
    ipaEn: 'ˈsɪnənɪm',
    ja: '同義語{どうぎご}',
    romaji: 'dōgigo',
    definition: 'Những từ có nghĩa giống hoặc gần giống nhau, ví dụ "chết – mất – qua đời".',
  },
  {
    id: 'tu-trai-nghia',
    chapter,
    vi: 'Từ trái nghĩa',
    en: 'antonym',
    ipaEn: 'ˈæntənɪm',
    ja: '反義語{はんぎご}',
    romaji: 'hangigo',
    definition: 'Những từ có nghĩa đối lập nhau, ví dụ "nóng – lạnh", "sống – chết".',
  },
  {
    id: 'quan-he-bao-nghia',
    chapter,
    vi: 'Quan hệ bao nghĩa (hạ danh)',
    en: 'hyponymy',
    ipaEn: 'haɪˈpɑːnəmi',
    ja: '上位{じょうい}・下位関係{かいかんけい}',
    romaji: 'jōi-kai kankei',
    definition: 'Quan hệ giữa từ có nghĩa rộng (hoa) và từ có nghĩa hẹp nằm trong nó (hoa hồng, hoa cúc).',
  },
  {
    id: 'tu-da-nghia',
    chapter,
    vi: 'Từ đa nghĩa',
    en: 'polysemy',
    ipaEn: 'pəˈlɪsəmi',
    ja: '多義性{たぎせい}',
    romaji: 'tagisei',
    definition: 'Hiện tượng một từ có nhiều nghĩa liên quan với nhau, ví dụ "chân" (chân người, chân bàn, chân núi).',
  },
  {
    id: 'tu-dong-am',
    chapter,
    vi: 'Từ đồng âm',
    en: 'homonym',
    ipaEn: 'ˈhɑːmənɪm',
    ja: '同音異義語{どうおんいぎご}',
    romaji: 'dōon igigo',
    definition: 'Những từ trùng hình thức âm thanh nhưng nghĩa hoàn toàn không liên quan, ví dụ "đường" (ăn) – "đường" (đi).',
  },
]
