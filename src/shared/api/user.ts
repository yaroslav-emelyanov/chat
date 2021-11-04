import { IUserInfo } from '@entities/user';
import { db } from '@shared/firebase';
import { set, ref, onValue } from 'firebase/database';

export const createUser = (uid: string, data: IUserInfo) =>
  set(ref(db, `users/${uid}`), data);

export const getUserInfo = (
  uid: string,
  setUserInfo: (userInfo: IUserInfo) => void
) =>
  onValue(ref(db, `users/${uid}`), (snapshot) => {
    const data = snapshot.val();
    setUserInfo(data);
  });
