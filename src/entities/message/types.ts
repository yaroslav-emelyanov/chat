export interface IMessageData {
  chat_uid: string;
  creator_uid: string;
  text: string;
}

export interface IMessage extends IMessageData {
  uid: string;
}
