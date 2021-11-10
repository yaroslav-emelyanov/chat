import React, { useEffect } from 'react';
import { setUserInfo, useUser } from '@entities/user';
import { userApi } from '@shared/api';

import { useStyles } from './styles';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const user = useUser();

  useEffect(
    () => userApi.subscribeOnUserInfo(user?.uid || '', setUserInfo),
    [user]
  );

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
