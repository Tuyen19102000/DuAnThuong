import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    // Initialize any data here
  }

  ngAfterViewInit() {
    // Animation and jQuery code
    this.initWow();
    // this.initCounters();
    this.initRotateMe();
    this.initNewsletterForm();
    this.initScrollAnimation();
  }

  // Initialize WOW.js animations
  private initWow() {
    // Check if WOW is defined
    if (typeof (window as any).WOW === 'function') {
      new (window as any).WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        mobile: true,
        live: true
      }).init();
    }
  }
  // Initialize counters animation
  // private initCounters() {
  //   $('.count').each(function (this: any) {
  //     $(this).prop('Counter', 0).animate({
  //       Counter: $(this).text()
  //     }, {
  //       duration: 1000,
  //       easing: 'swing',
  //       step: function (now: any) {
  //         $(this).text(Math.ceil(now));
  //       }
  //     });
  //   });
  // }

  // Initialize rotation animation
  private initRotateMe() {
    $('.rotateme').each(function (this: any) {
      $(this).addClass('rotating');
    });
  }

  // Initialize newsletter form
  private initNewsletterForm() {
    const self = this;
    $('.newsletter-form').on('submit', function (this: any, e: Event) {
      e.preventDefault();

      const email = $(this).find('input[name="email"]').val();

      // Validate email format
      if (self.validateEmail(email)) {
        // Here you would typically send the email to your backend service
        // For now, just show a success message
        $('#validator-newsletter').text('Thank you for subscribing!').show();
        $(this).find('input[name="email"]').val('');
      } else {
        $('#validator-newsletter').text('Please enter a valid email address.').show();
      }
    });
  }

  // Email validation function
  private validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  initScrollAnimation(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Thêm class active vào các phần tử trong view
          entry.target.classList.add('in-view');

          // Nếu là thanh bar và không phải wow animation
          const bar = entry.target.querySelector('.bar:not(.wow)');
          if (bar) {
            bar.classList.add('active');
          }

          // Ngừng observe sau khi đã kích hoạt animation
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Bắt đầu observe các section title
    document.querySelectorAll('.section-title').forEach(section => {
      section.classList.add('scroll-trigger');
      observer.observe(section);
    });
  }
}

