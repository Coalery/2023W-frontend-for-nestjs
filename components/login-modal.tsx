import { useState } from 'react';
import CloseIcon from './icon/close-icon';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({ open, onClose }: Props) {
  const [signUpMode, setSignUpMode] = useState<boolean>(false);

  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const toggleSignUpMode = () => {
    setSignUpMode((prev) => !prev);
    setUserId('');
    setUserPassword('');
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
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
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
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
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
