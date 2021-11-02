import React from 'react';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { useUser } from '@entities/user';

import { logoutFx, useDrawer, openDrawer } from '../model';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  const open = useDrawer();
  const user = useUser();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={openDrawer}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flex: 1 }} />
        <Typography style={{ marginRight: 16 }} variant="subtitle2">
          {user?.email}
        </Typography>
        <IconButton onClick={() => logoutFx()} color="inherit" edge="end">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
