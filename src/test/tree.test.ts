import { describe, expect, it } from 'vitest'
import { describeTree, layoutTree, parseTree, TreeSyntaxError } from '../lib/tree'

describe('parseTree', () => {
  it('parses nested labelled brackets', () => {
    const tree = parseTree('[S [NP Tôi] [VP [V ăn] [NP cơm]]]')
    expect(describeTree(tree)).toBe('S (NP (Tôi) VP (V (ăn) NP (cơm)))')
    expect(tree.children[0].children[0]).toMatchObject({ label: 'Tôi', leaf: true })
  })

  it('joins consecutive words into one leaf and supports triangles', () => {
    const tree = parseTree('[PP [P with] [^NP the old telescope]]')
    const np = tree.children[1]
    expect(np).toMatchObject({ label: 'NP', triangle: true })
    expect(np.children).toHaveLength(1)
    expect(np.children[0].label).toBe('the old telescope')
  })

  it('reads romaji after "|" and drops furigana from leaves', () => {
    const leaf = parseTree('[NP 本{ほん}を|hon-o]').children[0]
    expect(leaf).toMatchObject({ label: '本を', romaji: 'hon-o', leaf: true })
  })

  it.each([
    ['[S [NP Tôi]', /Thiếu dấu "\]"/],
    ['[S [NP Tôi]]]', /ký tự thừa/],
    ['[ [NP Tôi]]', /Thiếu nhãn/],
    ['S Tôi', /bắt đầu bằng/],
    ['[^NP [N mèo]]', /tam giác/],
  ])('rejects %s', (input, message) => {
    expect(() => parseTree(input)).toThrow(TreeSyntaxError)
    expect(() => parseTree(input)).toThrow(message)
  })
})

describe('layoutTree', () => {
  it('centres parents over their children and keeps everything inside the canvas', () => {
    const { root, width, height } = layoutTree(parseTree('[S [NP Tôi] [VP [V ăn] [NP cơm]]]'))
    const [np, vp] = root.children
    expect(root.x).toBeCloseTo((np.x + vp.x) / 2)
    expect(vp.children[0].y).toBeGreaterThan(vp.y)
    const walk = (node: typeof root): boolean =>
      node.x > 0 && node.x < width && node.y < height && node.children.every(walk)
    expect(walk(root)).toBe(true)
  })
})
