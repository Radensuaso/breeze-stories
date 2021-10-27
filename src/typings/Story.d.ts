import { Author } from "./Author";

export interface Story {
  _id: string;
  author: Author;
  title: string;
  categories: string[];
  story: string;
  hearts: Author[];
  storyImage: string;
  createdAt: string;
  updatedAt: string;
}
