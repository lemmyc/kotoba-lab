import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'
import { lessons } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import { PREFERENCES_KEY } from '../lib/preferences'
import { PROGRESS_KEY } from '../lib/progress'
import { routes } from '../router'

const TIMEOUT = { timeout: 10000 }

function renderRoute(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
  return router
}

describe('pages', () => {
  it('renders the home page', async () => {
    renderRoute('/')
    expect(await screen.findByRole('heading', { level: 1, name: /Hiểu ngôn ngữ qua/ }, TIMEOUT)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Bắt đầu học/ })).toHaveAttribute('href', `/bai-hoc/${lessons[0].slug}`)
  })

  it('renders the course page with every chapter', async () => {
    renderRoute('/khoa-hoc')
    await screen.findByRole('heading', { level: 1, name: 'Lộ trình 12 chương' }, TIMEOUT)
    for (const lesson of lessons) {
      expect(screen.getByRole('heading', { level: 3, name: lesson.title })).toBeInTheDocument()
    }
  })

  it.each(lessons.map((lesson) => [lesson.number, lesson] as const))('renders lesson %i with its MDX content', async (_, lesson) => {
    renderRoute(`/bai-hoc/${lesson.slug}`)
    expect(await screen.findByRole('heading', { level: 1, name: lesson.title }, TIMEOUT)).toBeInTheDocument()
    // MDX body is lazy — wait for the standard section headings
    expect(await screen.findByRole('heading', { level: 2, name: 'Cơ sở lý thuyết' }, TIMEOUT)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Mở rộng: Tiếng Anh' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Mở rộng: Tiếng Nhật' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Thuật ngữ chính' })).toBeInTheDocument()
  })

  it.each(lessons.map((lesson) => [lesson.number, lesson] as const))('renders the quiz page of lesson %i', async (_, lesson) => {
    renderRoute(`/bai-hoc/${lesson.slug}/kiem-tra`)
    expect(await screen.findByRole('heading', { level: 1, name: lesson.title }, TIMEOUT)).toBeInTheDocument()
    expect(screen.getByRole('radiogroup', { name: 'Các phương án' })).toBeInTheDocument()
  })

  it('shows 404 for an unknown lesson slug and an unknown path', async () => {
    renderRoute('/bai-hoc/khong-ton-tai')
    expect(await screen.findByRole('heading', { name: 'Không tìm thấy trang' }, TIMEOUT)).toBeInTheDocument()
  })

  it('shows 404 for an unknown path', async () => {
    renderRoute('/duong-dan-sai')
    expect(await screen.findByRole('heading', { name: 'Không tìm thấy trang' }, TIMEOUT)).toBeInTheDocument()
  })

  it('renders glossary, flashcards, progress, references and about pages', async () => {
    const checks: [string, RegExp][] = [
      ['/thuat-ngu', /Thuật ngữ Việt – Anh – Nhật/],
      ['/the-ghi-nho', /Thẻ ghi nhớ/],
      ['/tien-do', /Tiến độ học tập/],
      ['/tai-lieu', /Tài liệu tham khảo/],
      ['/gioi-thieu', /Về Kotoba Lab/],
    ]
    for (const [path, title] of checks) {
      renderRoute(path)
      expect(await screen.findByRole('heading', { level: 1, name: title }, TIMEOUT)).toBeInTheDocument()
      document.body.innerHTML = ''
    }
  })
})

describe('furigana toggle', () => {
  it('switches data-furigana on <html> and persists the choice', async () => {
    renderRoute('/')
    const header = await screen.findByRole('banner', {}, TIMEOUT)
    const button = within(header).getByRole('button', { name: 'Tắt furigana' })
    expect(button).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(button)
    await waitFor(() => expect(document.documentElement.dataset.furigana).toBe('off'))
    expect(JSON.parse(window.localStorage.getItem(PREFERENCES_KEY)!)).toMatchObject({ furigana: false })
    expect(within(header).getByRole('button', { name: 'Bật furigana' })).toHaveAttribute('aria-pressed', 'false')

    // keyboard shortcut F toggles it back
    fireEvent.keyDown(window, { key: 'f' })
    await waitFor(() => expect(document.documentElement.dataset.furigana).toBe('on'))
  })

  it('ignores the F shortcut while typing in an input', async () => {
    renderRoute('/thuat-ngu')
    const input = await screen.findByPlaceholderText(/Tìm bằng tiếng Việt/, {}, TIMEOUT)
    fireEvent.keyDown(input, { key: 'f' })
    expect(document.documentElement.dataset.furigana).not.toBe('off')
  })
})

describe('learning flow', () => {
  it('records a perfect quiz score', async () => {
    const slug = 'cu-phap-hoc'
    const questions = getQuiz(slug)
    renderRoute(`/bai-hoc/${slug}/kiem-tra`)
    await screen.findByRole('heading', { level: 1 }, TIMEOUT)

    for (const [index, question] of questions.entries()) {
      const options = screen.getAllByRole('radio')
      fireEvent.click(options[question.answer])
      expect(await screen.findByText('Chính xác!')).toBeInTheDocument()
      const isLast = index === questions.length - 1
      fireEvent.click(screen.getByRole('button', { name: isLast ? 'Xem kết quả' : 'Câu tiếp theo' }))
    }

    expect(await screen.findByText(`${questions.length}/${questions.length}`)).toBeInTheDocument()
    const stored = JSON.parse(window.localStorage.getItem(PROGRESS_KEY)!)
    expect(stored.quiz[slug]).toMatchObject({ best: questions.length, total: questions.length, attempts: 1 })
  })

  it('marks a lesson as completed', async () => {
    renderRoute(`/bai-hoc/${lessons[0].slug}`)
    const [button] = await screen.findAllByRole('button', { name: 'Đánh dấu hoàn thành' }, TIMEOUT)
    fireEvent.click(button)
    await waitFor(() => expect(screen.getAllByRole('button', { name: 'Đã hoàn thành' })).toHaveLength(2))
    expect(JSON.parse(window.localStorage.getItem(PROGRESS_KEY)!).completed).toEqual([lessons[0].slug])
  })

  it('filters the glossary with accent-insensitive search', async () => {
    renderRoute('/thuat-ngu?q=hinh%20vi')
    expect(await screen.findByRole('heading', { level: 3, name: 'Hình vị' }, TIMEOUT)).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3, name: 'Ngôn ngữ' })).not.toBeInTheDocument()
  })
})
