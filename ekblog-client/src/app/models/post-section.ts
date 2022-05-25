export interface PostSection {
  id: number;
  order: number;
  content: string;
  createdAt: string;
  sectionType: SectionType;
  postId: number;
}

enum SectionType {
  PARAGRAPH, BLOCKQUOTE
}
