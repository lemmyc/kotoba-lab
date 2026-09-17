import { Volume2 } from 'lucide-react'
import { canSpeak, speak, type SpeechLang } from '../../lib/speech'
import { cn } from '../../lib/utils'

const LANG_NAMES: Record<SpeechLang, string> = { vi: 'tiếng Việt', en: 'tiếng Anh', ja: 'tiếng Nhật' }

interface SpeakButtonProps {
  text: string
  lang: SpeechLang
  className?: string
}

/** Pronunciation button (Web Speech API). Renders nothing when the browser can't speak. */
export function SpeakButton({ text, lang, className }: SpeakButtonProps) {
  if (!canSpeak()) return null
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        speak(text, lang)
      }}
      className={cn(
        'inline-grid size-7 shrink-0 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-brand',
        className,
      )}
      aria-label={`Nghe phát âm ${LANG_NAMES[lang]}: ${text}`}
      title={`Nghe phát âm (${LANG_NAMES[lang]})`}
    >
      <Volume2 className="size-4" aria-hidden />
    </button>
  )
}
