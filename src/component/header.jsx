import './header.css';

import headerimg1 from '../img/header img 1.svg';
import headerimg2 from '../img/header img 2.svg';
import headerimg3 from '../img/header img 3.svg';
import header from '../img/scheme2.png';
import logo from '../img/logo.svg';

export default function App() {
  return (
    <>
      <header className='header'>
        <div className='header_main conteiner'>
          <div className='header_logo'>
            <img src={logo} alt="Logo" />
          </div>
          <ul className='header_main_ul'>
            <li>
              <a href="#sectionOne">О нас</a>
            </li>
            <li>
              <a href="#estimation">Разница</a>
            </li>
            <li>
              <a href="#about_main" >Владельцы</a>
            </li>
          </ul>
          <div className='header_main_btn'>
            <button className='header_btn'>
              <a href="#about_main">Заказать консультацию</a></button>
          </div>
        </div>
        <div className='header_row conteiner'>
          <div className='header_row_main'>
            <div className='header_row_main_text'>
              <p>Установить отопление от электричества и сэкономить 300.000 рублей</p>
              <p>или вложиться и провести газ? </p>
              <p>Подберем отопление для:</p>
            </div>
            <ul>
              <li>
                <img src={headerimg1} alt="#" />
                <div>
                  <p>Частных домов </p>
                  <p>и коттедженых городков</p>
                </div>
                
              </li>
              <li>
                <img src={headerimg2} alt="#" />
                <div>
                  <p>Промышленных</p>
                  <p>и производственных зданий</p>
                </div>
              </li>
              <li>
                <img src={headerimg3} alt="#" />
                <div>
                  <p>Объектов малого </p>
                  <p>и среднего бизнеса</p>
                </div>
              </li>
            </ul>
            <button className='header_bottom_btn'>Получить консультацию</button>
          </div>
          <div className='header_bottom_hed'>
            <img src={header} alt="#" />
          </div>
        </div>
      </header>
    </>
  );
}
