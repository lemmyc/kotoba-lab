import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'ngu-nghia-hoc-01',
    question: 'Quan hệ giữa "hoa hồng" và "hoa" là quan hệ gì?',
    options: ['Đồng nghĩa', 'Trái nghĩa', 'Bao nghĩa (hạ danh)', 'Đồng âm'],
    answer: 2,
    explanation: '"Hoa hồng" là một loại "hoa": nghĩa của "hoa hồng" nằm trong phạm vi nghĩa của "hoa" — quan hệ bao nghĩa (hyponymy).',
  },
  {
    id: 'ngu-nghia-hoc-02',
    question: 'Trong tiếng Nhật, 橋{はし} (cây cầu) và 箸{はし} (đôi đũa) có cùng cách viết kana là はし. Về mặt ngữ nghĩa, đây là…',
    options: ['từ đa nghĩa', 'từ đồng âm', 'từ đồng nghĩa', 'từ trái nghĩa'],
    answer: 1,
    explanation:
      'Hai từ có hình thức âm (theo kana) trùng nhau nhưng nghĩa không liên quan → đồng âm. Trong phương ngữ Tokyo, chúng còn được phân biệt bằng trọng âm cao độ (xem Chương 7).',
    lang: 'ja',
  },
  {
    id: 'ngu-nghia-hoc-03',
    question: 'Cặp "sống – chết" thuộc loại trái nghĩa nào?',
    options: [
      'Trái nghĩa bổ sung (phủ định cái này là khẳng định cái kia)',
      'Trái nghĩa thang độ (có mức độ ở giữa)',
      'Trái nghĩa quan hệ (như "mua – bán")',
      'Không phải trái nghĩa',
    ],
    answer: 0,
    explanation:
      '"Không sống" nghĩa là "chết" và ngược lại, không có trạng thái trung gian → trái nghĩa bổ sung. So sánh với "nóng – lạnh" (thang độ: còn "ấm", "mát").',
  },
]
