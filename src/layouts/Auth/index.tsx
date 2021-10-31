import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './styles';

const AuthLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper classes={classes} square elevation={0}>
      {children}
    </Paper>
  );
};

export default AuthLayout;
