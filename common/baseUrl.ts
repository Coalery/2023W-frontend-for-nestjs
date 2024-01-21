class UrlStorage {
  private readonly KEY = 'backendUrl';

  has(): boolean {
    return localStorage && !!localStorage.getItem(this.KEY);
  }

  get(): string {
    return localStorage.getItem(this.KEY) ?? '';
  }

  set(value: string): void {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(value)) {
      throw new Error('잘못된 형식의 URL입니다.');
    }

    localStorage.setItem(this.KEY, value);
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
