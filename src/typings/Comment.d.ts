import { Author } from "./Author";
import { SubComment } from "./SubComment";

export interface Comment {
  _id: string;
  story: string;
  author: Author;
  comment: string;
  hearts: string[];
  subComments: SubComment[];
  createdAt: string;
  updatedAt: string;
}
