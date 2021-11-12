import { db } from '@shared/firebase';
import {
  ref,
  push,
  query,
  equalTo,
  orderByChild,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  serverTimestamp,
} from 'firebase/database';
import { IMessage, IMessageData } from '@entities/message';
import { userApi } from '.';

export const createMessage = (data: IMessageData) =>
  push(ref(db, `messages`), { ...data, created: serverTimestamp() });

export const subscribeOnMessages = (
  chat_uid: string,
  callbacks: Record<
    'onRemove' | 'onChange' | 'onAdd',
    (message: IMessage) => void
  >
) => {
  const messagesRef = query(
    ref(db, 'messages'),
    orderByChild('chat_uid'),
    equalTo(chat_uid)
  );

  const addUnsubsribe = onChildAdded(messagesRef, (snapshot) => {
    const { creator_uid = '', ...message } = {
      uid: snapshot.key,
      ...snapshot.val(),
    };

    userApi.getUserInfo(creator_uid, (creator) => {
      callbacks.onAdd({ ...message, creator });
    });
  });

  const changeUnsubsribe = onChildChanged(messagesRef, (snapshot) => {
    const { creator_uid = '', ...message } = {
      uid: snapshot.key,
      ...snapshot.val(),
    };

    userApi.getUserInfo(creator_uid, (creator) => {
      callbacks.onChange({ ...message, creator });
    });
  });

  const removeUnsubsribe = onChildRemoved(messagesRef, (snapshot) => {
    const message = snapshot.val();

    callbacks.onRemove({ uid: snapshot.key, ...message });
  });

  return {
    addUnsubsribe,
    changeUnsubsribe,
    removeUnsubsribe,
  };
};
