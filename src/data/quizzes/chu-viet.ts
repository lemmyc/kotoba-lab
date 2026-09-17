import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'chu-viet-01',
    question: 'Hiragana và katakana thuộc loại hình chữ viết nào?',
    options: ['Chữ ghi ý', 'Chữ ghi âm tiết (mora)', 'Chữ cái ghi âm vị', 'Chữ ghi phụ âm'],
    answer: 1,
    explanation: 'Mỗi ký tự kana ghi một âm tiết/mora (か = ka, き = ki…), khác với kanji là chữ ghi ý/ghi từ.',
    lang: 'ja',
  },
  {
    id: 'chu-viet-02',
    question: 'Cuốn từ điển Việt – Bồ – La (Dictionarium Annamiticum Lusitanum et Latinum) của Alexandre de Rhodes, cột mốc quan trọng của chữ Quốc ngữ, được xuất bản năm nào?',
    options: ['1558', '1651', '1865', '1945'],
    answer: 1,
    explanation: 'Từ điển được in tại Rome năm 1651, là thành quả của nhiều giáo sĩ phương Tây cùng cộng tác với người Việt trong việc La-tinh hóa tiếng Việt.',
    lang: 'vi',
  },
  {
    id: 'chu-viet-03',
    question: 'Tiếng Nhật hiện đại thường kết hợp mấy bộ chữ chính trong cùng một câu?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'Kanji (chữ Hán), hiragana và katakana. Ví dụ: 私{わたし}はコーヒーを飲{の}みます — kanji cho gốc từ, hiragana cho trợ từ/đuôi động từ, katakana cho từ ngoại lai.',
    lang: 'ja',
  },
]
