import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Box, CircularProgress } from '@material-ui/core';

import { useIsAuthorized, useIsAuthProcess, setUser } from '@entities/user';
import { RouterPaths } from '@shared/constants';
import { authApi } from '@shared/api';

import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';

import { privateRoutes, publicRoutes } from './routes';

const RouterView = () => {
  const isAuthProcess = useIsAuthProcess();
  const isAuthorized = useIsAuthorized();

  useEffect(() => authApi.subscribeOnUserChaged(setUser), []);

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
      <Switch>
        {privateRoutes.map(({ component: Component, ...item }) => (
          <Route
            {...item}
            component={() => (
              <MainLayout>
                <Component />
              </MainLayout>
            )}
            key={Array.isArray(item.path) ? item.path.join('') : item.path}
            exact
          />
        ))}
        <Redirect to={RouterPaths.MAIN} />
      </Switch>
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
