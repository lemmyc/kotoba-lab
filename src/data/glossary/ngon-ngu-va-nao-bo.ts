import type { GlossaryTerm } from '../types'

const chapter = 'ngon-ngu-va-nao-bo'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'vung-broca',
    chapter,
    vi: 'Vùng Broca',
    en: "Broca's area",
    ipaEn: 'ˈbroʊkəz ˈɛriə',
    ja: 'ブローカ野{や}',
    romaji: 'burōka-ya',
    definition:
      'Vùng ở thùy trán bán cầu não trái, liên quan chặt chẽ đến việc tạo lời nói và xử lý cấu trúc ngữ pháp.',
  },
  {
    id: 'vung-wernicke',
    chapter,
    vi: 'Vùng Wernicke',
    en: "Wernicke's area",
    ja: 'ウェルニッケ野{や}',
    romaji: 'werunikke-ya',
    definition: 'Vùng ở thùy thái dương bán cầu não trái, liên quan chủ yếu đến việc hiểu lời nói và ý nghĩa của từ.',
  },
  {
    id: 'chung-mat-ngon-ngu',
    chapter,
    vi: 'Chứng mất ngôn ngữ',
    en: 'aphasia',
    ipaEn: 'əˈfeɪʒə',
    ja: '失語症{しつごしょう}',
    romaji: 'shitsugoshō',
    definition: 'Rối loạn khả năng tạo lập hoặc hiểu ngôn ngữ do tổn thương não (đột quỵ, chấn thương…).',
  },
  {
    id: 'chuyen-hoa-ban-cau',
    chapter,
    vi: 'Chuyên hóa bán cầu',
    en: 'lateralization',
    ipaEn: 'ˌlætərələˈzeɪʃən',
    ja: '側性化{そくせいか}',
    romaji: 'sokuseika',
    definition: 'Hiện tượng một số chức năng nhận thức, như ngôn ngữ, được xử lý chủ yếu ở một bán cầu não.',
  },
  {
    id: 'giai-doan-then-chot',
    chapter,
    vi: 'Giai đoạn then chốt',
    en: 'critical period',
    ipaEn: 'ˈkrɪtɪkəl ˈpɪriəd',
    ja: '臨界期{りんかいき}',
    romaji: 'rinkaiki',
    definition:
      'Khoảng thời gian trong đời (thường là thời thơ ấu) mà việc thụ đắc ngôn ngữ diễn ra tự nhiên và hiệu quả nhất.',
  },
]
