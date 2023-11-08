import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// import { BurgerMenu } from '../../../utils/burgerMenu/burgerMenu';
import { SideBar } from '../../../utils/burgerMenu/sidebar';

export function Navigation() {
  if (window.innerWidth >= 1300) {
    return (
      <nav className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Контакты
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Услуги
        </NavLink>
        <NavLink
          to="/rates"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Тарифы
        </NavLink>
        <NavLink
          to="/calculation"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Калькулятор
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Отзывы
        </NavLink>
        <NavLink
          to="https://www.kontur-extern.ru/info/37534-top_12_izmeneniy_dlya_buhgaltera"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          Новое в законодательстве
        </NavLink>
        <NavLink
          to="tel:+79516585914"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          +7 951 658 59 14
        </NavLink>
      </nav>
    );
  } else {
    return (
      <SideBar
        isOpen={false}
        right={true}
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      />
    );
  }
}
