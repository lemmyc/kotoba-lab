import type { QuizQuestion } from '../types'

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
  {
    id: 'hinh-thai-hoc-04',
    question: 'Phát biểu nào đúng về phụ tố phái sinh?',
    options: [
      'Có thể tạo ra từ mới và làm thay đổi từ loại',
      'Chỉ biểu thị số, thì, ngôi mà không tạo từ mới',
      'Luôn đứng ngoài phụ tố biến tố',
      'Áp dụng được cho mọi từ cùng từ loại mà không có ngoại lệ',
    ],
    answer: 0,
    explanation:
      'Phụ tố phái sinh tạo từ mới và có thể đổi từ loại (modern → modernize). Biểu thị số, thì, ngôi và áp dụng rộng là đặc điểm của biến tố. Phụ tố phái sinh đứng gần căn tố hơn, còn biến tố nằm ngoài (modern-ize-s).',
  },
  {
    id: 'hinh-thai-hoc-05',
    question: 'Từ "smog" (smoke + fog) được tạo theo phương thức nào?',
    options: ['Rút gọn', 'Từ tắt', 'Tạo từ ngược', 'Pha trộn'],
    answer: 3,
    explanation:
      'Pha trộn ghép phần đầu của một từ (sm-oke) với phần cuối của từ khác (f-og). Rút gọn chỉ cắt bớt một từ (laboratory → lab); từ tắt lấy chữ cái đầu (NASA); tạo từ ngược bỏ phần bị tưởng là phụ tố (editor → edit).',
    lang: 'en',
  },
  {
    id: 'hinh-thai-hoc-06',
    question: 'Trong ngôn ngữ hòa kết, điều gì thường xảy ra?',
    options: [
      'Từ không bao giờ biến đổi hình thái',
      'Mỗi phụ tố chỉ mang đúng một ý nghĩa ngữ pháp, ranh giới rõ ràng',
      'Một phụ tố có thể gộp nhiều ý nghĩa ngữ pháp cùng lúc',
      'Cả câu được gộp thành một từ duy nhất',
    ],
    answer: 2,
    explanation:
      'Hậu tố -s trong "she walks" cùng lúc biểu thị ngôi 3, số ít và thì hiện tại, đặc trưng của loại hình hòa kết. Phương án 1 mô tả loại hình đơn lập, phương án 2 là chắp dính, phương án 4 gần với hỗn nhập.',
  },
  {
    id: 'hinh-thai-hoc-07',
    question: 'Từ "cà phê" gồm bao nhiêu hình vị?',
    options: ['1', '2', '3', 'Không xác định được vì là từ vay mượn'],
    answer: 0,
    explanation:
      '"Cà" và "phê" tách riêng không mang nghĩa liên quan đến "cà phê", nên cả từ chỉ là một hình vị dù có hai âm tiết: hình vị không trùng với âm tiết. Từ vay mượn vẫn phân tích hình vị bình thường.',
    lang: 'vi',
  },
  {
    id: 'hinh-thai-hoc-08',
    question: '"Kệ sách" – "bookshelf" – 本棚{ほんだな} (hondana). Nhận xét nào đúng về vị trí thành tố chính (chỉ "kệ")?',
    options: [
      'Cả ba ngôn ngữ đều đặt thành tố chính ở trước',
      'Cả ba ngôn ngữ đều đặt thành tố chính ở sau',
      'Tiếng Việt đặt ở trước; tiếng Anh và tiếng Nhật đặt ở sau',
      'Tiếng Việt và tiếng Nhật đặt ở trước; tiếng Anh đặt ở sau',
    ],
    answer: 2,
    explanation:
      '"Kệ" đứng đầu trong "kệ sách", còn "shelf" và 棚{たな} (tana → dana) đứng cuối trong "bookshelf" và 本棚. Vì vậy người Việt phải đảo trật tự khi dịch từ ghép sang tiếng Anh hay tiếng Nhật.',
  },
  {
    id: 'hinh-thai-hoc-09',
    question: 'Trong tiếng Anh, "edit" được tạo ra từ "editor". Đây là phương thức…',
    options: ['chuyển loại', 'phụ gia', 'rút gọn', 'tạo từ ngược'],
    answer: 3,
    explanation:
      '"Editor" có trước; người nói tưởng "-or" là hậu tố chỉ người nên bỏ đi và tạo ra động từ "edit". Phụ gia thì thêm phụ tố chứ không bỏ bớt; rút gọn không dựa vào việc hiểu nhầm phụ tố (laboratory → lab); chuyển loại không thay đổi hình thức từ.',
    lang: 'en',
  },
  {
    id: 'hinh-thai-hoc-10',
    question: 'Từ nào sau đây là "tiếng Anh kiểu Nhật" (和製英語{わせいえいご}), tức người nói tiếng Anh không dùng với nghĩa đó?',
    options: ['サラリーマン (nhân viên văn phòng)', 'コーヒー (cà phê)', 'テレビ (ti vi)', 'ホテル (khách sạn)'],
    answer: 0,
    explanation:
      'サラリーマン (sararīman) được ghép từ hình vị tiếng Anh "salary" + "man" nhưng tạo ra tại Nhật. コーヒー, テレビ (rút gọn từ テレビジョン) và ホテル đều là từ vay mượn có tương ứng trực tiếp trong tiếng Anh.',
    lang: 'ja',
  },
]
