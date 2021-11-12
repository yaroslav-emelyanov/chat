export interface IUserInfoData {
  name: string;
  email: string;
}

export interface IUserInfo extends IUserInfoData {
  uid: string;
}
