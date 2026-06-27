import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly heroMetrics = [
    { value: '3+', label: 'Years operating channels' },
    { value: '100+', label: 'YouTube channels' },
    { value: '100M+', label: 'Total views' }
  ];

  readonly identitySignals = [
    'Hanoi-based media company',
    'Music, animation and film-oriented channels',
    'Partner-facing content packaging'
  ];

  readonly strengths = [
    {
      title: 'Audience Operation',
      description: 'Hands-on experience managing multiple YouTube channels across music and animation categories.'
    },
    {
      title: 'Creative Production',
      description: 'Music, visual packaging, title systems and release assets designed for repeatable publishing.'
    },
    {
      title: 'Network Mindset',
      description: 'Partner-facing content structure for MCNs, distributors, labels and platform collaborators.'
    }
  ];

  readonly focusAreas = ['Relaxing Music', 'AI Music', 'Regional Music', 'Cinema & Film'];
  readonly markets = ['Vietnam', 'United States', 'South Korea', 'Taiwan', 'Philippines'];
}
