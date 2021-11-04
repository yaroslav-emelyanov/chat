import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { submitForm, IForm } from './model';

interface ICreateChatDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateChatDialog: React.FC<ICreateChatDialogProps> = ({
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = useCallback(
    (data: IForm) => {
      submitForm(data);
      onClose();
    },
    [onClose]
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit(onSubmit),
      }}
      fullWidth
    >
      <DialogTitle>Create new chat</DialogTitle>
      <DialogContent>
        <TextField
          {...register('name', {
            required: { value: true, message: 'Name is required' },
          })}
          label="Chat name"
          variant="outlined"
          fullWidth
          error={!!errors?.name}
          helperText={errors?.name?.message || ' '}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateChatDialog;
