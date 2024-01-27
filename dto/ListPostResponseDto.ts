export interface PostResponse {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  commentCount: number;
}

export interface ListPostResponseDto {
  count: number;
  posts: PostResponse[];
}
