import { RouteProps } from 'react-router-dom';

import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import RegistrationPage from '../pages/Registration';

import { RouterPaths } from '../shared/constants';

interface Route extends RouteProps {
  path: RouterPaths | RouterPaths[];
}

export const publicRoutes: Array<Route> = [
  {
    path: RouterPaths.LOGIN,
    component: LoginPage,
  },
  {
    path: RouterPaths.REGISTRATION,
    component: RegistrationPage,
  },
];

export const privateRoutes: Array<Route> = [
  {
    path: RouterPaths.MAIN,
    component: MainPage,
  },
];
