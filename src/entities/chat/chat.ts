import { createEvent, createStore } from 'effector';
import { IChat } from './types';

export const pushChat = createEvent<IChat>();

export const $chats = createStore<IChat[]>([]);

$chats.on(pushChat, (prevState, chat) => [...prevState, chat]);
