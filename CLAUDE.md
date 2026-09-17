# Kotoba Lab — ghi chú cho các phiên làm việc

Website học "Introduction to Language": giảng bằng tiếng Việt, mở rộng sang tiếng Anh và tiếng Nhật. Vite + React SPA, không có backend. Giao diện, nội dung và thông báo lỗi đều viết bằng tiếng Việt.

## Lệnh

- `npm run dev` — dev server (port 5173)
- `npm run check:content` — kiểm tra dữ liệu và MDX, in số `<Todo>` còn lại của từng chương. **Chạy sau mỗi lần sửa nội dung.**
- `npm test` — Vitest: render mọi route (gồm 12 bài và 12 quiz), tính toàn vẹn dữ liệu, tìm kiếm, furigana
- `npm run lint`, `npm run build` (đã gồm `tsc -b`)

Trước khi commit: `npm run check:content && npm run lint && npm test && npm run build`.

## Viết / bổ sung một chương

Mỗi chương gồm đúng 3 file, khóa theo `slug`:

1. `src/content/lessons/<slug>.mdx` — bài giảng
2. `src/data/glossary/<slug>.ts` — thuật ngữ
3. `src/data/quizzes/<slug>.ts` — câu hỏi (mục tiêu 10 câu)

Viết xong thì đổi `status` trong `src/data/lessons.ts`:

- `outline` — khung bài
- `draft` — đã viết, chờ người rà soát
- `complete` — hoàn chỉnh; `check:content` báo lỗi nếu còn `<Todo>`

**Chương 1 (`ban-chat-ngon-ngu`) là chương mẫu** về văn phong và cách dùng component. Quy ước chi tiết ở `docs/CONTENT_GUIDE.md`; cập nhật `docs/CONTENT_ROADMAP.md` khi xong một phần.

## Các bẫy đã gặp

- **Không viết furigana trần trong văn bản MDX.** `言語{げんご}` nằm trong đoạn văn bị hiểu là biểu thức JavaScript và làm trang lỗi khi chạy. Hãy dùng `<Ja t="言語{げんご}" romaji="gengo" />` hoặc để trong prop chuỗi (`Compare rows`, `Gloss text`, `Definition ja`). `check:content` và test sẽ bắt lỗi này.
- Component dùng trong MDX phải được khai báo trong `src/mdx-components.tsx`; nếu thêm mới thì cập nhật cả `docs/CONTENT_GUIDE.md`.
- Cú pháp furigana `漢字{かな}` (hoặc `[cụm bất kỳ]{cách đọc}`) do `src/lib/furigana.ts` xử lý. Nó dùng được trong mọi chuỗi dữ liệu: `titleJa`, `ja`, câu hỏi, đáp án, giải thích.
- Nếu thêm chương mới, phải đăng ký ở cả `data/lessons.ts`, `data/glossary/index.ts` và `data/quizzes/index.ts`.
- Không bịa trích dẫn hay số liệu. Chưa chắc thì để `<Todo>` ghi "cần kiểm chứng". Trong `references.ts`, không rõ năm/lần xuất bản thì bỏ trống `year`.

## Kiến trúc

- `src/router.tsx` — route lazy theo trang; đường dẫn tiếng Việt không dấu (`/bai-hoc/:slug`, `/thuat-ngu`…)
- `src/lib/lesson-content.ts` — nạp MDX bằng `import.meta.glob`, mỗi chương một chunk
- `src/lib/store.ts` — store localStorage + `useSyncExternalStore`; `preferences.ts` (theme, furigana — key `kotoba-lab:prefs`, đồng bộ với script trong `index.html`), `progress.ts` (key `kotoba-lab:v1`)
- Furigana bật/tắt qua `html[data-furigana]` + CSS `.kl-ruby` trong `src/index.css` (dùng `visibility` để không nhảy dòng)
- Màu sắc là CSS variables trong `index.css` (`bg-surface`, `text-muted`, `text-brand`, `text-vi/en/ja`…); chế độ tối qua class `.dark`
- Overlay `fixed` đặt trong header phải render qua portal (header có `backdrop-filter`)
- React Router ở bản 7 vì bản 8 cần Node ≥ 22.22
