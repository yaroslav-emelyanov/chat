import React from 'react';
import { useParams } from 'react-router';

import Chat from '@components/Chat';
import ChatForm from '@components/ChatForm';
import { Typography } from '@material-ui/core';

import { useMessages } from '@entities/message';
import { useUser } from '@entities/user';

import { useStyles } from './styles';
import { createMessageFx } from './model';

const ChatPage = () => {
  const { chat_uid } = useParams<{ chat_uid: string }>();
  const messages = useMessages(chat_uid);
  const classes = useStyles();
  const user = useUser();

  return (
    <div className={classes.page}>
      {!messages.length ? (
        <Typography
          className={classes.listEmpty}
          variant="h6"
          color="textSecondary"
        >
          No message yet. Type now!
        </Typography>
      ) : (
        <Chat messages={messages} currentUserUid={user?.uid} />
      )}
      <ChatForm
        className={classes.form}
        onSubmit={(text: string) =>
          createMessageFx({ text, creator_uid: user?.uid || '', chat_uid })
        }
      />
    </div>
  );
};

export default ChatPage;
