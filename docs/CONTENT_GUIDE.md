# Hướng dẫn viết nội dung Kotoba Lab

Tài liệu dành cho người (hoặc AI) viết bổ sung bài giảng. Chuẩn tham chiếu là **Chương 1**: [`src/content/lessons/ban-chat-ngon-ngu.mdx`](../src/content/lessons/ban-chat-ngon-ngu.mdx).

## 1. Quy trình cho một chương

1. Chạy `npm run check:content` để xem chương còn bao nhiêu `<Todo>`.
2. Chạy `npm run dev` rồi mở `/bai-hoc/<slug>`. Ở chế độ dev, các khối `<Todo>` hiện đầy đủ danh sách ý cần viết.
3. Viết từng mục: thay khối `<Todo>` bằng nội dung thật.
4. Bổ sung thuật ngữ (`src/data/glossary/<slug>.ts`) và quiz (`src/data/quizzes/<slug>.ts`, mục tiêu 10 câu).
5. Đổi `status` trong `src/data/lessons.ts`: `outline` → `draft`, và → `complete` khi đã rà soát xong.
6. Chạy `npm run check:content && npm test`, rồi cập nhật [`CONTENT_ROADMAP.md`](CONTENT_ROADMAP.md).

## 2. Cấu trúc bắt buộc của một chương

Giữ nguyên các tiêu đề `##` sau, vì test kiểm tra chúng:

```mdx
## Cơ sở lý thuyết          ← tiếng Việt, nhiều mục ###
## Mở rộng: Tiếng Anh        ← nội dung bọc trong <LangSection lang="en">
## Mở rộng: Tiếng Nhật       ← nội dung bọc trong <LangSection lang="ja">
## So sánh Việt – Anh – Nhật ← <Compare rows={[...]} />
## Tóm tắt                   ← gạch đầu dòng + <Summary lang="en"> + <Summary lang="ja">
## Câu hỏi thảo luận
```

Các phần *Mục tiêu bài học*, *Thuật ngữ chính*, *Đọc thêm*, *Quiz* do trang tự sinh từ dữ liệu, không viết trong MDX.

## 3. Văn phong

