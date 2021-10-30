import React from 'react';
import { useForm } from 'react-hook-form';
import { history } from '@shared/history';
import { RouterPaths } from '@shared/constants';

import { Button, Paper, TextField, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';

import { registerFx, IForm } from './model';

const RegistrationPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const classes = useStyles();

  return (
    <div className={classes.paperWrapper}>
      <Paper
        onSubmit={handleSubmit(registerFx)}
        classes={{ root: classes.paper }}
        component="form"
        elevation={5}
      >
        <Typography variant="h4">Registration</Typography>
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
          Already have an account?{' '}
          <Link
            onClick={() => history.push(RouterPaths.LOGIN)}
            variant="caption"
            component="button"
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default RegistrationPage;
