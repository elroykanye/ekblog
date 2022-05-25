export interface PostComment {
  id: number;
  content: string;
  createdAt?: string;
  authorName: string;
  authorEmail: string;
  postId: number;
}
