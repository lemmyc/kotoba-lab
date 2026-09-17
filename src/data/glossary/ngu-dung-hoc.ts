import type { GlossaryTerm } from '../types'

const chapter = 'ngu-dung-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'ngu-dung-hoc',
    chapter,
    vi: 'Ngữ dụng học',
    en: 'pragmatics',
    ipaEn: 'præɡˈmætɪks',
    ja: '語用論{ごようろん}',
    romaji: 'goyōron',
    definition: 'Phân ngành nghiên cứu cách ngữ cảnh góp phần tạo nên ý nghĩa của lời nói.',
  },
  {
    id: 'chi-xuat',
    chapter,
    vi: 'Chỉ xuất',
    en: 'deixis',
    ipaEn: 'ˈdaɪksɪs',
    ja: '直示{ちょくじ}',
    romaji: 'chokuji',
    definition: 'Những biểu thức mà nghĩa phụ thuộc vào ngữ cảnh phát ngôn: tôi, bạn, đây, kia, hôm nay, bây giờ…',
  },
  {
    id: 'hanh-dong-ngon-tu',
    chapter,
    vi: 'Hành động ngôn từ',
    en: 'speech act',
    ipaEn: 'spiːtʃ ækt',
    ja: '発話行為{はつわこうい}',
    romaji: 'hatsuwa kōi',
    definition: 'Hành động được thực hiện bằng lời nói như hỏi, hứa, ra lệnh, xin lỗi, cảm ơn.',
  },
  {
    id: 'ham-y-hoi-thoai',
    chapter,
    vi: 'Hàm ý hội thoại',
    en: 'conversational implicature',
    ipaEn: 'ˌkɑːnvərˈseɪʃənəl ˈɪmplɪkətʃər',
    ja: '会話{かいわ}の含意{がんい}',
    romaji: "kaiwa no gan'i",
    definition: 'Phần nghĩa người nghe suy ra từ lời nói dựa trên ngữ cảnh và các nguyên tắc hội thoại (Grice), không nói thẳng ra.',
  },
  {
    id: 'tien-gia-dinh',
    chapter,
    vi: 'Tiền giả định',
    en: 'presupposition',
    ipaEn: 'ˌpriːsʌpəˈzɪʃən',
    ja: '前提{ぜんてい}',
    romaji: 'zentei',
    definition: 'Thông tin được mặc nhiên coi là đúng khi phát ngôn, ví dụ "Anh ấy đã bỏ thuốc" tiền giả định anh ấy từng hút thuốc.',
  },
  {
    id: 'kinh-ngu',
    chapter,
    vi: 'Kính ngữ',
    en: 'honorifics',
    ipaEn: 'ˌɑːnəˈrɪfɪks',
    ja: '敬語{けいご}',
    romaji: 'keigo',
    definition: 'Hệ thống phương tiện ngôn ngữ thể hiện sự tôn trọng, khiêm nhường hoặc lịch sự đối với người nghe, người được nói đến.',
  },
]
