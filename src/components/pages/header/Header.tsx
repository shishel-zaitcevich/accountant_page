import { Icons } from '../main_Page/header/Icons';
import { Navigation } from '../main_Page/header/Navigation';
import '../header/header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../utils/languageSwitcher';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="header-other">
      <Icons />
      <div className="header_container-top">
        <Link to="/">
          <img
            src="./assets/image.svg"
            alt="logo"
            className="logo header_logo"
          />
        </Link>

        <Navigation />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
