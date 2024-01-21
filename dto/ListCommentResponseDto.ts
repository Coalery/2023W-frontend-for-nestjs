export interface ListCommentResponseDto {
  count: number;
  comments: {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: Date;
  }[];
}
