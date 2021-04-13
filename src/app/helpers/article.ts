export interface Article {
  id: string;
  title: string;
  author: string;
  date: number;
  images: Images[];
  intro: string;
  body: string;
  tags: string[];
}

export interface Images {
  large: string;
  medium: string;
  small: string;
  title: string;
  alt: string;
}
