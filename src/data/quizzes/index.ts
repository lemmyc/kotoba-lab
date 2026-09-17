import type { QuizQuestion } from '../types'
import { questions as amViHoc } from './am-vi-hoc'
import { questions as banChatNgonNgu } from './ban-chat-ngon-ngu'
import { questions as bienDoiNgonNgu } from './bien-doi-ngon-ngu'
import { questions as chuViet } from './chu-viet'
import { questions as cuPhapHoc } from './cu-phap-hoc'
import { questions as hinhThaiHoc } from './hinh-thai-hoc'
import { questions as nguAmHoc } from './ngu-am-hoc'
import { questions as nguDungHoc } from './ngu-dung-hoc'
import { questions as nguNghiaHoc } from './ngu-nghia-hoc'
import { questions as ngonNguVaNaoBo } from './ngon-ngu-va-nao-bo'
import { questions as ngonNguVaXaHoi } from './ngon-ngu-va-xa-hoi'
import { questions as thuDacNgonNgu } from './thu-dac-ngon-ngu'

/** Questions grouped by lesson slug. Add a new chapter file here when creating one. */
export const quizzesByChapter: Record<string, QuizQuestion[]> = {
  'ban-chat-ngon-ngu': banChatNgonNgu,
  'ngon-ngu-va-nao-bo': ngonNguVaNaoBo,
  'hinh-thai-hoc': hinhThaiHoc,
  'cu-phap-hoc': cuPhapHoc,
  'ngu-nghia-hoc': nguNghiaHoc,
  'ngu-dung-hoc': nguDungHoc,
  'ngu-am-hoc': nguAmHoc,
  'am-vi-hoc': amViHoc,
  'thu-dac-ngon-ngu': thuDacNgonNgu,
  'ngon-ngu-va-xa-hoi': ngonNguVaXaHoi,
  'bien-doi-ngon-ngu': bienDoiNgonNgu,
  'chu-viet': chuViet,
}

export function getQuiz(slug: string) {
  return quizzesByChapter[slug] ?? []
}

export const totalQuestions = Object.values(quizzesByChapter).reduce((sum, list) => sum + list.length, 0)
