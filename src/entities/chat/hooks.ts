import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $chats } from './chat';

export const useChats = (): StoreValue<typeof $chats> => useStore($chats);
