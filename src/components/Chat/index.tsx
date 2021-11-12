import React from 'react';

import { IMessage } from '@entities/message';

import Message from './Message';
import { useStyles } from './styles';

interface IChatProps {
  messages: IMessage[];
  currentUserUid?: string;
}

const Chat: React.FC<IChatProps> = ({ messages, currentUserUid }) => {
  const classes = useStyles();

  return (
    <div className={classes.chat}>
      {messages.map((message) => (
        <Message
          message={message}
          isCurrentUser={currentUserUid === message.creator.uid}
          key={message.uid}
        />
      ))}
    </div>
  );
};

export default Chat;
