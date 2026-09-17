import type { GlossaryTerm } from '../types'

const chapter = 'cu-phap-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'cu-phap-hoc',
    chapter,
    vi: 'Cú pháp học',
    en: 'syntax',
    ipaEn: 'ˈsɪntæks',
    ja: '統語論{とうごろん}',
    romaji: 'tōgoron',
    definition: 'Phân ngành nghiên cứu các quy tắc kết hợp từ thành cụm từ và câu.',
  },
  {
    id: 'thanh-to',
    chapter,
    vi: 'Thành tố (thành phần trực tiếp)',
    en: 'constituent',
    ipaEn: 'kənˈstɪtʃuənt',
    ja: '構成素{こうせいそ}',
    romaji: 'kōseiso',
    definition: 'Một từ hoặc một nhóm từ hoạt động như một đơn vị thống nhất trong cấu trúc câu.',
  },
  {
    id: 'cay-cu-phap',
    chapter,
    vi: 'Cây cú pháp',
    en: 'phrase structure tree',
    ipaEn: 'freɪz ˈstrʌktʃər triː',
    ja: '樹形図{じゅけいず}',
    romaji: 'jukeizu',
    definition: 'Sơ đồ hình cây biểu diễn cấu trúc thứ bậc và quan hệ giữa các thành tố của câu.',
  },
  {
    id: 'trung-tam',
    chapter,
    vi: 'Trung tâm (của cụm từ)',
    en: 'head',
    ipaEn: 'hɛd',
    ja: '主要部{しゅようぶ}',
    romaji: 'shuyōbu',
    definition: 'Thành tố quyết định từ loại và đặc tính của cả cụm, ví dụ danh từ là trung tâm của cụm danh từ.',
  },
  {
    id: 'tinh-de-quy',
    chapter,
    vi: 'Tính đệ quy',
    en: 'recursion',
    ipaEn: 'rɪˈkɜːrʒən',
    ja: '再帰性{さいきせい}',
    romaji: 'saikisei',
    definition: 'Khả năng lồng một cấu trúc vào bên trong cấu trúc cùng loại, giúp câu có thể dài vô hạn về lý thuyết.',
  },
]
