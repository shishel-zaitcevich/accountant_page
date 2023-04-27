import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './burgerMenu.css';
import { Link } from 'react-router-dom';

export function BurgerMenu() {
  return (
    <Menu>
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
      <Link to="/low" className="menu-item">
        Новое в законодательстве
      </Link>
      <Link to="tel:+79516585914" className="menu-item">
        +7 951 658 59 14
      </Link>
    </Menu>
  );
}
