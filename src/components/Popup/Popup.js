/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  Clear,
  LocalPhoneRounded,
  MailOutlineRounded,
  Telegram,
  WhatsApp,
} from '@material-ui/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import clsx from 'clsx';
import avatar from '../../images/popup/avatar.jpg';
import checked from '../../images/popup/checked.svg';
import ring from '../../images/popup/ring.svg';
import checkedRing from '../../images/popup/checked-ring.svg';
import './Popup.css';

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 1060,
      width: 'calc(100% - 64px)',
      borderRadius: 10,
      boxSizing: 'border-box',
      padding: '30px 45px',
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 32px)',
        margin: 16,
        padding: 30,
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
  form: {
    width: '100%',
    display: 'grid',
    gridRowGap: 5,
    marginTop: 20,
    '& .MuiFormControlLabel-root': {
      marginLeft: -8,
      marginRight: 0,
    },
    '& .MuiFormControlLabel-root.popup__label-ring': {
      width: 'max-content',
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        gridRow: 1,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    '& .MuiFormControl-root': {
      width: '100%',
      height: 'auto',
      border: 'none',
      borderLeft: '1px solid #c7c9d9',
      fontSize: 14,
      lineHeight: '24px',
      color: '#303030',
      overflow: 'hidden',
    },
  },
  select: {
    width: 70,
    backgroundColor: 'white',
    alignItems: 'normal',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    [theme.breakpoints.down('xs')]: {
      width: 64,
    },
    '& .MuiSelect-selectMenu': {
      borderRadius: '4px 0 0 4px',
      whiteSpace: 'normal',
      textOverflow: 'clip',
      lineHeight: '24px',
    },
    '& .MuiSelect-selectMenu:focus': {
      backgroundColor: '#fff',
      borderRadius: '4px 0 0 4px',
      minHeight: 'auto',
    },
    '& .MuiSelect-selectMenu .MuiSvgIcon-root': {
      width: 19,
      height: 19,
      marginRight: 5,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  button: {
    justifySelf: 'center',
    width: '100%',
    maxWidth: 500,
    minHeight: 50,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    borderRadius: 5,
    backgroundColor: '#DA125A',
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    letterSpacing: '-0.035em',
    color: '#fff',
    textTransform: 'none',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      minHeight: 35,
      fontSize: 13,
      lineHeight: 1.2,
    },
    '&:hover': {
      backgroundColor: '#FF186B',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      color: '#fff',
    },
  },
  checkbox: {
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#DA125A',
    },
    '&.MuiIconButton-colorSecondary:hover': {
      backgroundColor: 'rgba(218, 18, 90, 0.04)',
    },
  },
  icon: {
    width: 10,
    height: 10,
    borderRadius: 2,
    boxSizing: 'border-box',
    border: '1px solid #b8b8b8',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  },
  checkedIcon: {
    border: '1px solid #DA125A',
    '&:before': {
      display: 'block',
      width: 10,
      height: 10,
      backgroundImage: `url(${checked})`,
      position: 'absolute',
      top: 8,
      content: '""',
    },
  },
  ring: {
    width: 22,
    height: 21,
    backgroundImage: `url(${ring})`,
  },
  checkedRing: {
    '&:before': {
      display: 'block',
      width: 22,
      height: 21,
      backgroundImage: `url(${checkedRing})`,
      position: 'absolute',
      top: 8,
      content: '""',
    },
  },
}));

