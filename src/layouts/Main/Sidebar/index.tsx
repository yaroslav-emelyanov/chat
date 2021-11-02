import React from 'react';
import clsx from 'clsx';

import { Divider, Drawer, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import { useDrawer, closeDrawer } from '../model';
import { useStyles } from './styles';
import Content from './Content';

const Sidebar = () => {
  const classes = useStyles();
  const open = useDrawer();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton style={{ marginLeft: 4 }}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={closeDrawer}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Content />
    </Drawer>
  );
};

export default Sidebar;
