import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Ja } from '../components/mdx/Inline'

describe('<Ja>', () => {
  it('keeps a short word on one line', () => {
    const { container } = render(<Ja t="言語{げんご}" />)
    expect(container.querySelector('[lang="ja"]')?.parentElement).toHaveClass('whitespace-nowrap')
  })

  it('lets sentences and summaries wrap (no nowrap anywhere)', () => {
    const summary =
      '言語{げんご}は脳{のう}に生物学的{せいぶつがくてき}な基盤{きばん}を持{も}つ。ブローカとウェルニッケの研究{けんきゅう}以来{いらい}、多{おお}くの人{ひと}では言語{げんご}が主{おも}に左脳{さのう}で処理{しょり}される。'
    const { container } = render(<Ja t={summary} />)
    expect(container.querySelector('.whitespace-nowrap')).toBeNull()
  })

  it('keeps the romaji outside the unbreakable word so it can move to the next line', () => {
    const { container, getByText } = render(<Ja t="喉{のど}まで出{で}かかっている" romaji="nodo made dekakatte iru" />)
    const word = container.querySelector('[lang="ja"]')?.parentElement
    expect(word).toHaveClass('whitespace-nowrap')
    expect(word).not.toContainElement(getByText('(nodo made dekakatte iru)'))
  })

  it('lets very long romaji wrap', () => {
    const { getByText } = render(<Ja t="今日{きょう}のミーティング、アジェンダ送{おく}っておいて。" romaji="kyō no mītingu, ajenda okutte oite" />)
    expect(getByText('(kyō no mītingu, ajenda okutte oite)')).not.toHaveClass('whitespace-nowrap')
  })
})
