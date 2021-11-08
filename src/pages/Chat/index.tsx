import React from 'react';

import Chat from '@components/Chat';
import ChatForm from '@components/ChatForm';

import { useStyles } from './styles';

const ChatPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Chat messages={[1, 2, 3, 4]} currentUserUid="test" />
      <ChatForm className={classes.form} onSubmit={(text) => {}} />
    </div>
  );
};

export default ChatPage;
