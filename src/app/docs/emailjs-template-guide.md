# Hướng dẫn thiết lập template EmailJS

## Cấu hình template cho ID: template_m9xof1u

Bạn cần đảm bảo rằng template của bạn trong EmailJS (template_m9xof1u) được cấu hình để nhận các biến từ form liên hệ. Dưới đây là hướng dẫn để thiết lập đúng:

### 1. Đăng nhập vào EmailJS Dashboard

1. Truy cập https://dashboard.emailjs.com/
2. Đăng nhập với tài khoản của bạn

### 2. Chỉnh sửa template

1. Nhấn vào "Email Templates" trong menu bên trái
2. Tìm và chọn template có ID: template_m9xof1u
3. Nhấn vào "Edit" để chỉnh sửa template

### 3. Cấu hình các trường Email

1. **To Email**: Nhập `contact@riwaymedia.com`
2. **From Name**: Nhập `{{name}}` để hiển thị tên người gửi
3. **From Email**: Nhập `{{email}}` để hiển thị email người gửi
4. **Subject**: Nhập `Thông tin liên hệ mới: {{subject}}`

### 4. Kiểm tra các biến trong nội dung

Đảm bảo rằng nội dung template của bạn sử dụng các biến sau:

- `{{name}}` - Tên người gửi
- `{{email}}` - Email người gửi
- `{{phone}}` - Số điện thoại
- `{{subject}}` - Tiêu đề tin nhắn
- `{{message}}` - Nội dung tin nhắn
- `{{date}}` - Ngày gửi

### 5. Mẫu HTML cho template

Bạn có thể sử dụng mã HTML sau cho nội dung template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thông tin liên hệ mới</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #4e73df;
            color: white;
            padding: 15px;
            border-radius: 5px 5px 0 0;
            text-align: center;
        }
        .content {
            background-color: #f8f9fc;
            padding: 20px;
            border: 1px solid #e3e6f0;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #4e73df;
        }
        .value {
            padding: 10px;
            background-color: white;
            border: 1px solid #e3e6f0;
            border-radius: 3px;
        }
        .message-value {
            padding: 10px;
            background-color: white;
            border: 1px solid #e3e6f0;
            border-radius: 3px;
            min-height: 100px;
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>Thông Tin Liên Hệ Mới</h2>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Họ tên:</div>
            <div class="value">{{name}}</div>
        </div>
        
        <div class="field">
            <div class="label">Email:</div>
            <div class="value">{{email}}</div>
        </div>
        
        <div class="field">
            <div class="label">Số điện thoại:</div>
            <div class="value">{{phone}}</div>
        </div>
        
        <div class="field">
            <div class="label">Tiêu đề:</div>
            <div class="value">{{subject}}</div>
        </div>
        
        <div class="field">
            <div class="label">Nội dung:</div>
            <div class="message-value">{{message}}</div>
        </div>
        
        <div class="field">
            <div class="label">Ngày gửi:</div>
            <div class="value">{{date}}</div>
        </div>
    </div>
    
    <div class="footer">
        <p>Email này được gửi tự động từ form liên hệ của website.</p>
        <p>© 2025 DAThuong. All rights reserved.</p>
    </div>
</body>
</html>
```

### 6. Kiểm tra template

1. Sau khi chỉnh sửa template, nhấn "Save" để lưu thay đổi
2. Nhấn nút "Test" để gửi một email thử nghiệm và kiểm tra xem các biến có được hiển thị đúng không

### 7. Giới hạn EmailJS Free Plan

Lưu ý rằng tài khoản miễn phí của EmailJS cho phép gửi tối đa 200 email mỗi tháng. Nếu cần gửi nhiều hơn, bạn cần nâng cấp lên gói trả phí.