function Popup({
  open,
  close,
  openPopupPolicy,
  openPopupSuccess,
  closePopupSuccess,
}) {
  const [state, setState] = useState({
    communication: 'call',
    phone: '',
    country: {},
    email: '',
    policy: true,
    ring: true,
  });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });
  const handleChangeCheckbox = (e) => setState({ ...state, [e.target.name]: e.target.checked });
  const handleChangePhone = (phone, country) => {
    setState({
      ...state,
      phone,
      country: {
        country: country.name,
        dialCode: country.dialCode,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openPopupSuccess();
    close();
    setState({
      communication: 'call',
      phone: state.dialCode,
      country: {},
      email: '',
      policy: true,
      ring: true,
    });
    setTimeout(() => closePopupSuccess(), 5000);
    return fetch(`${window.location.href}connector.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'app_form',
        body: {
          communication: state.communication,
          phone: state.phone,
          email: state.email,
          country: state.country,
          dialCode: state.dialCode,
          policy: true,
          ring: true,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`??????-???? ?????????? ???? ??????: ${res.status}`);
    }).catch((err) => console.log(err));
  };

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={close}
      className={classes.container}
    >
      <IconButton onClick={close} className={classes.close}>
        <Clear />
      </IconButton>
      <h2 className='popup__title'>???????????? ???? ?????????????? ????????????</h2>
      <p className='popup__text popup__text_margin'>
        ????????????! ?? ?????? ???????????? beta-????????????, ?????????????? ???? ???????? ???????? ???????????? ???? ??????????????.
      </p>
      <p className='popup__text popup__text_margin'>
        ???????? ???? ???????????? ???????????? ?????????????? ???????????? - ?????? ?????????? ???????????????????? ????????????,&nbsp;
        ???? ??????????????????, ?????? ???????????? ?????? ????????????. ???? ????????, ?????? ???? ????????????????????????????????&nbsp;
        ?????????? ??????????????????! :)
      </p>
      <Grid
        container
      >
        <Avatar alt='??????????????' src={avatar} className='popup__avatar' />
        <p className='popup__text popup__text_last'>
          ??????????????, ????????????????????&nbsp;
          <span className='popup__text popup__text_pink'>
            Eris&nbsp;
          </span>
          ??&nbsp;
          <span className='popup__text popup__text_weight-normal'>
            QE
            <span className='popup__text popup__text_blue'>X</span>
          </span>
        </p>
      </Grid>
      <FormControl
        component='form'
        variant='outlined'
        size='small'
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Grid className='popup__phone-box'>
          <Select
            name='communication'
            defaultValue={state.communication}
            value={state.communication}
            onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value='call'>
              <LocalPhoneRounded className='popup__select-image'/>
              ????????????
            </MenuItem>
            <MenuItem value='whatsapp'>
              <WhatsApp className='popup__select-image'/>
              WhatsApp
            </MenuItem>
            <MenuItem value='telegram'>
              <Telegram className='popup__select-image'/>
              Telegram
            </MenuItem>
            <MenuItem value='email'>
              <MailOutlineRounded className='popup__select-image'/>
              Email
            </MenuItem>
          </Select>
          {state.communication === 'email' ? (
            <TextField
              name='email'
              type='email'
              variant='outlined'
              size='small'
              placeholder='email@mail.com'
              value={state.email}
              onChange={handleChange}
              className='popup__input-email'
            />
          ) : (
            <PhoneInput
              country={'ru'}
              value={state.phone}
              onChange={handleChangePhone}
              containerClass={'popup__input-phone-box'}
              inputClass={'popup__input-phone'}
              buttonClass={'popup__button-phone'}
            />
          )}
        </Grid>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          className='popup__checkbox-box'
        >
          <FormControlLabel
            control={
              <Checkbox
                name='policy'
                checked={state.policy}
                onChange={handleChangeCheckbox}
                icon={<span className={clsx(classes.icon)} />}
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                className={classes.checkbox}
              />
            }
            label='?? ???????????????? ??&nbsp;'
          />
          <Typography
            className='popup__label-politics'
            onClick={openPopupPolicy}
          >
            ?????????????????? ?????????????????? ????????????
          </Typography>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              name='ring'
              checked={state.ring}
              onChange={handleChangeCheckbox}
              icon={<span className={clsx(classes.ring)} />}
              checkedIcon={<span className={clsx(classes.ring, classes.checkedRing)} />}
              className={classes.checkbox}
            />
          }
          label='????????????????????, ?????????? ???????????? ????????????-????????????'
          className='popup__label-ring'
        />
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          disabled={!(state.email || state.phone) || !state.policy}
        >
          ???????????????? ???????????? ?? ???????????????? beta-????????????
        </Button>
      </FormControl>
    </Dialog>
  );
}

export default Popup;
