import React from 'react';
import clsx from 'clsx';

import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { useStyles } from './styles';
import { useForm } from 'react-hook-form';

interface IForm {
  text: string;
}

interface IChatFormProps {
  onSubmit: (text: string) => void;
  className?: string;
}

const ChatForm: React.FC<IChatFormProps> = ({ onSubmit, className }) => {
  const { register, handleSubmit, reset } = useForm<IForm>();
  const classes = useStyles();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data.text);
        reset();
      })}
      className={clsx(classes.form, className)}
    >
      <TextField
        {...register('text', { required: true })}
        size="small"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        <SendIcon />
      </Button>
    </form>
  );
};

export default ChatForm;
