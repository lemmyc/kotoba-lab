import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'bien-doi-ngon-ngu-01',
    question: 'Tiếng Anh thuộc họ ngôn ngữ nào?',
    options: ['Nam Á', 'Ấn – Âu', 'Hán – Tạng', 'Altai'],
    answer: 1,
    explanation: 'Tiếng Anh thuộc nhánh German (Tây German) của họ Ấn – Âu. Tiếng Việt thuộc họ Nam Á; tiếng Nhật thuộc ngữ hệ Nhật Bản (Japonic).',
    lang: 'en',
  },
  {
    id: 'bien-doi-ngon-ngu-02',
    question: 'Vì sao 経済{けいざい} (keizai) trong tiếng Nhật và "kinh tế" trong tiếng Việt có âm và nghĩa gần nhau?',
    options: [
      'Tiếng Việt và tiếng Nhật cùng một họ ngôn ngữ',
      'Cả hai đều dùng từ gốc chữ Hán (經濟)',
      'Hoàn toàn do ngẫu nhiên',
      'Tiếng Nhật vay mượn trực tiếp từ tiếng Việt',
    ],
    answer: 1,
    explanation:
      'Hai ngôn ngữ không cùng họ, nhưng cùng tiếp nhận từ vựng gốc Hán. Riêng nghĩa "economy" của 經濟 được dùng ở Nhật thời Minh Trị rồi lan sang Trung Quốc và Việt Nam.',
  },
  {
    id: 'bien-doi-ngon-ngu-03',
    question: 'Theo A.-G. Haudricourt (1954), thanh điệu tiếng Việt hình thành chủ yếu như thế nào?',
    options: [
      'Vay mượn nguyên vẹn từ tiếng Hán',
      'Do sự biến đổi và mất đi của các âm cuối và phụ âm đầu trong lịch sử',
      'Luôn tồn tại từ thời tiếng Việt cổ nhất',
      'Do ảnh hưởng của chữ Quốc ngữ',
    ],
    answer: 1,
    explanation:
      'Haudricourt chứng minh tiếng Việt cổ không có thanh điệu; các thanh xuất hiện khi những âm cuối (như âm tắc thanh hầu, -h) mất đi, sau đó sự phân biệt phụ âm đầu hữu thanh – vô thanh chuyển thành phân biệt thanh cao – thấp, tạo nên hệ 6 thanh.',
    lang: 'vi',
  },
]
