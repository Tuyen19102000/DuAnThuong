# Hướng dẫn thiết lập EmailJS để gửi email từ form liên hệ

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập trang web [EmailJS](https://www.emailjs.com/) và đăng ký tài khoản miễn phí.
2. Sau khi đăng ký, xác nhận email của bạn để kích hoạt tài khoản.
3. Đăng nhập vào dashboard EmailJS để bắt đầu thiết lập.

## Bước 2: Thiết lập Email Service

1. Trong dashboard EmailJS, chọn "Email Services" → "Add New Service".
2. Chọn email provider của bạn:
   - Gmail: Kết nối tài khoản Google của bạn
   - Outlook/Office 365: Kết nối với tài khoản Microsoft
   - Yahoo: Đăng nhập với Yahoo
   - SMTP: Cấu hình máy chủ SMTP tùy chỉnh
   - Elastic Email, SendGrid và các dịch vụ khác
3. Thực hiện quy trình xác thực/cấp quyền theo hướng dẫn trên màn hình.
4. Đặt tên cho service của bạn (VD: "Contact Form Service").
5. **Quan trọng:** Sau khi thiết lập thành công, ghi lại `Service ID` được hiển thị (ví dụ: "service_abc123").

## Bước 3: Tạo Email Template

1. Trong dashboard EmailJS, chọn "Email Templates" → "Create New Template".
2. Đặt tên cho template (VD: "Contact Form Template").
3. Trong phần "To Email" nhập email người nhận: `contact@riwaymedia.com`
4. Trong phần "From Email", chọn một trong hai:
   - `{{email}}` - để hiển thị email của người gửi (nếu dịch vụ email cho phép)
   - Hoặc một địa chỉ cố định từ tài khoản email đã xác thực của bạn
5. Thiết kế nội dung email template với các biến động sau:
   ```
   Tên: {{name}}
   Email: {{email}}
   Điện thoại: {{phone}}
   Tiêu đề: {{subject}}
   Tin nhắn: {{message}}
   Ngày gửi: {{date}}
   ```
6. Lưu template và ghi lại `Template ID` được hiển thị (ví dụ: "template_xyz789").

## Bước 4: Lấy Public Key API

1. Trong dashboard EmailJS, chọn "Account" → "API Keys".
2. Sao chép giá trị của "Public Key" (ví dụ: "user_ABCde12345FGHijk").

## Bước 5: Cấu hình ứng dụng

1. Mở tệp `src/app/services/email.service.ts`
2. Thay thế các giá trị mặc định bằng giá trị thực từ tài khoản EmailJS:

```typescript
private readonly SERVICE_ID = 'service_gtydh3f'; // Giá trị thực từ bước 2
private readonly TEMPLATE_ID = 'template_m9xof1u'; // Giá trị thực từ bước 3
private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg'; // Giá trị thực từ bước 4
```

## Giải quyết lỗi 400 Bad Request

Nếu bạn gặp lỗi 400 Bad Request khi gửi email, hãy kiểm tra các nguyên nhân phổ biến sau:

1. **SERVICE_ID, TEMPLATE_ID hoặc PUBLIC_KEY không chính xác:**
   - Xác minh lại các giá trị đã nhập trong `email.service.ts`
   - Đảm bảo không có khoảng trắng thừa khi sao chép
   
2. **Template không đúng định dạng:**
   - Kiểm tra template email, đảm bảo các biến được đặt chính xác
   - Các biến trong template phải khớp với các trường trong `templateParams`

3. **Giới hạn gói miễn phí:**
   - Kiểm tra xem bạn đã vượt quá giới hạn gửi email hàng tháng chưa
   - Gói miễn phí chỉ cho phép gửi 200 email/tháng

4. **Xác thực email:**
   - Đảm bảo bạn đã xác thực email của mình với EmailJS

## Giới hạn gói miễn phí EmailJS

Gói miễn phí của EmailJS cho phép:
- Gửi 200 email mỗi tháng
- Sử dụng 2 email templates
- Không có giới hạn domain

## Kiểm tra dịch vụ

Sau khi cấu hình, bạn có thể kiểm tra dịch vụ trực tiếp trong EmailJS dashboard:

1. Vào "Email Templates"
2. Chọn template của bạn
3. Nhấp vào nút "Test" để gửi email thử nghiệm
4. Kiểm tra hộp thư đến của contact@riwaymedia.com để xác nhận
