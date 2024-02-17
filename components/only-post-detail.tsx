import { timeElapsed } from '@/util/time';
import EditModal from './edit-modal';
import { useState } from 'react';

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  onEdit: () => void;
};

export default function OnlyPostDetail({
  id,
  title,
  content,
  createdAt,
  onEdit,
}: Props) {
  const [postEditOpen, setPostEditOpen] = useState<boolean>(false);

  const handlePostEditClose = () => {
    setPostEditOpen(false);
    onEdit();
  };

  return (
    <>
      <button onClick={() => setPostEditOpen(true)}>
        <div className="p-4 border rounded-lg shadow-sm bg-white w-96">
          <h2 className="text-lg font-semibold line-clamp-1 text-start">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-500 break-all text-start">
            {content}
          </p>

          <div className="mt-4 flex items-center justify-end">
            <span className="text-sm text-gray-500">
              {timeElapsed(createdAt)}
            </span>
          </div>
        </div>
      </button>
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
