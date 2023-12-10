import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// import { BurgerMenu } from '../../../utils/burgerMenu/burgerMenu';
import { SideBar } from '../../../utils/sideBar/sidebar';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const { t } = useTranslation();
  if (window.innerWidth >= 1300) {
    return (
      <nav className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
          to="/"
        >
          {t('common:home')}
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:contacts')}
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:services')}
        </NavLink>
        <NavLink
          to="/rates"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:rates')}
        </NavLink>
        <NavLink
          to="/calculation"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:calculator')}
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:feedback')}
        </NavLink>
        <NavLink
          to="https://www.kontur-extern.ru/info/37534-top_12_izmeneniy_dlya_buhgaltera"
          className={({ isActive }) => (isActive ? 'active_link' : 'link')}
        >
          {t('common:legislation')}
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
