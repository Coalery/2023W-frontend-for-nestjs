import { timeElapsed } from '@/util/time';
import CommentIcon from './icon/comment-icon';
import HeartIcon from './icon/heart-icon';

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  commentCount: number;
};

export default function Post({
  title,
  content,
  createdAt,
  likeCount,
  commentCount,
}: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white w-96">
      <h2 className="text-lg font-semibold line-clamp-1 text-start">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 break-all text-start line-clamp-2">
        {content}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <HeartIcon count={likeCount} />
          <CommentIcon count={commentCount} />
        </div>
        <span className="text-sm text-gray-500">{timeElapsed(createdAt)}</span>
      </div>
    </div>
  );
}
