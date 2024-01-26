export abstract class BaseStorage {
  constructor(protected readonly KEY: string) {}

  has(): boolean {
    return localStorage && !!localStorage.getItem(this.KEY);
  }

  get(): string {
    return localStorage.getItem(this.KEY) ?? '';
  }

  set(value: string): void {
    this.validate(value);
    localStorage.setItem(this.KEY, value);
  }

  abstract validate(value: string): void;
}
