import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'ngu-am-hoc-01',
    question: 'Tiếng Việt chuẩn (phương ngữ Bắc) có bao nhiêu thanh điệu?',
    options: ['4', '5', '6', '8'],
    answer: 2,
    explanation: 'Sáu thanh: ngang, huyền, sắc, hỏi, ngã, nặng — ví dụ ma, mà, má, mả, mã, mạ. Nhiều phương ngữ miền Trung và miền Nam không phân biệt thanh hỏi và thanh ngã.',
    lang: 'vi',
  },
  {
    id: 'ngu-am-hoc-02',
    question: 'Trong tiếng Nhật Tokyo, 箸{はし} (đũa) và 橋{はし} (cầu) được phân biệt nhờ yếu tố nào?',
    options: ['Thanh điệu', 'Trọng âm cao độ', 'Độ dài nguyên âm', 'Phụ âm đầu'],
    answer: 1,
    explanation: '箸 là HA-shi (cao – thấp), 橋 là ha-SHI (thấp – cao). Đây là trọng âm cao độ, khác với thanh điệu vốn gắn với từng âm tiết như tiếng Việt.',
    lang: 'ja',
  },
  {
    id: 'ngu-am-hoc-03',
    question: 'Các phụ âm [p], [b], [m] có điểm chung nào?',
    options: ['Cùng là âm xát', 'Cùng là âm vô thanh', 'Cùng vị trí cấu âm môi – môi', 'Cùng là âm mũi'],
    answer: 2,
    explanation: 'Cả ba đều được tạo ra bằng cách khép hai môi (âm môi – môi). Chúng khác nhau ở thanh tính ([p] vô thanh, [b] hữu thanh) và phương thức ([m] là âm mũi).',
  },
]
