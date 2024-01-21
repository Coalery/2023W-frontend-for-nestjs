import { timeElapsed } from '@/util/time';

type Props = {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
};

export default function Comment({ id, userId, content, createdAt }: Props) {
  return (
    <div className="flex justify-between m-4">
      <p>{content}</p>
      <p>{timeElapsed(createdAt)}</p>
    </div>
  );
}
