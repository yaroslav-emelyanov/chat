import React from 'react';
import { Router } from 'react-router';

import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { history } from './shared/history';
import RouterView from './router-view';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <RouterView />
      </Router>
    </ThemeProvider>
  );
}

export default App;
