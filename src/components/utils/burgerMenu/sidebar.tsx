import React from 'react';
import { slide as Menu, Props } from 'react-burger-menu';
import './burgerMenu.css';
import { Link } from 'react-router-dom';

export function SideBar(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Menu> &
    Readonly<Props>
) {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Главная
      </Link>
      <Link to="/contacts" className="menu-item">
        Контакты
      </Link>
      <Link to="/products" className="menu-item">
        Услуги
      </Link>
      <Link to="/rates" className="menu-item">
        Тарифы
      </Link>
      <Link to="/calculation" className="menu-item">
        Калькулятор
      </Link>
      <Link to="/reviews" className="menu-item">
        Отзывы
      </Link>
      <Link to="/laws" className="menu-item">
        Новое в законодательстве
      </Link>
      <Link to="tel:+79516585914" className="menu-item">
        +7 951 658 59 14
      </Link>
      <a href="tg://resolve?domain=<USERNAME>" className="menu-item">
        abracadabra@mail.ru
      </a>
      <div className="burger_icons">
        <a href="https://wa.me/79991112233">
          <img src="./assets/Group.svg" alt="whatsapp" />
        </a>
        <a href="tg://resolve?domain=<USERNAME>">
          <img src="./assets/telegram.svg" alt="telegram" />
        </a>
        <a href="mailto:abracadabra@mail.ru">
          <img src="./assets/mail.svg" alt="mail" />
        </a>
      </div>
    </Menu>
  );
}
