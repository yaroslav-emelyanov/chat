import { User } from '@firebase/auth';
import { createEvent, createStore } from 'effector';
import { IUserInfo } from './types';

export const setUser = createEvent<User | null>();

export const $user = createStore<User | null>(null).on(
  setUser,
  (_, user) => user
);

export const setUserInfo = createEvent<IUserInfo>();

export const $userInfo = createStore<IUserInfo>({
  uid: '',
  name: '',
  email: '',
}).on(setUserInfo, (_, userInfo) => userInfo);

export const $isAuthProcess = createStore(true).on(setUser, () => false);

export const $isAuthorized = $user.map(Boolean);

export const $isUserInfoLoading = createStore(true).on(
  setUserInfo,
  () => false
);
