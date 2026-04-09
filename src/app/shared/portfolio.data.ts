export interface SkillItem {
  icon: string;
  titleKey: string;
  points: string[];
}

export interface ExperienceItem {
  period: string;
  titleKey: string;
  orgKey: string;
  summaryKey: string;
  highlights: string[];
}

export interface ProjectItem {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}

export const ABOUT_POINTS = [
  'about.points.modular',
  'about.points.designSystems',
  'about.points.performance',
  'about.points.cleanCode'
];

export const SKILLS: SkillItem[] = [
  {
    icon: 'fa-solid fa-laptop-code',
    titleKey: 'skills.cards.frontend.title',
    points: [
      'skills.cards.frontend.angular',
      'skills.cards.frontend.typescript',
      'skills.cards.frontend.javascript',
      'skills.cards.frontend.htmlcss'
    ]
  },
  {
    icon: 'fa-solid fa-palette',
    titleKey: 'skills.cards.ui.title',
    points: [
      'skills.cards.ui.bootstrap',
      'skills.cards.ui.tailwind',
      'skills.cards.ui.flowbite',
      'skills.cards.ui.responsive',
      'skills.cards.ui.grid'
    ]
  },
  {
    icon: 'fa-solid fa-gears',
    titleKey: 'skills.cards.state.title',
    points: [
      'skills.cards.state.ngrx'
    ]
  },
  {
    icon: 'fa-solid fa-diagram-project',
    titleKey: 'skills.cards.architecture.title',
    points: [
      'skills.cards.architecture.nx',
      'skills.cards.architecture.microfrontend',
      'skills.cards.architecture.modular',
      'skills.cards.architecture.rest'
    ]
  },
  {
    icon: 'fa-solid fa-toolbox',
    titleKey: 'skills.cards.tools.title',
    points: [
      'skills.cards.tools.git',
      'skills.cards.tools.postman',
      'skills.cards.tools.vscode',
      'skills.cards.tools.agile'
    ]
  },
  {
    icon: 'fa-solid fa-rocket',
    titleKey: 'skills.cards.engineering.title',
    points: [
      'skills.cards.engineering.componentBased',
      'skills.cards.engineering.stateManagement',
      'skills.cards.engineering.responsiveUi',
      'skills.cards.engineering.cleanCode'
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jul 2025 – Jul 2026',
    titleKey: 'experience.items.devTrack.title',
    orgKey: 'experience.items.devTrack.org',
    summaryKey: 'experience.items.devTrack.summary',
    highlights: [
      'experience.items.devTrack.highlights.1',
      'experience.items.devTrack.highlights.2',
      'experience.items.devTrack.highlights.3',
      'experience.items.devTrack.highlights.4',
      'experience.items.devTrack.highlights.5',
      'experience.items.devTrack.highlights.6'
    ]
  },
  {
    period: 'Aug 2025 – Sep 2025',
    titleKey: 'experience.items.freelancePractice.title',
    orgKey: 'experience.items.freelancePractice.org',
    summaryKey: 'experience.items.freelancePractice.summary',
    highlights: [
      'experience.items.freelancePractice.highlights.1',
      'experience.items.freelancePractice.highlights.2',
      'experience.items.freelancePractice.highlights.3',
      'experience.items.freelancePractice.highlights.4'
    ]
  },
  {
    period: 'Jan 2024 – Present',
    titleKey: 'experience.items.specialization.title',
    orgKey: 'experience.items.specialization.org',
    summaryKey: 'experience.items.specialization.summary',
    highlights: [
      'experience.items.specialization.highlights.1',
      'experience.items.specialization.highlights.2',
      'experience.items.specialization.highlights.3'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    titleKey: 'projects.items.adminDashboard.title',
    descriptionKey: 'projects.items.adminDashboard.description',
    imageUrl:
      './assets/images/flowerApp.png',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Tailwind','Nx','ngx-translate','JWT','REST API','Signals'],
    liveUrl: 'https://rose-applications-c5rw.vercel.app/home',
    repoUrl: 'https://github.com/ahmedgamal-2050/angular-c4-team3'
  },
  {
    titleKey: 'projects.items.taskPlatform.title',
    descriptionKey: 'projects.items.taskPlatform.description',
    imageUrl:
      './assets/images/Place_Recommendation.png',
    technologies: ['Angular', 'Boots', 'SCSS', 'Firebase','JWT','REST API'],
    liveUrl: 'https://example.com/task-platform',
    repoUrl: 'https://github.com/FaridaEmad/GraduationProject'
  },
  {
    titleKey: 'projects.items.travelBooking.title',
    descriptionKey: 'projects.items.travelBooking.description',
    imageUrl:
      './assets/images/E-commerce.jpg',
    technologies: ['Angular', 'REST API', 'Tailwind','JWT'],
    liveUrl: 'https://finalprojectecommerc.netlify.app/login',
    repoUrl: 'https://github.com/SaraAhmed34/E-Commerce-Route'
  }
];
