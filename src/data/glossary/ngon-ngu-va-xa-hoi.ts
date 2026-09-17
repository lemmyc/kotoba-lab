import type { GlossaryTerm } from '../types'

const chapter = 'ngon-ngu-va-xa-hoi'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'phuong-ngu',
    chapter,
    vi: 'Phương ngữ',
    en: 'dialect',
    ipaEn: 'ˈdaɪəlɛkt',
    ja: '方言{ほうげん}',
    romaji: 'hōgen',
    definition: 'Biến thể của một ngôn ngữ gắn với một vùng địa lý hoặc một nhóm xã hội, có đặc điểm riêng về ngữ âm, từ vựng, ngữ pháp.',
  },
  {
    id: 'ngu-vuc',
    chapter,
    vi: 'Ngữ vực',
    en: 'register',
    ipaEn: 'ˈrɛdʒɪstər',
    ja: '言語使用域{げんごしよういき}',
    romaji: 'gengo shiyōiki',
    definition: 'Biến thể ngôn ngữ được lựa chọn theo tình huống giao tiếp: trang trọng, thân mật, chuyên ngành…',
  },
  {
    id: 'chuyen-ma',
    chapter,
    vi: 'Chuyển mã',
    en: 'code-switching',
    ipaEn: 'ˈkoʊd ˌswɪtʃɪŋ',
    ja: 'コード・スイッチング',
    romaji: 'kōdo suicchingu',
    definition: 'Hiện tượng người nói luân phiên sử dụng hai ngôn ngữ (hoặc hai biến thể) trong cùng một cuộc hội thoại, thậm chí cùng một câu.',
  },
  {
    id: 'pidgin',
    chapter,
    vi: 'Ngôn ngữ pha tạp (pidgin)',
    en: 'pidgin',
    ipaEn: 'ˈpɪdʒɪn',
    ja: 'ピジン言語{げんご}',
    romaji: 'pijin gengo',
    definition: 'Hệ thống giao tiếp giản lược hình thành khi các nhóm không chung ngôn ngữ cần trao đổi; không phải tiếng mẹ đẻ của ai.',
  },
  {
    id: 'uyen-ngu',
    chapter,
    vi: 'Uyển ngữ',
    en: 'euphemism',
    ipaEn: 'ˈjuːfəmɪzəm',
    ja: '婉曲表現{えんきょくひょうげん}',
    romaji: 'enkyoku hyōgen',
    definition: 'Cách nói giảm, nói tránh để thay thế những từ ngữ kiêng kỵ hoặc gây khó chịu, ví dụ "qua đời" thay cho "chết".',
  },
]
