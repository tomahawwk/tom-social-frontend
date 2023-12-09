import {IChat} from './chat.types';

export interface IUser {
  id: number;
  attributes: {
    username: string;
    email: string;
    confirmed: boolean;
    role: string;
    friends: IUser[];
    avatar: {
      url: string;
    } | null;
  };
}

export type UserJwt = {
  user: IUser;
  jwt: string;
};

export interface IResponceFullUser extends IUser {
  chats: IChat;
}
