export interface GetPostResponseDto {
  id: string;
  userId: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  createdAt: Date;
}
