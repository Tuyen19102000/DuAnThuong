import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Content', path: '/content' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'About', path: '/about-us' },
    { label: 'Contact', path: '/contact-us' }
  ];

  isScrolled = false;
  isMenuOpen = false;

  constructor(private readonly renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 24;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    this.isMenuOpen = true;
    this.renderer.addClass(document.body, 'menu-open');
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'menu-open');
  }
}
