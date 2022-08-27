import { UserInterface } from 'src/app/shared/types/User.interface';
import { users } from './data';

export const login = (
  email: string,
  password: string
): Promise<UserInterface> => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      return resolve(user);
    }
    return reject('User not found');
  });
};

export const subscribe = (email: string): Promise<boolean> => {
  return new Promise((resolve, reject) => resolve(true));
};
