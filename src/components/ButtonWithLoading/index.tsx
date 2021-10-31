import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';

interface IButtonWithLoadingProps extends ButtonProps {
  isLoading: boolean;
}

const ButtonWithLoading: React.FC<IButtonWithLoadingProps> = ({
  children,
  isLoading,
  ...btnProps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button disabled={isLoading} {...btnProps}>
        {children}
      </Button>
      {isLoading && (
        <CircularProgress size={24} classes={{ root: classes.progress }} />
      )}
    </div>
  );
};

export default ButtonWithLoading;
