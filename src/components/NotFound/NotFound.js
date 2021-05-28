import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import './NotFound.css';

import notFoundImage from '../../images/not-found/404.jpg';

const useStyles = makeStyles((theme) => ({
  button: {
    height: 70,
    width: 170,
    background: '#2E9BFF',
    borderRadius: 3,
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 30,
    lineHeight: '36px',
    color: '#fff',
    marginTop: 30,
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      height: 55,
      width: 150,
      fontWeight: 500,
      fontSize: 25,
      lineHeight: '30px',
      marginTop: 0,
    },
    '&:hover': {
      background: '#2E9BFF',
    },
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>Ой! Страница не найдена</h2>
        <p className='not-found__subtitle'>
          Мы уже знаем, что вы попали на эту страницу.
          Обязательно выясним, почему так вышло.
          Надеемся, вы найдете то, что искали :)
        </p>
        <img src={notFoundImage} alt='404' className='not-found__image'/>
        <Link to='/' className='link'>
          <Button
            variant='contained'
            className={classes.button}
          >
            Домой
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
