import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import computer from '../../images/main/computer.png';
import phone from '../../images/main/phone.png';
import './Main.css';

const useStyles = makeStyles(() => ({
  button: {
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
  },
}));

function Main({ openPopup }) {
  const classes = useStyles();

  return (
    <Grid
      container
      component='main'
      justify='space-between'
      alignItems='center'
      className='content'
      style={{ background: `url(${phone}) 1135px 260px no-repeat, url(${computer}) 870px 90px no-repeat` }}
    >
      <div>
        <h1 className='title'>
          Генератор&nbsp;
          <span className='title text_turquoise'>документов&nbsp;</span>
          с гибкими&nbsp;шаблонами
        </h1>
        <p className='lists'>Создание и управление шаблонами, автораспознавание документов, удобное хранилище,&nbsp;интеграция с CRM</p>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={openPopup}
        >
          Попробовать 14 дней бесплатно
        </Button>
      </div>
    </Grid>
  );
}

export default Main;
