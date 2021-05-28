import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/policy" className="link footer__link">
          Политика конфиденциальности
        </Link>
        <p className="footer__copyright">QEX © 2017-2021 Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
