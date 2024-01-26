import { timeElapsed } from '@/util/time';
import CommentEditModal from './comment-edit-modal';
import { useState } from 'react';

type Props = {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  close: () => void;
};

export default function Comment({
  id,
  userId,
  content,
  createdAt,
  close,
}: Props) {
  const [commentEditOpen, setCommentEditOpen] = useState<boolean>(false);

  const handleClose = () => {
    setCommentEditOpen(false);
    close();
  };

  return (
    <>
      <button className="w-full" onClick={() => setCommentEditOpen(true)}>
        <div className="flex justify-between m-4">
          <p className="text-sm">{content}</p>
          <p className="text-sm">{timeElapsed(createdAt)}</p>
        </div>
      </button>
      <CommentEditModal
        commentId={id}
        content={content}
        open={commentEditOpen}
        close={handleClose}
      />
    </>
  );
}
