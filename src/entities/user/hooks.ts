import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $user, $isAuthProcess, $isAuthorized } from './user';

export const useUser = (): StoreValue<typeof $user> => useStore($user);

export const useIsAuthorized = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);

export const useIsAuthProcess = (): StoreValue<typeof $isAuthProcess> =>
  useStore($isAuthProcess);
