import React from 'react';
import logo from '../../img/logo.svg';
import './footer.css';

export default function Footer() {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="footer-info">
            <p>© 2024, ООО "Инсем Групп"</p>
            <p>ОГРН 1212400045007</p>
            <p>ИНН 2465334013</p>
            <p>660135, г. Красноярск, ул. Октябрьская, 8а</p>
          </div>
        </div>
      </footer>
  );
}