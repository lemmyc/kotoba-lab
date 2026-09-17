import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'am-vi-hoc-01',
    question: 'Hai từ tiếng Anh "light" và "right" tạo thành…',
    options: ['cặp tối thiểu', 'cặp đồng âm', 'hai biến thể âm vị', 'cặp từ láy'],
    answer: 0,
    explanation: 'Hai từ chỉ khác nhau ở một âm (/l/ – /r/) ở cùng vị trí và khác nghĩa → cặp tối thiểu, chứng tỏ /l/ và /r/ là hai âm vị khác nhau trong tiếng Anh.',
    lang: 'en',
  },
  {
    id: 'am-vi-hoc-02',
    question: 'Từ 日本{にっぽん} (Nippon) có bao nhiêu mora?',
    options: ['2', '3', '4', '5'],
    answer: 2,
    explanation: 'に – っ – ぽ – ん: âm ngắt っ và âm mũi ん mỗi âm chiếm một mora, nên từ này có 4 mora dù chỉ có 2 âm tiết (nip-pon).',
    lang: 'ja',
  },
  {
    id: 'am-vi-hoc-03',
    question: 'Âm [pʰ] (bật hơi) trong "pin" và [p] (không bật hơi) trong "spin" là…',
    options: [
      'hai âm vị khác nhau',
      'hai biến thể của cùng một âm vị /p/',
      'một cặp tối thiểu',
      'hai âm hoàn toàn giống nhau',
    ],
    answer: 1,
    explanation:
      'Trong tiếng Anh, bật hơi xuất hiện có quy luật (đầu âm tiết có trọng âm) và không phân biệt nghĩa → [pʰ] và [p] là biến thể của âm vị /p/, nằm trong phân bố bổ sung.',
    lang: 'en',
  },
]
