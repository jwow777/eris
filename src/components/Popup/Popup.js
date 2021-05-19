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
import 'react-phone-input-2/lib/plain.css';
import clsx from 'clsx';
import avatar from '../../images/popup/avatar.jpg';
import checked from '../../images/popup/checked.svg';
import ring from '../../images/popup/ring.svg';
import checkedRing from '../../images/popup/checked-ring.svg';
import './Popup.css';

const useStyles = makeStyles(() => ({
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
    },
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  form: {
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
    width: 500,
    height: 50,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    borderRadius: 5,
    backgroundColor: '#DA125A',
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    letterSpacing: '-0.035em',
    color: '#fff',
    textTransform: 'none',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#FF186B',
    },
    '&:disabled': {
      backgroundColor: '#DA125A',
    },
    '& .MuiButton-label': {
      height: '100%',
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

function Popup({ open, close, openPolicy }) {
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
        },
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }).catch((err) => console.log(err));
  };

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={close}
      scroll='body'
      className={classes.container}
    >
      <IconButton onClick={close} className={classes.close}>
        <Clear />
      </IconButton>
      <h2 className='popup__title'>Заявка на пробный период</h2>
      <p className='popup__text popup__text_margin'>
        Привет! У нас готова beta-версия, доступы мы пока даем только по заявкам.
      </p>
      <p className='popup__text popup__text_margin'>
        Если вы хотите только готовую версию - все равно оставляйте заявку,&nbsp;
        мы оповестим, как только она выйдет. Мы рады, что вы заинтересовались&nbsp;
        нашим продуктом! :)
      </p>
      <Grid
        container
      >
        <Avatar alt='Алексей' src={avatar} className='popup__avatar' />
        <p className='popup__text popup__text_last'>
          Алексей, Основатель&nbsp;
          <span className='popup__text popup__text_pink'>
            Eris&nbsp;
          </span>
          и&nbsp;
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
              Звонок
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
            label='Я согласен с&nbsp;'
          />
          <Typography
            className='popup__label-politics'
            onClick={openPolicy('paper')}
          >
            политикой обработки данных
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
          label='Оповестить, когда выйдет паблик-версия'
          className='popup__label-ring'
        />
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          disabled={!(state.email || state.phone) || !(state.policy && state.ring)}
        >
          Получить доступ к закрытой beta-версии
        </Button>
      </FormControl>
    </Dialog>
  );
}

export default Popup;
