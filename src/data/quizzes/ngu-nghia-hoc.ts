import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'ngu-nghia-hoc-01',
    question: 'Quan hệ giữa "hoa hồng" và "hoa" là quan hệ gì?',
    options: ['Đồng nghĩa', 'Trái nghĩa', 'Bao nghĩa (hạ danh)', 'Đồng âm'],
    answer: 2,
    explanation: '"Hoa hồng" là một loại "hoa": nghĩa của "hoa hồng" nằm trong phạm vi nghĩa của "hoa" — quan hệ bao nghĩa (hyponymy).',
  },
  {
    id: 'ngu-nghia-hoc-02',
    question: 'Trong tiếng Nhật, 橋{はし} (cây cầu) và 箸{はし} (đôi đũa) có cùng cách viết kana là はし. Về mặt ngữ nghĩa, đây là…',
    options: ['từ đa nghĩa', 'từ đồng âm', 'từ đồng nghĩa', 'từ trái nghĩa'],
    answer: 1,
    explanation:
      'Hai từ có hình thức âm (theo kana) trùng nhau nhưng nghĩa không liên quan → đồng âm. Trong phương ngữ Tokyo, chúng còn được phân biệt bằng trọng âm cao độ (xem Chương 7).',
    lang: 'ja',
  },
  {
    id: 'ngu-nghia-hoc-03',
    question: 'Cặp "sống – chết" thuộc loại trái nghĩa nào?',
    options: [
      'Trái nghĩa bổ sung (phủ định cái này là khẳng định cái kia)',
      'Trái nghĩa thang độ (có mức độ ở giữa)',
      'Trái nghĩa quan hệ (như "mua – bán")',
      'Không phải trái nghĩa',
    ],
    answer: 0,
    explanation:
      '"Không sống" nghĩa là "chết" và ngược lại, không có trạng thái trung gian → trái nghĩa bổ sung. So sánh với "nóng – lạnh" (thang độ: còn "ấm", "mát").',
  },
  {
    id: 'ngu-nghia-hoc-04',
    question: 'Câu nào KÉO THEO câu "The spider died"?',
    options: ['She tried to kill the spider.', 'The spider was very old.', 'She wanted the spider to die.', 'She killed the spider.'],
    answer: 3,
    explanation:
      '"Kill" chứa thành phần nghĩa "gây ra cái chết", nên nếu "She killed the spider" đúng thì con nhện chắc chắn đã chết. "Tried to", "wanted" hay "very old" đều không đảm bảo con nhện đã chết.',
    lang: 'en',
  },
  {
    id: 'ngu-nghia-hoc-05',
    question: '"Chân" trong "chân bàn" và "chân" trong "chân thành" có quan hệ gì?',
    options: ['Đồng âm', 'Đa nghĩa', 'Trái nghĩa', 'Bao nghĩa'],
    answer: 0,
    explanation:
      '"Chân" trong "chân thành" là yếu tố Hán Việt 真 (thật), không liên quan gì đến bộ phận cơ thể → đồng âm. Còn "chân bàn", "chân núi", "chân người" có nghĩa liên hệ (bộ phận ở dưới, nâng đỡ) → đa nghĩa.',
    lang: 'vi',
  },
  {
    id: 'ngu-nghia-hoc-06',
    question: 'Cặp "mua – bán" (buy – sell, 買{か}う – 売{う}る) thuộc loại trái nghĩa nào?',
    options: ['Bổ sung', 'Thang độ', 'Không phải trái nghĩa', 'Quan hệ'],
    answer: 3,
    explanation:
      '"A bán cho B" tương đương "B mua của A": hai từ mô tả cùng một sự tình từ hai phía → trái nghĩa quan hệ. Không có mức độ "mua hơn" (thang độ), và "không mua" không có nghĩa là "bán" (bổ sung).',
  },
  {
    id: 'ngu-nghia-hoc-07',
    question: 'Trong câu 雨{あめ}に降{ふ}られた (bị mắc mưa), chủ ngữ ẩn "tôi" mang vai nghĩa gì?',
    options: ['Tác thể gây ra mưa', 'Người chịu ảnh hưởng (thiệt hại) của sự việc', 'Công cụ', 'Địa điểm'],
    answer: 1,
    explanation:
      'Đây là bị động chịu thiệt (迷惑{めいわく}の受身{うけみ}): chủ ngữ không phải bị thể của hành động "rơi" mà là người bị sự việc ảnh hưởng xấu, gần với "bị" trong tiếng Việt ("tôi bị mưa ướt hết").',
    lang: 'ja',
  },
  {
    id: 'ngu-nghia-hoc-08',
    question: 'Nhận định nào phù hợp nhất với các nghiên cứu hiện nay về giả thuyết Sapir – Whorf?',
    options: [
      'Không có từ riêng cho một màu thì người nói không nhìn thấy màu đó',
      'Ngôn ngữ hoàn toàn không ảnh hưởng đến nhận thức',
      'Ngôn ngữ có thể ảnh hưởng ở mức độ nhất định (dạng yếu), nhưng không quyết định tư duy',
      'Mọi ngôn ngữ đều chia trường nghĩa màu sắc giống hệt nhau',
    ],
    answer: 2,
    explanation:
      'Dạng mạnh bị bác bỏ: người Việt vẫn phân biệt màu lá và màu trời dù dùng chung từ "xanh". Nhưng một số thực nghiệm (như nghiên cứu về hai từ chỉ xanh trong tiếng Nga) ủng hộ ảnh hưởng nhỏ của ngôn ngữ đến tốc độ phân biệt màu. Các ngôn ngữ rõ ràng chia màu khác nhau.',
  },
  {
    id: 'ngu-nghia-hoc-09',
    question: 'Theo cách phân tích của Đỗ Hữu Châu, "chết", "qua đời", "toi" khác nhau chủ yếu ở thành phần nghĩa nào?',
    options: ['Nghĩa biểu vật', 'Nghĩa biểu niệm', 'Sở chỉ', 'Nghĩa biểu thái'],
    answer: 3,
    explanation:
      'Ba từ cùng chỉ một sự việc (cùng biểu vật, biểu niệm cơ bản), nhưng khác về thái độ, sự đánh giá: "qua đời" tôn kính, "chết" trung tính, "toi" suồng sã. Đó là nghĩa biểu thái.',
    lang: 'vi',
  },
  {
    id: 'ngu-nghia-hoc-10',
    question: 'Trong câu "The White House announced new sanctions", cụm "The White House" là ví dụ của…',
    options: ['hoán dụ (nơi chốn → cơ quan)', 'ẩn dụ ý niệm', 'đồng âm', 'thành ngữ không tổ hợp'],
    answer: 0,
    explanation:
      'Tên tòa nhà được dùng để chỉ chính phủ Mỹ làm việc trong đó: quan hệ gần gũi nơi chốn – tổ chức → hoán dụ. Tương tự: "cả làng", 永田町{ながたちょう} (giới chính trị Nhật). Ẩn dụ dựa trên sự tương đồng, không dựa trên quan hệ gần gũi.',
    lang: 'en',
  },
]
