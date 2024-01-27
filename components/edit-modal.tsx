import { useState } from 'react';
import axios from 'axios';

import { wrapRequestUrl } from '@/common/baseUrl';
import CloseIcon from '@/components/icon/close-icon';

type Props = {
  open: boolean;
  close: () => void;
  postId: string;
  title: string;
  content: string;
};

export default function EditModal({
  open,
  close,
  postId,
  title: defaultTitle,
  content: defaultContent,
}: Props) {
  const [title, setTitle] = useState<string>(defaultTitle);
  const [content, setContent] = useState<string>(defaultContent);

  const clearInput = () => {
    setTitle('');
    setContent('');
  };

  const updatePost = async () => {
    try {
      await axios.put(wrapRequestUrl(`/posts/${postId}`), { title, content });
      clearInput();
      close();
    } catch (error) {}
  };

  const deletePost = async () => {
    try {
      await axios.delete(wrapRequestUrl(`/posts/${postId}`));
      clearInput();
      close();
    } catch (error) {}
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
            <h3 className="text-lg font-semibold text-gray-900">글 수정하기</h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 ms-auto inline-flex justify-center items-center"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
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
              <label className="block mb-2 text-sm font-medium text-gray-900">
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
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={updatePost}
            >
              글 수정하기
            </button>
            <button
              type="submit"
              className="w-full text-white bg-rose-400 hover:bg-rose-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={deletePost}
            >
              글 제거하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
