import { wrapRequestUrl } from '@/common/baseUrl';
import Post from '@/components/post';
import Comment from '@/components/comment';
import { GetPostResponseDto } from '@/dto/GetPostResponseDto';
import { ListCommentResponseDto } from '@/dto/ListCommentResponseDto';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import ErrorNotifier from '@/components/error';
import CommentWriteModal from '@/components/comment-write-modal';
import PencilIcon from '@/components/icon/pencil-icon';
import PrevIcon from '@/components/icon/prev-icon';
import EditModal from '@/components/edit-modal';

export default function Home() {
  const router = useRouter();
  const postId = router.query.postId as string;

  const [postData, setPostData] = useState<GetPostResponseDto | null>(null);
  const [commentData, setCommentData] = useState<ListCommentResponseDto | null>(
    null
  );
  const [error, setError] = useState<any>(null);

  const [postEditOpen, setPostEditOpen] = useState<boolean>(false);
  const [commentWriteOpen, setCommentWriteOpen] = useState<boolean>(false);

  const loadData = useCallback(async () => {
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

  const handlePostEditClose = () => {
    setPostEditOpen(false);
    loadData();
  };

  const handleCommentWriteClose = () => {
    setCommentWriteOpen(false);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <div className="sticky top-0 top-menu-bar flex justify-between items-center p-2 w-96 h-12 mb-2">
        <button onClick={() => router.back()}>
          <PrevIcon />
        </button>
        <button onClick={() => setCommentWriteOpen(true)}>
          <PencilIcon />
        </button>
      </div>
      <div>
        {error && <ErrorNotifier error={error} />}
        {postData && (
          <>
            <button onClick={() => setPostEditOpen(true)}>
              <Post
                id={postData.id}
                title={postData.title}
                content={postData.content}
                createdAt={new Date(postData.createdAt)}
                likeCount={postData.likeCount}
                commentCount={postData.commentCount}
              />
            </button>
            <EditModal
              open={postEditOpen}
              close={handlePostEditClose}
              postId={postData.id}
              title={postData.title}
              content={postData.content}
            />
          </>
        )}
        {commentData &&
          commentData.comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              userId={comment.userId}
              content={comment.content}
              createdAt={new Date(comment.createdAt)}
              close={loadData}
            />
          ))}
        <CommentWriteModal
          postId={postId}
          open={commentWriteOpen}
          close={handleCommentWriteClose}
        />
      </div>
    </>
  );
}
