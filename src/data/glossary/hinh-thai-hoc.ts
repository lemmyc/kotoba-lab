import type { GlossaryTerm } from '../types'

const chapter = 'hinh-thai-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'hinh-vi',
    chapter,
    vi: 'Hình vị',
    en: 'morpheme',
    ipaEn: 'ˈmɔːrfiːm',
    ja: '形態素{けいたいそ}',
    romaji: 'keitaiso',
    definition: 'Đơn vị nhỏ nhất có nghĩa (từ vựng hoặc ngữ pháp) của ngôn ngữ; không thể chia nhỏ hơn mà vẫn còn nghĩa.',
  },
  {
    id: 'hinh-vi-tu-do',
    chapter,
    vi: 'Hình vị tự do',
    en: 'free morpheme',
    ipaEn: 'friː ˈmɔːrfiːm',
    ja: '自由形態素{じゆうけいたいそ}',
    romaji: 'jiyū keitaiso',
    definition: 'Hình vị có thể đứng độc lập như một từ, ví dụ "book" trong tiếng Anh, "nhà" trong tiếng Việt.',
  },
  {
    id: 'hinh-vi-rang-buoc',
    chapter,
    vi: 'Hình vị ràng buộc',
    en: 'bound morpheme',
    ipaEn: 'baʊnd ˈmɔːrfiːm',
    ja: '拘束形態素{こうそくけいたいそ}',
    romaji: 'kōsoku keitaiso',
    definition: 'Hình vị không đứng một mình được mà phải gắn vào hình vị khác, ví dụ "un-", "-ness" trong tiếng Anh.',
  },
  {
    id: 'phu-to-phai-sinh',
    chapter,
    vi: 'Phụ tố phái sinh',
    en: 'derivational affix',
    ipaEn: 'ˌdɛrəˈveɪʃənəl ˈæfɪks',
    ja: '派生接辞{はせいせつじ}',
    romaji: 'hasei setsuji',
    definition: 'Phụ tố tạo ra từ mới, thường làm thay đổi nghĩa hoặc từ loại (happy → happiness).',
  },
  {
    id: 'phu-to-bien-to',
    chapter,
    vi: 'Phụ tố biến tố',
    en: 'inflectional affix',
    ipaEn: 'ɪnˈflɛkʃənəl ˈæfɪks',
    ja: '屈折接辞{くっせつせつじ}',
    romaji: 'kussetsu setsuji',
    definition: 'Phụ tố biểu thị ý nghĩa ngữ pháp (số, thì, ngôi…) mà không tạo ra từ mới (book → books, walk → walked).',
  },
  {
    id: 'tu-ghep',
    chapter,
    vi: 'Từ ghép',
    en: 'compound',
    ipaEn: 'ˈkɑːmpaʊnd',
    ja: '複合語{ふくごうご}',
    romaji: 'fukugōgo',
    definition: 'Từ được tạo thành bằng cách kết hợp hai (hoặc nhiều) hình vị gốc, ví dụ "xe đạp", "blackboard", 花火{はなび}.',
  },
]
