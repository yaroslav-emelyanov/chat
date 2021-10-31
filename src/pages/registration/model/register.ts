import { createEffect } from 'effector';
import { createUserWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { auth } from '@shared/firebase';

import { IForm } from './types';
import { handleError } from '@shared/utils';
import { FirebaseError } from '@firebase/util';

export const registerFx = createEffect<IForm, UserCredential, FirebaseError>(
  async ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password)
);

handleError(registerFx.failData);
