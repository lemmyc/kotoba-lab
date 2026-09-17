# Kotoba Lab · 言葉ラボ

**Nhập môn Ngôn ngữ học (Introduction to Language) qua ba lăng kính: Việt · Anh · Nhật.**

Kotoba Lab là website học ngôn ngữ học. Lý thuyết được giảng bằng tiếng Việt, sau đó mở rộng sang tiếng Anh và tiếng Nhật. Khóa học gồm 12 chương, bám theo khung giáo trình *An Introduction to Language* (Fromkin, Rodman & Hyams).

> **Trạng thái:** đã hoàn thiện khung website và đề cương 12 chương. Chương 1 đã viết đầy đủ và làm chương mẫu (đang rà soát); các chương 2–12 đang ở dạng khung bài và sẽ được viết dần. Xem [docs/CONTENT_ROADMAP.md](docs/CONTENT_ROADMAP.md).

## Tính năng

- **Bài giảng MDX**, mỗi chương có cùng một cấu trúc: cơ sở lý thuyết (VI), mở rộng tiếng Anh, mở rộng tiếng Nhật, bảng so sánh ba ngôn ngữ, tóm tắt (kèm bản EN/JA) và câu hỏi thảo luận.
- **Furigana bật/tắt** bằng nút あ/漢 hoặc phím `F`. Khi tắt, dòng chữ không bị xô lệch; rê chuột, Tab hoặc chạm vào chữ Hán để xem cách đọc của từ đó.
- **Từ điển thuật ngữ** Việt – Anh (IPA) – Nhật (furigana, romaji), tìm kiếm không phân biệt dấu, kana hay romaji.
- **Quiz** theo chương, giải thích ngay sau mỗi câu, lưu điểm cao nhất.
- **Thẻ ghi nhớ (flashcard)** với 4 chiều hỏi, đánh dấu Đã nhớ / Ôn lại, có phím tắt.
- **Tiến độ học** lưu trong `localStorage`, không cần tài khoản.
- **Tìm kiếm nhanh** bằng `Ctrl/⌘ K`, **giao diện sáng/tối**, **phát âm** EN/JA bằng Web Speech API, bố cục tốt trên điện thoại.

## Công nghệ

Vite 8 · React 19 · TypeScript · React Router 7 · MDX 3 · Tailwind CSS 4 · Vitest · ESLint 9+

## Chạy dự án

Yêu cầu Node.js ≥ 22.12.

```bash
npm install
npm run dev            # http://localhost:5173
```

| Lệnh | Việc làm |
|---|---|
| `npm run dev` | Chạy môi trường phát triển (hiện đầy đủ các khối `<Todo>`) |
| `npm run build` | Kiểm tra kiểu và build ra thư mục `dist/` |
| `npm run preview` | Xem thử bản build |
| `npm run lint` | ESLint |
| `npm test` | Chạy test (render mọi trang, kiểm tra dữ liệu, tìm kiếm, furigana) |
| `npm run check:content` | Kiểm tra dữ liệu nội dung và in báo cáo tiến độ biên soạn |

## Cấu trúc

```
src/
  content/lessons/<slug>.mdx   nội dung bài giảng (mỗi chương một file)
  data/lessons.ts              danh mục chương: tiêu đề 3 ngữ, mục tiêu, trạng thái
  data/glossary/<slug>.ts      thuật ngữ theo chương
  data/quizzes/<slug>.ts       câu hỏi quiz theo chương
  data/references.ts           tài liệu tham khảo
  mdx-components.tsx           component dùng được trong MDX
  components/  pages/  lib/    giao diện, trang, tiện ích
scripts/validate-content.ts    npm run check:content
docs/                          hướng dẫn viết nội dung, roadmap
```

## Bổ sung nội dung

Mỗi chương chỉ cần sửa 3 file: `src/content/lessons/<slug>.mdx`, `src/data/glossary/<slug>.ts`, `src/data/quizzes/<slug>.ts`. Viết xong thì đổi `status` trong `src/data/lessons.ts`.

Chi tiết xem [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md).

## Triển khai

Đây là ứng dụng một trang (SPA), build ra file tĩnh trong `dist/`.

- **Vercel:** import repo, chọn framework preset *Vite*. File `vercel.json` đã chuyển mọi đường dẫn về `index.html`.
- **Netlify / Cloudflare Pages:** build command `npm run build`, thư mục xuất `dist`, thêm quy tắc rewrite `/* → /index.html`.
- **GitHub Pages:** cần đặt `base` trong `vite.config.ts` theo tên repo và thêm `404.html` (copy của `index.html`) để các đường dẫn con hoạt động.

**Về SEO:** SPA chỉ hiện nội dung sau khi JavaScript chạy. Nếu cần công cụ tìm kiếm đọc được nội dung bài học, có thể thêm bước prerender các route tĩnh (ví dụ dùng `vite-react-ssg` hoặc chế độ prerender của React Router).

## Lưu ý nội dung

Nội dung được biên soạn với sự hỗ trợ của AI và đang được rà soát. Khi dùng cho học tập hoặc nghiên cứu chính thức, hãy đối chiếu với giáo trình trong trang *Tài liệu tham khảo*. Góp ý và báo lỗi xin gửi qua GitHub Issues.
