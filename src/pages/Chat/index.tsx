import React from 'react';
import { useParams } from 'react-router';

const ChatPage = () => {
  const { chat_uid } = useParams<{ chat_uid: string }>();
  return <div>{chat_uid}</div>;
};

export default ChatPage;
