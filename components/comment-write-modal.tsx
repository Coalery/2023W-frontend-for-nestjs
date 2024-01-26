import { useState } from 'react';
import axios from 'axios';

import { wrapRequestUrl } from '@/common/baseUrl';
import CloseIcon from '@/components/icon/close-icon';

type Props = {
  open: boolean;
  close: () => void;
  postId: string;
};

export default function CommentWriteModal({ open, close, postId }: Props) {
  const [content, setContent] = useState<string>('');

  const clearInput = () => {
    setContent('');
  };

  const createComment = async () => {
    try {
      await axios.post(wrapRequestUrl(`/comments`), {
        postId,
        content,
      });
      clearInput();
      close();
    } catch (error) {}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment();
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
            <h3 className="text-lg font-semibold text-gray-900">댓글 쓰기</h3>
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
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="댓글을 입력해주세요"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                댓글 올리기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
