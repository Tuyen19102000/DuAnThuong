import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type CapabilityPillar = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

type ReadinessItem = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './capabilities.component.html',
  styleUrl: './capabilities.component.scss'
})
export class CapabilitiesComponent {
  readonly pillars: CapabilityPillar[] = [
    {
      icon: 'fas fa-compass',
      title: 'Content Strategy',
      description: 'Shape music and film-oriented content around demand, audience mood and network positioning.',
      points: ['Audience angle', 'Content format', 'Market positioning']
    },
    {
      icon: 'fas fa-music',
      title: 'Music Production System',
      description: 'Develop repeatable sound packages for relaxing music, AI audio and regional identity.',
      points: ['Mood direction', 'Audio variation', 'Long-form catalog']
    },
    {
      icon: 'fas fa-photo-video',
      title: 'Visual Packaging',
      description: 'Turn audio and story ideas into platform-ready visuals, thumbnails and publishing assets.',
      points: ['Thumbnail system', 'Loopable visuals', 'Trailer assets']
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Network Readiness',
      description: 'Prepare content so MCNs, labels, platforms and media partners can review faster.',
      points: ['Pitch package', 'Release plan', 'Localization notes']
    }
  ];

  readonly workflow: WorkflowStep[] = [
    {
      step: '01',
      title: 'Discover the partner angle',
      description: 'Clarify target market, catalog opportunity, distribution model and the first slate to test.'
    },
    {
      step: '02',
      title: 'Build the creative system',
      description: 'Produce content direction, reusable visual language, audio variations and publishable assets.'
    },
    {
      step: '03',
      title: 'Package for review',
      description: 'Prepare titles, metadata, thumbnails, reference links and a clean partner-facing presentation.'
    },
    {
      step: '04',
      title: 'Operate and improve',
      description: 'Use channel data to refine topics, release rhythm, formats and the next collaboration cycle.'
    }
  ];

  readonly readiness: ReadinessItem[] = [
    { label: 'Format', value: 'Long-form video, playlists, shorts, trailers and channel packages.' },
    { label: 'Metadata', value: 'Titles, descriptions, tags and localization notes for discovery.' },
    { label: 'Assets', value: 'Thumbnails, cover frames, loop visuals and partner presentation decks.' },
    { label: 'Signals', value: 'Performance summary, audience learnings and next testing direction.' }
  ];
}
