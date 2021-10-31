import React, { useEffect } from 'react';
import { auth } from '@shared/firebase';
import { RouterPaths } from '@shared/constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useIsAuthorized, useIsAuthProcess, setUser } from '@entities/user';

import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';

import { privateRoutes, publicRoutes } from './routes';

const RouterView = () => {
  const isAuthProcess = useIsAuthProcess();
  const isAuthorized = useIsAuthorized();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);

    return unsubscribe;
  }, []);

  if (isAuthProcess) {
    return <div>Loading...</div>;
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
