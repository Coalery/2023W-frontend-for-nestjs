import PencilIcon from '@/components/icon/pencil-icon';
import PersonIcon from '@/components/icon/person-icon';
import Post from '@/components/post';

export default function Home() {
  return (
    <>
      <div className="sticky top-0 top-menu-bar flex justify-between items-center p-2 w-96 h-12 mb-2">
        <PersonIcon />
        <PencilIcon />
      </div>
      <main className="space-y-4">
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
        <Post
          title="타이틀빰빰"
          content="빰빰바밤빰"
          likeCount={1234}
          bookmarkCount={1234}
          commentCount={1234}
          createdAt={new Date(2024, 0, 1, 0, 0, 0)}
        />
      </main>
    </>
  );
}
