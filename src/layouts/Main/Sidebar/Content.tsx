import React, { useEffect } from 'react';
import ChatList from '@components/ChatList';

import { chatApi } from '@shared/api';
import { useUser } from '@entities/user';
import { pushChat, useChats } from '@entities/chat';

import { useStyles } from './styles';
import { history } from '@shared/history';
import { useParams } from 'react-router';

const Content = () => {
  const { chat_uid } = useParams<{ chat_uid: string }>();
  const classes = useStyles();
  const chats = useChats();
  const user = useUser();

  useEffect(() => {
    const unsubscribe = chatApi.getChats(user?.uid || '', pushChat);

    return unsubscribe;
  }, [user]);

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
