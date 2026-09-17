import type { Lesson, Part, PartId } from './types'

export const parts: Part[] = [
  {
    id: 1,
    title: 'Bản chất của ngôn ngữ',
    titleEn: 'The Nature of Human Language',
    titleJa: '人間{にんげん}の言語{げんご}の本質{ほんしつ}',
    description: 'Ngôn ngữ là gì, con người biết gì khi biết một ngôn ngữ, và não bộ xử lý ngôn ngữ ra sao.',
  },
  {
    id: 2,
    title: 'Các bình diện cấu trúc',
    titleEn: 'Grammatical Aspects of Language',
    titleJa: '言語{げんご}の構造{こうぞう}',
    description: 'Từ, câu, nghĩa, ngữ cảnh và âm thanh — những tầng cấu trúc tạo nên mọi ngôn ngữ.',
  },
  {
    id: 3,
    title: 'Tâm lý ngôn ngữ',
    titleEn: 'The Psychology of Language',
    titleJa: '言語{げんご}と心{こころ}',
    description: 'Trẻ em và người lớn học ngôn ngữ như thế nào, và ta hiểu – tạo lời nói trong tích tắc ra sao.',
  },
  {
    id: 4,
    title: 'Ngôn ngữ và xã hội',
    titleEn: 'Language and Society',
    titleJa: '言語{げんご}と社会{しゃかい}',
    description: 'Ngôn ngữ biến đổi theo cộng đồng, theo thời gian và được ghi lại bằng chữ viết.',
  },
]

