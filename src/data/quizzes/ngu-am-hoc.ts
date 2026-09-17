import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'ngu-am-hoc-01',
    question: 'Tiếng Việt chuẩn (phương ngữ Bắc) có bao nhiêu thanh điệu?',
    options: ['4', '5', '6', '8'],
    answer: 2,
    explanation: 'Sáu thanh: ngang, huyền, sắc, hỏi, ngã, nặng — ví dụ ma, mà, má, mả, mã, mạ. Nhiều phương ngữ miền Trung và miền Nam không phân biệt thanh hỏi và thanh ngã.',
    lang: 'vi',
  },
  {
    id: 'ngu-am-hoc-02',
    question: 'Trong tiếng Nhật Tokyo, 箸{はし} (đũa) và 橋{はし} (cầu) được phân biệt nhờ yếu tố nào?',
    options: ['Thanh điệu', 'Trọng âm cao độ', 'Độ dài nguyên âm', 'Phụ âm đầu'],
    answer: 1,
    explanation: '箸 là HA-shi (cao – thấp), 橋 là ha-SHI (thấp – cao). Đây là trọng âm cao độ, khác với thanh điệu vốn gắn với từng âm tiết như tiếng Việt.',
    lang: 'ja',
  },
  {
    id: 'ngu-am-hoc-03',
    question: 'Các phụ âm [p], [b], [m] có điểm chung nào?',
    options: ['Cùng là âm xát', 'Cùng là âm vô thanh', 'Cùng vị trí cấu âm môi – môi', 'Cùng là âm mũi'],
    answer: 2,
    explanation: 'Cả ba đều được tạo ra bằng cách khép hai môi (âm môi – môi). Chúng khác nhau ở thanh tính ([p] vô thanh, [b] hữu thanh) và phương thức ([m] là âm mũi).',
  },
  {
    id: 'ngu-am-hoc-04',
    question: 'Khi phát âm [v], dây thanh rung; khi phát âm [f], dây thanh không rung. Hai âm này khác nhau ở tiêu chí nào?',
    options: ['Thanh tính', 'Vị trí cấu âm', 'Phương thức cấu âm', 'Độ tròn môi'],
    answer: 0,
    explanation:
      '[f] và [v] cùng là âm xát (cùng phương thức) môi – răng (cùng vị trí), chỉ khác ở thanh tính: [v] hữu thanh, [f] vô thanh. Độ tròn môi là tiêu chí mô tả nguyên âm.',
  },
  {
    id: 'ngu-am-hoc-05',
    question: 'Cặp từ tiếng Anh nào khác nhau ở sự đối lập nguyên âm căng – lơi?',
    options: ['think – sink', 'pin – spin', 'record (danh từ) – record (động từ)', 'sheep – ship'],
    answer: 3,
    explanation:
      'sheep [i] (căng) và ship [ɪ] (lơi) là cặp tối thiểu về nguyên âm. think – sink khác phụ âm đầu [θ]/[s]; pin – spin khác ở bật hơi và cụm phụ âm; record khác ở vị trí trọng âm.',
    lang: 'en',
  },
  {
    id: 'ngu-am-hoc-06',
    question: 'Thơ haiku 5 – 7 – 5 của Nhật Bản đếm theo đơn vị nào?',
    options: ['Mora (拍{はく})', 'Âm tiết', 'Trọng âm', 'Từ'],
    answer: 0,
    explanation:
      'Haiku đếm theo mora: 日本{にほん} (ni-ho-n) là 3 mora dù chỉ 2 âm tiết. Thơ lục bát tiếng Việt mới đếm theo âm tiết, còn thơ tiếng Anh truyền thống đếm theo nhịp trọng âm.',
    lang: 'ja',
  },
  {
    id: 'ngu-am-hoc-07',
    question: 'Ở phương ngữ Hà Nội, các chữ "d", "gi", "r" đầu âm tiết thường được phát âm là âm nào?',
    options: ['[ʐ] xát uốn lưỡi', '[j] tiếp cận', '[r] rung', '[z] xát lợi hữu thanh'],
    answer: 3,
    explanation:
      'Hà Nội đọc "da", "gia", "ra" giống nhau với [z]. Sự phân biệt r với d/gi chỉ còn trong chính tả và ở một số phương ngữ khác; vì vậy người Bắc dễ nhầm các chữ này khi viết.',
    lang: 'vi',
  },
  {
    id: 'ngu-am-hoc-08',
    question: 'Vì sao chữ "o" đầu tiên trong "photograph" [ˈfoʊtəɡræf] và "photography" [fəˈtɑːɡrəfi] được đọc khác nhau?',
    options: [
      'Vì hai từ có nguồn gốc khác nhau',
      'Vì trọng âm dịch chuyển, nguyên âm mất trọng âm bị yếu hóa thành schwa [ə]',
      'Vì quy tắc bật hơi của âm [p]',
      'Vì nguyên âm đôi luôn rút ngắn trước âm [t]',
    ],
    answer: 1,
    explanation:
      'Trong "photography", trọng âm chuyển sang âm tiết thứ hai nên âm tiết đầu yếu hóa thành [ə]. Hai từ cùng gốc; bật hơi chỉ ảnh hưởng phụ âm, không đổi chất lượng nguyên âm.',
    lang: 'en',
  },
  {
    id: 'ngu-am-hoc-09',
    question: 'Âm nào sau đây là âm mũi?',
    options: ['[b]', '[s]', '[l]', '[ŋ]'],
    answer: 3,
    explanation:
      '[ŋ] (ng trong "nga", -ng trong "sing") được tạo ra khi ngạc mềm hạ xuống và hơi đi qua mũi. [b] là âm tắc, [s] là âm xát, [l] là âm bên.',
  },
  {
    id: 'ngu-am-hoc-10',
    question: 'Điểm khác biệt cơ bản giữa thanh điệu tiếng Việt và trọng âm cao độ tiếng Nhật là gì?',
    options: [
      'Thanh điệu gắn với từng âm tiết; trọng âm cao độ tính trên cả từ, qua vị trí cao độ rơi xuống',
      'Chỉ tiếng Nhật dùng cao độ để phân biệt nghĩa',
      'Tiếng Việt chỉ có hai mức cao – thấp',
      'Trọng âm cao độ tiếng Nhật được ghi bằng dấu trong chữ viết',
    ],
    answer: 0,
    explanation:
      'Mỗi âm tiết tiếng Việt mang một trong sáu thanh với đường nét đa dạng, được ghi bằng dấu. Tiếng Nhật chỉ có cao/thấp, tính theo vị trí rơi trong từ và không ghi trong chữ viết. Cả hai đều dùng cao độ để phân biệt nghĩa.',
  },
]
