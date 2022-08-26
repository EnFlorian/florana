import { UserInterface } from '../../types/User.interface';

export interface AuthStateInterface {
  error: string;
  loading: boolean;
  user: UserInterface | null;
}
