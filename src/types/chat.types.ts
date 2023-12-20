import {IUser} from './user.types';

export interface IMessage {
  id: number;
  text: string;
  createdAt: string;
  sender: {
    data: {
      attributes: IUser;
    };
  };
}

export interface IChat {
  attributes: IStrapiChat;
  id: number;
  messages: IMessage[];
  participants: IUser[];
}

export interface IStrapiChat {
  messages: {data: IStrapiResponse<IMessage>[]};
  participants: {data: IStrapiResponse<IUser>[]};
}

export interface IStrapiResponse<T> {
  attributes: T;
  id: number;
}
