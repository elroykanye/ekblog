import {PostSection} from "./post-section";

export interface Post {
  id: number;
  imageUrl: string;
  title: string;
  sections: PostSection[];
  numberOfComments?: number;
}
