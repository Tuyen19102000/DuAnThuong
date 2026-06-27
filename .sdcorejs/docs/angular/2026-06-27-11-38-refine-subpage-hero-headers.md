# Refine Subpage Hero Headers - 2026-06-27 11:38

## What was requested
Người dùng thấy phần header/hero của các màn Content, About, Contact còn sơ sài: chủ yếu là title lớn và một đoạn mô tả. Cần thêm hoặc bớt nội dung, đổi cách show để các page con chuyên nghiệp hơn.

## What was changed
- EDIT `src/app/pages/content/content.component.ts` - thêm icon, signal, `heroHighlights`, `releaseFlow` cho hero content slate.
- EDIT `src/app/pages/content/content.component.html` - đổi hero thành copy + slate map + release flow.
- EDIT `src/app/pages/content/content.component.scss` - styling hero panel, mini slate rows, highlight chips, giảm title.
- EDIT `src/app/pages/about/about.component.ts` - thêm `heroMetrics` và `identitySignals`.
- EDIT `src/app/pages/about/about.component.html` - đổi hero thành company profile với metrics, identity list và market strip.
- EDIT `src/app/pages/about/about.component.scss` - styling profile panel, hero metrics, market chips, giảm title.
- EDIT `src/app/pages/contact/contact.component.ts` - thêm `contactIntents` và `responseSteps`.
- EDIT `src/app/pages/contact/contact.component.html` - đổi hero thành direct contact + best first message panel.
- EDIT `src/app/pages/contact/contact.component.scss` - styling contact brief guide, direct contact links, response steps, giảm title.

## Decisions made
- Không dùng lại cùng một hero pattern cho cả ba page; mỗi page có một visual/nội dung riêng để bớt cảm giác copy-paste.
- Content hero tập trung vào "slate map" để partner hiểu ngay 4 nhóm nội dung.
- About hero tập trung vào "company profile" và operating proof.
- Contact hero tập trung vào "best first message" để dẫn người dùng gửi brief tốt hơn.
- Giữ dark cinematic background hiện có, nhưng thêm panels/chips có contrast vừa phải để page con bớt trống.

## Verification
- `npm.cmd run build` passed.
- HTTP 200 verified: `/content`, `/about-us`, `/contact-us`.
- Playwright screenshots reviewed for Content, About, Contact desktop headers and Content mobile.

## Open questions / follow-ups
- Nếu có nội dung công ty chính thức, nên thay các câu generic bằng copy cụ thể hơn theo brand voice RIWAY.
- Có thể tiếp tục làm About/Contact body section sau hero nếu muốn toàn page đồng đều hơn, không chỉ phần header.

## Skill provenance
Skills invoked this session: Angular implementation flow, `sdcorejs-auto-docs` for session summary.
