import { Author } from "./Author";

export interface SubComment {
  _id: string;
  author: Author;
  subComment: string;
  hearts: Author[];
  createdAt: string;
  updatedAt: string;
}
