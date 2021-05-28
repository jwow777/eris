import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import computer from '../../images/main/computer.png';
import phone from '../../images/main/phone.png';
import './Main.css';

const useStyles = makeStyles((theme) => ({
  main: {
    background: `url(${phone}) 1350px 250px no-repeat, url(${computer}) 1075px 90px no-repeat`,
    minHeight: 'calc(100vh - 92px)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      background: `url(${phone}) 120% 60px / 50% no-repeat, url(${computer}) 20px 50px / 65% no-repeat`,
      minHeight: 'calc(100vh - 74px)',
      padding: '75% 20px 50px',
    },
  },
  button: {
    minHeight: 50,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '24px',
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
    [theme.breakpoints.down('xs')]: {
      minHeight: 45,
      maxWidth: 300,
      width: '100%',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '20px',
    },
  },
}));

function Main({ openPopup }) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className='main__container'>
        <div>
          <h1 className='title'>
            Генератор&nbsp;
            <span className='title text_turquoise'>документов&nbsp;</span>
            с гибкими&nbsp;шаблонами
          </h1>
          <p className='subtitle'>Создание и управление шаблонами, автораспознавание документов, удобное хранилище,&nbsp;интеграция с CRM</p>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={openPopup}
          >
            Попробовать 14 дней бесплатно
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Main;
