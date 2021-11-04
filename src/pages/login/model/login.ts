import { createEffect } from 'effector';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { handleError } from '@shared/utils';
import { auth } from '@shared/firebase';

import { IForm } from './types';

export const loginFx = createEffect<IForm, UserCredential, FirebaseError>(
  ({ email, password }) => signInWithEmailAndPassword(auth, email, password)
);

handleError(loginFx.failData);
