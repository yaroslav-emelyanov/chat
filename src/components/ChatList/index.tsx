import React from 'react';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { IChat } from '@entities/chat';

interface IChatListProps {
  value: string;
  list: IChat[];
  onChange: (item: IChat) => void;
}

const ChatList: React.FC<IChatListProps> = ({ value, list, onChange }) => (
  <List>
    {list.map((item) => (
      <ListItem
        onClick={() => onChange(item)}
        selected={value === item.uid}
        key={item.uid}
        button
      >
        <ListItemAvatar>
          <Avatar src="/" alt={item.name} />
        </ListItemAvatar>
        <ListItemText primary={item.name} />
      </ListItem>
    ))}
  </List>
);

export default ChatList;
