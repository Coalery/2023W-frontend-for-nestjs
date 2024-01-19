import { timeElapsed } from '@/util/time';
import BookmarkIcon from './icon/bookmark-icon';
import CommentIcon from './icon/comment-icon';
import HeartIcon from './icon/heart-icon';

type Props = {
  title: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  bookmarkCount: number;
  commentCount: number;
};

export default function Post({
  title,
  content,
  createdAt,
  likeCount,
  bookmarkCount,
  commentCount,
}: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white w-96">
      <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 break-all line-clamp-3">
        {content}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <HeartIcon count={likeCount} />
          <BookmarkIcon count={bookmarkCount} />
          <CommentIcon count={commentCount} />
        </div>
        <span className="text-sm text-gray-500">{timeElapsed(createdAt)}</span>
      </div>
    </div>
  );
}
