import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Navigation() {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        Главная
      </Link>
      <Link to="/about" className="link">
        О нас
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
      <Link to="tel:+795165859414" className="link">
        +795165859414
      </Link>
    </nav>
  );
}
