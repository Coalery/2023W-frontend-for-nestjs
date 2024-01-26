import axios from 'axios';
import { BaseStorage } from './base-storage';

export class TokenStorage extends BaseStorage {
  constructor() {
    super('token');
  }

  load(): void {
    const value = this.get();
    axios.defaults.headers['Authorization'] = `Bearer ${value}`;
  }

  set(value: string): void {
    super.set(value);
    axios.defaults.headers['Authorization'] = `Bearer ${value}`;
  }

  validate(value: string): void {}
}
export const tokenStorage = new TokenStorage();
