import { IChat, IChatData, IChatUserData } from '@entities/chat';
import { db } from '@shared/firebase';
import {
  ref,
  push,
  query,
  equalTo,
  onChildAdded,
  orderByChild,
  child,
  onValue,
} from 'firebase/database';

export const createChat = (data: IChatData) => push(ref(db, `chats`), data);

export const createRelationChatUsers = (data: IChatUserData) =>
  push(ref(db, `chat_users`), data);

export const getChats = (user_uid: string, setChat: (chat: IChat) => void) => {
  const chatUsersRef = query(
    ref(db, 'chat_users'),
    orderByChild('user_uid'),
    equalTo(user_uid)
  );

  return onChildAdded(chatUsersRef, (snapshot) => {
    const chat_uid = snapshot.child('chat_uid').val();

    const chatsRef = child(ref(db, 'chats'), chat_uid);

    onValue(chatsRef, (snapshot) => {
      setChat({ uid: snapshot.key, ...snapshot.val() });
    });
  });
};
