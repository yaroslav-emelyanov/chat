import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "../layout/auth.layout";
import MainLayout from "../layout/main.layout";
import { RouterPaths } from "../utils/constants";

import { privateRoutes, publicRoutes } from "./routes";

const RouterView = () => {
  const isAuthorized = false;

  if (isAuthorized) {
    return (
      <MainLayout>
        <Switch>
          {privateRoutes.map((item) => (
            <Route
              {...item}
              key={Array.isArray(item.path) ? item.path.join("") : item.path}
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
            key={Array.isArray(item.path) ? item.path.join("") : item.path}
            exact
          />
        ))}
        <Redirect to={RouterPaths.LOGIN} />
      </Switch>
    </AuthLayout>
  );
};

export default RouterView;
