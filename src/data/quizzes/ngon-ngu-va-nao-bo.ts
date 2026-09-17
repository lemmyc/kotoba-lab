import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'ngon-ngu-va-nao-bo-01',
    question:
      'Một bệnh nhân nói chậm, ngắt quãng, lược bỏ nhiều hư từ nhưng vẫn hiểu lời người khác khá tốt. Tổn thương nhiều khả năng nằm ở vùng nào?',
    options: ['Vùng Wernicke', 'Vùng Broca', 'Tiểu não', 'Vỏ não thị giác'],
    answer: 1,
    explanation:
      'Mất ngôn ngữ kiểu Broca đặc trưng bởi lời nói khó khăn, "kiểu điện báo", trong khi khả năng hiểu tương đối được bảo toàn. Tổn thương vùng Wernicke thường gây lời nói trôi chảy nhưng rỗng nghĩa và khó hiểu lời người khác.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-02',
    question: 'Ở phần lớn người thuận tay phải, các chức năng ngôn ngữ chủ yếu được xử lý ở…',
    options: ['bán cầu não trái', 'bán cầu não phải', 'đều ở cả hai bán cầu', 'tiểu não'],
    answer: 0,
    explanation: 'Đây là hiện tượng chuyên hóa bán cầu (lateralization): ở đa số người, ngôn ngữ được xử lý chủ yếu ở bán cầu trái.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-03',
    question: 'Giả thuyết giai đoạn then chốt (critical period) trong thụ đắc ngôn ngữ gắn liền với nhà nghiên cứu nào?',
    options: ['Ferdinand de Saussure', 'Eric Lenneberg', 'Paul Grice', 'Charles Hockett'],
    answer: 1,
    explanation:
      'Eric Lenneberg (Biological Foundations of Language, 1967) cho rằng có một giai đoạn sinh học thuận lợi nhất cho thụ đắc ngôn ngữ, kéo dài đến khoảng tuổi dậy thì.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-04',
    question:
      'Đoạn lời nói "Yes... ah... Monday... er... Dad and Peter H..., and Dad... er... hospital..." của một bệnh nhân minh họa rõ nhất đặc điểm nào?',
    options: [
      'Lời nói trôi chảy nhưng rỗng nghĩa',
      'Tạo ra nhiều từ không có thật',
      'Lời nói kiểu điện báo: giữ thực từ, mất hư từ và hình vị ngữ pháp',
      'Không nhắc lại được lời người khác',
    ],
    answer: 2,
    explanation:
      'Bệnh nhân giữ danh từ và từ chỉ thời gian (Monday, Dad, hospital) nhưng gần như không có động từ, giới từ, mạo từ: đặc trưng của mất ngôn ngữ kiểu Broca. Lời nói trôi chảy rỗng nghĩa và từ không có thật là đặc điểm kiểu Wernicke; khó nhắc lại là mất ngôn ngữ dẫn truyền.',
    lang: 'en',
  },
  {
    id: 'ngon-ngu-va-nao-bo-05',
    question: 'Công trình của Sasanuma (1975) về bệnh nhân mất ngôn ngữ người Nhật cho thấy điều gì?',
    options: [
      'Kanji chỉ được xử lý ở bán cầu phải',
      'Người Nhật không mắc mất ngôn ngữ kiểu Broca',
      'Kana không liên quan đến ngôn ngữ nói',
      'Khả năng xử lý kana và kanji có thể bị tổn thương có chọn lọc',
    ],
    answer: 3,
    explanation:
      'Có bệnh nhân đọc – viết kana kém hơn kanji và ngược lại. Tuy nhiên, kết luận đơn giản "kanji ở bán cầu phải" không đứng vững: cả hai loại chữ đều dựa vào mạng lưới ngôn ngữ bán cầu trái, chỉ khác mức độ dựa vào đường chữ – nghĩa hay chữ – âm.',
    lang: 'ja',
  },
  {
    id: 'ngon-ngu-va-nao-bo-06',
    question: 'Trong thí nghiệm nghe phân đôi, âm lời nói phát vào tai phải thường được nhận ra chính xác hơn. Vì sao?',
    options: [
      'Vì đường thần kinh từ tai phải đi chủ yếu sang bán cầu trái, nơi xử lý ngôn ngữ',
      'Vì tai phải thính hơn tai trái ở mọi người',
      'Vì bán cầu phải chuyên xử lý lời nói',
      'Vì mọi người tham gia đều thuận tay phải',
    ],
    answer: 0,
    explanation:
      'Đường thính giác bắt chéo là chủ yếu: tai phải → bán cầu trái. Ưu thế tai phải với lời nói phản ánh chuyên hóa ngôn ngữ ở bán cầu trái, không phải do tai phải thính hơn. Với âm nhạc, ưu thế này thường yếu hơn hoặc đảo ngược.',
  },
  {
    id: 'ngon-ngu-va-nao-bo-07',
    question:
      'Một bệnh nhân nói tiếng Việt bị mất ngôn ngữ kiểu Broca kể lại câu "Hôm qua tôi đã đi chợ với mẹ của tôi". Những từ nào có khả năng bị lược nhiều nhất?',
    options: ['hôm qua, chợ, mẹ', 'tôi, chợ', 'đi, chợ, mẹ', 'đã, với, của'],
    answer: 3,
    explanation:
      'Lời nói kiểu điện báo giữ các thực từ mang nội dung chính (hôm qua, chợ, mẹ) và lược các hư từ biểu thị quan hệ ngữ pháp. Trong tiếng Việt, đó là "đã", "với", "của", tương ứng với hậu tố và giới từ trong tiếng Anh.',
    lang: 'vi',
  },
  {
    id: 'ngon-ngu-va-nao-bo-08',
    question: 'Nghiên cứu của Johnson và Newport (1989) trên người nhập cư học tiếng Anh ở Mỹ cho thấy điều gì?',
    options: [
      'Người đến Mỹ khi đã trưởng thành luôn học ngữ pháp tốt hơn trẻ em',
      'Tuổi đến Mỹ không ảnh hưởng đến khả năng ngữ pháp',
      'Người đến khi còn nhỏ đạt khả năng phán đoán ngữ pháp gần như người bản ngữ; người đến càng muộn thì kết quả trung bình càng thấp',
      'Chỉ người nói tiếng Hàn mới gặp khó khăn với ngữ pháp tiếng Anh',
    ],
    answer: 2,
    explanation:
      'Kết quả ủng hộ giả thuyết giai đoạn then chốt/nhạy cảm: tuổi bắt đầu tiếp xúc liên quan chặt chẽ với trình độ cuối cùng. Nghiên cứu gồm cả người gốc Hàn và gốc Hoa.',
    lang: 'en',
  },
  {
    id: 'ngon-ngu-va-nao-bo-09',
    question: 'Tiếng Nhật chỉ có một âm vị /r/. Điều này liên quan thế nào đến giai đoạn nhạy cảm về ngữ âm?',
    options: [
      'Trẻ sơ sinh Nhật ban đầu phân biệt được r – l, nhưng khả năng này thu hẹp dần theo hệ thống âm của tiếng mẹ đẻ',
      'Người Nhật bẩm sinh không có khả năng nghe r – l',
      'Người lớn Nhật hoàn toàn không thể học phân biệt r – l',
      'Chỉ bán cầu phải của người Nhật xử lý âm r',
    ],
    answer: 0,
    explanation:
      'Trẻ sơ sinh ở mọi nền văn hóa phân biệt được nhiều cặp âm; trong năm đầu đời, khả năng này chuyên môn hóa theo tiếng mẹ đẻ. Người lớn vẫn có thể cải thiện qua luyện tập, nên "không thể" là sai.',
    lang: 'ja',
  },
  {
    id: 'ngon-ngu-va-nao-bo-10',
    question: 'Bằng chứng nào cho thấy bán cầu trái chuyên hóa cho ngôn ngữ nói chung, chứ không chỉ cho âm thanh lời nói?',
    options: [
      'Người thuận tay trái luôn xử lý ngôn ngữ ở bán cầu phải',
      'Âm nhạc được xử lý chủ yếu ở bán cầu trái',
      'Bệnh nhân mất ngôn ngữ kiểu Wernicke nói trôi chảy',
      'Người Điếc dùng ngôn ngữ ký hiệu bị tổn thương bán cầu trái cũng có thể mắc chứng mất ngôn ngữ ký hiệu',
    ],
    answer: 3,
    explanation:
      'Ngôn ngữ ký hiệu không dùng âm thanh, nhưng tổn thương bán cầu trái vẫn gây rối loạn ngôn ngữ ký hiệu dù cử động tay bình thường. Phần lớn người thuận tay trái vẫn xử lý ngôn ngữ ở bán cầu trái (Knecht và cộng sự, 2000).',
  },
]
