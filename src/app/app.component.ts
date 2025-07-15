import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

declare var $: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'da-thuong';
  loading = true;
  
  ngOnInit() {
    // Simulate loading time and hide preloader
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    
    // Initialize Bootstrap components that require JavaScript
    $(document).ready(() => {
      $('[data-toggle="collapse"]').collapse();
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();
    });
  }
}
