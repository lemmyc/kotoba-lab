import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'ngon-ngu-va-nao-bo-01',
    question:
      'Một bệnh nhân nói chậm, ngắt quãng, lược bỏ nhiều hư từ nhưng vẫn hiểu lời người khác khá tốt. Tổn thương nhiều khả năng nằm ở vùng nào?',
    options: ['Vùng Wernicke', 'Vùng Broca', 'Tiểu não', 'Vỏ não thị giác'],
    answer: 1,
    explanation:
      'Mất ngôn ngữ kiểu Broca đặc trưng bởi lời nói khó khăn, "kiểu điện báo", trong khi khả năng hiểu tương đối được bảo toàn. Tổn thương vùng Wernicke thường gây lời nói trôi chảy nhưng rỗng nghĩa và khó hiểu lời người khác.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-02',
    question: 'Ở phần lớn người thuận tay phải, các chức năng ngôn ngữ chủ yếu được xử lý ở…',
    options: ['bán cầu não trái', 'bán cầu não phải', 'đều ở cả hai bán cầu', 'tiểu não'],
    answer: 0,
    explanation: 'Đây là hiện tượng chuyên hóa bán cầu (lateralization): ở đa số người, ngôn ngữ được xử lý chủ yếu ở bán cầu trái.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-03',
    question: 'Giả thuyết giai đoạn then chốt (critical period) trong thụ đắc ngôn ngữ gắn liền với nhà nghiên cứu nào?',
    options: ['Ferdinand de Saussure', 'Eric Lenneberg', 'Paul Grice', 'Charles Hockett'],
    answer: 1,
    explanation:
      'Eric Lenneberg (Biological Foundations of Language, 1967) cho rằng có một giai đoạn sinh học thuận lợi nhất cho thụ đắc ngôn ngữ, kéo dài đến khoảng tuổi dậy thì.',
  },
]
