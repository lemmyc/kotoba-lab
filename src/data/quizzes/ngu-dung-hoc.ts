import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'ngu-dung-hoc-01',
    question:
      'Bạn nói "Ở đây lạnh quá nhỉ" với người ngồi cạnh cửa sổ đang mở, với mong muốn họ đóng cửa. Đây là ví dụ của…',
    options: ['hành động ngôn từ gián tiếp', 'tiền giả định', 'chỉ xuất không gian', 'uyển ngữ'],
    answer: 0,
    explanation: 'Về hình thức, câu là một lời nhận xét; nhưng chức năng thực sự là lời đề nghị → hành động ngôn từ gián tiếp.',
  },
  {
    id: 'ngu-dung-hoc-02',
    question: '尊敬語{そんけいご}, 謙譲語{けんじょうご} và 丁寧語{ていねいご} là ba loại của hệ thống nào trong tiếng Nhật?',
    options: ['方言{ほうげん} (phương ngữ)', '敬語{けいご} (kính ngữ)', '擬態語{ぎたいご} (từ tượng hình)', '外来語{がいらいご} (từ ngoại lai)'],
    answer: 1,
    explanation:
      'Kính ngữ gồm tôn kính ngữ (nâng người khác), khiêm nhường ngữ (hạ mình) và lịch sự ngữ (です/ます) — theo cách phân loại truyền thống.',
    lang: 'ja',
  },
  {
    id: 'ngu-dung-hoc-03',
    question: 'Câu "John stopped smoking" tiền giả định điều gì?',
    options: ['John chưa bao giờ hút thuốc', 'John từng hút thuốc', 'John sẽ hút thuốc lại', 'John ghét thuốc lá'],
    answer: 1,
    explanation:
      'Động từ "stop" tiền giả định hành động đã từng diễn ra. Tiền giả định vẫn giữ nguyên khi phủ định câu: "John didn\'t stop smoking" vẫn ngụ ý John từng hút thuốc.',
    lang: 'en',
  },
]
