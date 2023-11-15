import { Icons } from '../main_Page/header/Icons';
import { Navigation } from '../main_Page/header/Navigation';
import '../header/header.scss';
import { Link } from 'react-router-dom';

export function Header() {
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
      </div>
    </header>
  );
}
