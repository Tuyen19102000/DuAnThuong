# Hướng dẫn hình ảnh tìm Service ID, Template ID và Public Key trong EmailJS

## Tìm Service ID

Sau khi tạo email service:
1. Vào "Email Services" từ menu bên trái
2. Service ID sẽ hiển thị trong danh sách dịch vụ của bạn

Vị trí Service ID:
```
+----------------------------------+
| Email Services > My Services     |
+----------------------------------+
| Service Name | Service ID        |
+----------------------------------+
| Contact Form | service_abc123    | <- Đây là Service ID cần lấy
+----------------------------------+
```

## Tìm Template ID

Sau khi tạo email template:
1. Vào "Email Templates" từ menu bên trái
2. Template ID sẽ hiển thị trong danh sách template của bạn

Vị trí Template ID:
```
+----------------------------------+
| Email Templates                  |
+----------------------------------+
| Template Name | Template ID      |
+----------------------------------+
| Contact Form  | template_xyz789  | <- Đây là Template ID cần lấy
+----------------------------------+
```

## Tìm Public Key

1. Vào "Account" từ menu bên trái
2. Chọn tab "API Keys"
3. Public Key sẽ hiển thị ở đó

Vị trí Public Key:
```
+----------------------------------+
| Account > API Keys               |
+----------------------------------+
| Public Key                       |
+----------------------------------+
| user_ABCde12345FGHijk           | <- Đây là Public Key cần lấy
+----------------------------------+
```

## Hình dạng của các ID

Các ID thường có định dạng như sau:
- Service ID: `service_` + các ký tự chữ và số
- Template ID: `template_` + các ký tự chữ và số
- Public Key: `user_` + các ký tự chữ và số

## Cập nhật đúng trong code

```typescript
// Đúng
private readonly SERVICE_ID = 'service_gtydh3f';
private readonly TEMPLATE_ID = 'template_m9xof1u';
private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg';

// Sai - không thay thế các giá trị mẫu
private readonly SERVICE_ID = 'service_gtydh3f';
private readonly TEMPLATE_ID = 'template_m9xof1u';
private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg';
```

## Lưu ý quan trọng

- Sao chép và dán chính xác các ID để tránh lỗi
- Đảm bảo không có khoảng trắng thừa ở đầu hoặc cuối
- Giữ các ký tự đặc biệt như dấu gạch dưới (_) trong ID
