import { createEffect, createEvent, createStore, sample } from 'effector';
import { IChat, pushChat } from '@entities/chat';
import { FirebaseError } from '@firebase/util';
import { messageApi } from '@shared/api';

import { IMessage } from './types';

const addMessage = createEvent<IMessage>();
const changeMessage = createEvent<IMessage>();
const removeMessage = createEvent<IMessage>();

const subscribeOnMessagesFx = createEffect<IChat, void, FirebaseError>(
  (chat) => {
    messageApi.subscribeOnMessages(chat.uid, {
      onAdd: addMessage,
      onChange: changeMessage,
      onRemove: removeMessage,
    });
  }
);

sample({
  clock: pushChat,
  target: subscribeOnMessagesFx,
});

export const $messages = createStore<Record<string, IMessage[]>>({});

$messages
  .on(addMessage, (state, message) => {
    const copyState = { ...state };

    if (copyState[message.chat_uid]) {
      copyState[message.chat_uid] = [...copyState[message.chat_uid], message];
    } else {
      copyState[message.chat_uid] = [message];
    }

    return copyState;
  })
  .on(changeMessage, (state, message) => {
    const copyState = { ...state };

    if (copyState[message.chat_uid]) {
      copyState[message.chat_uid] = copyState[message.chat_uid].map((m) =>
        m.uid === message.uid ? message : m
      );
    }

    return copyState;
  })
  .on(removeMessage, (state, message) => {
    const copyState = { ...state };

    if (copyState[message.chat_uid]) {
      copyState[message.chat_uid] = copyState[message.chat_uid].filter(
        (m) => m.uid !== message.uid
      );
    }

    return copyState;
  });
