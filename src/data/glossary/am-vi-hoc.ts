import type { GlossaryTerm } from '../types'

const chapter = 'am-vi-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'am-vi',
    chapter,
    vi: 'Âm vị',
    en: 'phoneme',
    ipaEn: 'ˈfoʊniːm',
    ja: '音素{おんそ}',
    romaji: 'onso',
    definition: 'Đơn vị âm thanh nhỏ nhất có chức năng khu biệt nghĩa trong một ngôn ngữ cụ thể.',
  },
  {
    id: 'bien-the-am-vi',
    chapter,
    vi: 'Biến thể âm vị',
    en: 'allophone',
    ipaEn: 'ˈæləfoʊn',
    ja: '異音{いおん}',
    romaji: 'ion',
    definition: 'Các cách hiện thực khác nhau của cùng một âm vị, không làm thay đổi nghĩa, ví dụ [pʰ] trong "pin" và [p] trong "spin".',
  },
  {
    id: 'cap-toi-thieu',
    chapter,
    vi: 'Cặp tối thiểu',
    en: 'minimal pair',
    ipaEn: 'ˈmɪnəməl pɛr',
    ja: '最小対{さいしょうつい}',
    romaji: 'saishōtsui',
    definition: 'Hai từ chỉ khác nhau ở một âm tại cùng một vị trí và khác nghĩa, ví dụ "light – right", "ba – bà".',
  },
  {
    id: 'am-tiet',
    chapter,
    vi: 'Âm tiết',
    en: 'syllable',
    ipaEn: 'ˈsɪləbəl',
    ja: '音節{おんせつ}',
    romaji: 'onsetsu',
    definition: 'Đơn vị phát âm tự nhiên nhỏ nhất, thường gồm một hạt nhân nguyên âm cùng các phụ âm xung quanh.',
  },
  {
    id: 'mora',
    chapter,
    vi: 'Mora (phách)',
    en: 'mora',
    ipaEn: 'ˈmɔːrə',
    ja: '拍{はく}',
    romaji: 'haku',
    definition: 'Đơn vị đo độ dài âm vị học; trong tiếng Nhật, mỗi kana thường tương ứng một mora (にっぽん = 4 mora).',
  },
]
