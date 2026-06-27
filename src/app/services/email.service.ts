import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_gtydh3f';
  private readonly TEMPLATE_ID = 'template_m9xof1u';
  private readonly PUBLIC_KEY = 'D3tJOiZn7CJ78zagg';
  private readonly RECIPIENT_EMAIL = 'contact@riwaymedia.com';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  sendEmail(formData: Record<string, string>): Observable<unknown> {
    const templateParams = {
      ...formData,
      to_email: this.RECIPIENT_EMAIL
    };

    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)).pipe(
      catchError(error => {
        if (error.status === 400) {
          return throwError(() => new Error('Email configuration error. Please check the EmailJS template settings.'));
        }

        if (error.status === 403) {
          return throwError(() => new Error('Email authentication error. Please check the EmailJS public key.'));
        }

        if (error.status === 429) {
          return throwError(() => new Error('Email sending limit reached. Please try again later.'));
        }

        return throwError(() => new Error('Could not send the message. Please try again later.'));
      })
    );
  }
}
