import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

interface IErrorBoundaryProps {
  message: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <ErrorIcon
            style={{ marginRight: 16 }}
            fontSize="large"
            color="disabled"
          />
          <Typography color="textSecondary" variant="h5">
            {this.props.message}
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}
