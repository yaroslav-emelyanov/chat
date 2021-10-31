import { createEffect } from 'effector';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { handleError } from '@shared/utils';
import { setUser } from '@entities/user';
import { auth } from '@shared/firebase';

import { IForm } from './types';

export const loginFx = createEffect<IForm, UserCredential, FirebaseError>(
  ({ email, password }) => signInWithEmailAndPassword(auth, email, password)
);

loginFx.doneData.watch(({ user }) => setUser(user));

handleError(loginFx.failData);
