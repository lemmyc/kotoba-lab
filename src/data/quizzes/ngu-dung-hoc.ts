import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'ngu-dung-hoc-01',
    question:
      'Bạn nói "Ở đây lạnh quá nhỉ" với người ngồi cạnh cửa sổ đang mở, với mong muốn họ đóng cửa. Đây là ví dụ của…',
    options: ['hành động ngôn từ gián tiếp', 'tiền giả định', 'chỉ xuất không gian', 'uyển ngữ'],
    answer: 0,
    explanation: 'Về hình thức, câu là một lời nhận xét; nhưng chức năng thực sự là lời đề nghị → hành động ngôn từ gián tiếp.',
  },
  {
    id: 'ngu-dung-hoc-02',
    question: '尊敬語{そんけいご}, 謙譲語{けんじょうご} và 丁寧語{ていねいご} là ba loại của hệ thống nào trong tiếng Nhật?',
    options: ['方言{ほうげん} (phương ngữ)', '敬語{けいご} (kính ngữ)', '擬態語{ぎたいご} (từ tượng hình)', '外来語{がいらいご} (từ ngoại lai)'],
    answer: 1,
    explanation:
      'Kính ngữ gồm tôn kính ngữ (nâng người khác), khiêm nhường ngữ (hạ mình) và lịch sự ngữ (です/ます) theo cách phân loại truyền thống. Bản hướng dẫn năm 2007 chia chi tiết thành năm loại.',
    lang: 'ja',
  },
  {
    id: 'ngu-dung-hoc-03',
    question: 'Câu "John stopped smoking" tiền giả định điều gì?',
    options: ['John chưa bao giờ hút thuốc', 'John từng hút thuốc', 'John sẽ hút thuốc lại', 'John ghét thuốc lá'],
    answer: 1,
    explanation:
      'Động từ "stop" tiền giả định hành động đã từng diễn ra. Tiền giả định vẫn giữ nguyên khi phủ định câu: "John didn\'t stop smoking" vẫn ngụ ý John từng hút thuốc.',
    lang: 'en',
  },
  {
    id: 'ngu-dung-hoc-04',
    question: 'Một sinh viên hỏi đường một người phụ nữ trạc tuổi mẹ mình. Câu nào phù hợp nhất với nguyên tắc "xưng khiêm hô tôn"?',
    options: [
      'Chị ơi, cho tôi hỏi đường với.',
      'Bạn ơi, cho mình hỏi đường.',
      'Cô ơi, cho cháu hỏi đường với ạ.',
      'Này, cho hỏi đường cái.',
    ],
    answer: 2,
    explanation:
      '"Cô – cháu" đặt người nghe ở vai bậc trên (đáng tuổi cha mẹ) và tự xưng ở vai bậc dưới, kèm tiểu từ "ạ". "Chị – tôi" và "bạn – mình" không phù hợp chênh lệch tuổi; câu cuối thiếu lịch sự.',
    lang: 'vi',
  },
  {
    id: 'ngu-dung-hoc-05',
    question: 'A: "Tối nay đi xem phim không?" – B: "Mai em thi." Người nghe hiểu B từ chối nhờ vào…',
    options: ['tiền giả định', 'chỉ xuất thời gian', 'động từ ngữ vi', 'hàm ý hội thoại (phương châm quan hệ)'],
    answer: 3,
    explanation:
      'Câu trả lời bề ngoài không liên quan. Giả định B vẫn cộng tác, A suy ra: thi ngày mai → phải ôn bài → không đi. Đó là hàm ý hội thoại dựa trên phương châm quan hệ của Grice.',
  },
  {
    id: 'ngu-dung-hoc-06',
    question: 'Nhân viên nói với khách hàng về giám đốc công ty mình (ông Tanaka). Câu nào phù hợp nhất?',
    options: [
      '田中{たなか}は今{いま}、席{せき}を外{はず}しております。',
      '田中{たなか}社長{しゃちょう}は今{いま}いらっしゃいません。',
      '田中{たなか}さんは今{いま}いないよ。',
      '田中{たなか}社長{しゃちょう}様{さま}はお出{で}かけになりました。',
    ],
    answer: 0,
    explanation:
      'Với khách (người ngoài), giám đốc là người "phe mình" (ウチ), nên bỏ chức danh và さん, dùng khiêm nhường ngữ おる. Các câu dùng tôn kính ngữ (いらっしゃる, お〜になる) cho sếp mình trước mặt khách là sai về ngữ dụng; câu thứ ba quá suồng sã.',
    lang: 'ja',
  },
  {
    id: 'ngu-dung-hoc-07',
    question: 'Trong tiếng Anh, lời đề nghị nào gián tiếp và lịch sự nhất?',
    options: [
      'Open the window.',
      'Open the window, please.',
      'Can you open the window?',
      'I was wondering if you could possibly open the window.',
    ],
    answer: 3,
    explanation:
      'Câu cuối kết hợp thì quá khứ tiếp diễn "khoảng cách" (I was wondering), động từ tình thái quá khứ (could) và rào đón (possibly), giảm tối đa áp đặt lên người nghe. "Please" không biến câu mệnh lệnh thành gián tiếp.',
    lang: 'en',
  },
  {
    id: 'ngu-dung-hoc-08',
    question: 'Phép thử nào giúp phân biệt tiền giả định với kéo theo?',
    options: [
      'Thay bằng từ đồng nghĩa',
      'Đổi trật tự từ trong câu',
      'Phủ định câu: tiền giả định vẫn còn, kéo theo thì mất',
      'Thêm từ rào đón vào câu',
    ],
    answer: 2,
    explanation:
      '"Nam đã bỏ thuốc" và "Nam chưa bỏ thuốc" đều tiền giả định Nam từng hút thuốc. Còn "Nam giết con nhện" kéo theo "con nhện chết", nhưng "Nam không giết con nhện" thì không.',
  },
  {
    id: 'ngu-dung-hoc-09',
    question: 'Người vợ nói với hàng xóm: "Bố nó đi làm chưa về." Cách gọi chồng là "bố nó" thể hiện hiện tượng gì?',
    options: ['Hoán dụ', 'Hàm ý thang độ', 'Chỉ xuất không gian', 'Gọi thay vai (xưng hô theo vai của con)'],
    answer: 3,
    explanation:
      'Người vợ gọi chồng theo quan hệ của đứa con với người chồng ("bố của nó"): gọi thay vai, rất phổ biến trong xưng hô tiếng Việt. Đây không phải chỉ xuất không gian hay hàm ý thang độ.',
    lang: 'vi',
  },
  {
    id: 'ngu-dung-hoc-10',
    question: 'A nói với B: あの店{みせ}、おいしかったね ("Cái quán ấy ngon nhỉ"). Việc dùng あの (thay vì その) cho thấy điều gì?',
    options: [
      'Cả A và B đều biết cái quán đó',
      'Quán ở ngay gần người nghe',
      'Chỉ A biết cái quán đó',
      'A đang hỏi quán nào',
    ],
    answer: 0,
    explanation:
      'Trong hội thoại, あ dùng cho điều cả hai cùng biết (ví dụ từng đi cùng nhau). そ dùng cho điều chỉ một bên biết hoặc vừa được nhắc; ど là từ để hỏi.',
    lang: 'ja',
  },
]
