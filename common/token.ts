import axios from 'axios';
import { BaseStorage } from './base-storage';

export class TokenStorage extends BaseStorage {
  constructor() {
    super('token');
  }

  load(): void {
    const value = this.get();
    if (value) {
      axios.defaults.headers['Authorization'] = `Bearer ${value}`;
    }
  }

  getUserId(): string | null {
    const value = this.get();
    if (!value) {
      return null;
    }

    try {
      const payload = value.split('.')[1];
      const payloadDecoded = atob(payload);
      const payloadJson = JSON.parse(payloadDecoded);
      return payloadJson['userId'];
    } catch (e) {
      return null;
    }
  }

  set(value: string): void {
    super.set(value);
    axios.defaults.headers['Authorization'] = `Bearer ${value}`;
  }

  validate(value: string): void {}
}
export const tokenStorage = new TokenStorage();
