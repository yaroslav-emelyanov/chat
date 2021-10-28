import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 0,
  },
});

const AuthLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper classes={classes} square elevation={0}>
      {children}
    </Paper>
  );
};

export default AuthLayout;
