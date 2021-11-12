import { FirebaseError } from '@firebase/util';
import { createEffect, createEvent, sample } from 'effector';
import { IChatData } from '@entities/chat';
import { $user } from '@entities/user';
import { chatApi } from '@shared/api';

import { IForm } from './types';

export const submitForm = createEvent<IForm>();

const createChatFx = createEffect<IChatData, void, FirebaseError>((data) => {
  chatApi.createChat(data);
});

sample({
  clock: submitForm,
  source: $user,
  fn: (user, form) => ({
    name: form.name,
    creator_uid: user?.uid || '',
    users: {
      [user?.uid || '']: true,
    },
  }),
  target: createChatFx,
});
