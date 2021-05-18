import React, { useState } from 'react';
import {
  Grid,
  MenuItem,
  MenuList,
  Popover,
} from '@material-ui/core';
import logo from '../../images/header/logo.svg';
import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';
import './Header.css';

function Header() {
  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  return (
    <Grid
      container
      component='header'
      justify='space-between'
      alignItems='center'
      className='header'
    >
      <div className='header__logo-box'>
        <img src={logo} alt='Estraid Broker' className='header__logo'/>
        <p className='header__title'>Eris</p>
      </div>
      <div className='header__button-box'>
        <a href='tel:+74954899696' className='link header__phone'>
          +7 (495) 489-96-96
        </a>
        <img src={language} alt='language' className='header__lang-current' onClick={handleMenuLang}/>
        <Popover
          anchorEl={anchorElLang}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openLang}
          onClose={handleCloseLang}
          className='header__lang-box'
        >
          <MenuList>
            <MenuItem onClick={handleCloseLang} lang={ru}>
              <img src={ru} alt='Русский' className='header__lang-image'/>
              Русский
            </MenuItem>
            <MenuItem onClick={handleCloseLang} lang={us}>
              <img src={us} alt='English' className='header__lang-image'/>
              English
            </MenuItem>
          </MenuList>
        </Popover>
      </div>
    </Grid>
  );
}

export default Header;
