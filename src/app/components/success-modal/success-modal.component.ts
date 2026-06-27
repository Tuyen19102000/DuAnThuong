import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="success-modal" *ngIf="show">
      <div class="success-modal-content">
        <img src="/logoReway.png" alt="RIWAY MEDIA GROUP" class="logo-image">

        <div class="status-mark" aria-hidden="true">
          <i class="fas fa-check"></i>
        </div>

        <h3>Thank you{{ name ? ', ' + name : '' }}.</h3>
        <p class="success-title">Your message has been sent successfully.</p>

        <div class="email-receipt">
          <p><strong>Recipient:</strong> {{ recipientEmail }}</p>
          <p><strong>Subject:</strong> {{ subject || 'Website partnership inquiry' }}</p>
          <p><strong>Time:</strong> {{ timestamp | date:'dd/MM/yyyy HH:mm' }}</p>
        </div>

        <p class="confirmation-message">
          Our team will review your inquiry and reply as soon as possible.
        </p>

        <div class="action-buttons">
          <button type="button" class="btn-secondary" (click)="closeModal()">Close</button>
          <button type="button" class="btn-primary" (click)="sendNewMessage()">Send Another Message</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .success-modal {
      position: fixed;
      inset: 0;
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.72);
      backdrop-filter: blur(10px);
    }

    .success-modal-content {
      width: min(560px, 100%);
      padding: 34px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      color: #ffffff;
      text-align: center;
      background: #101620;
      box-shadow: 0 28px 90px rgba(0, 0, 0, 0.42);
      animation: modalIn 0.28s ease both;
    }

    .logo-image {
      width: 72px;
      height: 72px;
      object-fit: contain;
      margin-bottom: 18px;
    }

    .status-mark {
      width: 58px;
      height: 58px;
      display: inline-grid;
      place-items: center;
      margin-bottom: 18px;
      border-radius: 8px;
      color: #071016;
      background: linear-gradient(135deg, #f7bd4d, #35d5e7);
    }

    h3 {
      color: #ffffff;
      margin: 0 0 10px;
      font-size: 1.8rem;
      font-weight: 900;
    }

    .success-title,
    .confirmation-message {
      color: #c7d0da;
      line-height: 1.65;
    }

    .email-receipt {
      margin: 22px 0;
      padding: 16px;
      border-radius: 8px;
      text-align: left;
      background: rgba(255, 255, 255, 0.06);
    }

    .email-receipt p {
      color: #dce5ed;
      margin: 0 0 8px;
      word-break: break-word;
    }

    .email-receipt p:last-child {
      margin-bottom: 0;
    }

    .action-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }

    button {
      min-height: 46px;
      padding: 0 18px;
      border-radius: 8px;
      font-weight: 900;
      cursor: pointer;
      transition: transform 0.22s ease, background 0.22s ease;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .btn-primary {
      border: none;
      color: #071016;
      background: linear-gradient(135deg, #f7bd4d, #35d5e7);
    }

    .btn-secondary {
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(255, 255, 255, 0.08);
    }

    @keyframes modalIn {
      from { opacity: 0; transform: translateY(18px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
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

  readonly recipientEmail = 'contact@riwaymedia.com';
  readonly timestamp = new Date();

  closeModal(): void {
    this.show = false;
    this.closed.emit();
  }

  sendNewMessage(): void {
    this.show = false;
    this.newMessage.emit();
  }
}
