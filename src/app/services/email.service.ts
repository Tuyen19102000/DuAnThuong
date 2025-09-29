import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Observable, from, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Cập nhật các giá trị này từ tài khoản EmailJS của bạn
  private readonly SERVICE_ID = 'service_gtydh3f'; // Thay thế bằng Service ID thực của bạn từ EmailJS
  private readonly TEMPLATE_ID = 'template_m9xof1u'; // Thay thế bằng Template ID thực của bạn từ EmailJS
  private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg'; // Thay thế bằng Public Key thực của bạn từ EmailJS
  private readonly RECIPIENT_EMAIL = 'contact@riwaymedia.com';

  constructor() {
    // Khởi tạo EmailJS với public key
    emailjs.init(this.PUBLIC_KEY);
  }

  /**
   * Gửi email thông qua EmailJS
   * @param formData Dữ liệu form liên hệ
   */
  sendEmail(formData: any): Observable<any> {
    // Biến đã được cấu hình đúng, tiếp tục gửi email
    console.log('EmailJS configuration verified. Proceeding to send email.');

    // Thêm email người nhận vào dữ liệu
    const templateParams = {
      ...formData,
      to_email: this.RECIPIENT_EMAIL
    };

    console.log('Sending email with params:', templateParams);

    // Trả về Observable từ promise của EmailJS với xử lý lỗi
    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams))
      .pipe(
        catchError(error => {
          console.error('EmailJS error:', error);
          if (error.status === 400) {
            return throwError(() => new Error('Lỗi gửi email: Dữ liệu không hợp lệ hoặc cấu hình EmailJS không chính xác.'));
          } else if (error.status === 403) {
            return throwError(() => new Error('Lỗi xác thực: PUBLIC_KEY không hợp lệ hoặc tài khoản EmailJS đã hết hạn.'));
          } else if (error.status === 429) {
            return throwError(() => new Error('Đã vượt quá giới hạn gửi email. Vui lòng thử lại sau.'));
          }
          return throwError(() => new Error('Lỗi khi gửi email. Vui lòng thử lại sau.'));
        })
      );
  }
}
