import { RouteProps } from "react-router-dom";

import LoginPage from "../pages/login";
import MainPage from "../pages/main";
import RegistrationPage from "../pages/registration";

import { RouterPaths } from "../utils/constants";

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
