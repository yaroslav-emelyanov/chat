import { RouteProps } from 'react-router-dom';

import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import ChatPage from '../pages/Chat';
import RegistrationPage from '../pages/Registration';

import { RouterPaths } from '../shared/constants';

interface Route extends RouteProps {
  path: RouterPaths | RouterPaths[];
  component: () => JSX.Element;
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
  {
    path: RouterPaths.CHAT,
    component: ChatPage,
  },
];
