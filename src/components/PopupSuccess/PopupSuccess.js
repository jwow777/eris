import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Popup from '../Popup/Popup';
import './PopupSuccess.css';

const useStyles = makeStyles(() => ({
  button: {
    maxWidth: 85,
    height: 34,
    backgroundColor: '#6875ef',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
    padding: '6px 10px',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#3e7bfa',
    },
  },
}));

function PopupSuccess({ open, close }) {
  const classes = useStyles();
  return (
    <Popup
      open={open}
      close={close}
      classContainer='success'
    >
      <div className='popup__success-container'>
        <h2 className='popup__success-title'>Спасибо за обращение</h2>
        <p className='popup__success-subtitle'>Сейчас мы одобряем заявки в процессе очереди, не более 100 в неделю, мы свяжемся с Вами, когда предоставим доступ к beta-версии</p>
        <Button className={classes.button} onClick={close}>Ок</Button>
      </div>
    </Popup>
  );
}

export default PopupSuccess;
