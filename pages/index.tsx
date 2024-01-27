import axios from 'axios';
import { useState, useCallback, useEffect, useRef } from 'react';

import { wrapRequestUrl } from '@/common/baseUrl';
import ErrorNotifier from '@/components/error';
import PencilIcon from '@/components/icon/pencil-icon';
import PersonIcon from '@/components/icon/person-icon';
import Post from '@/components/post';
import { ListPostResponseDto, PostResponse } from '@/dto/ListPostResponseDto';
import Link from 'next/link';
import LoginModal from '@/components/login-modal';
import WriteModal from '@/components/write-modal';

export default function Home() {
  const limit = 5;
  const count = useRef(-1);
  const offset = useRef(0);
  const [posts, setPosts] = useState<PostResponse[]>(new Array<PostResponse>());
  const [error, setError] = useState<any>(null);

  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [writeOpen, setWriteOpen] = useState<boolean>(false);

  const getPostList = useCallback((reset: boolean) => {
    try {
      offset.current = reset ? 0 : offset.current + limit;
      axios
        .get(wrapRequestUrl(`/posts`), {
          params: { offset: offset.current, limit },
        })
        .then((res) => {
          const data: ListPostResponseDto = res.data;

          const posts = data.posts;
          setPosts((prev) => (reset ? posts : prev.concat(posts)));
          count.current = data.count;
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  const handleCloseWriteModal = () => {
    setWriteOpen(false);
    getPostList(true);
  };

  useEffect(() => {
    getPostList(true);
  }, [getPostList]);

  return (
    <>
      <div className="sticky top-0 top-menu-bar flex justify-between items-center p-2 w-96 h-12 mb-2">
        <button onClick={() => setLoginOpen(true)}>
          <PersonIcon />
        </button>
        <button onClick={() => setWriteOpen(true)}>
          <PencilIcon />
        </button>
      </div>
      <main className="space-y-4">
        {error && <ErrorNotifier error={error} />}
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Post
                id={post.id}
                title={post.title}
                content={post.content}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                createdAt={new Date(post.createdAt)}
              />
            </Link>
          </div>
        ))}
        {posts.length !== count.current && (
          <button onClick={() => getPostList(false)}>
            <div className="w-96 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex justify-center items-center">
              <span className="text-gray-500 text-sm">더 불러오기</span>
            </div>
          </button>
        )}
      </main>
      <LoginModal open={loginOpen} close={() => setLoginOpen(false)} />
      <WriteModal open={writeOpen} close={handleCloseWriteModal} />
    </>
  );
}
