export interface IChatData {
  name: string;
  creator_uid: string;
}

export interface IChat extends IChatData {
  uid: string;
}

export interface IChatUserData {
  chat_uid: string;
  user_uid: string;
}
