import { IUserInfo } from '@entities/user';

export interface IMessageData {
  chat_uid: string;
  creator_uid: string;
  text: string;
}

export interface IMessage {
  uid: string;
  chat_uid: string;
  created: number;
  text: string;
  creator: IUserInfo;
}
