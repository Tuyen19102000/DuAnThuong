# Hướng dẫn cập nhật cấu hình EmailJS

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập trang web [EmailJS](https://www.emailjs.com/)
2. Nhấn nút "Sign Up Free" để đăng ký tài khoản miễn phí
3. Điền thông tin và tạo tài khoản
4. Xác nhận email để kích hoạt tài khoản
5. Đăng nhập vào hệ thống

## Bước 2: Tạo Email Service

1. Trong dashboard EmailJS, nhấn vào "Email Services" ở menu bên trái
2. Nhấn nút "Add New Service"
3. Chọn nhà cung cấp email (Gmail, Outlook, Yahoo, v.v.)
4. Làm theo hướng dẫn để xác thực và kết nối tài khoản email
5. Đặt tên cho dịch vụ (ví dụ: "Contact Form Service")
6. Sau khi tạo thành công, bạn sẽ thấy một "Service ID" được hiển thị (ví dụ: `service_abc123`)
7. **Ghi lại Service ID này**

## Bước 3: Tạo Email Template

1. Trong dashboard EmailJS, nhấn vào "Email Templates" ở menu bên trái
2. Nhấn nút "Create New Template"
3. Đặt tên cho template (ví dụ: "Contact Form Template")
4. Trong phần "To Email", nhập `contact@riwaymedia.com`
5. Thiết kế template với nội dung:

```
Thông tin liên hệ mới từ website:

Tên: {{name}}
Email: {{email}}
Điện thoại: {{phone}}
Tiêu đề: {{subject}}
Tin nhắn: {{message}}
Ngày gửi: {{date}}
```

6. Nhấn "Save" để lưu template
7. Bạn sẽ thấy một "Template ID" được hiển thị (ví dụ: `template_xyz789`)
8. **Ghi lại Template ID này**

## Bước 4: Lấy Public Key

1. Trong dashboard EmailJS, nhấn vào "Account" ở menu bên trái
2. Chọn tab "API Keys"
3. Tìm phần "Public Key" (ví dụ: `D3tJOiZn7CJ78zagg`)
4. **Sao chép Public Key này**

## Bước 5: Cập nhật trong ứng dụng

1. Mở file `src/app/services/email.service.ts`
2. Thay thế các giá trị mẫu bằng giá trị thực của bạn:

```typescript
private readonly SERVICE_ID = 'service_gtydh3f';     // Thay bằng Service ID thực của bạn
private readonly TEMPLATE_ID = 'template_m9xof1u';   // Thay bằng Template ID thực của bạn
private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg'; // Thay bằng Public Key thực của bạn
```

## Kiểm tra xem đã cập nhật đúng chưa

Sau khi cập nhật các giá trị, bạn nên kiểm tra lại để đảm bảo:

1. Không còn các giá trị mẫu như 'service_id_của_bạn', 'template_id_của_bạn', 'public_key_của_bạn'
2. Các giá trị mới phải trùng khớp chính xác với giá trị từ tài khoản EmailJS của bạn
3. Không có khoảng trắng thừa ở đầu hoặc cuối các giá trị

## Kiểm tra hệ thống

1. Khởi động lại ứng dụng Angular: `ng serve`
2. Thử gửi một form liên hệ thử nghiệm
3. Kiểm tra console để xem có lỗi không
4. Kiểm tra email của contact@riwaymedia.com để xem email đã được gửi chưa

## Giải quyết vấn đề

Nếu vẫn gặp lỗi:

1. Kiểm tra các giá trị cấu hình một lần nữa
2. Đảm bảo tài khoản EmailJS của bạn đã được xác minh
3. Kiểm tra giới hạn của gói miễn phí (200 email/tháng)
4. Xem thêm hướng dẫn chi tiết tại `src/app/docs/emailjs-troubleshooting.md`
