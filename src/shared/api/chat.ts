import { IChatData, IChatUserData } from '@entities/chat';
import { db } from '@shared/firebase';
import { ref, push } from 'firebase/database';

export const createChat = (data: IChatData) => push(ref(db, `chats`), data);

export const createRelationChatUsers = (data: IChatUserData) =>
  push(ref(db, `chat_users`), data);
