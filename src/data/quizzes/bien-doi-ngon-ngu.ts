import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'bien-doi-ngon-ngu-01',
    question: 'Tiếng Anh thuộc họ ngôn ngữ nào?',
    options: ['Nam Á', 'Ấn – Âu', 'Hán – Tạng', 'Altai'],
    answer: 1,
    explanation: 'Tiếng Anh thuộc nhánh German (Tây German) của họ Ấn – Âu. Tiếng Việt thuộc họ Nam Á; tiếng Nhật thuộc ngữ hệ Nhật Bản (Japonic). "Họ Altai" chỉ là một giả thuyết gây tranh cãi.',
    lang: 'en',
  },
  {
    id: 'bien-doi-ngon-ngu-02',
    question: 'Vì sao 経済{けいざい} (keizai) trong tiếng Nhật và "kinh tế" trong tiếng Việt có âm và nghĩa gần nhau?',
    options: [
      'Tiếng Việt và tiếng Nhật cùng một họ ngôn ngữ',
      'Cả hai đều dùng từ gốc chữ Hán (經濟)',
      'Hoàn toàn do ngẫu nhiên',
      'Tiếng Nhật vay mượn trực tiếp từ tiếng Việt',
    ],
    answer: 1,
    explanation:
      'Hai ngôn ngữ không cùng họ, nhưng cùng tiếp nhận từ vựng gốc Hán. Riêng nghĩa "economy" của 經濟 được người Nhật gán cho từ Hán cổ này thời Minh Trị (wasei-kango), rồi lan sang tiếng Hán và tiếng Việt.',
  },
  {
    id: 'bien-doi-ngon-ngu-03',
    question: 'Theo A.-G. Haudricourt (1954), thanh điệu tiếng Việt hình thành chủ yếu như thế nào?',
    options: [
      'Vay mượn nguyên vẹn từ tiếng Hán',
      'Do sự biến đổi và mất đi của các âm cuối và phụ âm đầu trong lịch sử',
      'Luôn tồn tại từ thời tiếng Việt cổ nhất',
      'Do ảnh hưởng của chữ Quốc ngữ',
    ],
    answer: 1,
    explanation:
      'Haudricourt chứng minh tiếng Việt cổ không có thanh điệu. Khi các âm cuối *-ʔ và *-h mất đi, chúng để lại ba đường nét cao độ; sau đó phân biệt phụ âm đầu vô thanh – hữu thanh chuyển thành phân biệt giọng cao – thấp, tạo nên hệ 6 thanh.',
    lang: 'vi',
  },
  {
    id: 'bien-doi-ngon-ngu-04',
    question: 'Bằng chứng nào có sức thuyết phục nhất cho thấy hai ngôn ngữ cùng một họ?',
    options: [
      'Tương ứng âm đều đặn lặp lại trên nhiều từ cơ bản (số đếm, bộ phận cơ thể, đại từ)',
      'Một vài từ trông rất giống nhau, như name (Anh) và 名前{なまえ} (Nhật)',
      'Có nhiều từ vay mượn chung trong lĩnh vực khoa học',
      'Có cùng trật tự từ cơ bản, ví dụ cùng là SVO',
    ],
    answer: 0,
    explanation:
      'Phương pháp so sánh – lịch sử dựa vào tương ứng âm có quy luật trên lớp từ cơ bản, vốn ít bị vay mượn. Vài từ giống nhau có thể do ngẫu nhiên (name – namae), từ vay mượn chung chỉ phản ánh tiếp xúc, còn trật tự từ giống nhau xuất hiện ở cả những ngôn ngữ không có quan hệ (tiếng Việt và tiếng Anh đều SVO).',
  },
  {
    id: 'bien-doi-ngon-ngu-05',
    question: 'Các cặp Latin – tiếng Anh pater – father, piscis – fish, pēs – foot minh họa điều gì?',
    options: [
      'Tiếng Anh vay mượn các từ này từ tiếng Latin',
      'Tiếng Latin vay mượn các từ này từ tiếng Anh',
      'Tương ứng âm đều đặn p ↔ f giữa hai nhánh của họ Ấn – Âu (luật Grimm)',
      'Sự giống nhau ngẫu nhiên giữa hai ngôn ngữ không có quan hệ',
    ],
    answer: 2,
    explanation:
      'Đây là tương ứng p ↔ f được luật Grimm mô tả: âm *p của tiếng Ấn – Âu nguyên thủy trở thành f trong nhánh German. Nếu là vay mượn thì tiếng Anh đã giữ p như trong từ vay muộn paternal. Tương ứng lặp lại trên nhiều từ nên không thể là ngẫu nhiên.',
  },
  {
    id: 'bien-doi-ngon-ngu-06',
    question: 'Từ meat trong tiếng Anh cổ nghĩa là "thức ăn" nói chung, nay chỉ có nghĩa "thịt". Đây là kiểu biến đổi nghĩa nào?',
    options: ['Mở rộng nghĩa', 'Nghĩa xấu đi', 'Ẩn dụ', 'Thu hẹp nghĩa'],
    answer: 3,
    explanation:
      'Nghĩa từ "mọi thức ăn" hẹp lại thành "thịt", tương tự deer ("con thú" → "con hươu"). Mở rộng nghĩa là chiều ngược lại (dog, "xe"); nghĩa xấu đi liên quan đến sắc thái đánh giá (silly); ẩn dụ là chuyển nghĩa dựa trên sự tương đồng.',
    lang: 'en',
  },
  {
    id: 'bien-doi-ngon-ngu-07',
    question: 'Đại từ 貴様{きさま} (kisama) vốn là cách gọi tôn kính, nay mang sắc thái thô lỗ, xúc phạm. Hiện tượng này gọi là gì?',
    options: ['Nghĩa xấu đi', 'Mở rộng nghĩa', 'Sao phỏng', 'Thu hẹp nghĩa'],
    answer: 0,
    explanation:
      'Khi sắc thái đánh giá của từ chuyển từ tích cực (tôn kính) sang tiêu cực, đó là nghĩa xấu đi (pejoration). お前{まえ} cũng đi theo con đường tương tự. Sao phỏng là dịch từng thành tố của từ nước ngoài, không liên quan đến sắc thái.',
    lang: 'ja',
  },
  {
    id: 'bien-doi-ngon-ngu-08',
    question: 'Chữ 行 có các âm On ぎょう (修行{しゅぎょう}), こう (旅行{りょこう}) và あん (行灯{あんどん}). Vì sao?',
    options: [
      'Đó là ba cách đọc thuần Nhật (âm Kun) khác nhau',
      'Người Nhật tự đặt thêm cách đọc để tránh đồng âm',
      'Tiếng Nhật vay âm Hán nhiều đợt, từ những vùng và thời kỳ khác nhau (呉音{ごおん}, 漢音{かんおん}, 唐音{とうおん})',
      'Do ảnh hưởng của tiếng Bồ Đào Nha thế kỷ 16',
    ],
    answer: 2,
    explanation:
      'Ngô âm (thế kỷ 5–6, gắn với Phật giáo), Hán âm (tiếng Trường An đời Đường) và Đường âm (từ thế kỷ 12 trở đi) là ba lớp âm On du nhập vào những thời điểm khác nhau. Cả ba đều là âm Hán (âm On), không phải âm Kun thuần Nhật.',
    lang: 'ja',
  },
  {
    id: 'bien-doi-ngon-ngu-09',
    question: '"Nhà chọc trời" (tiếng Việt) và 摩天楼{まてんろう} (tiếng Nhật) đều dịch từng thành tố của từ skyscraper. Cách vay mượn này gọi là gì?',
    options: ['Vay mượn nguyên dạng', 'Từ cùng gốc', 'Sao phỏng (calque)', 'Loại suy'],
    answer: 2,
    explanation:
      'Sao phỏng mượn cấu trúc chứ không mượn âm: mỗi thành tố được dịch sang từ bản ngữ. Vay mượn nguyên dạng giữ âm gốc (như ハネムーン); từ cùng gốc là từ kế thừa từ ngôn ngữ tổ tiên chung; loại suy là san bằng hình thức theo mẫu phổ biến.',
  },
  {
    id: 'bien-doi-ngon-ngu-10',
    question: 'Từ điển Việt – Bồ – La (1651) ghi những từ như "blời" (trời) và "tlăm" (trăm). Điều này cho thấy gì?',
    options: [
      'Alexandre de Rhodes ghi sai tiếng Việt',
      'Đó là cách viết tắt của người Bồ Đào Nha',
      'Tiếng Việt thế kỷ 17 chưa có thanh điệu',
      'Tiếng Việt thế kỷ 17 còn các tổ hợp phụ âm đầu bl-, tl- mà sau này đã biến đổi',
    ],
    answer: 3,
    explanation:
      'Các từ điển do giáo sĩ ghi âm bằng chữ Latin là "bản ghi âm" quý của tiếng Việt thời đó: tổ hợp bl-, tl- sau này đơn giản hóa thành gi-/tr-, tr-. Tiếng Việt khi ấy đã có đủ sáu thanh (từ điển có ghi dấu thanh), nên phương án C sai.',
    lang: 'vi',
  },
]
