import React from 'react';
import { Router } from 'react-router';
import { history } from '@shared/history';

import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Notification from '@components/Notification';
import ErrorBoundary from '@components/ErrorBoundary';
import RouterView from './router-view';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Notification />
        <ErrorBoundary message="Application doesn't work">
          <RouterView />
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
