import {IChat} from './chat.types';

export interface IUser {
  username: string | undefined;
  id: number;
  email: string;
  confirmed: boolean;
  role: string;
  friends: IUser[];
  avatar: {
    data: {
      attributes: {
        url: string;
      }
    }
  } | null;
}

export type UserJwt = {
  user: IUser;
  jwt: string;
};

export interface IResponceFullUser extends IUser {
  chats: IChat;
}
