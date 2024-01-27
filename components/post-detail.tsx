import { timeElapsed } from '@/util/time';
import CommentIcon from './icon/comment-icon';
import HeartIcon from './icon/heart-icon';
import EditModal from './edit-modal';
import { useState } from 'react';
import axios from 'axios';
import { wrapRequestUrl } from '@/common/baseUrl';

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  onEdit: () => void;
};

export default function PostDetail({
  id,
  title,
  content,
  createdAt,
  likeCount,
  commentCount,
  isLiked,
  onEdit,
}: Props) {
  const [postEditOpen, setPostEditOpen] = useState<boolean>(false);

  const createLike = async () => {
    try {
      await axios.post(wrapRequestUrl(`/posts/${id}/likes`));
    } catch (e) {
      console.error(e);
    }
  };

  const removeLike = async () => {
    try {
      await axios.delete(wrapRequestUrl(`/posts/${id}/likes`));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePostEditClose = () => {
    setPostEditOpen(false);
    onEdit();
  };

  const handleHeartClick = () => {
    if (isLiked) {
      removeLike().then(onEdit);
    } else {
      createLike().then(onEdit);
    }
  };

  return (
    <>
      <div className="p-4 border rounded-lg shadow-sm bg-white w-96">
        <button onClick={() => setPostEditOpen(true)}>
          <h2 className="text-lg font-semibold line-clamp-1 text-start">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-500 break-all text-start">
            {content}
          </p>
        </button>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={handleHeartClick}>
              <HeartIcon count={likeCount} fill={isLiked} />
            </button>
            <CommentIcon count={commentCount} />
          </div>
          <span className="text-sm text-gray-500">
            {timeElapsed(createdAt)}
          </span>
        </div>
      </div>
      <EditModal
        open={postEditOpen}
        close={handlePostEditClose}
        postId={id}
        title={title}
        content={content}
      />
    </>
  );
}
