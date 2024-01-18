import BackendUrlInput from '@/components/backend-url-input';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="my-2">
        <Component {...pageProps} />
      </div>
      <div className="sticky bottom-0 h-24">
        <BackendUrlInput />
      </div>
    </div>
  );
}
