import { db } from '@shared/firebase';
import { IChat, IChatData } from '@entities/chat';
import {
  ref,
  push,
  onChildAdded,
  onChildRemoved,
  onChildChanged,
} from 'firebase/database';

export const createChat = (data: IChatData) => push(ref(db, `chats`), data);

export const subsribeOnChats = (
  user_uid: string,
  calbacks: Record<'onRemove' | 'onChange' | 'onAdd', (chat: IChat) => void>
) => {
  const chatUsersRef = ref(db, 'chats');

  const addUnsubscribe = onChildAdded(chatUsersRef, (snapshot) => {
    const chat: IChat = snapshot.val();

    if (chat.users[user_uid]) {
      calbacks.onAdd({ uid: snapshot.key, ...snapshot.val() });
    }
  });

  const changeUnsubscribe = onChildChanged(chatUsersRef, (snapshot) => {
    const chat: IChat = snapshot.val();

    if (chat.users[user_uid]) {
      calbacks.onChange({ uid: snapshot.key, ...snapshot.val() });
    } else {
      calbacks.onRemove({ uid: snapshot.key, ...snapshot.val() });
    }
  });

  const removeUnsubscribe = onChildRemoved(chatUsersRef, (snapshot) => {
    const chat: IChat = snapshot.val();

    if (chat.users[user_uid]) {
      calbacks.onRemove({ uid: snapshot.key, ...snapshot.val() });
    }
  });

  return [addUnsubscribe, changeUnsubscribe, removeUnsubscribe];
};
