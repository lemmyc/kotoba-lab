import type { QuizQuestion } from '../types'

// TODO(nội dung): mục tiêu 10 câu — xem docs/CONTENT_ROADMAP.md
export const questions: QuizQuestion[] = [
  {
    id: 'ngon-ngu-va-xa-hoi-01',
    question: '関西弁{かんさいべん} (Kansai-ben) trong tiếng Nhật là…',
    options: ['một phương ngữ', 'một ngôn ngữ riêng biệt', 'một loại kính ngữ', 'tiếng lóng giới trẻ'],
    answer: 0,
    explanation: 'Kansai-ben là phương ngữ vùng Kansai (Osaka, Kyoto…), ví dụ nói おおきに thay cho ありがとう, あかん thay cho だめ.',
    lang: 'ja',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-02',
    question: 'Nói "Cụ ấy đã về với tổ tiên" thay cho "Cụ ấy chết rồi" là cách dùng…',
    options: ['chuyển mã', 'uyển ngữ', 'phương ngữ', 'pidgin'],
    answer: 1,
    explanation: 'Uyển ngữ là cách nói giảm, nói tránh những chủ đề kiêng kỵ hoặc gây đau buồn như cái chết.',
    lang: 'vi',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-03',
    question: 'Câu "Deadline gấp quá, mình phải check mail ngay" minh họa hiện tượng nào?',
    options: ['Pidgin', 'Chuyển mã (trộn mã)', 'Creole', 'Kiêng kỵ ngôn ngữ'],
    answer: 1,
    explanation: 'Người nói xen các từ tiếng Anh vào câu tiếng Việt — hiện tượng chuyển mã/trộn mã phổ biến ở người song ngữ.',
  },
]
