import { signOut } from '@firebase/auth';
import { auth } from '@shared/firebase';
import { handleError } from '@shared/utils';
import { createEffect } from 'effector';

export const logoutFx = createEffect(() => signOut(auth));

handleError(logoutFx.failData);
