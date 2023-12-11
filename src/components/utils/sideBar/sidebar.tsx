import React from 'react';
import { slide as Menu, Props } from 'react-burger-menu';
import './burgerMenu.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SideBar(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Menu> &
    Readonly<Props>
) {
  const { t } = useTranslation();
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        {t('common:home')}
      </Link>
      <Link to="/contacts" className="menu-item">
        {t('common:contacts')}
      </Link>
      <Link to="/products" className="menu-item">
        {t('common:services')}
      </Link>
      <Link to="/rates" className="menu-item">
        {t('common:rates')}
      </Link>
      <Link to="/calculation" className="menu-item">
        {t('common:calculator')}
      </Link>
      <Link to="/reviews" className="menu-item">
        {t('common:feedback')}
      </Link>
      <Link
        to="https://www.kontur-extern.ru/info/37534-top_12_izmeneniy_dlya_buhgaltera"
        className="menu-item"
      >
        {t('common:legislation')}
      </Link>
      <Link to="tel:+79516585914" className="menu-item">
        +951 658 59 14
      </Link>
      <a href="tg://resolve?domain=<USERNAME>" className="menu-item">
        abracadabra@gmail.com
      </a>
      <div className="burger_icons">
        <a href="https://wa.me/79991112233">
          <img src="./assets/Group.svg" alt="whatsapp" />
        </a>
        <a href="tg://resolve?domain=<USERNAME>">
          <img src="./assets/telegram.svg" alt="telegram" />
        </a>
        <a href="mailto:abracadabra@gmail.com">
          <img src="./assets/mail.svg" alt="mail" />
        </a>
      </div>
    </Menu>
  );
}
