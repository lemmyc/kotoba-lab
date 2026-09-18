import type { ComponentPropsWithoutRef } from 'react'
import type { MDXComponents } from 'mdx/types'
import { Link } from 'react-router'
import { BrainDiagram } from './components/mdx/BrainDiagram'
import { Callout } from './components/mdx/Callout'
import { Compare } from './components/mdx/Compare'
import { Definition } from './components/mdx/Definition'
import { Gloss } from './components/mdx/Gloss'
import { Ex, Ipa, Ja, Speak } from './components/mdx/Inline'
import { LangSection } from './components/mdx/LangSection'
import { Summary } from './components/mdx/Summary'
import { Todo } from './components/mdx/Todo'
import { ToneChart } from './components/mdx/ToneChart'
import { Tree } from './components/mdx/Tree'
import { VocalTract } from './components/mdx/VocalTract'
import { Ruby } from './components/ui/Ruby'

function Anchor({ href = '', children, ...props }: ComponentPropsWithoutRef<'a'>) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    )
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

function Table(props: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className="not-prose-table relative my-6 overflow-x-auto">
      <table {...props} />
    </div>
  )
}

/**
 * Components available in every lesson MDX file without importing.
 * Documented in docs/CONTENT_GUIDE.md — keep both in sync.
 */
export const mdxComponents: MDXComponents = {
  a: Anchor,
  table: Table,
  BrainDiagram,
  Callout,
  Compare,
  Definition,
  Ex,
  Gloss,
  Ipa,
  Ja,
  LangSection,
  Ruby,
  Speak,
  Summary,
  Todo,
  ToneChart,
  Tree,
  VocalTract,
}
