export type Language = 'jp' | 'vn';

export interface ContentSection {
  title: string;
  summary: string;
  image: string;
  link: string;
}

export interface SiteContent {
  nav: {
    about: string;
    overview: string;
    gallery: string;
    flipbook: string;
    team: string;
  };
  hero: {
    title: string;
    subtitle: string;
    group: string;
    description: string;
    readButton: string;
    exploreButton: string;
  };
  about: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    sections: {
      origin: ContentSection;
      legends: ContentSection;
      rituals: ContentSection;
      contemporary: ContentSection;
    };
  };
  flipbook: {
    title: string;
    description: string;
    button: string;
  };
  value: {
    title: string;
    description: string;
  };
  team: {
    title: string;
    group: string;
    members: string[];
  };
  footer: {
    rights: string;
  };
}
