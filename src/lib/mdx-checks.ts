import { createProcessor } from '@mdx-js/mdx'
import { parseTree } from './tree'

interface AnyNode {
  type: string
  value?: string
  name?: string | null
  children?: AnyNode[]
  attributes?: { type: string; name?: string; value?: unknown }[]
  position?: { start: { line: number } }
}

export interface MdxIssue {
  line: number
  message: string
}

const COMMENT = /^\s*\/\*[\s\S]*\*\/\s*$/

/**
 * Static checks for lesson MDX sources (used by `npm run check:content` and tests):
 * - `{…}` in prose is a JavaScript expression in MDX. Furigana like 言語{げんご}
 *   written directly in text would crash at runtime — it must go through
 *   <Ja t="言語{げんご}" /> or a component prop instead.
 * - JSX components must be ones registered in src/mdx-components.tsx.
 * - <Tree t="…"> bracket notation must parse, so a typo fails the check instead of the page.
 */
export function checkMdxSource(source: string, allowedComponents: string[]): MdxIssue[] {
  const issues: MdxIssue[] = []
  let tree: AnyNode
  try {
    tree = createProcessor().parse(source) as unknown as AnyNode
  } catch (error) {
    const line = (error as { line?: number }).line ?? 0
    return [{ line, message: `Lỗi cú pháp MDX: ${(error as Error).message}` }]
  }

  const allowed = new Set(allowedComponents)
  const walk = (node: AnyNode) => {
    const line = node.position?.start.line ?? 0
    if ((node.type === 'mdxTextExpression' || node.type === 'mdxFlowExpression') && !COMMENT.test(node.value ?? '')) {
      issues.push({
        line,
        message: `Dấu {${node.value}} trong văn bản là biểu thức JavaScript. Viết furigana bằng <Ja t="…{…}" /> thay vì để trần.`,
      })
    }
    if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name && /^[A-Z]/.test(node.name)) {
      if (!allowed.has(node.name)) {
        issues.push({ line, message: `Component <${node.name}> chưa được khai báo trong src/mdx-components.tsx.` })
      }
      if (node.name === 'Tree') {
        const source = node.attributes?.find((attribute) => attribute.name === 't')?.value
        if (typeof source !== 'string') {
          issues.push({ line, message: '<Tree> cần thuộc tính chuỗi t="[S …]".' })
        } else {
          try {
            parseTree(source)
          } catch (error) {
            issues.push({ line, message: `<Tree> sai cú pháp: ${(error as Error).message}` })
          }
        }
      }
    }
    node.children?.forEach(walk)
  }
  walk(tree)
  return issues
}
