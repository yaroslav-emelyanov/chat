import React from 'react';
import { useStore } from 'effector-react';
import { useForm } from 'react-hook-form';
import { history } from '@shared/history';

import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  RouterPaths,
} from '@shared/constants';

import { Paper, TextField, Typography, Link } from '@material-ui/core';
import ButtonWithLoading from '@components/ButtonWithLoading';
import { useStyles } from './styles';

import { IForm, registerFx } from './model';

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const classes = useStyles();
  const isLoading = useStore(registerFx.pending);

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
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: EMAIL_REGEX,
              message: 'Please enter a valid email address',
            },
          })}
          label="email"
          variant="outlined"
          error={!!errors?.email}
          helperText={errors?.email?.message || ' '}
          fullWidth
        />
        <TextField
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: `The password must consist of more than ${
                PASSWORD_MIN_LENGTH - 1
              } characters`,
            },
          })}
          label="password"
          type="password"
          variant="outlined"
          error={!!errors?.password}
          helperText={errors?.password?.message || ' '}
          fullWidth
        />
        <ButtonWithLoading
          isLoading={isLoading}
          size="large"
          color="primary"
          variant="contained"
          type="submit"
        >
          submit
        </ButtonWithLoading>
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
