import { UserInterface } from '../../types/User.interface';

export interface AuthStateInterface {
  error: string;
  isLoading: boolean;
  user: UserInterface | null;
}
