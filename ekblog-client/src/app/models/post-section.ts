export interface PostSection {
  id: number;
  order: number;
  content: string;
  createdAt: string;
  sectionType: SectionType;
  postId: number;
}

export enum SectionType {
  PARAGRAPH, BLOCKQUOTE
}
