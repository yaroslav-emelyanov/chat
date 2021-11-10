import { IMessageData } from '@entities/message';
import { FirebaseError } from '@firebase/util';
import { messageApi } from '@shared/api';
import { createEffect } from 'effector';

export const createMessageFx = createEffect<IMessageData, void, FirebaseError>(
  (data) => {
    messageApi.createMessage(data);
  }
);
