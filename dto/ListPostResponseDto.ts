export interface ListPostResponseDto {
  count: number;
  posts: {
    id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: Date;
    likeCount: number;
    commentCount: number;
  }[];
}
