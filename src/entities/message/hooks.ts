import { useStore } from 'effector-react';
import { $messages } from './message';

export const useMessages = (chat_uid: string) =>
  useStore($messages)[chat_uid] || [];
