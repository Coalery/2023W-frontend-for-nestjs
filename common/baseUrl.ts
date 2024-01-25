import { BaseStorage } from './base-storage';

class UrlStorage extends BaseStorage {
  constructor() {
    super('backendUrl');
  }

  validate(value: string): void {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(value)) {
      throw new Error('잘못된 형식의 URL입니다.');
    }
  }
}
const urlStorage = new UrlStorage();

export function wrapRequestUrl(url: string): string {
  if (!url.startsWith('/')) {
    url = `/${url}`;
  }

  if (!urlStorage.has()) {
    throw new Error('URL을 불러올 수 없습니다. 먼저 URL을 설정해주세요.');
  }

  const baseUrl = urlStorage.get();
  return `${baseUrl}${url}`;
}

export { urlStorage };
