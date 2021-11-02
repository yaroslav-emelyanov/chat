import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    '& > :not(:first-child)': {
      marginTop: theme.spacing(2),
    },
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="textSecondary" variant="h4">
        Welcome to the application
      </Typography>
      <Typography color="textSecondary">Select a chat</Typography>
    </div>
  );
};

export default MainPage;
