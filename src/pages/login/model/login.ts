import { createEffect } from 'effector';

import { history } from '../../../shared/history';
import { RouterPaths } from '../../../shared/constants';
import { IForm } from './types';

export const loginFx = createEffect<IForm, any>((data) => {
  // eslint-disable-next-line no-console
  console.log(data);
});

loginFx.doneData.watch(() => {
  history.push(RouterPaths.MAIN);
});
