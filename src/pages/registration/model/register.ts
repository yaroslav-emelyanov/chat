import { createEffect } from 'effector';
import { createUserWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { auth } from '@shared/firebase';
import { FirebaseError } from '@firebase/util';
import { handleError } from '@shared/utils';
import { setUser } from '@entities/user';

import { IForm } from './types';

export const registerFx = createEffect<IForm, UserCredential, FirebaseError>(
  ({ email, password }) => createUserWithEmailAndPassword(auth, email, password)
);

registerFx.doneData.watch(({ user }) => setUser(user));

handleError(registerFx.failData);
