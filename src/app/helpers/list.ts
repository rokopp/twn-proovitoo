import {Images} from './article';
export interface ListResponse {
  stats: string[];
  list: List[];
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
}
