import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  readonly contactIntents = [
    'Network or MCN partnership',
    'Music catalog collaboration',
    'AI audio workflow',
    'Film or animation content slate'
  ];

  readonly responseSteps = [
    { step: '01', label: 'Share market and content direction' },
    { step: '02', label: 'RIWAY reviews fit and package needs' },
    { step: '03', label: 'Next call with clear collaboration model' }
  ];

  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  showSuccessModal = false;
  formInitialValues: Record<string, string> = {};

  submittedFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  };

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.formInitialValues = this.contactForm.value;
  }

  resetForm(): void {
    this.contactForm.reset(this.formInitialValues);
    this.submitted = false;

    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsUntouched();
      control?.markAsPristine();
    });
  }

  handleModalClosed(): void {
    this.showSuccessModal = false;
  }

  handleNewMessage(): void {
    this.showSuccessModal = false;
    this.resetForm();

    const formElement = document.querySelector('.contact-form-panel');
    if (formElement) {
      window.scrollTo({
        top: formElement.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    if (this.contactForm.invalid) {
      this.isLoading = false;
      return;
    }

    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone || 'Not provided',
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      date: new Date().toLocaleString('en-US')
    };

    this.submittedFormData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message
    };

    this.emailService.sendEmail(formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Your message has been sent successfully.';
        this.resetForm();
        this.showSuccessModal = true;

        setTimeout(() => {
          this.successMessage = '';
        }, 5000);

        const formElement = document.querySelector('.contact-form-panel');
        if (formElement) {
          window.scrollTo({
            top: formElement.getBoundingClientRect().top + window.pageYOffset - 120,
            behavior: 'smooth'
          });
        }
      },
      error: (error) => {
        this.isLoading = false;

        if (error.message) {
          this.errorMessage = error.message;
        } else if (error.status === 400) {
          this.errorMessage = 'Configuration error: please check the EmailJS settings.';
        } else if (error.status === 403) {
          this.errorMessage = 'Authentication error: please check the EmailJS public key.';
        } else if (error.status === 429) {
          this.errorMessage = 'Email sending limit reached. Please try again later.';
        } else {
          this.errorMessage = 'Something went wrong while sending your message. Please try again later.';
        }
      }
    });
  }
}
