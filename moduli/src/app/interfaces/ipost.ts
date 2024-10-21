import { iUser } from './iuser';

export interface iPost {
  id: number;
  name: string;
  description: string;
  image: string;
  active: boolean;
  user: iUser;
}
