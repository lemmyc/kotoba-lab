import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'cu-phap-hoc-01',
    question: 'Trật tự từ cơ bản của câu tiếng Nhật là gì?',
    options: ['SVO', 'SOV', 'VSO', 'OVS'],
    answer: 1,
    explanation: 'Ví dụ: 私{わたし}は りんごを 食{た}べる (watashi wa ringo o taberu) — "Tôi táo ăn": chủ ngữ – tân ngữ – động từ.',
    lang: 'ja',
  },
  {
    id: 'cu-phap-hoc-02',
    question: 'Trong câu tiếng Nhật, trợ từ を (o) thường đánh dấu thành phần nào?',
    options: ['Chủ đề', 'Chủ ngữ', 'Tân ngữ trực tiếp', 'Địa điểm tồn tại'],
    answer: 2,
    explanation: 'を đánh dấu tân ngữ trực tiếp (本{ほん}を読{よ}む — đọc sách). は đánh dấu chủ đề, が thường đánh dấu chủ ngữ, に chỉ địa điểm tồn tại/đích đến.',
    lang: 'ja',
  },
  {
    id: 'cu-phap-hoc-03',
    question: 'Câu "The boy saw the man with the telescope" có hai cách hiểu. Đây là hiện tượng gì?',
    options: ['Đồng âm', 'Mơ hồ cấu trúc', 'Tiền giả định', 'Chỉ xuất'],
    answer: 1,
    explanation:
      'Cụm "with the telescope" có thể gắn với động từ "saw" (cậu bé dùng kính viễn vọng để nhìn) hoặc với "the man" (người đàn ông cầm kính). Hai cây cú pháp khác nhau → mơ hồ cấu trúc.',
    lang: 'en',
  },
]
