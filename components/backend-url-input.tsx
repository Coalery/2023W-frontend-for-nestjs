import { urlStorage } from '@/common/baseUrl';
import { useEffect, useState } from 'react';

export default function BackendUrlInput() {
  const [backendUrl, setBackendUrl] = useState('');

  useEffect(() => {
    const backendUrl = urlStorage.get();
    setBackendUrl(backendUrl);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBackendUrl(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    urlStorage.set(backendUrl);
    window.location.reload();
  };

  return (
    <form
      className="backend-url-input-container p-2 w-96 h-24"
      onSubmit={handleSubmit}
    >
      <div className="mb-1.5">
        <label
          className="text-gray-500 font-bold text-sm"
          htmlFor="backend-url-input"
        >
          백엔드 URL을 입력하고 엔터를 눌러주세요!
        </label>
      </div>
      <div>
        <input
          id="backend-url-input"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-200"
          type="text"
          value={backendUrl}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
