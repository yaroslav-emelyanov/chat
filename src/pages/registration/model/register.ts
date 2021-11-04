import { createEffect } from 'effector';
import { FirebaseError } from '@firebase/util';
import { handleError } from '@shared/utils';

import { IForm } from './types';
import { authApi, userApi } from '@shared/api';

export const registerFx = createEffect<IForm, void, FirebaseError>(
  async ({ name, email, password }) => {
    const { user } = await authApi.login(email, password);
    await userApi.createUser(user.uid, { name, email });
  }
);

handleError(registerFx.failData);
