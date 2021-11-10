import { db } from '@shared/firebase';
import {
  ref,
  push,
  query,
  orderByChild,
  equalTo,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from 'firebase/database';
import { IMessage, IMessageData } from '@entities/message';

export const createMessage = (data: IMessageData) =>
  push(ref(db, `messages`), data);

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
    const message = snapshot.val();

    callbacks.onAdd({ uid: snapshot.key, ...message });
  });

  const changeUnsubsribe = onChildChanged(messagesRef, (snapshot) => {
    const message = snapshot.val();

    callbacks.onChange({ uid: snapshot.key, ...message });
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
