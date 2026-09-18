import { Fragment, useMemo } from 'react'
import { describeTree, layoutTree, parseTree, TREE_METRICS, type PositionedNode } from '../../lib/tree'

interface TreeProps {
  /** labelled brackets: "[S [NP Tôi] [VP [V ăn] [NP cơm]]]" */
  t: string
  caption?: string
}

const WIDE = /[⺀-鿿豈-﫿＀-￯]/

function Edges({ node }: { node: PositionedNode }) {
  const { labelSize, leafSize } = TREE_METRICS
  const fromY = node.y + 6
  return (
    <>
      {node.children.map((child, index) => {
        const toY = child.y - (child.leaf ? leafSize : labelSize) + 1
        return (
          <Fragment key={index}>
            {node.triangle ? (
              <polygon
                points={`${node.x},${fromY} ${child.x - child.halfWidth - 4},${toY} ${child.x + child.halfWidth + 4},${toY}`}
                fill="none"
                stroke="var(--muted)"
                strokeWidth={1.2}
              />
            ) : (
              <line x1={node.x} y1={fromY} x2={child.x} y2={toY} stroke="var(--muted)" strokeWidth={1.2} />
            )}
            <Edges node={child} />
          </Fragment>
        )
      })}
    </>
  )
}

function Labels({ node }: { node: PositionedNode }) {
  const { labelSize, leafSize, romajiSize } = TREE_METRICS
  return (
    <>
      <text
        x={node.x}
        y={node.y}
        textAnchor="middle"
        fontSize={node.leaf ? leafSize : labelSize}
        fontWeight={node.leaf ? 400 : 600}
        fill={node.leaf ? 'var(--ink)' : 'var(--brand)'}
        lang={WIDE.test(node.label) ? 'ja' : undefined}
      >
        {node.label}
      </text>
      {node.romaji && (
        <text x={node.x} y={node.y + 17} textAnchor="middle" fontSize={romajiSize} fontStyle="italic" fill="var(--muted)">
          {node.romaji}
        </text>
      )}
      {node.children.map((child, index) => (
        <Labels key={index} node={child} />
      ))}
    </>
  )
}

/** Syntax / morphology tree drawn from labelled-bracket notation. */
export function Tree({ t, caption }: TreeProps) {
  const result = useMemo(() => {
    try {
      const tree = parseTree(t)
      return { tree, layout: layoutTree(tree) }
    } catch (error) {
      return { error: (error as Error).message }
    }
  }, [t])

  return (
    <figure className="not-prose my-6 rounded-xl border border-line bg-surface px-4 py-4">
      {'error' in result ? (
        <p className="font-mono text-sm text-danger">
          Không vẽ được cây: {result.error}
          <br />
          <span className="text-muted">{t}</span>
        </p>
      ) : (
        <div className="relative overflow-x-auto">
          <svg
            role="img"
            aria-label={`Sơ đồ cây: ${describeTree(result.tree)}`}
            viewBox={`0 0 ${result.layout.width} ${result.layout.height}`}
            width={result.layout.width}
            height={result.layout.height}
            className="mx-auto block h-auto max-w-none"
          >
            <Edges node={result.layout.root} />
            <Labels node={result.layout.root} />
          </svg>
        </div>
      )}
      {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  )
}