- Giảng bằng **tiếng Việt**, câu rõ ràng, xưng hô trung tính ("bạn", "chúng ta").
- Thuật ngữ lần đầu xuất hiện: **in đậm**, kèm tiếng Anh trong ngoặc, *in nghiêng*: **tính võ đoán** (*arbitrariness*). Thuật ngữ quan trọng thì dùng `<Definition>`.
- Ví dụ ưu tiên thứ tự: tiếng Việt → tiếng Anh → tiếng Nhật.
- Phần mở rộng tiếng Anh/Nhật **vẫn giảng bằng tiếng Việt**, chỉ ví dụ viết bằng ngôn ngữ gốc. Riêng `<Summary lang="en|ja">` viết hẳn bằng tiếng Anh/Nhật.
- **Không bịa** số liệu, trích dẫn, ví dụ "của bệnh nhân" hay năm xuất bản. Chưa chắc thì ghi `<Todo>` kèm "cần kiểm chứng".
- Quy ước: dấu `\*` trước câu sai ngữ pháp (hoặc dùng `<Ex bad>`); IPA theo giọng Mỹ (General American); romaji theo hệ **Hepburn có dấu trường âm** (tōgoron, kenjōgo); âm mũi trước nguyên âm viết `n'` (on'inron).

## 4. Furigana — ĐỌC KỸ

Cú pháp furigana: `漢字{かんじ}`, trong đó cả cụm chữ Hán đứng ngay trước `{}` là phần gốc. Nếu phần gốc không phải chữ Hán thì dùng `[phần gốc]{cách đọc}`.

```
言語{げんご}とは何{なに}か
私{わたし}は本{ほん}を読{よ}む
[今日]{きょう}
```

⚠️ Trong văn bản MDX, dấu `{…}` là **biểu thức JavaScript**. **Không** viết `言語{げんご}` trần trong đoạn văn, vì trang sẽ lỗi khi chạy. Chỉ đặt cú pháp furigana ở hai chỗ:

- trong component: `<Ja t="言語{げんご}" romaji="gengo" />`
- trong prop chuỗi: `ja="…"`, `text="…"`, `rows={[{ ja: '…' }]}`

`npm run check:content` sẽ báo lỗi nếu có dấu `{}` nằm trần trong văn bản.

Trong file dữ liệu `.ts` (glossary, quiz, `titleJa`) thì dùng cú pháp furigana thoải mái.

## 5. Component dùng trong MDX

Không cần `import`. Danh sách được khai báo ở `src/mdx-components.tsx`.

### `<Definition>`: hộp định nghĩa ba ngữ
```mdx
<Definition term="Hình vị" en="morpheme" ipa="ˈmɔːrfiːm" ja="形態素{けいたいそ}" romaji="keitaiso">
Đơn vị nhỏ nhất có nghĩa của ngôn ngữ.
</Definition>
```

### `<Callout>`: hộp ghi chú
`type`: `note` · `tip` · `warning` · `example` · `culture` · `hanviet`; `title` là tùy chọn.
```mdx
<Callout type="hanviet">
<Ja t="言語学{げんごがく}" /> đọc Hán Việt là **ngôn ngữ học**.
</Callout>
```

### `<LangSection lang="en|ja">`: bọc phần mở rộng
Để **dòng trống** sau thẻ mở và trước thẻ đóng, để markdown bên trong được xử lý.

### `<Gloss>`: ví dụ chú giải từng hình vị
Các từ trong `text`, `romaji`, `gloss` cách nhau bằng dấu cách. Nếu số từ bằng nhau, chúng sẽ được căn thẳng cột.
```mdx
<Gloss lang="ja" text="私{わたし}は 本{ほん}を 読{よ}む" romaji="watashi-wa hon-o yomu" gloss="tôi-CĐ sách-TN đọc" translation="Tôi đọc sách." />
<Gloss lang="ja" bad text="…" />   ← có dấu * (sai ngữ pháp)
```
Viết tắt thống nhất: **CĐ** (chủ đề は), **TN** (tân ngữ を), **CN** (chủ ngữ が), **QK** (quá khứ), **PĐ** (phủ định), **LS** (lịch sự ます). Giải thích viết tắt ngay dưới ví dụ đầu tiên của chương.

### `<Compare>`: bảng so sánh ba ngôn ngữ
```mdx
<Compare
  caption="(tùy chọn)"
  rows={[
    { aspect: 'Trật tự cơ bản', vi: 'SVO', en: 'SVO', ja: 'SOV' },
    { aspect: 'Chưa có dữ liệu', vi: '', en: '', ja: '' },   ← ô trống hiện "…"
  ]}
/>
```

### `<Summary lang="en|ja">`: tóm tắt bằng ngôn ngữ đích
Với tiếng Nhật, bọc cả đoạn trong `<Ja t="…" />` để có furigana.

### Inline
- `<Ja t="言語{げんご}" romaji="gengo" speak />`: chữ Nhật có furigana, `speak` để hiện nút nghe
- `<Speak lang="en">language</Speak>`: từ kèm nút phát âm
- `<Ipa>ˈlæŋɡwɪdʒ</Ipa>` → /…/ · `<Ipa phonetic>pʰɪn</Ipa>` → […]
- `<Ruby base="言語" reading="げんご" />`: ruby đơn lẻ
- `<Ex>Tôi ăn cơm.</Ex>` · `<Ex bad note="lý do">Tôi cơm ăn.</Ex>`: dòng ví dụ ✓ / *

### `<Todo>`: chỗ chưa viết
```mdx
<Todo>
- Ý cần viết 1
- Ý cần viết 2 (cần kiểm chứng)
</Todo>
```
Khi chạy dev, khối này hiện đầy đủ; ở bản build chỉ còn dòng "Nội dung phần này đang được biên soạn".

Markdown thường (bảng GFM, danh sách, **đậm**, *nghiêng*, `code`, liên kết `/thuat-ngu`) đều dùng được.

## 6. Thuật ngữ (`src/data/glossary/<slug>.ts`)

```ts
{
  id: 'hinh-vi',                 // kebab-case không dấu, duy nhất toàn site
  chapter,                       // hằng số slug ở đầu file
  vi: 'Hình vị',
  en: 'morpheme',
  ipaEn: 'ˈmɔːrfiːm',            // không kèm / /; bỏ trống nếu không chắc
  ja: '形態素{けいたいそ}',        // bắt buộc furigana cho kanji
  romaji: 'keitaiso',
  definition: '1–2 câu tiếng Việt.',
}
```
Mục tiêu 10–15 thuật ngữ mỗi chương. Thuật ngữ tự xuất hiện trong trang bài học, từ điển, flashcard và ô tìm kiếm.

## 7. Quiz (`src/data/quizzes/<slug>.ts`)

```ts
{
  id: 'cu-phap-hoc-04',          // <slug>-<số thứ tự 2 chữ số>
  question: 'Câu hỏi… có thể có 漢字{かんじ}',
  options: ['A', 'B', 'C', 'D'], // 4 phương án, không trùng nhau
  answer: 1,                     // chỉ số (bắt đầu từ 0)
  explanation: 'Vì sao đáp án đúng, vì sao phương án gây nhiễu sai.',
  lang: 'ja',                    // tùy chọn: vi | en | ja
}
```
- Mục tiêu 10 câu mỗi chương, trộn câu hỏi về lý thuyết chung (khoảng 4), tiếng Việt (2), tiếng Anh (2) và tiếng Nhật (2).
- Phương án gây nhiễu phải hợp lý; tránh "tất cả các ý trên".
- Rải đều vị trí đáp án đúng (không để toàn đáp án B).
- Khi đổi số câu, điểm cao nhất đã lưu của người học sẽ được tính lại.

## 8. Tài liệu tham khảo (`src/data/references.ts`)

Chỉ thêm tài liệu có thật và thông tin đã kiểm chứng. `focus` là `general | vi | ja`; `chapters` giúp tài liệu hiện ở mục "Đọc thêm" của chương tương ứng.
