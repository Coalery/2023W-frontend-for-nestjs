import { wrapRequestUrl } from '@/common/baseUrl';
import Post from '@/components/post';
import Comment from '@/components/comment';
import { GetPostResponseDto } from '@/dto/GetPostResponseDto';
import { ListCommentResponseDto } from '@/dto/ListCommentResponseDto';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import ErrorNotifier from '@/components/error';

export default function Home() {
  const router = useRouter();
  const postId = router.query.postId;

  const [postData, setPostData] = useState<GetPostResponseDto | null>(null);
  const [commentData, setCommentData] = useState<ListCommentResponseDto | null>(
    null
  );
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    if (!postId) return;

    try {
      axios.get(wrapRequestUrl(`/posts/${postId}`)).then((res) => {
        setPostData(res.data);
      });
      axios
        .get(wrapRequestUrl(`/posts/${postId}/comments`), {
          params: {
            limit: 10,
            offset: 0,
          },
        })
        .then((res) => {
          setCommentData(res.data);
        });
    } catch (error) {
      setError(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="m-4">
      {error && <ErrorNotifier error={error} />}
      {postData && (
        <Post
          id={postData.id}
          title={postData.title}
          content={postData.content}
          createdAt={new Date(postData.createdAt)}
          likeCount={postData.likeCount}
          commentCount={postData.commentCount}
        />
      )}
      {commentData &&
        commentData.comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            userId={comment.userId}
            content={comment.content}
            createdAt={new Date(comment.createdAt)}
          />
        ))}
    </div>
  );
}
