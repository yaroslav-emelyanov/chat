import React from 'react';
import clsx from 'clsx';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { Skeleton } from '@material-ui/lab';

import { useUserInfo, useUserInfoLoading } from '@entities/user';

import { logoutFx, useDrawer, openDrawer } from '../model';
import { useStyles } from './styles';

const Header = () => {
  const isLoading = useUserInfoLoading();
  const { name } = useUserInfo();
  const classes = useStyles();
  const open = useDrawer();

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
          {isLoading ? (
            <Skeleton variant="text" style={{ width: 200 }} />
          ) : (
            name
          )}
        </Typography>
        <IconButton onClick={() => logoutFx()} color="inherit" edge="end">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
