# Hướng dẫn giải quyết sự cố EmailJS

Nếu bạn gặp lỗi khi gửi email từ form liên hệ, hãy làm theo các bước dưới đây để khắc phục:

## Lỗi 400 Bad Request

Đây là lỗi phổ biến nhất, thường do cấu hình không chính xác:

### 1. Kiểm tra cấu hình EmailJS

Mở tệp `src/app/services/email.service.ts` và xác minh rằng bạn đang sử dụng các giá trị cấu hình đúng:

```typescript
// Các giá trị cấu hình EmailJS đúng
private readonly SERVICE_ID = 'service_gtydh3f'; 
private readonly TEMPLATE_ID = 'template_m9xof1u';
private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg';
```

**Lưu ý:** Các giá trị trên đã được cấu hình đúng cho ứng dụng này. Không cần thay đổi trừ khi bạn tạo một template EmailJS mới.

### 2. Kiểm tra tài khoản EmailJS

- Đảm bảo bạn đã xác thực email khi đăng ký tài khoản
- Kiểm tra xem dịch vụ email của bạn đã được thiết lập và hoạt động chính xác
- Xác minh template email của bạn có các biến đúng với dữ liệu form

### 3. Kiểm tra mạng và console

Mở Developer Tools trong trình duyệt (F12) và kiểm tra:
- Tab Network để xem chi tiết lỗi HTTP
- Tab Console để xem thông báo lỗi JavaScript

## Lỗi 403 Forbidden

Lỗi này thường liên quan đến quyền truy cập hoặc xác thực:

- Kiểm tra lại PUBLIC_KEY
- Đảm bảo tài khoản EmailJS của bạn vẫn hoạt động
- Đảm bảo bạn không vượt quá giới hạn gửi email của gói miễn phí

## Lỗi 429 Too Many Requests

Lỗi này xuất hiện khi bạn vượt quá giới hạn gửi email:

- Gói miễn phí EmailJS giới hạn 200 email mỗi tháng
- Đợi đến tháng tiếp theo hoặc nâng cấp tài khoản

## Kiểm tra gói miễn phí

Để kiểm tra mức sử dụng hiện tại:
1. Đăng nhập vào dashboard EmailJS
2. Vào phần "Stats" hoặc "Account"
3. Kiểm tra số email đã gửi trong tháng hiện tại

## Sử dụng chế độ thử nghiệm

EmailJS có chế độ thử nghiệm để gỡ lỗi:

```typescript
// Thêm dòng này vào constructor của service
emailjs.init(this.PUBLIC_KEY, true); // true kích hoạt chế độ thử nghiệm
```

Chế độ thử nghiệm sẽ ghi lại thao tác mà không thực sự gửi email.

## Kiểm tra kết nối CORS

Đôi khi CORS (Cross-Origin Resource Sharing) có thể gây ra vấn đề:

1. Kiểm tra tab Console để xem lỗi CORS
2. Đảm bảo domain của bạn được phép trong cài đặt EmailJS

## Vấn đề với tên miền localhost

Trong quá trình phát triển, localhost hoạt động bình thường với EmailJS. Nếu bạn gặp sự cố:
- Kiểm tra các tệp lưu trữ tạm thời của trình duyệt
- Thử chế độ ẩn danh hoặc trình duyệt khác

## Trợ giúp thêm

Nếu bạn vẫn gặp vấn đề, hãy tham khảo:
- [Tài liệu chính thức của EmailJS](https://www.emailjs.com/docs/)
- [Forum hỗ trợ EmailJS](https://www.emailjs.com/docs/faq/)
