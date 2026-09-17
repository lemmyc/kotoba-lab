import { createElement, lazy, type ComponentType } from 'react'
import type { MDXComponents } from 'mdx/types'

type LessonModule = { default: ComponentType<{ components?: MDXComponents }> }

/** Each lesson MDX becomes its own lazily-loaded chunk. */
const modules = import.meta.glob<LessonModule>('../content/lessons/*.mdx')

function slugFromPath(path: string) {
  return path.replace('../content/lessons/', '').replace(/\.mdx$/, '')
}

/** Lazy components are created once at module load, never during render. */
const lessonContent = new Map(
  Object.entries(modules).map(([path, load]) => [slugFromPath(path), lazy(load)] as const),
)

export const lessonContentSlugs = [...lessonContent.keys()]

export function hasLessonContent(slug: string) {
  return lessonContent.has(slug)
}

/** Renders the MDX body of a lesson; wrap in <Suspense>. */
export function renderLessonContent(slug: string, components: MDXComponents) {
  const Content = lessonContent.get(slug)
  return Content ? createElement(Content, { components }) : null
}
