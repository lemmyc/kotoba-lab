import type { GlossaryTerm } from '../types'

const chapter = 'bien-doi-ngon-ngu'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'ho-ngon-ngu',
    chapter,
    vi: 'Họ ngôn ngữ',
    en: 'language family',
    ipaEn: 'ˈlæŋɡwɪdʒ ˈfæməli',
    ja: '語族{ごぞく}',
    romaji: 'gozoku',
    definition: 'Nhóm các ngôn ngữ có quan hệ cội nguồn, cùng phát triển từ một ngôn ngữ tiền thân chung.',
  },
  {
    id: 'ngon-ngu-tien-than',
    chapter,
    vi: 'Ngôn ngữ tiền thân (ngôn ngữ gốc)',
    en: 'proto-language',
    ipaEn: 'ˈproʊtoʊ ˌlæŋɡwɪdʒ',
    ja: '祖語{そご}',
    romaji: 'sogo',
    definition: 'Ngôn ngữ tổ tiên (thường được phục nguyên) mà từ đó các ngôn ngữ trong một họ phát triển ra, ví dụ tiếng Ấn – Âu nguyên thủy.',
  },
  {
    id: 'tu-vay-muon',
    chapter,
    vi: 'Từ vay mượn',
    en: 'loanword',
    ipaEn: 'ˈloʊnwɜːrd',
    ja: '借用語{しゃくようご}',
    romaji: 'shakuyōgo',
    definition: 'Từ được tiếp nhận từ ngôn ngữ khác và dần thích nghi với hệ thống của ngôn ngữ tiếp nhận, ví dụ "cà phê", コーヒー.',
  },
  {
    id: 'tu-han-viet',
    chapter,
    vi: 'Từ Hán Việt',
    en: 'Sino-Vietnamese word',
    ipaEn: 'ˌsaɪnoʊ viˌɛtnəˈmiːz wɜːrd',
    ja: '漢越語{かんえつご}',
    romaji: "kan'etsugo",
    definition: 'Lớp từ tiếng Việt có nguồn gốc từ tiếng Hán, đọc theo cách đọc Hán Việt, ví dụ "ngôn ngữ" (言語), "kinh tế" (經濟).',
  },
  {
    id: 'dai-chuyen-dich-nguyen-am',
    chapter,
    vi: 'Đại chuyển dịch nguyên âm',
    en: 'Great Vowel Shift',
    ipaEn: 'ɡreɪt ˈvaʊəl ʃɪft',
    ja: '大母音推移{だいぼいんすいい}',
    romaji: 'daiboin suii',
    definition: 'Chuỗi biến đổi các nguyên âm dài của tiếng Anh (khoảng thế kỷ 15–18) khiến chính tả và phát âm tiếng Anh lệch nhau.',
  },
]
