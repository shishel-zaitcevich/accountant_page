import { HeaderBottom } from './HeaderBottom';
import { Icons } from './Icons';
import { Navigation } from './Navigation';
import './Header.css';
import LanguageSwitcher from '../../../utils/languageSwitcher';
import { useTranslation } from 'react-i18next';

export function HeaderMain() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <Icons />
      <div className="header_container-top">
        <img src="./assets/image.svg" alt="logo" className="logo" />
        <Navigation />
        <LanguageSwitcher />
      </div>
      <HeaderBottom />
    </header>
  );
}
