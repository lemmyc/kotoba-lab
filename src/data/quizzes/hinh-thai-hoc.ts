import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'hinh-thai-hoc-01',
    question: 'Từ tiếng Anh "unhappiness" gồm bao nhiêu hình vị?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'un- (phủ định) + happy (gốc) + -ness (tạo danh từ) = 3 hình vị; trong đó "happy" là hình vị tự do, "un-" và "-ness" là hình vị ràng buộc.',
    lang: 'en',
  },
  {
    id: 'hinh-thai-hoc-02',
    question: 'Động từ tiếng Nhật 食{た}べさせられなかった (tabe-sase-rare-nakat-ta, "đã không bị bắt ăn") minh họa loại hình nào?',
    options: ['Đơn lập', 'Chắp dính', 'Hòa kết', 'Hỗn nhập'],
    answer: 1,
    explanation:
      'Mỗi hình vị (gây khiến -sase, bị động -rare, phủ định -nakat, quá khứ -ta) được gắn nối tiếp và tách bạch rõ ràng vào gốc động từ — đặc trưng của loại hình chắp dính.',
    lang: 'ja',
  },
  {
    id: 'hinh-thai-hoc-03',
    question: 'Các từ "xanh xao", "lấp lánh", "long lanh" trong tiếng Việt thuộc loại nào?',
    options: ['Từ ghép đẳng lập', 'Từ láy', 'Từ vay mượn', 'Từ đơn đa âm tiết'],
    answer: 1,
    explanation: 'Đây là từ láy: các âm tiết lặp lại một phần âm thanh (phụ âm đầu hoặc vần), tạo sắc thái biểu cảm.',
    lang: 'vi',
  },
]
