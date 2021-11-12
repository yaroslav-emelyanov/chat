import React from 'react';
import { useParams } from 'react-router';

import ChatList from '@components/ChatList';

import { history } from '@shared/history';
import { useChats } from '@entities/chat';

import { useStyles } from './styles';

const Content = () => {
  const { chat_uid } = useParams<{ chat_uid: string }>();
  const classes = useStyles();
  const chats = useChats();

  return (
    <div className={classes.content}>
      <ChatList
        list={chats}
        value={chat_uid}
        onChange={(item) => history.push(`/chat/${item.uid}`)}
      />
    </div>
  );
};

export default Content;
