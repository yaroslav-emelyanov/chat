import { createEffect, createEvent, createStore, guard } from 'effector';
import { $isAuthorized, $user } from '@entities/user';
import { User } from '@firebase/auth';
import { chatApi } from '@shared/api';

import { IChat } from './types';

export const addChat = createEvent<IChat>();
export const changeChat = createEvent<IChat>();
export const removeChat = createEvent<IChat>();

const subsribeOnChatsFx = createEffect<User | null, void>((user) => {
  chatApi.subsribeOnChats(user?.uid || '', {
    onAdd: addChat,
    onChange: changeChat,
    onRemove: removeChat,
  });
});

guard({
  clock: $isAuthorized,
  source: $user,
  filter: $isAuthorized,
  target: subsribeOnChatsFx,
});

export const $chats = createStore<IChat[]>([]);

$chats
  .on(addChat, (prevState, chat) => [...prevState, chat])
  .on(changeChat, (state, chat) =>
    state.map((c) => (c.uid === chat.uid ? chat : c))
  )
  .on(removeChat, (state, chat) => state.filter((c) => c.uid !== chat.uid));
