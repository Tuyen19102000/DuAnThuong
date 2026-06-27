import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type SlateItem = {
  icon: string;
  title: string;
  signal: string;
  description: string;
  formats: string[];
};

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  readonly slates: SlateItem[] = [
    {
      icon: 'fas fa-spa',
      title: 'Relaxing Music',
      signal: 'Evergreen listening',
      description: 'Evergreen audio designed for sleep, focus, meditation, nature ambience and long listening sessions.',
      formats: ['1-3 hour videos', 'Loopable visuals', 'Seasonal playlists', 'Sleep and focus themes']
    },
    {
      icon: 'fas fa-magic',
      title: 'AI Music',
      signal: 'Fast iteration',
      description: 'A faster creative workflow for testing hooks, moods, arrangements and content packaging at scale.',
      formats: ['Mood testing', 'AI-assisted drafts', 'Audio variation', 'Metadata experiments']
    },
    {
      icon: 'fas fa-globe-asia',
      title: 'Regional Music',
      signal: 'Local identity',
      description: 'Content inspired by regional culture, local sound identity and audience-specific visual packaging.',
      formats: ['Vietnamese mood', 'Asian regional concepts', 'Instrumental identity', 'Market localization']
    },
    {
      icon: 'fas fa-film',
      title: 'Cinema & Film',
      signal: 'Story worlds',
      description: 'Film-oriented media assets for animation, trailers, story channels and cinematic content worlds.',
      formats: ['2D animation', 'Trailer-style edits', 'Character worlds', 'Story music']
    }
  ];

  readonly heroHighlights = ['Music catalogs', 'AI-assisted testing', 'Regional concepts', 'Film assets'];

  readonly releaseFlow = ['Concept', 'Audio', 'Visual', 'Metadata', 'Publish'];

  readonly deliverables = [
    'Content concept and market positioning',
    'Audio or film-oriented creative package',
    'Thumbnail, title and metadata direction',
    'Publishing rhythm and optimization loop',
    'Partner-ready presentation material'
  ];
}
