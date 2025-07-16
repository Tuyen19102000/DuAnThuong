import { Component, HostListener, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var $: any; // For jQuery

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isSearchActive = false;
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
    // Only execute browser-dependent code if in browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Check initial scroll position
      this.checkScroll();
      
      // Initialize animations
      this.initAnimation();
      
      // Initialize custom modal behavior with a slight delay to ensure DOM is ready
      setTimeout(() => {
        this.initModalBehavior();
      });
    }
  }
  
  // Custom modal initialization with our own backdrop
  initModalBehavior() {
    // Safety check for browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    setTimeout(() => {
      // Make sure jQuery is available and elements exist
      if (typeof $ !== 'undefined' && $('#myModal2').length) {        // Add document click handler to close modal when clicking outside
        $(document).off('click.modalOutside').on('click.modalOutside', (e: any) => {
          // Check if the modal is open and the click is outside both the modal content and toggle button
          if ($('#myModal2').hasClass('show') && 
              !$(e.target).closest('.modal-content').length && 
              !$(e.target).closest('.side-menu-toggle').length) {
            // Close the modal when clicking anywhere outside
            $('#myModal2').modal('hide');
            // Update menu state
            this.isMenuOpen = false;
          }
        });
        // Remove any previous modal initialization
        try {
          $('#myModal2').modal('dispose');
        } catch(e) {
          // Ignore errors if the modal wasn't initialized
        }
        
        // Initialize modal with custom options
        $('#myModal2').modal({
          backdrop: false,
          keyboard: true,
          focus: false,
          show: false
        });
        
        // Create our custom backdrop element
        if ($('#custom-modal-backdrop').length === 0) {
          $('body').append('<div id="custom-modal-backdrop" class="custom-backdrop"></div>');
        }
        
        // Ensure the side-menu-toggle button works properly
        $('.side-menu-toggle').off('click').on('click', () => {
          // Manually trigger the modal
          $('#myModal2').modal('show');
          return false; // Prevent default behavior
        });        // Handle modal show event
        $('#myModal2').on('show.bs.modal', () => {
          // Keep track of menu state
          this.isMenuOpen = true;
          
          // Add class to body to prevent scrolling
          $('body').addClass('side-modal-open');
          // Show custom backdrop with enhanced animation
          $('#custom-modal-backdrop').show().addClass('show');
          
          // Add active class to the toggle button
          $('.side-menu-toggle').addClass('active');
          
          // Make sure default backdrops are hidden
          $('.modal-backdrop').css('display', 'none');
          
          // Fix modal positioning
          $('.modal-dialog').css({
            'marginRight': '0',
            'transform': 'translateX(0)'
          });
        });        // Handle custom backdrop click to close modal with improved user feedback
        $('#custom-modal-backdrop').off('click').on('click', (e: any) => {
          // Visual feedback on click
          const $this = $(e.currentTarget);
          const offset = $this.offset() || { left: 0, top: 0 };
          const clickX = e.pageX - offset.left;
          const clickY = e.pageY - offset.top;
          
          // Create multiple ripple effects at click location for enhanced feedback
          const rippleColors = ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.1)'];
          
          rippleColors.forEach((color, index) => {
            const ripple = $(`<div class="backdrop-click-ripple" style="background: ${color}; animation-delay: ${index * 100}ms;"></div>`);
            ripple.css({
              left: clickX + 'px',
              top: clickY + 'px'
            });
            
            $this.append(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
              ripple.remove();
            }, 800 + (index * 100));
          });
          
          // Close the modal
          $('#myModal2').modal('hide');
          
          // Update menu state
          this.isMenuOpen = false;
        });
        
        // Handle close button events
        $('.modal-header .close-btn').off('click').on('click', () => {
          $('#myModal2').modal('hide');
          return false;
        });          // Clean up when modal is hidden
        $('#myModal2').on('hidden.bs.modal', () => {
          // Update menu state
          this.isMenuOpen = false;
          
          $('body').removeClass('side-modal-open');
          $('#custom-modal-backdrop').removeClass('show');
          
          // Remove active class from toggle button
          $('.side-menu-toggle').removeClass('active');
          
          setTimeout(() => {
            $('#custom-modal-backdrop').hide();
          }, 300);
        });
          // Fix for social links inside modal
        $('.sidebar-modal-widget .social-list a').on('click', function(this: HTMLAnchorElement, e: Event) {
          // Prevent default only if href is "#"
          const $this = $(this);
          if ($this.attr('href') === '#') {
            e.preventDefault();
          }
          
          // Open in new tab for proper links
          if ($this.attr('target') === '_blank' && $this.attr('href') !== '#') {
            window.open($this.attr('href') || '', '_blank');
          }
        });
      }
    }, 500);
  }
    @HostListener('window:scroll', [])
  checkScroll() {
    const scrollPosition = window.scrollY;
    // Only update if the state actually changes to avoid unnecessary renders
    const shouldBeScrolled = scrollPosition > 30;
    if (this.isScrolled !== shouldBeScrolled) {
      this.isScrolled = shouldBeScrolled;
    }
  }
  @HostListener('window:resize', [])
  onResize() {
    // Ensure our custom modal backdrop is properly sized on window resize
    if (typeof $ !== 'undefined') {
      const customBackdrop = $('#custom-modal-backdrop');
      if (customBackdrop.length && customBackdrop.is(':visible')) {
        // Adjust width to be full screen minus modal width
        customBackdrop.css({
          'width': 'calc(100% - 450px)'
        });
      }
    }
  }
  
  // Initialize animations with delay for smoother page load
  initAnimation() {
    setTimeout(() => {
      const navItems = this.el.nativeElement.querySelectorAll('.animated');
      navItems.forEach((item: any, index: number) => {
        this.renderer.setStyle(item, 'animation-delay', `${0.1 + (index * 0.1)}s`);
      });
    }, 100);
  }
    // Method for search button click
  toggleSearch(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isSearchActive = !this.isSearchActive;
    
    // Add focus to search input when opened
    if (this.isSearchActive) {
      setTimeout(() => {
        const searchInput = this.el.nativeElement.querySelector('.search-form input');
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    }
  }
    // Method to toggle side menu
  toggleSideMenu(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    console.log('Side menu toggled');
    this.isMenuOpen = !this.isMenuOpen;
    
    if (typeof $ !== 'undefined') {
      // Toggle active class on the button for visual feedback
      $('.btn-menu-toggle').toggleClass('active');
      
      if (this.isMenuOpen) {
        $('#myModal2').modal('show');
      } else {
        $('#myModal2').modal('hide');
      }
    }
  }
}