export const lessons: Lesson[] = [
  {
    slug: 'ban-chat-ngon-ngu',
    number: 1,
    part: 1,
    title: 'Ngôn ngữ là gì?',
    titleEn: 'What Is Language?',
    titleJa: '言語{げんご}とは何{なに}か',
    titleJaRomaji: 'Gengo to wa nani ka',
    description:
      'Tín hiệu ngôn ngữ, tri thức ngôn ngữ của người bản ngữ, các đặc điểm thiết kế của ngôn ngữ loài người và chân dung ba ngôn ngữ Việt – Anh – Nhật.',
    objectives: [
      'Trình bày được khái niệm ngôn ngữ và tín hiệu ngôn ngữ theo Saussure.',
      'Phân biệt năng lực ngôn ngữ với hiệu năng ngôn ngữ; ngữ pháp miêu tả với ngữ pháp quy phạm.',
      'Giải thích các đặc điểm thiết kế của ngôn ngữ (Hockett) và so sánh với giao tiếp ở động vật.',
      'Nêu được đặc điểm loại hình cơ bản của tiếng Việt, tiếng Anh và tiếng Nhật.',
    ],
    topics: ['tín hiệu', 'võ đoán', 'Saussure', 'Hockett', 'competence', 'performance', 'grammar', '恣意性', 'ngôn ngữ ký hiệu'],
    minutes: 35,
    status: 'draft',
  },
  {
    slug: 'ngon-ngu-va-nao-bo',
    number: 2,
    part: 1,
    title: 'Ngôn ngữ và não bộ',
    titleEn: 'Brain and Language',
    titleJa: '言語{げんご}と脳{のう}',
    titleJaRomaji: 'Gengo to nō',
    description:
      'Các vùng ngôn ngữ trong não, chuyên hóa bán cầu, chứng mất ngôn ngữ và giả thuyết giai đoạn then chốt.',
    objectives: [
      'Mô tả vai trò của vùng Broca và vùng Wernicke.',
      'Giải thích hiện tượng chuyên hóa bán cầu và các bằng chứng thực nghiệm.',
      'Phân biệt các dạng mất ngôn ngữ (aphasia) chính.',
      'Thảo luận giả thuyết giai đoạn then chốt trong thụ đắc ngôn ngữ.',
      'Giải thích vì sao biểu hiện của chứng mất ngôn ngữ phụ thuộc vào loại hình ngôn ngữ và chữ viết (hư từ tiếng Việt, hậu tố tiếng Anh, kanji – kana tiếng Nhật).',
    ],
    topics: ['Broca', 'Wernicke', 'aphasia', 'lateralization', 'critical period', '失語症', 'não bộ', 'neurolinguistics', 'dichotic listening', 'split-brain', 'kanji', 'sensitive period'],
    minutes: 55,
    status: 'complete',
  },
  {
    slug: 'hinh-thai-hoc',
    number: 3,
    part: 2,
    title: 'Hình thái học: Từ và cấu tạo từ',
    titleEn: 'Morphology: The Words of Language',
    titleJa: '形態論{けいたいろん}',
    titleJaRomaji: 'Keitairon',
    description:
      'Hình vị, phụ tố phái sinh và biến tố, các phương thức cấu tạo từ và loại hình hình thái của ba ngôn ngữ.',
    objectives: [
      'Nhận diện và phân loại hình vị (tự do, ràng buộc; căn tố, phụ tố).',
      'Phân biệt phụ tố phái sinh và phụ tố biến tố.',
      'Mô tả các phương thức cấu tạo từ: ghép, láy, phụ gia, rút gọn, pha trộn…',
      'So sánh loại hình đơn lập (Việt), hòa kết (Anh) và chắp dính (Nhật).',
      'Nhận diện hình vị Hán Việt – Hán Nhật, hình vị Latin – Hy Lạp và vị trí thành tố chính trong từ ghép của ba ngôn ngữ.',
    ],
    topics: ['morpheme', 'hình vị', 'từ láy', 'từ ghép', 'affix', 'derivation', 'inflection', '形態素', 'agglutinative', '和製英語', 'suppletion', 'Hán Việt'],
    minutes: 50,
    status: 'complete',
  },
  {
    slug: 'cu-phap-hoc',
    number: 4,
    part: 2,
    title: 'Cú pháp học: Cấu trúc câu',
    titleEn: 'Syntax: The Sentence Patterns of Language',
    titleJa: '統語論{とうごろん}',
    titleJaRomaji: 'Tōgoron',
    description:
      'Thành tố, quy tắc cấu trúc cụm từ, cây cú pháp, tham số trung tâm và trật tự từ SVO – SOV.',
    objectives: [
      'Xác định thành tố của câu bằng các phép thử.',
      'Vẽ cây cú pháp đơn giản theo quy tắc cấu trúc cụm từ.',
      'Giải thích khái niệm trung tâm, tham số trung tâm và tính đệ quy.',
      'So sánh trật tự từ và cách đặt câu hỏi trong tiếng Việt, Anh, Nhật.',
      'Phân tích cấu trúc đề – thuyết (Voi thì vòi dài, 象は鼻が長い) và chức năng của các trợ từ は, が, を, に, で.',
    ],
    topics: ['syntax', 'constituent', 'phrase structure', 'tree', 'SVO', 'SOV', 'head', 'recursion', '統語論', 'trợ từ', 'đề – thuyết', 'wh-movement', 'は・が', 'scrambling'],
    minutes: 55,
    status: 'complete',
  },
  {
    slug: 'ngu-nghia-hoc',
    number: 5,
    part: 2,
    title: 'Ngữ nghĩa học: Nghĩa của ngôn ngữ',
    titleEn: 'Semantics: The Meaning of Language',
    titleJa: '意味論{いみろん}',
    titleJaRomaji: 'Imiron',
    description:
      'Nghĩa của từ và của câu, các quan hệ nghĩa, vai nghĩa, ẩn dụ và cách mỗi ngôn ngữ "cắt" thế giới.',
    objectives: [
      'Phân biệt nghĩa từ vựng và nghĩa của câu; nêu nguyên tắc tổ hợp.',
      'Nhận diện các quan hệ nghĩa: đồng nghĩa, trái nghĩa, bao nghĩa, đa nghĩa, đồng âm.',
      'Giải thích quan hệ kéo theo, mâu thuẫn và mơ hồ.',
      'So sánh cách phân chia trường nghĩa (màu sắc, gạo – cơm…) giữa ba ngôn ngữ.',
      'Nhận diện vai nghĩa, ẩn dụ ý niệm và hoán dụ trong tiếng Việt, tiếng Anh, tiếng Nhật.',
    ],
    topics: ['semantics', 'synonym', 'antonym', 'hyponymy', 'polysemy', 'homonym', 'metaphor', '意味論', 'trường nghĩa', 'Sapir-Whorf', 'entailment', 'thematic role', 'metonymy', '同音異義語'],
    minutes: 60,
    status: 'complete',
  },
  {
    slug: 'ngu-dung-hoc',
    number: 6,
    part: 2,
    title: 'Ngữ dụng học: Ngôn ngữ trong ngữ cảnh',
    titleEn: 'Pragmatics: Language in Context',
    titleJa: '語用論{ごようろん}',
    titleJaRomaji: 'Goyōron',
    description:
      'Chỉ xuất, hành động ngôn từ, hàm ý hội thoại, tiền giả định, lịch sự – xưng hô tiếng Việt và kính ngữ tiếng Nhật.',
    objectives: [
      'Nhận diện các loại chỉ xuất (nhân xưng, không gian, thời gian, xã hội).',
      'Phân biệt hành động ngôn từ trực tiếp và gián tiếp.',
      'Vận dụng các nguyên tắc hội thoại của Grice để giải thích hàm ý.',
      'So sánh hệ thống xưng hô tiếng Việt, lịch sự tiếng Anh và kính ngữ tiếng Nhật.',
      'Vận dụng lý thuyết thể diện và khái niệm trong – ngoài (ウチ・ソト) để giải thích lựa chọn lịch sự.',
    ],
    topics: ['pragmatics', 'deixis', 'speech act', 'implicature', 'Grice', 'politeness', '敬語', 'xưng hô', 'presupposition', 'face', 'ウチ・ソト', 'こそあど', 'Brown & Levinson'],
    minutes: 60,
    status: 'complete',
  },
  {
    slug: 'ngu-am-hoc',
    number: 7,
    part: 2,
    title: 'Ngữ âm học: Âm thanh của ngôn ngữ',
    titleEn: 'Phonetics: The Sounds of Language',
    titleJa: '音声学{おんせいがく}',
    titleJaRomaji: 'Onseigaku',
    description:
      'Bộ máy phát âm, bảng IPA, phụ âm – nguyên âm, và các đặc trưng siêu đoạn: thanh điệu, trọng âm, trọng âm cao độ.',
    objectives: [
      'Đọc và ghi được các ký hiệu IPA cơ bản.',
      'Mô tả phụ âm theo vị trí, phương thức cấu âm và thanh tính; mô tả nguyên âm.',
      'Giải thích thanh điệu tiếng Việt, trọng âm tiếng Anh và trọng âm cao độ tiếng Nhật.',
      'Phân biệt nhịp theo trọng âm, theo âm tiết và theo mora.',
      'Nhận diện các âm khó của tiếng Anh và tiếng Nhật đối với người Việt (âm cuối, [θ ð], nguyên âm căng – lơi, trường âm, っ, ん).',
    ],
    topics: ['phonetics', 'IPA', 'consonant', 'vowel', 'tone', 'thanh điệu', 'stress', 'pitch accent', '音声学', 'mora', 'schwa', 'aspiration', '促音', '撥音'],
    minutes: 60,
    status: 'complete',
  },
  {
    slug: 'am-vi-hoc',
    number: 8,
    part: 2,
    title: 'Âm vị học: Hệ thống âm thanh',
    titleEn: 'Phonology: The Sound Patterns of Language',
    titleJa: '音韻論{おんいんろん}',
    titleJaRomaji: "On'inron",
    description:
      'Âm vị và biến thể, cặp tối thiểu, quy tắc âm vị học, cấu trúc âm tiết và cách mỗi ngôn ngữ "Việt hóa", "Nhật hóa" từ vay mượn.',
    objectives: [
      'Phân biệt âm tố và âm vị; tìm cặp tối thiểu.',
      'Nhận diện phân bố bổ sung và biến thể âm vị.',
      'Mô tả các quy tắc âm vị học: đồng hóa, lược âm, thêm âm.',
      'So sánh cấu trúc âm tiết tiếng Việt, cấu trúc âm tiết tiếng Anh và cấu trúc mora tiếng Nhật.',
      'Giải thích cách tiếng Việt và tiếng Nhật "sửa" từ vay mượn theo ràng buộc âm vị học (xà phòng, ストライク).',
    ],
    topics: ['phonology', 'phoneme', 'allophone', 'minimal pair', 'syllable', 'âm tiết', 'rendaku', '連濁', 'phonotactics', 'Lyman', 'distinctive feature', 'nói lái', 'flapping'],
    minutes: 55,
    status: 'complete',
  },
  {
    slug: 'thu-dac-ngon-ngu',
    number: 9,
    part: 3,
    title: 'Thụ đắc và xử lý ngôn ngữ',
    titleEn: 'Language Acquisition and Processing',
    titleJa: '言語習得{げんごしゅうとく}と言語処理{げんごしょり}',
    titleJaRomaji: 'Gengo shūtoku to gengo shori',
    description:
      'Các giai đoạn trẻ học tiếng mẹ đẻ, các lý thuyết thụ đắc, học ngôn ngữ thứ hai và cách bộ não xử lý lời nói theo thời gian thực.',
    objectives: [
      'Mô tả các giai đoạn thụ đắc ngôn ngữ thứ nhất.',
      'So sánh các lý thuyết: hành vi luận, bẩm sinh luận, tương tác.',
      'Giải thích khái niệm ngôn ngữ trung gian và chuyển di trong học ngôn ngữ thứ hai.',
      'Phân tích khó khăn điển hình của người Việt khi học tiếng Anh và tiếng Nhật.',
    ],
    topics: ['acquisition', 'babbling', 'L2', 'interlanguage', 'transfer', 'garden path', 'slip of the tongue', '言語習得', 'song ngữ'],
    minutes: 35,
    status: 'outline',
  },
  {
    slug: 'ngon-ngu-va-xa-hoi',
    number: 10,
    part: 4,
    title: 'Ngôn ngữ và xã hội',
    titleEn: 'Language in Society',
    titleJa: '社会言語学{しゃかいげんごがく}',
    titleJaRomaji: 'Shakai gengogaku',
    description:
      'Phương ngữ, ngôn ngữ chuẩn, ngữ vực, chuyển mã, pidgin – creole, ngôn ngữ và giới, kiêng kỵ và uyển ngữ.',
    objectives: [
      'Phân biệt phương ngữ địa lý, phương ngữ xã hội và ngôn ngữ chuẩn.',
      'Nhận diện ngữ vực và hiện tượng chuyển mã.',
      'Giải thích sự hình thành pidgin và creole.',
      'So sánh phương ngữ tiếng Việt, biến thể tiếng Anh và phương ngữ tiếng Nhật.',
    ],
    topics: ['sociolinguistics', 'dialect', 'phương ngữ', 'register', 'code-switching', 'pidgin', 'creole', '方言', '関西弁', 'taboo'],
    minutes: 35,
    status: 'outline',
  },
  {
    slug: 'bien-doi-ngon-ngu',
    number: 11,
    part: 4,
    title: 'Lịch sử và biến đổi ngôn ngữ',
    titleEn: 'Language Change: The Syllables of Time',
    titleJa: '言語変化{げんごへんか}',
    titleJaRomaji: 'Gengo henka',
    description:
      'Vì sao ngôn ngữ thay đổi, phương pháp so sánh – lịch sử, họ ngôn ngữ, vay mượn và lớp từ Hán Việt – Kango.',
    objectives: [
      'Nêu các loại biến đổi: ngữ âm, hình thái, cú pháp, từ vựng, ngữ nghĩa.',
      'Trình bày phương pháp so sánh – lịch sử và khái niệm ngôn ngữ tiền thân.',
      'Xác định họ ngôn ngữ của tiếng Việt, tiếng Anh, tiếng Nhật.',
      'Phân tích sự tương ứng giữa từ Hán Việt và từ Hán – Nhật (Kango).',
    ],
    topics: ['language change', 'language family', 'proto-language', 'loanword', 'Hán Việt', '漢語', 'Great Vowel Shift', 'Haudricourt', 'thanh điệu'],
    minutes: 40,
    status: 'outline',
  },
  {
    slug: 'chu-viet',
    number: 12,
    part: 4,
    title: 'Chữ viết',
    titleEn: 'Writing: The ABCs of Language',
    titleJa: '文字体系{もじたいけい}',
    titleJaRomaji: 'Moji taikei',
    description:
      'Lịch sử chữ viết, các loại hình chữ viết, chính tả, từ chữ Hán – chữ Nôm đến chữ Quốc ngữ, và hệ chữ ba bộ của tiếng Nhật.',
    objectives: [
      'Phân biệt chữ ghi ý, chữ ghi âm tiết, chữ ghi phụ âm và chữ cái.',
      'Tóm lược lịch sử chữ viết của tiếng Việt: chữ Hán, chữ Nôm, chữ Quốc ngữ.',
      'Giải thích mối quan hệ chữ – âm trong chính tả tiếng Anh.',
      'Mô tả cách kanji, hiragana và katakana phối hợp trong tiếng Nhật.',
    ],
    topics: ['writing', 'logogram', 'syllabary', 'alphabet', 'chữ Nôm', 'chữ Quốc ngữ', 'kanji', 'kana', '文字', 'orthography'],
    minutes: 35,
    status: 'outline',
  },
]

export const lessonsBySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson]))

export function getLesson(slug: string | undefined) {
  return slug ? lessonsBySlug.get(slug) : undefined
}

export function getPart(id: PartId) {
  return parts.find((part) => part.id === id)!
}

export function getLessonsByPart(id: PartId) {
  return lessons.filter((lesson) => lesson.part === id)
}

export function getAdjacentLessons(slug: string) {
  const index = lessons.findIndex((lesson) => lesson.slug === slug)
  return {
    prev: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined,
  }
}

export const STATUS_LABELS = {
  outline: 'Khung bài',
  draft: 'Bản nháp',
  complete: 'Hoàn chỉnh',
} as const
