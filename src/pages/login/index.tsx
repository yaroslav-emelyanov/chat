import React from 'react';
import { useForm } from 'react-hook-form';

import { Paper, TextField, Typography, Link, Button } from '@material-ui/core';
import { RouterPaths } from '../../shared/constants';
import { history } from '../../shared/history';
import { useStyles } from './styles';
import { loginFx, IForm } from './model';

const LoginPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const classes = useStyles();

  return (
    <div className={classes.paperWrapper}>
      <Paper
        onSubmit={handleSubmit(loginFx)}
        classes={{ root: classes.paper }}
        component="form"
        elevation={5}
      >
        <Typography variant="h4">Login</Typography>
        <TextField
          {...register('email')}
          label="email"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...register('password')}
          label="password"
          variant="outlined"
          fullWidth
        />
        <Button size="large" color="primary" variant="contained" type="submit">
          submit
        </Button>
        <Typography variant="caption" component="div" align="right">
          Not registered yet?{' '}
          <Link
            onClick={() => history.push(RouterPaths.REGISTRATION)}
            variant="caption"
            component="button"
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
