import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  wrapper: {
    display: 'inline-block',
    position: 'relative',
  },
  progress: {
    color: green[300],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
  },
});
