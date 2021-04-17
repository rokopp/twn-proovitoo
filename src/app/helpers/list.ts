import {Images} from './article';
export interface ListResponse {
  stats: Stats;
  list: List[];
}

export interface Stats {
  total: number;
  results: number;
  offset: number;
  limit: number;
}

export interface List {
  id: string;
  title: string;
  email: string;
  firstname: string;
  surname: string;
  author: string;
  sex: string;
  personal_code: number;
  phone: number;
  date: number;
  image: Images;
  images: Images[];
  intro: string;
  body: string;
  tags: string[];
  boolean: boolean;
  expanded: boolean;
}
