import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'ban-chat-ngon-ngu-01',
    question: 'Theo Ferdinand de Saussure, tín hiệu ngôn ngữ là sự kết hợp của hai mặt nào?',
    options: [
      'Âm thanh và chữ viết',
      'Cái biểu đạt và cái được biểu đạt',
      'Từ vựng và ngữ pháp',
      'Người nói và người nghe',
    ],
    answer: 1,
    explanation:
      'Saussure xem tín hiệu ngôn ngữ là thực thể hai mặt: cái biểu đạt (signifiant – hình ảnh âm thanh) và cái được biểu đạt (signifié – khái niệm). Chữ viết chỉ là phương tiện ghi lại ngôn ngữ nói.',
  },
  {
    id: 'ban-chat-ngon-ngu-02',
    question:
      'Cùng một loại thực vật nhưng tiếng Việt gọi là "cây", tiếng Anh là "tree", tiếng Nhật là 木{き} (ki). Hiện tượng này minh họa rõ nhất đặc điểm nào?',
    options: ['Tính chuyển di', 'Tính hai bình diện', 'Tính võ đoán', 'Tính truyền thụ văn hóa'],
    answer: 2,
    explanation:
      'Không có lý do tự nhiên nào khiến chuỗi âm "cây", "tree" hay "ki" phải gắn với khái niệm đó. Mối liên hệ âm – nghĩa là do quy ước của cộng đồng, tức là tính võ đoán.',
  },
  {
    id: 'ban-chat-ngon-ngu-03',
    question: 'Mọi người Việt đều biết "ba con mèo" là đúng còn "con ba mèo" là sai, dù chưa ai được dạy quy tắc này. Điều đó cho thấy gì?',
    options: [
      'Người bản ngữ có tri thức ngữ pháp vô thức (năng lực ngôn ngữ)',
      'Quy tắc này do sách giáo khoa quy định (ngữ pháp quy phạm)',
      'Trật tự từ trong tiếng Việt là hoàn toàn tự do',
      'Đây là một biểu hiện của tính chuyển di',
    ],
    answer: 0,
    explanation:
      'Trật tự số từ – loại từ – danh từ là tri thức ngầm mà trẻ em Việt tự rút ra từ lời nói xung quanh, không cần ai dạy: đó là năng lực ngôn ngữ, được ngữ pháp miêu tả ghi nhận. Trật tự từ tiếng Việt không tự do, và tính chuyển di là khả năng nói về điều không có ở đây, bây giờ.',
    lang: 'vi',
  },
  {
    id: 'ban-chat-ngon-ngu-04',
    question: 'Một người bản ngữ nói nhịu vì quá mệt. Lỗi này phản ánh giới hạn của…',
    options: ['năng lực ngôn ngữ (competence)', 'ngữ pháp quy phạm', 'tính võ đoán', 'hiệu năng ngôn ngữ (performance)'],
    answer: 3,
    explanation:
      'Người đó vẫn "biết" câu đúng (năng lực không đổi), nhưng việc sử dụng ngôn ngữ trong thực tế (hiệu năng) bị ảnh hưởng bởi mệt mỏi, trí nhớ, cảm xúc.',
  },
  {
    id: 'ban-chat-ngon-ngu-05',
    question: 'Phát biểu nào dưới đây là một quy tắc của ngữ pháp quy phạm?',
    options: [
      'Không được kết thúc một câu tiếng Anh bằng giới từ.',
      'Trong tiếng Việt, tính từ thường đứng sau danh từ mà nó bổ nghĩa.',
      'Trong tiếng Nhật, động từ thường đứng ở cuối câu.',
      'Tiếng Anh có trọng âm từ.',
    ],
    answer: 0,
    explanation:
      'Ba phương án còn lại mô tả cách người bản ngữ thực sự nói (ngữ pháp miêu tả). "Không được kết thúc câu bằng giới từ" là lời khuyên mang tính chuẩn mực, trong khi người bản ngữ vẫn tự nhiên nói "Who are you talking to?".',
    lang: 'en',
  },
  {
    id: 'ban-chat-ngon-ngu-06',
    question: 'Câu "Colorless green ideas sleep furiously" (Chomsky, 1957) cho thấy điều gì?',
    options: [
      'Câu đúng ngữ pháp nhất thiết phải có nghĩa hợp lý.',
      'Một câu có thể đúng ngữ pháp dù nghĩa phi lý, nên tính ngữ pháp độc lập tương đối với ý nghĩa.',
      'Tiếng Anh cho phép bất kỳ trật tự từ nào.',
      'Người bản ngữ không thể phán đoán tính ngữ pháp của câu.',
    ],
    answer: 1,
    explanation:
      'Người nói tiếng Anh nhận ra câu này đúng cấu trúc (tính từ – danh từ – động từ – trạng từ) dù nghĩa vô lý, trong khi "*Furiously sleep ideas green colorless" thì sai ngữ pháp.',
    lang: 'en',
  },
  {
    id: 'ban-chat-ngon-ngu-07',
    question: 'Trong tiếng Nhật, cách nói 見{み}れる thay cho 見{み}られる ("có thể nhìn thấy") được gọi là gì?',
    options: ['敬語{けいご} (keigo)', 'オノマトペ (onomatope)', '方言{ほうげん} (hōgen)', 'ら抜{ぬ}き言葉{ことば} (ra-nuki kotoba)'],
    answer: 3,
    explanation:
      'Ra-nuki kotoba là hiện tượng lược âm ら trong thể khả năng của động từ nhóm 2. Nó phổ biến trong lời nói thực tế nhưng thường bị giới quy phạm phê phán — ví dụ điển hình của xung đột miêu tả và quy phạm.',
    lang: 'ja',
  },
  {
    id: 'ban-chat-ngon-ngu-08',
    question: 'Tính hai bình diện (duality of patterning) của ngôn ngữ nghĩa là gì?',
    options: [
      'Mỗi từ luôn có hai nghĩa.',
      'Ngôn ngữ vừa có dạng nói vừa có dạng viết.',
      'Các âm tự thân vô nghĩa kết hợp với nhau thành những đơn vị có nghĩa.',
      'Mỗi câu đều có chủ ngữ và vị ngữ.',
    ],
    answer: 2,
    explanation:
      'Ở tầng thứ nhất, các âm như /b/, /a/ và thanh điệu không mang nghĩa; ở tầng thứ hai, chúng kết hợp thành "ba", "bà", "bá"… có nghĩa. Nhờ vậy một số ít âm tạo ra vô số từ.',
    lang: 'vi',
  },
  {
    id: 'ban-chat-ngon-ngu-09',
    question: 'Nhận định nào đúng về tiếng Nhật?',
    options: [
      'Thuộc loại hình đơn lập, trật tự cơ bản SVO.',
      'Thuộc loại hình chắp dính, trật tự cơ bản SOV.',
      'Thuộc loại hình hòa kết, trật tự cơ bản VSO.',
      'Thuộc loại hình đơn lập, trật tự cơ bản SOV.',
    ],
    answer: 1,
    explanation:
      'Tiếng Nhật gắn nối tiếp các hình vị ngữ pháp vào gốc từ (食{た}べ-させ-られ-なかった) nên thuộc loại hình chắp dính, và động từ đứng cuối câu (SOV). Tiếng Việt mới là ngôn ngữ đơn lập, SVO.',
    lang: 'ja',
  },
  {
    id: 'ban-chat-ngon-ngu-10',
    question: 'Phát biểu nào đúng về ngôn ngữ ký hiệu?',
    options: [
      'Là ngôn ngữ tự nhiên đầy đủ, có hệ thống ngữ pháp riêng.',
      'Là tập hợp cử chỉ mô phỏng sự vật, không có ngữ pháp.',
      'Mọi quốc gia dùng chung một ngôn ngữ ký hiệu.',
      'Chỉ là cách "đánh vần" chữ viết bằng tay.',
    ],
    answer: 0,
    explanation:
      'Ngôn ngữ ký hiệu như ASL (Mỹ) hay 日本手話{にほんしゅわ} (Nhật) có cấu trúc âm vị, hình thái, cú pháp riêng và được trẻ thụ đắc tự nhiên như ngôn ngữ nói. Mỗi cộng đồng có ngôn ngữ ký hiệu riêng.',
  },
]
