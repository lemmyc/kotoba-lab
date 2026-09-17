import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'thu-dac-ngon-ngu-01',
    question: 'Trẻ nói "Mẹ bế bé", "Bố đi làm" (lược bỏ hư từ) đang ở giai đoạn nào?',
    options: ['Bập bẹ', 'Một từ', 'Lời nói kiểu điện báo', 'Hoàn thiện ngữ pháp'],
    answer: 2,
    explanation: 'Trẻ ghép các từ thực mang nhiều thông tin và bỏ qua hư từ, giống cách viết điện báo tiết kiệm chữ.',
    lang: 'vi',
  },
  {
    id: 'thu-dac-ngon-ngu-02',
    question: 'Một đứa trẻ nói tiếng Anh "I goed there" thay vì "I went there". Hiện tượng này cho thấy…',
    options: [
      'trẻ chỉ bắt chước người lớn',
      'trẻ đã tự rút ra quy tắc thêm -ed và áp dụng quá mức',
      'trẻ bị rối loạn ngôn ngữ',
      'trẻ không hiểu nghĩa của động từ',
    ],
    answer: 1,
    explanation:
      'Người lớn không nói "goed", nên trẻ không bắt chước. Trẻ đã khái quát quy tắc quá khứ -ed và áp dụng cho cả động từ bất quy tắc (overgeneralization) — bằng chứng trẻ chủ động xây dựng ngữ pháp.',
    lang: 'en',
  },
  {
    id: 'thu-dac-ngon-ngu-03',
    question: 'Nhiều người học tiếng Nhật là người Việt đoán được nghĩa của 準備{じゅんび} (junbi) hay 注意{ちゅうい} (chūi). Đây là ví dụ của…',
    options: ['chuyển di tích cực nhờ từ Hán Việt', 'chuyển di tiêu cực', 'hóa thạch ngôn ngữ', 'chuyển mã'],
    answer: 0,
    explanation:
      '準備 ≈ "chuẩn bị", 注意 ≈ "chú ý": nhờ cùng gốc chữ Hán, vốn từ Hán Việt giúp người Việt đoán nghĩa từ Hán – Nhật (Kango) — chuyển di tích cực.',
    lang: 'ja',
  },
  {
    id: 'thu-dac-ngon-ngu-04',
    question: 'Trong thí nghiệm "wug test" (Berko, 1958), trẻ mẫu giáo nói "two wugs". Kết quả này chứng minh điều gì?',
    options: [
      'Trẻ đã từng nghe từ "wugs" trước đó',
      'Trẻ bắt chước giọng người làm thí nghiệm',
      'Trẻ không hiểu nghĩa của từ',
      'Trẻ đã nắm quy tắc số nhiều và áp dụng được cho từ hoàn toàn mới',
    ],
    answer: 3,
    explanation:
      '"Wug" là từ bịa ra nên trẻ không thể đã nghe "wugs". Việc trẻ thêm đúng hậu tố, kể cả đúng biến thể [z], cho thấy trẻ nắm quy tắc chứ không chỉ nhớ từng từ.',
    lang: 'en',
  },
  {
    id: 'thu-dac-ngon-ngu-05',
    question: 'Hệ thống ngôn ngữ riêng, có quy tắc và luôn thay đổi của người học ngoại ngữ được Selinker gọi là…',
    options: ['ngôn ngữ trung gian', 'ngôn ngữ pha tạp (pidgin)', 'chuyển mã', 'hóa thạch'],
    answer: 0,
    explanation:
      'Ngôn ngữ trung gian (interlanguage) nằm giữa tiếng mẹ đẻ và ngôn ngữ đích. Pidgin hình thành trong cộng đồng tiếp xúc; chuyển mã là chuyển qua lại giữa hai ngôn ngữ; hóa thạch là khi một số lỗi trong ngôn ngữ trung gian dừng lại.',
  },
  {
    id: 'thu-dac-ngon-ngu-06',
    question: 'Vì sao trẻ nói tiếng Việt không mắc lỗi kiểu "goed"?',
    options: [
      'Vì trẻ Việt học nói muộn hơn',
      'Vì người lớn Việt sửa lỗi ngữ pháp cho trẻ nhiều hơn',
      'Vì trẻ Việt không tự xây dựng quy tắc',
      'Vì từ tiếng Việt không biến đổi hình thái, nên không có quy tắc biến tố để áp dụng quá mức',
    ],
    answer: 3,
    explanation:
      '"Goed" là lỗi khái quát quy tắc biến tố -ed. Tiếng Việt diễn đạt thời gian bằng hư từ ("đã"), không biến đổi động từ, nên không có quy tắc này. Trẻ Việt vẫn tự xây dựng quy tắc ở những lĩnh vực khác như loại từ, xưng hô.',
    lang: 'vi',
  },
  {
    id: 'thu-dac-ngon-ngu-07',
    question: 'Câu "The horse raced past the barn fell" khó hiểu chủ yếu vì…',
    options: [
      'câu chứa từ đồng âm',
      'câu sai ngữ pháp',
      'người đọc phân tích "raced" là động từ chính trước, rồi phải phân tích lại',
      'câu chứa thành ngữ',
    ],
    answer: 2,
    explanation:
      'Câu đúng ngữ pháp: "The horse [that was] raced past the barn / fell". Người đọc chọn cách phân tích phổ biến hơn trước ("the horse raced…" là câu hoàn chỉnh) nên bị dẫn "lạc lối" và phải phân tích lại khi gặp "fell".',
    lang: 'en',
  },
  {
    id: 'thu-dac-ngon-ngu-08',
    question: 'Trẻ Nhật khoảng 2 tuổi hay nói 赤{あか}いの車{くるま} thay vì 赤{あか}い車{くるま} (xe màu đỏ). Đây là…',
    options: [
      'lỗi phát âm',
      'khái quát hóa quá mức khuôn "định ngữ + の + danh từ"',
      'chuyển mã',
      'bắt chước người lớn',
    ],
    answer: 1,
    explanation:
      'Trẻ nhận ra khuôn "danh từ + の + danh từ" (ママの車{くるま}) và mở rộng cho cả tính từ. Người lớn không nói 赤いの車, nên đây không phải bắt chước.',
    lang: 'ja',
  },
  {
    id: 'thu-dac-ngon-ngu-09',
    question: 'Người Việt học tiếng Nhật thấy 東 (đông) đọc là tō, 生 (sinh) đọc là sei. Quy luật tương ứng nào giúp đoán những cách đọc này?',
    options: [
      'Âm đầu Hán Việt luôn giữ nguyên trong âm On',
      'Thanh điệu Hán Việt tương ứng với trọng âm cao độ',
      'Âm cuối -t tương ứng với -tsu',
      'Âm cuối -ng/-nh thường tương ứng với nguyên âm kéo dài (-ō, -ei)',
    ],
    answer: 3,
    explanation:
      'đông → tō, sinh → sei, kinh → kei: âm cuối mũi -ng/-nh thường ứng với nguyên âm dài trong âm On. Quy luật -t → -tsu/-chi có thật (phát → hatsu) nhưng không áp dụng cho hai chữ này; âm đầu và thanh điệu không tương ứng đơn giản như vậy.',
    lang: 'ja',
  },
  {
    id: 'thu-dac-ngon-ngu-10',
    question: 'Lỗi nói nhịu "I\'m not in the read for mooding" (thay cho "in the mood for reading") cho thấy điều gì?',
    options: [
      'Người nói lập khung ngữ pháp (vị trí của -ing) trước, rồi mới điền từ vào',
      'Người nói không biết từ "mood"',
      'Lỗi nói nhịu hoàn toàn ngẫu nhiên',
      'Hình vị -ing luôn di chuyển cùng động từ',
    ],
    answer: 0,
    explanation:
      'Hai gốc từ "read" và "mood" đổi chỗ, nhưng hậu tố -ing vẫn ở vị trí cũ và gắn vào "mood". Lỗi có cấu trúc chứ không ngẫu nhiên, và -ing không "đi theo" động từ gốc.',
  },
]
