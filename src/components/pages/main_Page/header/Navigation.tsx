import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BurgerMenu } from '../../../utils/burgerMenu/burgerMenu';

export function Navigation() {
  if (window.innerWidth >= 1300) {
    return (
      <nav className="nav">
        <Link className="link" to="/">
          Главная
        </Link>
        <Link to="/contacts" className="link">
          Контакты
        </Link>
        <Link to="/products" className="link">
          Услуги
        </Link>
        <Link to="/rates" className="link">
          Тарифы
        </Link>
        <Link to="/calculation" className="link">
          Калькулятор
        </Link>
        <Link to="/reviews" className="link">
          Отзывы
        </Link>
        <Link to="/low" className="link">
          Новое в законодательстве
        </Link>
        <Link to="tel:+79516585914" className="link">
          +7 951 658 59 14
        </Link>
      </nav>
    );
  } else {
    return <BurgerMenu />;
  }
}
