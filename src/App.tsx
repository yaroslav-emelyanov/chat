import React from 'react';
import { Router } from 'react-router';
import { history } from '@shared/history';

import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Notification from '@components/Notification';
import ErrorBoundary from '@components/ErrorBoundary';
import RouterView from './router-view';
import { grey } from '@material-ui/core/colors';

const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: grey[400],
          outline: 'none',
          borderRadius: '0.2em',
        },
      },
    },
  },
});

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
