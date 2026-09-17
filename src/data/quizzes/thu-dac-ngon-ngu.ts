import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'thu-dac-ngon-ngu-01',
    question: 'Trẻ nói "Mẹ bế bé", "Bố đi làm" (lược bỏ hư từ) đang ở giai đoạn nào?',
    options: ['Bập bẹ', 'Một từ', 'Lời nói kiểu điện báo', 'Hoàn thiện ngữ pháp'],
    answer: 2,
    explanation: 'Trẻ ghép các từ thực mang nhiều thông tin và bỏ qua hư từ, giống cách viết điện báo tiết kiệm chữ.',
  },
  {
    id: 'thu-dac-ngon-ngu-02',
    question: 'Một đứa trẻ nói tiếng Anh "I goed there" thay vì "I went there". Hiện tượng này cho thấy…',
    options: [
      'trẻ chỉ bắt chước người lớn',
      'trẻ đã tự rút ra quy tắc thêm -ed và áp dụng quá mức',
      'trẻ bị rối loạn ngôn ngữ',
      'trẻ không hiểu nghĩa của động từ',
    ],
    answer: 1,
    explanation:
      'Người lớn không nói "goed", nên trẻ không bắt chước. Trẻ đã khái quát quy tắc quá khứ -ed và áp dụng cho cả động từ bất quy tắc (overgeneralization) — bằng chứng trẻ chủ động xây dựng ngữ pháp.',
    lang: 'en',
  },
  {
    id: 'thu-dac-ngon-ngu-03',
    question: 'Nhiều người học tiếng Nhật là người Việt đoán được nghĩa của 準備{じゅんび} (junbi) hay 注意{ちゅうい} (chūi). Đây là ví dụ của…',
    options: ['chuyển di tích cực nhờ từ Hán Việt', 'chuyển di tiêu cực', 'hóa thạch ngôn ngữ', 'chuyển mã'],
    answer: 0,
    explanation:
      '準備 ≈ "chuẩn bị", 注意 ≈ "chú ý": nhờ cùng gốc chữ Hán, vốn từ Hán Việt giúp người Việt đoán nghĩa từ Hán – Nhật (Kango) — chuyển di tích cực.',
    lang: 'ja',
  },
]
