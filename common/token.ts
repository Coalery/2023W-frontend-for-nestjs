import { BaseStorage } from './base-storage';

export class TokenStorage extends BaseStorage {
  constructor() {
    super('token');
  }

  validate(value: string): void {}
}
export const tokenStorage = new TokenStorage();
