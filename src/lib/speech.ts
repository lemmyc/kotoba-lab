export type SpeechLang = 'vi' | 'en' | 'ja'

const LOCALES: Record<SpeechLang, string> = { vi: 'vi-VN', en: 'en-US', ja: 'ja-JP' }

export function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'
}

/** Speaks text with the Web Speech API; silently does nothing when unsupported. */
export function speak(text: string, lang: SpeechLang) {
  if (!canSpeak() || !text.trim()) return
  const synth = window.speechSynthesis
  synth.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = LOCALES[lang]
  utterance.rate = lang === 'en' ? 0.9 : 0.85
  const voice = synth.getVoices().find((v) => v.lang.replace('_', '-').toLowerCase().startsWith(lang))
  if (voice) utterance.voice = voice
  synth.speak(utterance)
}
