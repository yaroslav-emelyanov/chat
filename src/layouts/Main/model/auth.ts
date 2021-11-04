import { authApi } from '@shared/api';
import { handleError } from '@shared/utils';
import { createEffect } from 'effector';

export const logoutFx = createEffect(() => authApi.logout());

handleError(logoutFx.failData);
