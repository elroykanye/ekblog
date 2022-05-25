export interface PostSection {
  id: number;
  order: number;
  content: string;
  sectionType: SectionType;
  postId: number;
}

enum SectionType {
  DIV, BLOCK
}
