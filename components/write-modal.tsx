import { useState } from 'react';
import axios from 'axios';

import { wrapRequestUrl } from '@/common/baseUrl';
import CloseIcon from '@/components/icon/close-icon';

type Props = {
  open: boolean;
  close: () => void;
};

export default function WriteModal({ open, close }: Props) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const clearInput = () => {
    setTitle('');
    setContent('');
  };

  const createPost = async () => {
    try {
      await axios.post(wrapRequestUrl(`/posts`), { title, content });
      clearInput();
      close();
    } catch (error) {}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost();
  };

  return (
    <div
      tabIndex={-1}
      hidden={!open}
      className="fixed top-12 z-50 justify-center items-center w-96"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">글 쓰기</h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 ms-auto inline-flex justify-center items-center"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  제목
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="글의 제목을 입력해주세요"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  내용
                </label>
                <textarea
                  placeholder="글의 내용을 입력해주세요"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                포스트 올리기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
