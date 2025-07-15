// filepath: c:\Users\tuyen.nguyen7\Desktop\DAThuong\src\app\pages\contact\contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SuccessModalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  showSuccessModal = false;
  formInitialValues: any = {};
  
  // Store form data that was submitted successfully
  submittedFormData: any = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  
  /**
   * Khởi tạo form liên hệ
   */
  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    
    // Lưu giá trị ban đầu để reset form về trạng thái ban đầu
    this.formInitialValues = this.contactForm.value;
  }
  
  /**
   * Reset form về trạng thái ban đầu
   */
  resetForm() {
    this.contactForm.reset(this.formInitialValues);
    this.submitted = false;
    
    // Xóa các trạng thái validation
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsUntouched();
      control?.markAsPristine();
    });
  }
  
  /**
   * Xử lý khi đóng modal thành công
   */
  handleModalClosed() {
    this.showSuccessModal = false;
  }
  
  /**
   * Xử lý khi người dùng muốn gửi tin nhắn mới
   */
  handleNewMessage() {
    this.showSuccessModal = false;
    this.resetForm();
    
    // Cuộn đến form liên hệ
    const formElement = document.querySelector('.contact-form');
    if (formElement) {
      window.scrollTo({
        top: formElement.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      this.isLoading = false;
      return;
    }

    // Lưu các giá trị của form để gửi email
    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone || 'Không cung cấp',
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      date: new Date().toLocaleString('vi-VN')
    };
    
    // Lưu thông tin form đã gửi để hiển thị trong modal
    this.submittedFormData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message
    };

    this.emailService.sendEmail(formData).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.isLoading = false;
        this.successMessage = 'Tin nhắn của bạn đã được gửi thành công!';
        
        // Reset form và trạng thái
        this.resetForm();
        
        // Hiển thị modal thành công
        this.showSuccessModal = true;
        
        // Tự động ẩn thông báo thành công sau một khoảng thời gian
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
        
        // Cuộn lên đầu form
        const formElement = document.querySelector('.contact-form');
        if (formElement) {
          window.scrollTo({
            top: formElement.getBoundingClientRect().top + window.pageYOffset - 120,
            behavior: 'smooth'
          });
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Email sending error:', error);
        
        // Hiển thị thông báo lỗi chi tiết
        if (error.message) {
          this.errorMessage = error.message;
        } else if (error.status === 400) {
          this.errorMessage = 'Lỗi cấu hình: Vui lòng kiểm tra cài đặt EmailJS trong file email.service.ts';
        } else if (error.status === 403) {
          this.errorMessage = 'Lỗi xác thực: PUBLIC_KEY không đúng hoặc tài khoản EmailJS của bạn có vấn đề';
        } else if (error.status === 429) {
          this.errorMessage = 'Đã vượt quá giới hạn gửi email. Vui lòng thử lại sau hoặc nâng cấp tài khoản EmailJS';
        } else {
          this.errorMessage = 'Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.';
        }
      }
    });
  }
}