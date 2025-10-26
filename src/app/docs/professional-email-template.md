# Template Email Chuyên Nghiệp cho EmailJS

Dưới đây là mẫu HTML để tạo email chuyên nghiệp, đẹp mắt cho template EmailJS của bạn. Sao chép mã này vào trình chỉnh sửa template trong tài khoản EmailJS của bạn.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thông Tin Liên Hệ Mới</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 650px;
            margin: 0 auto;
            background-color: #f9f9f9;
        }
        
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            margin: 20px;
        }
        
        .header {
            background: linear-gradient(135deg, #4e73df 0%, #3a56b7 100%);
            color: white;
            padding: 25px;
            text-align: center;
            border-bottom: 5px solid rgba(255,255,255,0.2);
        }
        
        .header h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        
        .header p {
            margin: 8px 0 0;
            opacity: 0.9;
            font-size: 14px;
        }
        
        .content {
            padding: 30px;
            background-color: #ffffff;
        }
        
        .info-section {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eaeaea;
        }
        
        .info-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .field {
            margin-bottom: 15px;
        }
        
        .field:last-child {
            margin-bottom: 0;
        }
        
        .label {
            font-weight: 600;
            color: #4e73df;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        
        .value {
            padding: 12px;
            background-color: #f8f9fc;
            border-left: 3px solid #4e73df;
            border-radius: 0 4px 4px 0;
            font-size: 15px;
        }
        
        .message-value {
            padding: 15px;
            background-color: #f8f9fc;
            border-left: 3px solid #4e73df;
            border-radius: 0 4px 4px 0;
            min-height: 120px;
            white-space: pre-wrap;
            font-size: 15px;
        }
        
        .footer {
            background-color: #f1f4fb;
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #6c757d;
        }
        
        .logo {
            text-align: center;
            margin-top: 15px;
        }
        
        .logo img {
            height: 40px;
            width: auto;
        }
        
        .contact-info {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #dee2e6;
            display: flex;
            justify-content: center;
        }
        
        .contact-item {
            display: inline-block;
            margin: 0 15px;
            color: #4e73df;
        }
        
        .social-links {
            margin-top: 15px;
        }
        
        .social-link {
            display: inline-block;
            width: 32px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background-color: #4e73df;
            color: white;
            border-radius: 50%;
            margin: 0 5px;
            font-size: 16px;
            text-decoration: none;
        }
        
        .highlight {
            color: #4e73df;
            font-weight: 500;
        }
        
        .date-section {
            text-align: right;
            font-style: italic;
            color: #6c757d;
            font-size: 13px;
            margin-bottom: 20px;
        }
        
        .greeting {
            font-size: 17px;
            margin-bottom: 20px;
        }
        
        @media only screen and (max-width: 500px) {
            .container {
                margin: 10px;
            }
            .header, .content, .footer {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Thông Tin Liên Hệ Mới</h2>
            <p>Yêu cầu từ website DAThuong</p>
        </div>
        
        <div class="content">
            <div class="date-section">
                Ngày gửi: {{date}}
            </div>
            
            <div class="greeting">
                Xin chào <span class="highlight">Quản trị viên</span>,<br>
                Bạn vừa nhận được thông tin liên hệ mới từ khách hàng.
            </div>
            
            <div class="info-section">
                <div class="field">
                    <div class="label">Họ tên</div>
                    <div class="value">{{name}}</div>
                </div>
                
                <div class="field">
                    <div class="label">Email</div>
                    <div class="value">{{email}}</div>
                </div>
                
                <div class="field">
                    <div class="label">Số điện thoại</div>
                    <div class="value">{{phone}}</div>
                </div>
            </div>
            
            <div class="info-section">
                <div class="field">
                    <div class="label">Tiêu đề</div>
                    <div class="value">{{subject}}</div>
                </div>
                
                <div class="field">
                    <div class="label">Nội dung tin nhắn</div>
                    <div class="message-value">{{message}}</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="logo">
                <strong>DAThuong</strong> Media Group
            </div>
            
            <div class="contact-info">
                <div class="contact-item">123 Media Street, Hanoi, Vietnam</div>
                <div class="contact-item">+84 967 825 178</div>
            </div>
            
            <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
                <a href="#" class="social-link">ig</a>
            </div>
            
            <p>© 2025 DAThuong Media Group. Tất cả các quyền được bảo lưu.</p>
            <p>Email này được gửi tự động từ hệ thống website. Vui lòng không trả lời email này.</p>
        </div>
    </div>
</body>
</html>
```

## Hướng dẫn sử dụng template

1. Đăng nhập vào tài khoản EmailJS của bạn
2. Vào phần "Email Templates" và chọn template của bạn (template_m9xof1u)
3. Nhấn vào nút "Edit" để chỉnh sửa template
4. Xóa nội dung HTML hiện tại trong tab "Content" 
5. Sao chép và dán toàn bộ mã HTML ở trên vào
6. Kiểm tra xem các biến ({{name}}, {{email}}, v.v.) đã được đặt đúng vị trí
7. Nhấn "Save" để lưu template
8. Nhấn "Test" để gửi email thử nghiệm và kiểm tra giao diện

## Đặc điểm nổi bật của template

- **Thiết kế hiện đại:** Sử dụng phối màu chuyên nghiệp và font Roboto từ Google Fonts
- **Responsive:** Hiển thị tốt trên cả thiết bị di động và máy tính
- **Nổi bật thông tin:** Trình bày thông tin rõ ràng với các đường viền màu để phân biệt
- **Phần header và footer:** Thiết kế chuyên nghiệp với logo và thông tin liên hệ
- **Chi tiết tinh tế:** Bao gồm hiệu ứng gradient, shadow, và spacing phù hợp

## Tùy chỉnh template

Bạn có thể tùy chỉnh template này bằng cách:
- Thay đổi màu sắc (tìm và thay thế #4e73df với mã màu của bạn)
- Thêm logo thật bằng cách thay thế phần text logo bằng thẻ `<img>` với URL logo của bạn
- Cập nhật thông tin liên hệ trong phần footer
- Điều chỉnh font chữ, kích thước, và spacing theo nhu cầu
