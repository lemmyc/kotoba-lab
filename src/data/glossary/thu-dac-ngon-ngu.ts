import type { GlossaryTerm } from '../types'

const chapter = 'thu-dac-ngon-ngu'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'thu-dac-ngon-ngu-thu-nhat',
    chapter,
    vi: 'Thụ đắc ngôn ngữ thứ nhất',
    en: 'first language acquisition',
    ja: '第一言語習得{だいいちげんごしゅうとく}',
    romaji: 'daiichi gengo shūtoku',
    definition: 'Quá trình trẻ em tự nhiên tiếp thu tiếng mẹ đẻ trong những năm đầu đời.',
  },
  {
    id: 'giai-doan-bap-be',
    chapter,
    vi: 'Giai đoạn bập bẹ',
    en: 'babbling',
    ipaEn: 'ˈbæblɪŋ',
    ja: '喃語{なんご}',
    romaji: 'nango',
    definition: 'Giai đoạn (khoảng 6 tháng tuổi) trẻ phát ra các chuỗi âm tiết lặp lại như "ba-ba-ba", "ma-ma".',
  },
  {
    id: 'loi-noi-kieu-dien-bao',
    chapter,
    vi: 'Lời nói kiểu điện báo',
    en: 'telegraphic speech',
    ipaEn: 'ˌtɛləˈɡræfɪk spiːtʃ',
    ja: '電報文{でんぽうぶん}',
    romaji: 'denpōbun',
    definition: 'Giai đoạn trẻ ghép các từ thực (danh từ, động từ) và lược bỏ hư từ, ví dụ "Mẹ bế bé", "Daddy go car".',
  },
  {
    id: 'ngon-ngu-trung-gian',
    chapter,
    vi: 'Ngôn ngữ trung gian',
    en: 'interlanguage',
    ipaEn: 'ˈɪntərˌlæŋɡwɪdʒ',
    ja: '中間言語{ちゅうかんげんご}',
    romaji: 'chūkan gengo',
    definition: 'Hệ thống ngôn ngữ riêng, luôn thay đổi của người học ngoại ngữ, nằm giữa tiếng mẹ đẻ và ngôn ngữ đích.',
  },
  {
    id: 'chuyen-di-ngon-ngu',
    chapter,
    vi: 'Chuyển di ngôn ngữ',
    en: 'language transfer',
    ipaEn: 'ˈlæŋɡwɪdʒ ˈtrænsfɜːr',
    ja: '言語転移{げんごてんい}',
    romaji: "gengo ten'i",
    definition: 'Ảnh hưởng của tiếng mẹ đẻ lên việc học ngôn ngữ khác, có thể tích cực (thuận lợi) hoặc tiêu cực (gây lỗi).',
  },
]
