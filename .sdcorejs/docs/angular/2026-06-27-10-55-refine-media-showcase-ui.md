# Refine Media Showcase UI — 2026-06-27 10:55

## What was requested
Người dùng muốn giao diện bớt lạ, giảm title quá lớn, thống nhất màu nền, thêm chuyển động cho partner logo, thêm page/content cần thiết, và làm web chuyên nghiệp hơn cho mục tiêu giới thiệu RIWAY MEDIA GROUP với network quốc tế.

## What was changed
- EDIT `src/app/pages/home/*` — giảm typography, thống nhất tông studio tối, thêm Collaboration Models, đổi partner thành marquee chuyển động.
- CREATE `src/app/pages/content/*` — thêm trang Content Direction cho Relaxing Music, AI Music, Regional Music, Cinema & Film.
- EDIT `src/app/app.routes.ts` — thêm route `/content`.
- EDIT `src/app/components/header/*` — thêm nav Content.
- EDIT `src/app/components/footer/*` — thêm link Content và giữ footer đồng bộ.
- EDIT `src/app/pages/about/*.scss` và `src/app/pages/contact/*.scss` — giảm H1 và bớt tương phản trắng/đen.

## Decisions made
- Giữ theme chính là dark media/studio để phù hợp music/film/network.
- Giảm cỡ hero title để content không bị title lấn át.
- Partner logo có marquee tự chạy, hover thì pause để người xem chú ý.
- Thêm trang `/content` thay vì nhồi quá nhiều nội dung vào Home.

## Verification
- `npm.cmd run build` pass.
- `http://127.0.0.1:4300/` trả 200.
- `http://127.0.0.1:4300/content` trả 200.

## Open questions / follow-ups
- Cần thêm ảnh/video thật của kênh hoặc playlist nếu muốn web thuyết phục network mạnh hơn.
- Có thể thêm page “Case Studies” sau khi có dữ liệu kênh/thành tích cụ thể.
