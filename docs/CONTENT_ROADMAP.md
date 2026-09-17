# Lộ trình biên soạn nội dung

Cập nhật file này mỗi khi hoàn thành một phần. Số liệu thực tế lấy bằng `npm run check:content`.

**Ký hiệu:** ✅ xong · 🟡 bản nháp / một phần · ⬜ chưa làm (mới có khung `<Todo>`)

| # | Chương (slug) | Trạng thái | Lý thuyết | Mở rộng EN | Mở rộng JA | So sánh | Tóm tắt EN/JA | Thuật ngữ | Quiz |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Ngôn ngữ là gì? (`ban-chat-ngon-ngu`) | draft | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 12 | 10/10 |
| 2 | Ngôn ngữ và não bộ (`ngon-ngu-va-nao-bo`) | outline | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 5 | 3/10 |
| 3 | Hình thái học (`hinh-thai-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 4 | Cú pháp học (`cu-phap-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 5 | Ngữ nghĩa học (`ngu-nghia-hoc`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 6 | 3/10 |
| 6 | Ngữ dụng học (`ngu-dung-hoc`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 6 | 3/10 |
| 7 | Ngữ âm học (`ngu-am-hoc`) | complete | ✅ | ✅ | ✅ | ✅ | ✅ | 15 | 10/10 |
| 8 | Âm vị học (`am-vi-hoc`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 5 | 3/10 |
| 9 | Thụ đắc và xử lý ngôn ngữ (`thu-dac-ngon-ngu`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 5 | 3/10 |
| 10 | Ngôn ngữ và xã hội (`ngon-ngu-va-xa-hoi`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 5 | 3/10 |
| 11 | Lịch sử và biến đổi ngôn ngữ (`bien-doi-ngon-ngu`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 5 | 3/10 |
| 12 | Chữ viết (`chu-viet`) | outline | ⬜ | ⬜ | ⬜ | 🟡 | ⬜ | 5 | 3/10 |

Chương 1 để 🟡 vì nội dung do AI hỗ trợ biên soạn, cần người rà soát trước khi chuyển sang `complete`.

## Thứ tự đề xuất

1. **Rà soát chương 1**, rồi chuyển sang `complete`.
2. Chương 3 → 4 → 7 → 8: các bình diện cấu trúc cốt lõi, nhiều ví dụ đối chiếu ba ngôn ngữ.
3. Chương 5 → 6.
4. Chương 2 → 9 → 10 → 11 → 12.

## Việc kỹ thuật có thể làm thêm

- [ ] Component `Tree`: vẽ cây cú pháp và cây hình thái (chương 3, 4)
- [ ] Component `ToneChart`: đường nét 6 thanh điệu tiếng Việt (chương 7, 8)
- [ ] Hình minh họa bộ máy phát âm, bản đồ vùng não (chương 2, 7)
- [ ] Prerender các route tĩnh để cải thiện SEO
- [ ] Ôn tập ngắt quãng (spaced repetition) cho flashcard
