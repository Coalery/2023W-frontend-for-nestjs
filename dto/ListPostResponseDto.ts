export interface PostResponse {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface ListPostResponseDto {
  count: number;
  posts: PostResponse[];
}
