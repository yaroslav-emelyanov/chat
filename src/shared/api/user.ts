import { db } from '@shared/firebase';
import { set, ref, onValue, child } from 'firebase/database';
import { IUserInfo, IUserInfoData } from '@entities/user';

export const createUser = (uid: string, data: IUserInfoData) =>
  set(ref(db, `users/${uid}`), data);

export const subscribeOnUserInfo = (
  uid: string,
  setUserInfo: (userInfo: IUserInfo) => void
) =>
  onValue(child(ref(db, 'users'), uid), (snapshot) => {
    setUserInfo({ uid: snapshot.key, ...snapshot.val() });
  });

export const getUserInfo = (
  uid: string,
  setUserInfo: (userInfo: IUserInfo) => void
) =>
  onValue(
    child(ref(db, 'users'), uid),
    (snapshot) => {
      setUserInfo({ uid: snapshot.key, ...snapshot.val() });
    },
    { onlyOnce: true }
  );
