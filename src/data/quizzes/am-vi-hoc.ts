import type { QuizQuestion } from '../types'

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
  {
    id: 'am-vi-hoc-04',
    question: 'Quy tắc /n/ → [m] / __ [p, b, m] (in + possible → impossible) mô tả hiện tượng nào?',
    options: ['Dị hóa', 'Lược âm', 'Đảo âm', 'Đồng hóa'],
    answer: 3,
    explanation:
      '/n/ trở thành [m] để cùng vị trí môi – môi với âm đi sau: âm trở nên giống âm bên cạnh là đồng hóa. Tiếng Nhật có quy tắc tương tự với ん: さんぽ [sampo]. Dị hóa làm âm khác đi, lược âm bỏ âm, đảo âm đổi chỗ các âm.',
  },
  {
    id: 'am-vi-hoc-05',
    question: 'Theo mô hình năm thành phần, âm đệm của âm tiết "hoàng" là gì?',
    options: ['o /w/', 'h /h/', 'a /aː/', 'ng /ŋ/'],
    answer: 0,
    explanation: '"Hoàng" = thanh huyền + âm đầu h + âm đệm o (/w/, làm tròn môi) + âm chính a + âm cuối ng.',
    lang: 'vi',
  },
  {
    id: 'am-vi-hoc-06',
    question: 'Vì sao 春風{はるかぜ} (haru + kaze) không có rendaku (không thành *harugaze)?',
    options: [
      'Vì đây là từ ghép đẳng lập',
      'Vì 風{かぜ} là từ vay mượn',
      'Vì thành tố sau đã chứa phụ âm hữu thanh [z] (luật Lyman)',
      'Vì thành tố đầu kết thúc bằng nguyên âm',
    ],
    answer: 2,
    explanation:
      'Luật Lyman: rendaku bị chặn khi thành tố sau đã có phụ âm hữu thanh (kaze có z). 春風 là từ ghép chính phụ (gió mùa xuân), 風 là từ thuần Nhật, và việc thành tố đầu kết thúc bằng nguyên âm không ngăn rendaku (てがみ).',
    lang: 'ja',
  },
  {
    id: 'am-vi-hoc-07',
    question: 'Âm tiết tiếng Việt kết thúc bằng -p, -t, -c, -ch chỉ kết hợp được với những thanh nào?',
    options: ['Ngang và huyền', 'Hỏi và ngã', 'Huyền và hỏi', 'Sắc và nặng'],
    answer: 3,
    explanation:
      'Ta có "tấp – tập", "mát – mạt", "các – cạc" nhưng không có "*tàp", "*mãt". Đây là ràng buộc kết hợp âm giữa âm cuối tắc vô thanh và thanh điệu.',
    lang: 'vi',
  },
  {
    id: 'am-vi-hoc-08',
    question: 'Hậu tố số nhiều tiếng Anh đọc [ɪz] sau các âm s, z, ʃ, ʒ, tʃ, dʒ (buses, roses, wishes, judges). Nhóm âm này là gì?',
    options: ['Một cặp tối thiểu', 'Một lớp tự nhiên: các âm [+xuýt]', 'Các biến thể tự do của /s/', 'Toàn bộ các âm vị hữu thanh'],
    answer: 1,
    explanation:
      'Các âm có chung nét [+xuýt] tạo thành một lớp tự nhiên, và quy tắc chèn [ɪ] tác động lên cả lớp. Nhóm này gồm cả âm vô thanh (s, ʃ) lẫn hữu thanh (z, ʒ), nên không phải "các âm hữu thanh".',
    lang: 'en',
  },
  {
    id: 'am-vi-hoc-09',
    question: 'Người Nhật đọc "milk" thành ミルク (miruku), người Việt đọc "ice" thành "ai". Hai hiện tượng này cho thấy điều gì?',
    options: [
      'Người học không nghe được bất kỳ âm tiếng Anh nào',
      'Tiếng Anh có quá nhiều âm vị',
      'Chữ viết tiếng Anh không nhất quán',
      'Người học "sửa" từ theo ràng buộc kết hợp âm của tiếng mẹ đẻ, bằng cách thêm hoặc bỏ âm',
    ],
    answer: 3,
    explanation:
      'Âm tiết tiếng Nhật phải kết thúc bằng nguyên âm (trừ ん, っ) nên người Nhật chèn thêm nguyên âm. Vần tiếng Việt chỉ có một âm cuối nên người Việt bỏ [s]. Đây là tác động của ràng buộc âm vị học, không phải do chữ viết hay "tai kém".',
  },
  {
    id: 'am-vi-hoc-10',
    question: 'Trong tiếng Việt, [t] và [tʰ] là hai âm vị (tai – thai); trong tiếng Anh, chúng chỉ là biến thể của /t/. Kết luận nào đúng?',
    options: [
      'Hệ thống âm vị là riêng của từng ngôn ngữ',
      'Tiếng Anh không có âm [tʰ]',
      'Tiếng Việt không có biến thể âm vị',
      'Hai âm này luôn là hai âm vị trong mọi ngôn ngữ',
    ],
    answer: 0,
    explanation:
      'Cùng hai âm tố nhưng vai trò khác nhau tùy ngôn ngữ: đó là lý do âm vị được xác định trong từng hệ thống. Tiếng Anh có [tʰ] (top) và tiếng Việt cũng có biến thể âm vị (ví dụ -nh/-ch sau i, ê).',
  },
]
