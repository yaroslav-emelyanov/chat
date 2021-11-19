import React from 'react';
import { useParams } from 'react-router';

import Chat from '@components/Chat';
import ChatForm from '@components/ChatForm';
import {
  Drawer,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
    <>
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
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="right"
        open
      >
        <div className={classes.toolbar} />
        <div
          style={{
            display: 'flex',
            gap: 16,
            padding: 16,
          }}
        >
          <Button classes={{ root: classes.addButton }} variant="outlined">
            <AddIcon />
          </Button>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText secondary="test" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default ChatPage;
