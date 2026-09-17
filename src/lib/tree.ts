import { stripFurigana } from './furigana'

/**
 * Labelled-bracket notation for syntax and morphology trees (used by <Tree>).
 *
 *   [S [NP Tôi] [VP [V ăn] [NP cơm]]]
 *   [NP 本{ほん}を|hon-o]       → leaf with romaji after "|" (furigana is dropped)
 *   [^NP the man with a hat]   → "^" draws the phrase as a triangle (unanalysed)
 *   [Âm_đầu h]                 → "_" in a label is shown as a space
 *
 * After a label, consecutive words form one leaf; nested brackets are child nodes.
 */
export interface TreeNode {
  label: string
  /** romanisation shown under a leaf */
  romaji?: string
  /** true for words (terminals), false for category labels */
  leaf: boolean
  /** draw the only child under a triangle instead of a single branch */
  triangle: boolean
  children: TreeNode[]
}

export class TreeSyntaxError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TreeSyntaxError'
  }
}

type Token = { type: 'open' } | { type: 'close' } | { type: 'word'; value: string }

function tokenize(input: string): Token[] {
  const tokens: Token[] = []
  for (const match of input.matchAll(/\[|\]|[^\s[\]]+/g)) {
    const value = match[0]
    if (value === '[') tokens.push({ type: 'open' })
    else if (value === ']') tokens.push({ type: 'close' })
    else tokens.push({ type: 'word', value })
  }
  return tokens
}

function makeLeaf(words: string[]): TreeNode {
  const [text, romaji] = words.join(' ').split('|')
  return {
    label: stripFurigana(text.trim()),
    romaji: romaji?.trim() || undefined,
    leaf: true,
    triangle: false,
    children: [],
  }
}

/** Parses labelled brackets into a tree. Throws TreeSyntaxError with a Vietnamese message. */
export function parseTree(input: string): TreeNode {
  const tokens = tokenize(input)
  let position = 0

  const parseNode = (): TreeNode => {
    // caller guarantees tokens[position] is "["
    position++
    const labelToken = tokens[position]
    if (!labelToken || labelToken.type !== 'word') {
      throw new TreeSyntaxError('Thiếu nhãn ngay sau dấu "[" (ví dụ: [NP …]).')
    }
    position++
    const triangle = labelToken.value.startsWith('^')
    const label = triangle ? labelToken.value.slice(1) : labelToken.value
    if (!label) throw new TreeSyntaxError('Nhãn sau "^" bị trống.')

    const children: TreeNode[] = []
    let words: string[] = []
    const flushWords = () => {
      if (words.length > 0) children.push(makeLeaf(words))
      words = []
    }

    while (position < tokens.length) {
      const token = tokens[position]
      if (token.type === 'close') {
        position++
        flushWords()
        if (triangle && (children.length !== 1 || !children[0].leaf)) {
          throw new TreeSyntaxError(`Nút tam giác [^${label} …] chỉ được chứa chữ, không chứa nút con.`)
        }
        // labels are single tokens, so "_" stands for a space: [Âm_đầu h]
        return { label: stripFurigana(label).replace(/_/g, ' '), leaf: false, triangle, children }
      }
      if (token.type === 'open') {
        flushWords()
        children.push(parseNode())
      } else {
        words.push(token.value)
        position++
      }
    }
    throw new TreeSyntaxError(`Thiếu dấu "]" để đóng nút [${label} …].`)
  }

  if (tokens.length === 0) throw new TreeSyntaxError('Cây trống.')
  if (tokens[0].type !== 'open') throw new TreeSyntaxError('Cây phải bắt đầu bằng dấu "[".')
  const root = parseNode()
  if (position < tokens.length) {
    throw new TreeSyntaxError('Có ký tự thừa sau nút gốc (thừa dấu "]" hoặc nhiều hơn một nút gốc).')
  }
  return root
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

export interface PositionedNode extends Omit<TreeNode, 'children'> {
  x: number
  y: number
  /** half the estimated text width, used to size triangles */
  halfWidth: number
  children: PositionedNode[]
}

export interface TreeLayout {
  root: PositionedNode
  width: number
  height: number
}

export const TREE_METRICS = {
  labelSize: 15,
  leafSize: 16,
  romajiSize: 12,
  rowHeight: 62,
  gap: 18,
  padding: 16,
} as const

const WIDE_CHAR = /[⺀-鿿豈-﫿＀-￯]/

/** Rough text width in px — good enough for spacing, no DOM measuring needed. */
export function estimateTextWidth(text: string, fontSize: number) {
  let units = 0
  for (const char of text) units += WIDE_CHAR.test(char) ? 1 : 0.6
  return units * fontSize
}

function nodeWidth(node: TreeNode) {
  const { labelSize, leafSize, romajiSize } = TREE_METRICS
  const text = estimateTextWidth(node.label, node.leaf ? leafSize : labelSize)
  const romaji = node.romaji ? estimateTextWidth(node.romaji, romajiSize) : 0
  return Math.max(text, romaji, 12)
}

export function layoutTree(tree: TreeNode): TreeLayout {
  const { gap, padding, rowHeight } = TREE_METRICS
  const widths = new Map<TreeNode, number>()

  const measure = (node: TreeNode): number => {
    const own = nodeWidth(node)
    const childTotal = node.children.reduce((sum, child) => sum + measure(child), 0) + gap * Math.max(0, node.children.length - 1)
    const width = Math.max(own, childTotal)
    widths.set(node, width)
    return width
  }

  let maxDepth = 0
  let hasRomaji = false
  const place = (node: TreeNode, left: number, depth: number): PositionedNode => {
    maxDepth = Math.max(maxDepth, depth)
    if (node.romaji) hasRomaji = true
    const width = widths.get(node)!
    const y = padding + 14 + depth * rowHeight
    const halfWidth = nodeWidth(node) / 2
    if (node.children.length === 0) {
      return { ...node, x: left + width / 2, y, halfWidth, children: [] }
    }
    const childTotal = node.children.reduce((sum, child) => sum + widths.get(child)!, 0) + gap * (node.children.length - 1)
    let cursor = left + (width - childTotal) / 2
    const children = node.children.map((child) => {
      const positioned = place(child, cursor, depth + 1)
      cursor += widths.get(child)! + gap
      return positioned
    })
    const x = (children[0].x + children[children.length - 1].x) / 2
    return { ...node, x, y, halfWidth, children }
  }

  const contentWidth = measure(tree)
  const root = place(tree, padding, 0)
  return {
    root,
    width: Math.ceil(contentWidth + padding * 2),
    height: Math.ceil(padding * 2 + 20 + maxDepth * rowHeight + (hasRomaji ? 16 : 0)),
  }
}

/** Flattens a tree back into readable text, e.g. for aria-label: "S (NP Tôi) (VP …)". */
export function describeTree(node: TreeNode): string {
  if (node.leaf) return node.label
  return `${node.label} (${node.children.map(describeTree).join(' ')})`
}
