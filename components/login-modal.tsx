import { useState } from 'react';
import axios from 'axios';

import { wrapRequestUrl } from '@/common/baseUrl';
import CloseIcon from '@/components/icon/close-icon';

type Props = {
  open: boolean;
  close: () => void;
};

export default function LoginModal({ open, close }: Props) {
  const [signUpMode, setSignUpMode] = useState<boolean>(false);

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const clearInput = () => {
    setUserId('');
    setPassword('');
  };

  const toggleSignUpMode = () => {
    setSignUpMode((prev) => !prev);
    clearInput();
  };

  const signUp = async () => {
    try {
      await axios.post(wrapRequestUrl(`/user`), { userId, password });
      clearInput();
      close();
    } catch (error) {}
  };

  const signIn = async () => {
    try {
      await axios.post(wrapRequestUrl(`/user/sign-in`), { userId, password });
      clearInput();
      close();
    } catch (error) {}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signUpMode) {
      signUp();
    } else {
      signIn();
    }
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
            <h3 className="text-xl font-semibold text-gray-900">
              {signUpMode ? '회원 가입' : '로그인'}
            </h3>
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
                  아이디
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="lery"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {signUpMode ? '회원 가입' : '로그인'}
              </button>
              <div className="text-sm font-medium text-gray-500">
                {signUpMode
                  ? '이미 회원이신가요? '
                  : '아직 회원이 아니신가요? '}
                <a
                  className="text-blue-700 hover:underline"
                  onClick={toggleSignUpMode}
                >
                  {signUpMode ? '로그인하기' : '가입하기'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
