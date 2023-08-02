import { IUser } from './iuser';

export interface IResponse {
  accessToken: string;
  user: IUser;
}
