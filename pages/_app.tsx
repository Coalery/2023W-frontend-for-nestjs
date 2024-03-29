import BackendUrlInput from '@/components/backend-url-input';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { tokenStorage } from '@/common/token';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    tokenStorage.load();
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <div className="m-2">
        <Component {...pageProps} />
      </div>
      <div className="sticky bottom-0 h-24">
        <BackendUrlInput />
      </div>
    </div>
  );
}
