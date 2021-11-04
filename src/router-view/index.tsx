import React, { useEffect } from 'react';
import { RouterPaths } from '@shared/constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useIsAuthorized, useIsAuthProcess, setUser } from '@entities/user';
import { Box, CircularProgress } from '@material-ui/core';
import { authApi } from '@shared/api';

import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';

import { privateRoutes, publicRoutes } from './routes';

const RouterView = () => {
  const isAuthProcess = useIsAuthProcess();
  const isAuthorized = useIsAuthorized();

  useEffect(() => {
    const unsubscribe = authApi.getUser(setUser);

    return unsubscribe;
  }, []);

  if (isAuthProcess) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isAuthorized) {
    return (
      <MainLayout>
        <Switch>
          {privateRoutes.map((item) => (
            <Route
              {...item}
              key={Array.isArray(item.path) ? item.path.join('') : item.path}
              exact
            />
          ))}
          <Redirect to={RouterPaths.MAIN} />
        </Switch>
      </MainLayout>
    );
  }

  return (
    <AuthLayout>
      <Switch>
        {publicRoutes.map((item) => (
          <Route
            {...item}
            key={Array.isArray(item.path) ? item.path.join('') : item.path}
            exact
          />
        ))}
        <Redirect to={RouterPaths.LOGIN} />
      </Switch>
    </AuthLayout>
  );
};

export default RouterView;
