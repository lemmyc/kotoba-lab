# Lộ trình biên soạn nội dung

Cập nhật file này mỗi khi hoàn thành một phần. Số liệu thực tế lấy bằng `npm run check:content`.

**Ký hiệu:** ✅ xong · 🟡 bản nháp / một phần · ⬜ chưa làm (mới có khung `<Todo>`)

| # | Chương (slug) | Trạng thái | Lý thuyết | Mở rộng EN | Mở rộng JA | So sánh | Tóm tắt EN/JA | Thuật ngữ | Quiz |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Ngôn ngữ là gì? (`ban-chat-ngon-ngu`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 2 | Ngôn ngữ và não bộ (`ngon-ngu-va-nao-bo`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 3 | Hình thái học (`hinh-thai-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 4 | Cú pháp học (`cu-phap-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 5 | Ngữ nghĩa học (`ngu-nghia-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 6 | Ngữ dụng học (`ngu-dung-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 7 | Ngữ âm học (`ngu-am-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 8 | Âm vị học (`am-vi-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 9 | Thụ đắc và xử lý ngôn ngữ (`thu-dac-ngon-ngu`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 10 | Ngôn ngữ và xã hội (`ngon-ngu-va-xa-hoi`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 11 | Lịch sử và biến đổi ngôn ngữ (`bien-doi-ngon-ngu`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 12 | Chữ viết (`chu-viet`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |

Cả 12 chương đã hoàn chỉnh (0 `<Todo>`). Nội dung được biên soạn với sự hỗ trợ của AI; mọi số liệu, niên đại và trích dẫn nên tiếp tục được đối chiếu với các tài liệu trong `src/data/references.ts`.

## Hướng rà soát tiếp theo

1. Nhờ người có chuyên môn đọc lại các phần có niên đại, số liệu (chương 2, 9, 11, 12).
2. Bổ sung ví dụ âm thanh thật (ghi âm người bản ngữ) cho chương 7, 8.
3. Thêm câu hỏi quiz nâng cao (mỗi chương 5 câu) cho người muốn ôn sâu.

## Việc kỹ thuật có thể làm thêm

- [x] Component `Tree`: vẽ cây cú pháp và cây hình thái (chương 3, 4)
- [x] Component `ToneChart`: đường nét 6 thanh điệu tiếng Việt (chương 7, 8)
- [x] Hình minh họa bộ máy phát âm, bản đồ vùng não (chương 2, 7): `VocalTract`, `BrainDiagram`
- [x] Điều hướng chương trước/sau: nút ở đầu bài, thanh nổi, phím `Shift + ←/→`
- [ ] Prerender các route tĩnh để cải thiện SEO
- [ ] Ôn tập ngắt quãng (spaced repetition) cho flashcard
