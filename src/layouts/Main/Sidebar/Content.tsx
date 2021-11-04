import React from 'react';
import ChatList from '@components/ChatList';

import { useStyles } from './styles';

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <ChatList list={[]} onChange={() => {}} />
    </div>
  );
};

export default Content;
