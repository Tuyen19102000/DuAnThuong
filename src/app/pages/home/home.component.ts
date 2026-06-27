import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type ContentVertical = {
  icon: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  accent: string;
};

type CollaborationModel = {
  title: string;
  description: string;
};

type PipelineStep = {
  phase: string;
  icon: string;
  title: string;
  description: string;
  output: string;
};

type ProgramCard = {
  label: string;
  title: string;
  description: string;
};

type ShowreelClip = {
  label: string;
  title: string;
  meta: string;
  accent: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly metrics: Metric[] = [
    { value: '100+', label: 'YouTube Channels', detail: 'Music and animation channels built for scale.' },
    { value: '1M+', label: 'Subscribers', detail: 'A growing audience across multiple territories.' },
    { value: '100M+', label: 'Views', detail: 'Repeatable content systems with measurable reach.' },
    { value: '5+', label: 'Silver Play Buttons', detail: 'Audience proof across owned and partner channels.' }
  ];

  readonly verticals: ContentVertical[] = [
    {
      icon: 'fas fa-spa',
      title: 'Relaxing Music',
      kicker: 'Calm catalogs',
      description: 'Ambient, sleep, meditation, study and long-form music packages shaped for evergreen streaming.',
      tags: ['Sleep', 'Focus', 'Meditation', 'Nature mood'],
      accent: 'cyan'
    },
    {
      icon: 'fas fa-magic',
      title: 'AI Music',
      kicker: 'New production pipeline',
      description: 'AI-assisted music ideation, arrangement and testing workflows for faster global content cycles.',
      tags: ['AI workflow', 'Audio testing', 'Fast iteration', 'Scale'],
      accent: 'violet'
    },
    {
      icon: 'fas fa-globe-asia',
      title: 'Regional Music',
      kicker: 'Local sound, global reach',
      description: 'Music concepts inspired by regional cultures, adapted with platform-native packaging and metadata.',
      tags: ['Vietnam', 'Asia', 'Local identity', 'Worldwide'],
      accent: 'gold'
    },
    {
      icon: 'fas fa-film',
      title: 'Cinema & Film',
      kicker: 'Story worlds',
      description: 'Film-oriented content, animation and cinematic publishing assets designed for network partnerships.',
      tags: ['Film', 'Animation', 'Trailers', 'Story IP'],
      accent: 'rose'
    }
  ];

  readonly pipelineSteps: PipelineStep[] = [
    {
      phase: '01',
      icon: 'fas fa-satellite-dish',
      title: 'Signal & Market Scan',
      description: 'We read search demand, audience mood, channel references and partner expectations before shaping the concept.',
      output: 'Audience angle + topic map'
    },
    {
      phase: '02',
      icon: 'fas fa-layer-group',
      title: 'Creative Package',
      description: 'Music direction, visual language, thumbnails, titles and metadata are prepared as one publishable package.',
      output: 'Audio, visual and packaging kit'
    },
    {
      phase: '03',
      icon: 'fas fa-play-circle',
      title: 'Publishing System',
      description: 'Release rhythm, playlist logic, channel structure and localization are aligned for repeatable operation.',
      output: 'Network-ready release plan'
    },
    {
      phase: '04',
      icon: 'fas fa-chart-line',
      title: 'Optimization Loop',
      description: 'Performance signals feed the next content cycle so the catalog keeps improving after each release.',
      output: 'Learning report + next tests'
    }
  ];

  readonly programCards: ProgramCard[] = [
    {
      label: 'Relaxing Music',
      title: 'Sleep, focus and ambient rooms',
      description: 'Long-form sound worlds with calm visuals, reusable title systems and playlist-friendly packaging.'
    },
    {
      label: 'AI Music',
      title: 'Fast concept testing pipeline',
      description: 'AI-assisted drafting and variation cycles that help test moods, hooks and market angles faster.'
    },
    {
      label: 'Regional Sound',
      title: 'Local identity for global networks',
      description: 'Music concepts inspired by culture, region and visual identity, then adapted for international discovery.'
    }
  ];

  readonly showreelClips: ShowreelClip[] = [
    {
      label: 'Relaxing Music',
      title: 'Sleep Visual Room',
      meta: 'Long-form ambient release',
      accent: 'cyan'
    },
    {
      label: 'AI Music',
      title: 'Mood Test Session',
      meta: 'Fast hook and texture iteration',
      accent: 'violet'
    },
    {
      label: 'Regional Music',
      title: 'Vietnam Sound Story',
      meta: 'Local identity, global packaging',
      accent: 'gold'
    },
    {
      label: 'Cinema & Film',
      title: 'Trailer Cut Package',
      meta: 'Story-led visual and audio assets',
      accent: 'rose'
    }
  ];

  readonly soundLayers = ['Ambient bed', 'AI variation', 'Regional motif', 'Cinematic cue'];
  readonly audioBars = Array.from({ length: 18 });

  readonly markets = ['Vietnam', 'United States', 'South Korea', 'Taiwan', 'Philippines', 'Global Networks'];

  readonly partners = Array.from({ length: 12 }, (_, index) => ({
    name: `Partner ${index + 1}`,
    image: `/partner${index + 1}.png`
  }));

  readonly collaborationModels: CollaborationModel[] = [
    {
      title: 'Catalog & Channel Growth',
      description: 'For partners who need music or animation channels with clearer packaging, positioning and growth routines.'
    },
    {
      title: 'Original Content Slate',
      description: 'For networks looking to develop repeatable content lines around relaxing music, AI audio or regional identity.'
    },
    {
      title: 'Distribution Partnership',
      description: 'For labels, MCNs and platforms that want a Vietnam-based creative operator with international readiness.'
    }
  ];

  get partnerMarqueeRows() {
    const firstRow = this.partners.slice(0, 6);
    const secondRow = this.partners.slice(6);
    return [
      [...firstRow, ...firstRow],
      [...secondRow, ...secondRow]
    ];
  }

  get showreelLoop() {
    return [...this.showreelClips, ...this.showreelClips];
  }

  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
    );

    this.elementRef.nativeElement.querySelectorAll('.reveal').forEach(element => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
