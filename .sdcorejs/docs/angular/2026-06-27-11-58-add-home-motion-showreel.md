# Add Home Motion Showreel - 2026-06-27 11:58

## What was requested
Người dùng cảm thấy website vẫn thiếu cảm giác media/music, ví dụ như một đoạn video chạy hoặc motion content. Người dùng yêu cầu tham khảo các website khác và bổ sung hướng phù hợp.

## What was changed
- EDIT `src/app/pages/home/home.component.ts` - thêm `ShowreelClip`, `showreelClips`, `soundLayers`, `audioBars`, `showreelLoop`.
- EDIT `src/app/pages/home/home.component.html` - thêm section `Motion Showreel` ngay sau hero, gồm copy, sound layer chips, reel preview, clip strip, audio meter và stage footer.
- EDIT `src/app/pages/home/home.component.scss` - thêm styling và keyframes cho showreel: moving reel strip, scan line, floating clip shapes, audio meter animation, desktop/mobile responsive.

## Decisions made
- Không hotlink video bên ngoài và không tạo MP4 vì máy không có `ffmpeg`; chọn HTML/CSS motion reel để web tĩnh vẫn nhẹ, mượt, không phụ thuộc asset/video ngoài.
- Đặt showreel ngay sau hero để người vào web cảm nhận chất music/media sớm hơn.
- Motion reel mô phỏng 4 nhóm nội dung chính: Relaxing Music, AI Music, Regional Music, Cinema & Film.
- Giữ tone dark cinematic hiện tại, thêm màu chuyển động và waveform để bớt cảm giác brochure tĩnh.

## Verification
- `npm.cmd run build` passed.
- Playwright screenshots reviewed: desktop top, desktop full-page, mobile top, mobile full-page.

## References considered
- Monstercat About: label/music brand dùng video/showreel trigger để tạo cảm giác media.
- Artlist/Epidemic-style positioning: music/sound for video creators cần visual motion và creator-facing package.
- Sony Music Vision-style positioning: music catalog có thể mở rộng sang film/TV/storytelling.

## Open questions / follow-ups
- Nếu RIWAY có video thật, có thể thay motion reel bằng file MP4/WebM local trong `public/` và giữ fallback CSS motion.
- Có thể thêm modal play showreel hoặc section "Latest Channels / Sample Releases" nếu có link YouTube thật.

## Skill provenance
Skills invoked this session: Angular implementation flow, web research, `sdcorejs-auto-docs`.
