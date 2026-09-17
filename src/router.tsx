import type { ComponentType } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import PageLoading from './components/ui/PageLoading'
import RouteError from './pages/RouteError'

type PageModule = { default: ComponentType }

/** Code-split page: each route loads its own chunk. */
const page = (load: () => Promise<PageModule>) => async () => ({ Component: (await load()).default })

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: RouteError,
    HydrateFallback: PageLoading,
    children: [
      { index: true, lazy: page(() => import('./pages/HomePage')) },
      { path: 'khoa-hoc', lazy: page(() => import('./pages/CoursePage')) },
      { path: 'bai-hoc/:slug', lazy: page(() => import('./pages/LessonPage')) },
      { path: 'bai-hoc/:slug/kiem-tra', lazy: page(() => import('./pages/QuizPage')) },
      { path: 'thuat-ngu', lazy: page(() => import('./pages/GlossaryPage')) },
      { path: 'the-ghi-nho', lazy: page(() => import('./pages/FlashcardsPage')) },
      { path: 'tien-do', lazy: page(() => import('./pages/ProgressPage')) },
      { path: 'tai-lieu', lazy: page(() => import('./pages/ReferencesPage')) },
      { path: 'gioi-thieu', lazy: page(() => import('./pages/AboutPage')) },
      { path: '*', lazy: page(() => import('./pages/NotFoundPage')) },
    ],
  },
]

export function createRouter() {
  return createBrowserRouter(routes)
}
