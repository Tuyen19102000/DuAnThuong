# Improve Pipeline, Partner Logos, Capabilities Page - 2026-06-27 11:15

## What was requested
Người dùng muốn chỉnh lại Home vì giao diện vẫn sơ sài: đoạn "From creative idea to network-ready content package." cần trình bày mượt và đẹp hơn, logo partner phải thành 2 dòng chạy có màu thay vì grid tĩnh, đồng thời bổ sung thêm content/page để website chuyên nghiệp hơn.

## What was changed
- EDIT    `src/app/pages/home/home.component.ts` - thêm `pipelineSteps`, `programCards`, `partnerMarqueeRows` cho pipeline và logo marquee 2 dòng.
- EDIT    `src/app/pages/home/home.component.html` - thay section Operating System cũ bằng pipeline có CTA, delivery stack và program cards; bỏ partner grid tĩnh.
- EDIT    `src/app/pages/home/home.component.scss` - thêm styling pipeline, animated connector line, partner marquee 2 dòng ngược chiều, logo giữ màu, giảm hero title.
- CREATE  `src/app/pages/capabilities/capabilities.component.ts` - dữ liệu page Capabilities gồm pillars, workflow và readiness package.
- CREATE  `src/app/pages/capabilities/capabilities.component.html` - page mới mô tả năng lực RIWAY cho network partner.
- CREATE  `src/app/pages/capabilities/capabilities.component.scss` - giao diện dark cinematic đồng bộ với Home, có signal panel và animated bars.
- EDIT    `src/app/app.routes.ts` - đăng ký route `/capabilities`.
- EDIT    `src/app/components/header/header.component.ts` - thêm nav item Capabilities.
- EDIT    `src/app/components/footer/footer.component.html` - thêm footer link Capabilities.
- EDIT    `src/app/pages/content/content.component.scss` - giảm h1 để typography toàn site cân hơn.

## Decisions made
- Giữ hướng visual "premium media studio": dark cinematic nền thống nhất, điểm nhấn vàng/cyan/rose/violet vừa đủ, tránh mảng trắng đột ngột.
- Bỏ headline cũ trong Operating System vì quá trực diện; thay bằng "A smoother path from idea to partner-ready release." và pipeline 4 bước để partner hiểu quy trình nhanh hơn.
- Logo partner dùng card nền sáng để màu logo nổi rõ, không dùng grayscale nữa.
- Partner section chỉ còn 2 dòng marquee chuyển động, bỏ grid tĩnh để đúng feedback và giảm cảm giác thô.
- Thêm `/capabilities` thay vì nhồi toàn bộ nội dung vào Home, giúp website có chiều sâu khi network muốn xem năng lực vận hành.
- Chỉnh các link mới sang `[routerLink]="['/...']"` sau khi screenshot phát hiện dev overlay parse nhầm route string.
- Giảm h1 Home/Capabilities/Content để xử lý feedback title quá to so với content.

## Open questions / follow-ups
- Cần brand copy chính thức của RIWAY nếu muốn nội dung ít generic hơn và sát bộ hồ sơ công ty.
- Logo partner hiện dùng asset có sẵn trong `public/partner*.png`; nếu có tên đối tác thật, nên thay `Partner 1..12` bằng tên thật để tốt hơn cho accessibility/SEO.
- Có thể bổ sung trang Case Studies hoặc Network Deck nếu công ty muốn show dự án/kênh/metrics cụ thể cho đối tác quốc tế.

## Next suggested action
- Mở `http://127.0.0.1:4300/` và kéo đến Operating System + Partners để duyệt cảm giác animation thực tế.
- Mở `http://127.0.0.1:4300/capabilities` để duyệt page mới.
- Nếu nội dung đã ổn, bước tiếp theo nên là rà About/Contact theo cùng tone và thay copy bằng nội dung công ty chính xác hơn.

## Verification
- `npm.cmd run build` passed.
- Smoke test HTTP 200: `/`, `/content`, `/capabilities`.
- Playwright screenshots checked desktop Home, full-page Home, mobile Home and Capabilities.

## Skill provenance
Skills invoked this session: `sdcorejs-angular` for Angular orientation, `sdcorejs-auto-docs` for session summary.
