import type { GlossaryTerm } from '../types'

const chapter = 'ngu-am-hoc'

// TODO(nội dung): bổ sung thêm thuật ngữ khi viết chương — xem docs/CONTENT_ROADMAP.md
export const terms: GlossaryTerm[] = [
  {
    id: 'ngu-am-hoc',
    chapter,
    vi: 'Ngữ âm học',
    en: 'phonetics',
    ipaEn: 'fəˈnɛtɪks',
    ja: '音声学{おんせいがく}',
    romaji: 'onseigaku',
    definition: 'Phân ngành nghiên cứu mặt vật chất của âm thanh lời nói: cách tạo ra, truyền đi và tiếp nhận.',
  },
  {
    id: 'bang-chu-cai-ngu-am-quoc-te',
    chapter,
    vi: 'Bảng chữ cái ngữ âm quốc tế (IPA)',
    en: 'International Phonetic Alphabet',
    ja: '国際音声記号{こくさいおんせいきごう}',
    romaji: 'kokusai onsei kigō',
    definition: 'Hệ thống ký hiệu chuẩn quốc tế, mỗi ký hiệu tương ứng với một âm, dùng để ghi âm mọi ngôn ngữ.',
  },
  {
    id: 'vi-tri-cau-am',
    chapter,
    vi: 'Vị trí cấu âm',
    en: 'place of articulation',
    ipaEn: 'pleɪs əv ɑːrˌtɪkjəˈleɪʃən',
    ja: '調音点{ちょうおんてん}',
    romaji: 'chōonten',
    definition: 'Nơi trong khoang miệng – họng mà luồng hơi bị cản trở khi phát âm phụ âm (môi, răng, lợi, ngạc…).',
  },
  {
    id: 'phuong-thuc-cau-am',
    chapter,
    vi: 'Phương thức cấu âm',
    en: 'manner of articulation',
    ipaEn: 'ˈmænər əv ɑːrˌtɪkjəˈleɪʃən',
    ja: '調音法{ちょうおんほう}',
    romaji: 'chōonhō',
    definition: 'Cách luồng hơi bị cản trở khi phát âm phụ âm: tắc, xát, mũi, bên, rung…',
  },
  {
    id: 'thanh-dieu',
    chapter,
    vi: 'Thanh điệu',
    en: 'tone',
    ipaEn: 'toʊn',
    ja: '声調{せいちょう}',
    romaji: 'seichō',
    definition: 'Sự biến đổi cao độ trong âm tiết có chức năng khu biệt nghĩa của từ, ví dụ "ma – mà – má – mả – mã – mạ".',
  },
  {
    id: 'trong-am-cao-do',
    chapter,
    vi: 'Trọng âm cao độ',
    en: 'pitch accent',
    ipaEn: 'pɪtʃ ˈæksɛnt',
    ja: '高低{こうてい}アクセント',
    romaji: 'kōtei akusento',
    definition: 'Hệ thống dùng vị trí thay đổi cao độ (cao – thấp) trong từ để khu biệt nghĩa, tiêu biểu là tiếng Nhật.',
  },
]
