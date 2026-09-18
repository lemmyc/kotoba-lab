import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'chu-viet-01',
    question: 'Hiragana và katakana thuộc loại hình chữ viết nào?',
    options: ['Chữ ghi ý', 'Chữ ghi âm tiết (mora)', 'Chữ cái ghi âm vị', 'Chữ ghi phụ âm'],
    answer: 1,
    explanation: 'Mỗi ký tự kana ghi một âm tiết/mora (か = ka, き = ki…), khác với kanji là chữ ghi ý/ghi từ.',
    lang: 'ja',
  },
  {
    id: 'chu-viet-02',
    question: 'Cuốn từ điển Việt – Bồ – La (Dictionarium Annamiticum Lusitanum et Latinum) của Alexandre de Rhodes, cột mốc quan trọng của chữ Quốc ngữ, được xuất bản năm nào?',
    options: ['1558', '1651', '1865', '1945'],
    answer: 1,
    explanation: 'Từ điển được in tại Rome năm 1651, là thành quả của nhiều giáo sĩ phương Tây cùng cộng tác với người Việt trong việc La-tinh hóa tiếng Việt.',
    lang: 'vi',
  },
  {
    id: 'chu-viet-03',
    question: 'Tiếng Nhật hiện đại thường kết hợp mấy bộ chữ chính trong cùng một câu?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'Kanji (chữ Hán), hiragana và katakana. Ví dụ: 私{わたし}はコーヒーを飲{の}みます — kanji cho gốc từ, hiragana cho trợ từ/đuôi động từ, katakana cho từ ngoại lai.',
    lang: 'ja',
  },
  {
    id: 'chu-viet-04',
    question: 'Chữ 來 vốn vẽ cây lúa mì, sau được dùng để ghi từ đồng âm có nghĩa "đến" (Hán Việt: lai). Đây là ví dụ của cách tạo chữ nào?',
    options: ['Chữ hội ý', 'Chữ chỉ sự', 'Chữ hình thanh', 'Nguyên tắc mượn âm (giả tá)'],
    answer: 3,
    explanation:
      'Mượn một chữ sẵn có để ghi một từ khác đồng âm, bất kể nghĩa, là nguyên tắc mượn âm (rebus, giả tá). Chữ hội ý ghép hai phần gợi nghĩa (休), chữ chỉ sự dùng ký hiệu trừu tượng (上, 下), chữ hình thanh ghép phần nghĩa với phần âm (銅).',
  },
  {
    id: 'chu-viet-05',
    question: 'Chữ Ả Rập và chữ Hebrew chủ yếu chỉ ghi phụ âm, nguyên âm thường được bỏ qua hoặc ghi bằng dấu phụ tùy chọn. Loại hình chữ viết này gọi là gì?',
    options: ['Abjad (chữ ghi phụ âm)', 'Abugida', 'Chữ ghi âm tiết', 'Chữ ghi ý'],
    answer: 0,
    explanation:
      'Abjad chỉ ghi phụ âm, như chữ Phoenicia – tổ tiên của chữ Hy Lạp và Latin. Abugida (Devanagari, chữ Thái) thì mỗi ký tự là phụ âm kèm nguyên âm mặc định, nguyên âm khác được ghi bắt buộc bằng dấu gắn vào phụ âm.',
  },
  {
    id: 'chu-viet-06',
    question: 'Chữ 銅 (đồng) gồm 金 (kim loại) và 同 (Hán Việt: đồng). Chữ này thuộc loại nào?',
    options: [
      'Chữ hình thanh: một phần gợi nghĩa, một phần gợi âm',
      'Chữ tượng hình: vẽ lại hình dạng sự vật',
      'Chữ hội ý: ghép hai phần đều gợi nghĩa',
      'Chữ Nôm do người Việt tạo ra',
    ],
    answer: 0,
    explanation:
      '金 cho biết nghĩa (thuộc về kim loại), 同 cho biết âm (đồng; tiếng Nhật đều đọc どう). Chữ hình thanh chiếm đa số chữ Hán, nên chữ Hán không phải là "chữ vẽ". Đây là chữ Hán gốc, không phải chữ Nôm.',
  },
  {
    id: 'chu-viet-07',
    question: 'Vì sao từ debt trong tiếng Anh có chữ b dù không đọc?',
    options: [
      'Tiếng Anh cổ từng đọc âm /b/ trong từ này',
      'Do lỗi của thợ in thời Caxton',
      'Để phân biệt với một từ đồng âm khác',
      'Học giả thời Phục Hưng thêm vào để gợi từ Latin debitum',
    ],
    answer: 3,
    explanation:
      'Tiếng Anh trung đại viết dette (mượn từ tiếng Pháp) và không có âm /b/. Các học giả thời Phục Hưng sửa chính tả theo từ nguyên Latin, tương tự doubt (dubitare). Chính tả vì thế càng xa phát âm.',
    lang: 'en',
  },
  {
    id: 'chu-viet-08',
    question: 'Cách viết color, center, defense của tiếng Anh Mỹ (tiếng Anh Anh: colour, centre, defence) được phổ biến chủ yếu nhờ đâu?',
    options: [
      'Quy định của một viện hàn lâm ngôn ngữ ở London',
      'Từ điển của Noah Webster (1828)',
      'Sắc lệnh năm 1906 của Tổng thống Theodore Roosevelt',
      'Cách viết trong các vở kịch của Shakespeare',
    ],
    answer: 1,
    explanation:
      'Từ điển An American Dictionary of the English Language (1828) của Noah Webster đã phổ biến các cách viết này. Tiếng Anh không có viện hàn lâm quy định chính tả; đề xuất giản hóa năm 1906 của Roosevelt nhanh chóng bị rút lại.',
    lang: 'en',
  },
  {
    id: 'chu-viet-09',
    question: 'Trong chữ Quốc ngữ, âm /k/ được viết bằng chữ k trong trường hợp nào?',
    options: ['Trước a, o, u (ka, ko, ku)', 'Khi đứng cuối âm tiết', 'Trước i, e, ê, y (kí, kẻ, kê)', 'Trước âm đệm u (kua)'],
    answer: 2,
    explanation:
      'Quy ước này bắt nguồn từ chính tả châu Âu mà các giáo sĩ quen dùng: trước e, i, chữ c không đọc [k]. Trước a, o, u dùng c (ca, cô); trước âm đệm dùng q (qua); âm cuối viết c hoặc ch (các, cách).',
    lang: 'vi',
  },
  {
    id: 'chu-viet-10',
    question: "Man'yōgana của tiếng Nhật và chữ Nôm của tiếng Việt giống nhau ở điểm nào?",
    options: [
      'Đều mượn chữ Hán để ghi âm của ngôn ngữ bản địa',
      'Đều là hệ chữ cái Latin do giáo sĩ phương Tây tạo ra',
      'Đều chỉ ghi phụ âm, không ghi nguyên âm',
      'Đều đã được chuẩn hóa hoàn toàn và vẫn dùng chính thức đến nay',
    ],
    answer: 0,
    explanation:
      "Cả hai đều bắt đầu bằng việc mượn chữ Hán để lấy âm (nguyên tắc giả tá). Người Nhật sau đó giản lược man'yōgana thành kana; người Việt ghép thêm thành phần để tạo chữ Nôm, vốn chưa bao giờ được chuẩn hóa và nay đã được thay bằng chữ Quốc ngữ.",
  },
]
