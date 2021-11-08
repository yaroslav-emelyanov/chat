import React from 'react';

import Message from './Message';
import { useStyles } from './styles';

interface IChatProps {
  messages: any[];
  currentUserUid: string;
}

const Chat: React.FC<IChatProps> = ({ messages }) => {
  const classes = useStyles();
  return (
    <div className={classes.chat}>
      {messages.map((message, index) => (
        <Message message={message} isCurrentUser={!!index} key={index} />
      ))}
    </div>
  );
};

export default Chat;
