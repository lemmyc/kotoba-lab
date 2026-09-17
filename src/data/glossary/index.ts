import type { GlossaryTerm } from '../types'
import { terms as amViHoc } from './am-vi-hoc'
import { terms as banChatNgonNgu } from './ban-chat-ngon-ngu'
import { terms as bienDoiNgonNgu } from './bien-doi-ngon-ngu'
import { terms as chuViet } from './chu-viet'
import { terms as cuPhapHoc } from './cu-phap-hoc'
import { terms as hinhThaiHoc } from './hinh-thai-hoc'
import { terms as nguAmHoc } from './ngu-am-hoc'
import { terms as nguDungHoc } from './ngu-dung-hoc'
import { terms as nguNghiaHoc } from './ngu-nghia-hoc'
import { terms as ngonNguVaNaoBo } from './ngon-ngu-va-nao-bo'
import { terms as ngonNguVaXaHoi } from './ngon-ngu-va-xa-hoi'
import { terms as thuDacNgonNgu } from './thu-dac-ngon-ngu'

/** Terms grouped by lesson slug. Add a new chapter file here when creating one. */
export const glossaryByChapter: Record<string, GlossaryTerm[]> = {
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

export const glossary: GlossaryTerm[] = Object.values(glossaryByChapter).flat()

export function getTermsForChapter(slug: string) {
  return glossaryByChapter[slug] ?? []
}
