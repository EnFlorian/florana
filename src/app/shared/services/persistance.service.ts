import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error occurred while setting data to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      console.error('Error occurred while getting data from localStorage', e);
      return null;
    }
  }

  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error occured while removing data from localStorage', e);
    }
  }
}
