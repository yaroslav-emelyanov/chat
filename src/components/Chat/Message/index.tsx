import React from 'react';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import { IMessage } from '@entities/message';

import { useStyles } from './styles';

interface IMessageProps {
  message: IMessage;
  isCurrentUser: boolean;
}

const Message: React.FC<IMessageProps> = ({ message, isCurrentUser }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.message, {
        [classes.currentUser]: isCurrentUser,
      })}
    >
      {!isCurrentUser && (
        <Avatar alt={message.creator.name} src={`/static/images/avatar/.jpg`} />
      )}
      <div className={classes.bubble}>
        <div>{message.text}</div>
        <div>{new Date(message.created).toDateString()}</div>
      </div>
    </div>
  );
};

export default Message;
