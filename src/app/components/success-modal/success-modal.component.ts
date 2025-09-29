import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="success-modal" *ngIf="show">
      <div class="success-modal-content animate__animated animate__fadeInUp">
        <!-- Logo section -->
        <div class="company-logo">
          <img src="/logoReway.png" alt="Company Logo" class="logo-image">
        </div>
        
        <!-- Success animation -->
        <div class="checkmark-circle">
          <div class="background"></div>
          <div class="checkmark draw"></div>
        </div>
        
        <!-- Success message -->
        <div class="success-message">
          <h3>Cảm ơn {{ name || 'bạn' }}!</h3>
          <p class="success-title">Tin nhắn đã được gửi thành công</p>
          
          <!-- Email receipt details -->
          <div class="email-receipt">
            <p><strong>Người nhận:</strong> {{ recipientEmail }}</p>
            <p><strong>Chủ đề:</strong> {{ subject || 'Liên hệ từ website' }}</p>
            <p><strong>Thời gian:</strong> {{ timestamp | date:'dd/MM/yyyy HH:mm' }}</p>
          </div>
          
          <div class="confirmation-message">
            <p>Đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
            <p class="small-text">Vui lòng kiểm tra hộp thư đến của bạn tại <strong>{{ email }}</strong> để nhận xác nhận.</p>
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="action-buttons">
          <button class="btn btn-outline-secondary mr-2" (click)="closeModal()">Đóng</button>
          <button class="btn btn-primary" (click)="sendNewMessage()">Gửi tin nhắn mới</button>
        </div>
        
        <!-- Social media links -->
        <div class="social-links" style="display: flex; align-items: center; justify-content: center; margin-top: 30px;">
          <p style="margin-bottom: 0;">Kết nối với chúng tôi</p>
          <div class="social-icons" style="margin-left: 20px;">
            <a href="https://www.facebook.com/profile.php?id=61576342929995" class="social-icon"><i class="icofont-facebook"></i></a>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .success-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(8px);
    }
    
    .success-modal-content {
      background-color: #fff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      max-width: 600px;
      width: 90%;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
      animation-duration: 0.7s;
      border: 1px solid rgba(28, 200, 138, 0.2);
      overflow: hidden;
      position: relative;
    }
    
    .company-logo {
      margin-bottom: 20px;
    }
    
    .logo-image {
      height: 60px;
      object-fit: contain;
    }
    
    h3 {
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: 28px;
      font-weight: 700;
    }
    
    .success-title {
      color: #1cc88a;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    p {
      color: #5a5c69;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.6;
    }
    
    .email-receipt {
      background-color: #f8f9fc;
      border-radius: 10px;
      padding: 15px;
      margin: 20px 0;
      text-align: left;
      border-left: 4px solid #1cc88a;
    }
    
    .email-receipt p {
      margin-bottom: 5px;
      font-size: 14px;
    }
    
    .confirmation-message {
      margin: 20px 0;
    }
    
    .small-text {
      font-size: 14px;
      color: #858796;
    }
    
    .action-buttons {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    
    button {
      padding: 12px 24px;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      border-radius: 50px;
    }
    
    .btn-primary {
      background-color: #4e73df;
      border-color: #4e73df;
    }
    
    .btn-outline-secondary {
      color: #858796;
      border-color: #d1d3e2;
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(78, 115, 223, 0.3);
    }
    
    .social-links {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e3e6f0;
    }
    
    .connect-text {
      font-size: 14px;
      color: #858796;
      margin-bottom: 15px;
    }
    
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #4e73df;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    
    .social-icon:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(78, 115, 223, 0.3);
    }
    
    .social-icon i {
      font-size: 18px;
    }
    
    /* Animated checkmark */
    .checkmark-circle {
      width: 100px;
      height: 100px;
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin: 0 auto 25px;
    }
    
    .checkmark-circle .background {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: rgba(28, 200, 138, 0.1);
      position: absolute;
    }
    
    .checkmark-circle .checkmark {
      border-radius: 5px;
    }
    
    .checkmark-circle .checkmark.draw:after {
      animation-delay: 100ms;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-name: checkmark;
      transform: scaleX(-1) rotate(135deg);
      animation-fill-mode: forwards;
      opacity: 1;
    }
    
    .checkmark-circle .checkmark:after {
      opacity: 0;
      height: 50px;
      width: 25px;
      transform-origin: left top;
      border-right: 7px solid #1cc88a;
      border-top: 7px solid #1cc88a;
      border-radius: 2px !important;
      content: '';
      left: 35px;
      top: 50px;
      position: absolute;
    }
    
    @keyframes checkmark {
      0% {
        height: 0;
        width: 0;
        opacity: 1;
      }
      20% {
        height: 0;
        width: 25px;
        opacity: 1;
      }
      40% {
        height: 50px;
        width: 25px;
        opacity: 1;
      }
      100% {
        height: 50px;
        width: 25px;
        opacity: 1;
      }
    }
  `]
})
export class SuccessModalComponent {
  @Input() show = false;
  @Input() name?: string;
  @Input() email?: string;
  @Input() subject?: string;
  @Output() closed = new EventEmitter<void>();
  @Output() newMessage = new EventEmitter<void>();
  
  // Default recipient email from the email service
  recipientEmail = 'contact@riwaymedia.com';
  
  // Timestamp for when the message was sent
  timestamp = new Date();
  
  closeModal() {
    this.show = false;
    this.closed.emit();
  }
  
  sendNewMessage() {
    this.show = false;
    this.newMessage.emit();
  }
}
