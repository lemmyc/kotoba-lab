import type { QuizQuestion } from '../types'

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
  {
    id: 'cu-phap-hoc-04',
    question: 'Trong câu "Cô giáo mới của lớp tôi đã về quê", phép thử nào cho thấy "cô giáo mới của lớp tôi" là một thành tố?',
    options: [
      'Có thể thay cả chuỗi bằng đại từ "cô ấy"',
      'Chuỗi này có nhiều hơn ba từ',
      'Chuỗi này đứng ở đầu câu',
      'Chuỗi này chứa một danh từ',
    ],
    answer: 0,
    explanation:
      'Thay thế bằng đại từ là một phép thử thành tố: "Cô ấy đã về quê" vẫn đúng. Độ dài, vị trí đầu câu hay việc chứa danh từ đều không chứng minh được một chuỗi là thành tố ("của lớp tôi đã" cũng chứa danh từ nhưng không phải thành tố).',
    lang: 'vi',
  },
  {
    id: 'cu-phap-hoc-05',
    question: 'Tiếng Việt nói "đọc sách ở thư viện", tiếng Nhật nói 図書館{としょかん}で本{ほん}を読{よ}む. Khái niệm nào giải thích gọn nhất chuỗi khác biệt này?',
    options: ['Tính đệ quy', 'Mơ hồ cấu trúc', 'Lược chủ ngữ', 'Tham số trung tâm'],
    answer: 3,
    explanation:
      'Tiếng Việt đặt trung tâm ở đầu cụm (đọc + sách, ở + thư viện), tiếng Nhật đặt ở cuối (本を + 読む, 図書館 + で). Một tham số duy nhất giải thích cả vị trí động từ lẫn giới từ/hậu giới từ.',
  },
  {
    id: 'cu-phap-hoc-06',
    question: 'Câu nào minh họa rõ nhất cấu trúc đề – thuyết của tiếng Việt?',
    options: ['Tôi ăn cơm.', 'Voi thì vòi dài.', 'Anh ăn gì?', 'Mèo bị chó đuổi.'],
    answer: 1,
    explanation:
      '"Voi" là đề (điều được nói đến), "vòi dài" là thuyết; "voi" không phải chủ ngữ của "dài". Câu tương ứng tiếng Nhật 象{ぞう}は鼻{はな}が長{なが}い có cùng cấu trúc. Các câu còn lại là câu chủ – vị thông thường, câu hỏi và câu bị động.',
    lang: 'vi',
  },
  {
    id: 'cu-phap-hoc-07',
    question: 'Người Việt học tiếng Anh viết "*She very beautiful." Lỗi này bắt nguồn từ đặc điểm nào của tiếng Việt?',
    options: [
      'Tiếng Việt không có tính từ',
      'Tiếng Việt đặt tính từ trước danh từ',
      'Tính từ tiếng Việt làm vị ngữ trực tiếp, không cần hệ từ',
      'Tiếng Việt bắt buộc lược chủ ngữ',
    ],
    answer: 2,
    explanation:
      '"Cô ấy rất đẹp" không cần hệ từ "là"; tiếng Anh thì bắt buộc có "is". Tiếng Việt có tính từ và đặt chúng sau danh từ (nhà đẹp); việc lược chủ ngữ là tùy chọn, không bắt buộc.',
    lang: 'en',
  },
  {
    id: 'cu-phap-hoc-08',
    question: 'Điểm nào tiếng Việt GIỐNG tiếng Nhật nhưng KHÁC tiếng Anh?',
    options: [
      'Trật tự cơ bản SOV',
      'Mệnh đề quan hệ đứng trước danh từ',
      'Từ để hỏi giữ nguyên vị trí trong câu hỏi',
      'Tính từ đứng trước danh từ',
    ],
    answer: 2,
    explanation:
      '"Anh ăn gì?" và 何{なに}を食{た}べましたか đều giữ từ để hỏi tại chỗ, còn tiếng Anh đưa "what" lên đầu. SOV và mệnh đề quan hệ đứng trước danh từ chỉ có ở tiếng Nhật; tính từ đứng trước danh từ có ở tiếng Anh và tiếng Nhật, không có ở tiếng Việt.',
  },
  {
    id: 'cu-phap-hoc-09',
    question: 'Chọn câu dùng trợ từ đúng: "Ai đã đến?"',
    options: ['誰{だれ}は来{き}ましたか', '誰{だれ}を来{き}ましたか', '誰{だれ}で来{き}ましたか', '誰{だれ}が来{き}ましたか'],
    answer: 3,
    explanation:
      'Từ để hỏi làm chủ ngữ phải đi với が, vì nó mang thông tin mới; は không dùng với từ để hỏi làm chủ ngữ. を đánh dấu tân ngữ, で chỉ nơi chốn hoặc phương tiện của hành động.',
    lang: 'ja',
  },
  {
    id: 'cu-phap-hoc-10',
    question: 'Vì sao câu "Can the boy who is tall swim?" đúng còn "*Is the boy who tall can swim?" sai?',
    options: [
      'Vì quy tắc đảo trợ động từ dựa vào cấu trúc (trợ động từ của mệnh đề chính), không dựa vào vị trí đầu tiên',
      'Vì "is" không bao giờ được đảo lên đầu câu',
      'Vì câu hỏi tiếng Anh luôn phải có "do"',
      'Vì mệnh đề quan hệ không được xuất hiện trong câu hỏi',
    ],
    answer: 0,
    explanation:
      'Người nói đảo trợ động từ của mệnh đề chính ("can"), bỏ qua "is" nằm trong mệnh đề quan hệ, dù "is" đứng trước. Điều này cho thấy quy tắc cú pháp vận hành trên cấu trúc thành tố. "Is" vẫn đảo được (Is he tall?), "do" chỉ chèn khi không có trợ động từ.',
    lang: 'en',
  },
]
