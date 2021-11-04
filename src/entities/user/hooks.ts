import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import {
  $user,
  $isAuthProcess,
  $isAuthorized,
  $userInfo,
  $isUserInfoLoading,
} from './user';

export const useUser = (): StoreValue<typeof $user> => useStore($user);

export const useIsAuthorized = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);

export const useIsAuthProcess = (): StoreValue<typeof $isAuthProcess> =>
  useStore($isAuthProcess);

export const useUserInfo = (): StoreValue<typeof $userInfo> =>
  useStore($userInfo);

export const useUserInfoLoading = (): StoreValue<typeof $isUserInfoLoading> =>
  useStore($isUserInfoLoading);
