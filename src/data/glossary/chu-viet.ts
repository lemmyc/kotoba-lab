import type { GlossaryTerm } from '../types'

const chapter = 'chu-viet'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'chu-ghi-y',
    chapter,
    vi: 'Chữ ghi ý (chữ ghi từ)',
    en: 'logographic writing',
    ipaEn: 'ˌlɔːɡəˈɡræfɪk ˈraɪtɪŋ',
    ja: '表語文字{ひょうごもじ}',
    romaji: 'hyōgo moji',
    definition: 'Loại hình chữ viết trong đó mỗi ký tự biểu thị một từ hoặc một hình vị, ví dụ chữ Hán.',
  },
  {
    id: 'chu-ghi-am-tiet',
    chapter,
    vi: 'Chữ ghi âm tiết',
    en: 'syllabary',
    ipaEn: 'ˈsɪləbɛri',
    ja: '音節文字{おんせつもじ}',
    romaji: 'onsetsu moji',
    definition: 'Loại hình chữ viết trong đó mỗi ký tự biểu thị một âm tiết (hoặc một mora), ví dụ hiragana và katakana.',
  },
  {
    id: 'chu-cai',
    chapter,
    vi: 'Chữ cái (chữ ghi âm vị)',
    en: 'alphabet',
    ipaEn: 'ˈælfəbɛt',
    ja: '音素文字{おんそもじ}',
    romaji: 'onso moji',
    definition: 'Loại hình chữ viết trong đó mỗi ký tự về nguyên tắc biểu thị một âm vị (phụ âm hoặc nguyên âm), ví dụ chữ Latin.',
  },
  {
    id: 'chu-nom',
    chapter,
    vi: 'Chữ Nôm',
    en: 'Chữ Nôm (Vietnamese demotic script)',
    ja: '字喃{チュノム}',
    romaji: 'chunomu',
    definition: 'Hệ chữ viết do người Việt sáng tạo dựa trên chữ Hán để ghi tiếng Việt, được dùng rộng rãi trong văn chương trung đại.',
  },
  {
    id: 'kana',
    chapter,
    vi: 'Chữ kana',
    en: 'kana',
    ipaEn: 'ˈkɑːnə',
    ja: '仮名{かな}',
    romaji: 'kana',
    definition: 'Tên gọi chung của hai bộ chữ ghi âm tiết tiếng Nhật là hiragana và katakana, đều bắt nguồn từ chữ Hán.',
  },
]
