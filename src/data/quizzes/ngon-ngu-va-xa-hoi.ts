import type { QuizQuestion } from '../types'

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
  {
    id: 'ngon-ngu-va-xa-hoi-04',
    question: 'Theo quan điểm ngôn ngữ học miêu tả, nhận định nào đúng về phương ngữ?',
    options: [
      'Phương ngữ chuẩn logic hơn các phương ngữ khác',
      'Phương ngữ miền Nam là tiếng Việt phát âm sai',
      'Người nói phương ngữ thường có năng lực ngôn ngữ kém hơn',
      'Mọi phương ngữ đều là hệ thống có quy tắc; việc chọn chuẩn là quyết định xã hội – lịch sử',
    ],
    answer: 3,
    explanation:
      'Mỗi phương ngữ có hệ thống âm, từ vựng, ngữ pháp riêng và nhất quán. Biến thể chuẩn thường dựa trên phương ngữ của trung tâm chính trị – văn hóa, không phải vì nó "đúng" hơn. Định kiến về người nói phương ngữ là có thật nhưng không có cơ sở ngôn ngữ học.',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-05',
    question: 'Cặp từ nào thể hiện khác biệt từ vựng giữa phương ngữ Bắc và phương ngữ Nam (theo thứ tự Bắc – Nam)?',
    options: ['heo – lợn', 'bát – chén', 'trái – quả', 'té – ngã'],
    answer: 1,
    explanation:
      'Miền Bắc nói "bát", miền Nam nói "chén". Các phương án còn lại bị đảo thứ tự: miền Bắc nói "lợn", "quả", "ngã"; miền Nam nói "heo", "trái", "té".',
    lang: 'vi',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-06',
    question: 'Điểm khác biệt cơ bản giữa pidgin và creole là gì?',
    options: [
      'Creole có người nói như tiếng mẹ đẻ, còn pidgin thì không',
      'Pidgin có ngữ pháp phức tạp hơn creole',
      'Creole chỉ tồn tại ở dạng viết',
      'Pidgin luôn dựa trên tiếng Pháp, creole luôn dựa trên tiếng Anh',
    ],
    answer: 0,
    explanation:
      'Pidgin là hệ thống giao tiếp giản lược giữa các nhóm không chung ngôn ngữ. Khi trẻ em lớn lên nói nó như tiếng mẹ đẻ, nó trở thành creole với ngữ pháp và từ vựng đầy đủ. Cả hai có thể dựa trên nhiều ngôn ngữ khác nhau.',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-07',
    question: 'Trong tiếng Anh của người Mỹ gốc Phi (AAE), câu "She be working" có nghĩa là gì?',
    options: [
      'Cô ấy đang làm việc ngay lúc này',
      'Cô ấy sẽ làm việc',
      'Cô ấy thường xuyên làm việc (thói quen)',
      'Câu sai ngữ pháp, không có nghĩa',
    ],
    answer: 2,
    explanation:
      '"Be" chỉ thói quen (habitual be) là một quy tắc của AAE: "She be working" = cô ấy thường làm việc, còn "She working" = cô ấy đang làm việc lúc này. AAE là phương ngữ có quy tắc chặt chẽ, không phải "tiếng Anh sai".',
    lang: 'en',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-08',
    question: 'Nhân vật ông tiến sĩ trong manga nói "そうじゃ、わしが博士{はかせ}じゃ". Đây là ví dụ của…',
    options: ['phương ngữ Kansai', 'kính ngữ', 'tiếng lóng giới trẻ', 'ngôn ngữ vai trò (役割語{やくわりご})'],
    answer: 3,
    explanation:
      'Kinsui Satoshi gọi đây là 役割語: cách nói khuôn mẫu gắn với kiểu nhân vật "ông tiến sĩ già", dù ngoài đời hầu như không ai nói như vậy. Nó không phải phương ngữ của một vùng cụ thể hay kính ngữ.',
    lang: 'ja',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-09',
    question: 'Việc tiếng Nhật đổi 看護婦{かんごふ} thành 看護師{かんごし} (y tá) và tiếng Anh đổi "fireman" thành "firefighter" phản ánh xu hướng nào?',
    options: ['Dùng ngôn ngữ trung tính về giới', 'Chuyển mã', 'Rút gọn từ', 'Vay mượn từ nước ngoài'],
    answer: 0,
    explanation:
      '婦 (phụ nữ) và "man" đánh dấu giới trong tên nghề; các từ mới 看護師, firefighter không mặc định giới tính của người làm nghề. Đây không phải rút gọn, vay mượn hay chuyển mã.',
  },
  {
    id: 'ngon-ngu-va-xa-hoi-10',
    question: 'Theo mô hình ba vòng tròn của Kachru, Việt Nam thuộc vòng nào đối với tiếng Anh?',
    options: [
      'Vòng trong (tiếng Anh là tiếng mẹ đẻ của đa số)',
      'Vòng ngoài (tiếng Anh có vai trò chính thức do lịch sử)',
      'Vòng mở rộng (tiếng Anh chủ yếu là ngoại ngữ)',
      'Không thuộc vòng nào',
    ],
    answer: 2,
    explanation:
      'Ở Việt Nam, tiếng Anh chủ yếu được học như ngoại ngữ, giống Nhật Bản, Trung Quốc: vòng mở rộng. Vòng ngoài gồm những nơi tiếng Anh có vai trò thể chế như Ấn Độ, Singapore; vòng trong gồm Anh, Mỹ, Úc…',
    lang: 'en',
  },
]
