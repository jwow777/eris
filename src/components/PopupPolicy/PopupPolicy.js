import React from 'react';
import './PopupPolicy.css';
import {
  Dialog,
  DialogContent,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import Policy from '../Policy/Policy';

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 900,
      maxHeight: '90vh',
      width: 'calc(100% - 64px)',
      borderRadius: 10,
      padding: '20px 0',
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 32px)',
        maxHeight: '80vh',
        margin: 16,
      },
    },
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 15,
    [theme.breakpoints.down('xs')]: {
      top: 0,
      right: 0,
    },
  },
}));

function PopupPolicy({ open, close }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={close}
      className={classes.container}
    >
      <div className='popup-scroll__title-box'>
        <IconButton onClick={close} className={classes.close}>
          <Clear />
        </IconButton>
        <h2 className='popup-policy__title'>
          Политика в отношении обработки персональных данных
        </h2>
      </div>
      <DialogContent>
        <Policy/>
      </DialogContent>
    </Dialog>
  );
}

export default PopupPolicy;
