import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import ChatList from '@components/ChatList';

import { chatApi } from '@shared/api';
import { useUser } from '@entities/user';
import { history } from '@shared/history';
import { pushChat, useChats } from '@entities/chat';

import { useStyles } from './styles';

const Content = () => {
  const { chat_uid } = useParams<{ chat_uid: string }>();
  const classes = useStyles();
  const chats = useChats();
  const user = useUser();

  useEffect(
    () => chatApi.subsribeOnChatAdded(user?.uid || '', pushChat),
    [user]
  );

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
